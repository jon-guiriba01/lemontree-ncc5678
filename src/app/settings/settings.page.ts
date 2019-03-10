import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Cookies from 'js-cookie'
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {



  changePasswordForm:FormGroup

  validationMessages = {
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

  constructor(
    public formBuilder: FormBuilder
    , public authService: AuthService
    , public router: Router
    , private afs: AngularFirestore
    , private afa: AngularFireAuth
	) {
  	
    this.changePasswordForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
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


  navTo(route){
    this.router.navigateByUrl(route);
  }

  openChangePasswordForm(evt){
    if($('.change-password-form').hasClass('closed-list'))
      $('.change-password-form').removeClass('closed-list');
    else
      $('.change-password-form').addClass('closed-list');
  }

  confirmChangePassword(evt){
    let password = this.changePasswordForm.get('password').value

    firebase.auth().currentUser.updatePassword(password).then((res)=>{
      console.log('update password success', res)
    }).catch((err)=>{
      console.log("err", err)
    })
  }


  logout(evt){
    console.log("loguot")
    Cookies.set('user', null)
    this.router.navigateByUrl('/login');
  }
}


