import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

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
    'name': [
        { type: 'required', message: 'name is required.' },
        { type: 'minlength', message: 'name must be at least 2 characters long.' },
        { type: 'maxlength', message: 'name cannot be more than 30 characters long.' },
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
  ) {

    this.loginForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.maxLength(30),
        Validators.minLength(2),
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
    console.log('-test', this.loginForm)
    console.log('-name ', this.loginForm.get('name'))
    console.log('-repassword ', this.loginForm.get('repassword'))
    console.log('-xxx ', this.loginForm.get('repassword').hasError('equalTo'))
    console.log('-xxx x', this.loginForm.get('repassword').hasError('equalto'))
  	// console.log("signup ", this.form.email)
  	// console.log("password ", this.form.password)
  	// this.afAuth.auth.createUserWithEmailAndPassword(this.form.email, this.form.password).then((res)=>{
  	// 		console.log(res);
  	// }).catch((res)=>{
  	// 		console.log(res);
  	// })
  }


  navTo(route){
    this.router.navigateByUrl(route);
  }
}
