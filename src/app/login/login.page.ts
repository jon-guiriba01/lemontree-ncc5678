import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform  } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import Cookies from 'js-cookie'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email
  password
  hasLoginError = false

  constructor(
  	private router: Router
    , public loadingController: LoadingController
    , public googlePlus: GooglePlus
    , public sotrage: Storage
    , public afAuth: AngularFireAuth
    , public platform: Platform
    , public authService: AuthService
    , private afs: AngularFirestore
  ) { }

  ngOnInit() {
  }

  signup(){
    this.router.navigateByUrl('/signup')
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then((res)=>{
      console.log("-login()", res);
      // this.authService.

      let userCollection = this.afs.collection('users', ref => ref.where('email', '==', this.email))

      userCollection.snapshotChanges().subscribe(
        (dataSet)=>{
          if(dataSet){
            let user = {...dataSet[0].payload.doc.data()}
            user['id'] = dataSet[0].payload.doc.id
            Cookies.set('user', user)
            this.authService.user = user;
            this.router.navigateByUrl('/home');
          }
        }
      )

      }).catch((res)=>{
        this.hasLoginError = true;
        console.log(res);
      })
  
  }

  googleLogin(){
    this.authService.googleLogin()
  }


}
