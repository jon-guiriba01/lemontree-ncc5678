import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // form = {
  //   name: null
  //   , email : null
  //   , password : null
  //   , repassword : null
  // }

  loginForm:FormGroup

  validationMessages = {
    'firstName': [
      { type: 'required', message: 'first name is required.' },
      { type: 'minlength', message: 'first name must be at least 2 characters long.' },
      { type: 'maxlength', message: 'first name cannot be more than 30 characters long.' },
    ],
    'lastName': [
      { type: 'required', message: 'last name is required.' },
      { type: 'minlength', message: 'last name must be at least 2 characters long.' },
      { type: 'maxlength', message: 'last name cannot be more than 30 characters long.' },
    ],
    'birthdate': [
      { type: 'required', message: 'birthdate is required.' },
    ],
    'contactNumber': [
      { type: 'required', message: 'contact number is required.' },
      { type: 'minlength', message: 'contact number should be 11 characters long.' },
    ],
    'team': [
      { type: 'required', message: 'team is required.' },
    ],
    'email': [
      { type: 'required', message: 'email is required.' },
      { type: 'email', message: 'must be a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'pattern', message: 'password must contain 1 upper case and 1 number.' },
      { type: 'minlength', message: 'password must be at least 8 characters.' }
    ],
    'repassword': [
      { type: 'equalTo', message: 'password doesnt match.' },
    ],

  }

  // A letter, a number, an uppercase, min of 8
  passwordRegex='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$'
  
  // email regex
  emailRegex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'


  constructor(
  	public afAuth: AngularFireAuth
    , private router: Router
    , private formBuilder: FormBuilder
    , private afs: AngularFirestore
    , private authService: AuthService
  ) {

    this.loginForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(2),
        Validators.required
       ]))
      ,lastName: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(2),
        Validators.required
       ]))
      ,birthdate: new FormControl('', Validators.compose([
        Validators.required
       ]))
      ,contactNumber: new FormControl('', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.required
       ]))
      ,team: new FormControl('', Validators.compose([
        Validators.required
       ]))
      ,email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
      ,password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(this.passwordRegex)
      ]))
      ,repassword: new FormControl('', [
        Validators.required
        , this.equalto('password')
      ])
 
    });
  }
  equalto(field_name): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } => {
          let input = control.value;
          let isValid = control.root.value[field_name] == input;
          if (!isValid)
              return {'equalTo': {isValid}};
          else
              return null;
      };
  }

  ngOnInit() {
  }

  signup(){
    console.log('-signup', this.loginForm.get('firstName'));

  	this.afAuth.auth.createUserWithEmailAndPassword(
      this.loginForm.get('email').value, 
      this.loginForm.get('password').value, 
    ).then((res)=>{
        console.log('-createUserWithEmailAndPassword', res);
        console.log('-loginForm', {
          firstName: this.loginForm.get('firstName').value
          , lastName: this.loginForm.get('lastName').value
          , email: this.loginForm.get('email').value
          , contactNumber: this.loginForm.get('contactNumber').value
          , birthdate: this.loginForm.get('birthdate').value
          , team: this.loginForm.get('team').value
        });
        let userCollection = this.afs.collection('users')
        let user = {
          first_name: this.loginForm.get('firstName').value
          , last_name: this.loginForm.get('lastName').value
          , email: this.loginForm.get('email').value
          , contact_number: this.loginForm.get('contactNumber').value
          , birthdate: this.loginForm.get('birthdate').value
          , team: this.loginForm.get('team').value
        }
        userCollection.add(user).then((uploadAddToFirestoreFinished)=>{
          this.authService.user = user
          this.router.navigateByUrl('/home');
          // this.loading.dismiss()
        }).catch((err)=>{
          console.log("err", err)
        })

  	}).catch((res)=>{
  			console.log(res);
  	})
  }


  navTo(route){
    this.router.navigateByUrl(route);
  }
}
