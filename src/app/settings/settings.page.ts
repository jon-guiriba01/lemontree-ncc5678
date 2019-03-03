import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Cookies from 'js-cookie'
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  settingsForm:FormGroup

  validationMessages = {
    'firstName': [
        { type: 'minlength', message: 'name must be at least 2 characters long.' },
        { type: 'maxlength', message: 'name cannot be more than 30 characters long.' },
      ],
    'lastName': [
        { type: 'minlength', message: 'name must be at least 2 characters long.' },
        { type: 'maxlength', message: 'name cannot be more than 30 characters long.' },
      ],
      'email': [
        { type: 'email', message: 'must be a valid email.' }
      ],
      'contactNumber': [
        { type: 'minlength', message: 'contact number should be exactly 11 characters.' }
      ],
      'birthdate': [
        { type: 'required', message: 'contact number is required.' },
      ],
      'team': [
        { type: 'required', message: 'contact number is required.' },
      ],
  }


  // A letter, a number, an uppercase, min of 8
  passwordRegex='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$'
  
  // email regex
  emailRegex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
  

  constructor(
    public formBuilder: FormBuilder
    , public authService: AuthService
    , public router: Router
	) {
  	
  	console.log('[settings constructor]', this.authService.user)
    this.settingsForm = this.formBuilder.group({
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
      ,email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
      ,contactNumber: new FormControl('', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.required
      ]))
      ,birthdate: new FormControl('', Validators.compose([
        Validators.required
      ]))
      ,team: new FormControl('', [
        Validators.required
      ])
 
    });

  }
  ngOnInit() {

  }


  navTo(route){
    this.router.navigateByUrl(route);
  }

  updateFirstName(){
  	if(this.settingsForm.get('firstName').status != 'INVALID')
  		this.authService.updateUser()
  }

  updateLastName(){
  	if(this.settingsForm.get('lastName').status != 'INVALID')
  		this.authService.updateUser()
  	
  }

  updateBirthdate(){
  	if(this.settingsForm.get('birthdate').status != 'INVALID')
  		this.authService.updateUser()
  	
  }

  updateContactNumber(){
  	if(this.settingsForm.get('contactNumber').status != 'INVALID')
  		this.authService.updateUser()
  	
  }

  updateTeam(){
  	if(this.settingsForm.get('team').status != 'INVALID')
  		this.authService.updateUser()

  }
}


