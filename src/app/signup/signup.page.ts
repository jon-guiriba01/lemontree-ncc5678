import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	email
	password
	repassword

  constructor(
  	public afAuth: AngularFireAuth

  ) { }

  ngOnInit() {
  }

  signup(){
  	console.log("signup ", this.email)
  	console.log("password ", this.password)
  	this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then((res)=>{
  			console.log(res);
  	}).catch((res)=>{
  			console.log(res);
  	})
  }
}
