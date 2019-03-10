import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform  } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import Cookies from 'js-cookie'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  

	user:any = {
    id: null
    ,first_name: null
    ,last_name: null
    ,email: null
    ,contact_number: null
    ,birthdate: null
    ,team: null
    ,credential: null
  }

  constructor(
  	private router: Router
    , public loadingController: LoadingController
    , public googlePlus: GooglePlus
    , public sotrage: Storage
    , public afAuth: AngularFireAuth
    , public platform: Platform
    , private afs: AngularFirestore
  ) {
    this.user = Cookies.getJSON('user')
    console.log('[AuthService constructor]', this.user)


  }

  async googleLogin(){
    try{
	    if(this.platform.is('android')){
	      return await this.mobileGoogleLogin();
	    }else if(this.platform.is('desktop')){
	      return await this.webGoogleLogin();
    	}
    }catch(err){
    	console.log(err)
    }
  }

  async mobileGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.googlePlus.login({
      'scopes': 'https://www.googleapis.com/auth/drive', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      // 'webClientId': '694548309780-p7pvh160hh62p2dpma7822pv83hsd1js.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'webClientId': '549453225877-oh2jll0jb8vspp5r9fungtdnaic4eoop.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - 
      // if set to true the plugin will also return a serverAuthCode, 
      // which can be used to grant offline access to a non-Google server
    })
    .then(user =>{
      console.log("user", user)
      loading.dismiss();
      this.user = user;

      this.sotrage.set('google_user', {
        name: user.displayName,
        email: user.email,
        picture: user.imageUrl
      })
      .then(() =>{
        this.router.navigate(["/home"]);
      }, error =>{
        console.log(error);
      })
      loading.dismiss();
    }, err =>{
      console.log(err)
      loading.dismiss();
    });

  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/drive')
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.user.credential = credential;
      console.log("credential", credential)


      // let userCollection = this.afs.collection('users', ref => ref.where('email', '==', this.email))

      // userCollection.snapshotChanges().subscribe(
      //   (dataSet)=>{
      //     if(dataSet){
      //       let user = {...dataSet[0].payload.doc.data()}
      //       user['id'] = dataSet[0].payload.doc.id
      //       Cookies.set('user', user)
      //       this.authService.user = user;
      //       this.router.navigateByUrl('/home');
      //     }
      //   }
      // )
      

      this.router.navigate(["/home"]);

    } catch(err) {
      console.log(err)
    }

  }

  async presentLoading(loading) {
    return await loading.present();
  }
  googleLogout(){
    this.googlePlus.logout()
    .then(res =>{
      //user logged out so we will remove him from the NativeStorage
      this.sotrage.set('google_user', null);
      this.router.navigate(["/login"]);
    }, err =>{
      console.log(err);
    })
  }

  timeout
  updateUser(){
    if(this.timeout){
      clearTimeout(this.timeout)
    }

    this.timeout = setTimeout(()=>{
      let userCollection = this.afs.collection('users')
      return userCollection.doc(this.user.id).update(this.user)
    }, 500)
  }
}
