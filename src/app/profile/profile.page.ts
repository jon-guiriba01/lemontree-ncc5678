import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Cookies from 'js-cookie'
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { StorageService } from '../services/storage.service';
import {Platform} from '@ionic/angular';
import { ImageCropperModule } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	isReadOnly = false;
	
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
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageName
  // A letter, a number, an uppercase, min of 8
  passwordRegex='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$'
  
  // email regex
  emailRegex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
  

  constructor(
    public formBuilder: FormBuilder
    , public authService: AuthService
    , public router: Router
    , public storageService: StorageService
    , public platform: Platform
	) {
  	
  	console.log('[settings constructor]', this.authService.user)
    console.log('[settings constructor]', this.authService.user.profileImageUrl)
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

  onClickEditProfile(evt){
  	console.log('this.isReadOnly', this.isReadOnly)
  	this.isReadOnly = false;
  	console.log('this.isReadOnly', this.isReadOnly)
  }

  changeAvatar(){
    console.log('-changeAvatar')
    $('.hidden-input').click()
    $('.hidden-input').change(async (e:any)=>{
      $('.cropper-container').removeClass('hidden')
    //     e.stopImmediatePropagation();
        var file = e.target.files[0];
        this.imageName = file.name
        // console.log('The file "' + file.name +  '" has been selected.');

    //     let imageUrl = await this.storageService.uploadFile(
    //       file
    //       , this.authService.user.team
    //       , this.authService.user.team+"/"+this.authService.user.last_name+"_"+this.authService.user.id
    //      )
        
    //     this.authService.user.profileImageUrl = imageUrl
    //     this.authService.updateUser()
    });
  }


  async saveCroppedImage(){
    let imageUrl = await this.storageService.uploadFile(
      this.croppedImage.file
      , this.authService.user
      , this.authService.user.team+"/"+this.authService.user.last_name+"_"+this.authService.user.id
      , false
     )
    
    this.authService.user.profileImageUrl = imageUrl
      $('.cropper-container').addClass('hidden')
    this.authService.updateUser()
   
  }
  cancelSaveImage(){
    $('.cropper-container').addClass('hidden')

  }
  
  teamDetails(evt){
    this.router.navigateByUrl('/team-details')
  }

  fileChangeEvent(event: any): void {
    console.log('-fileChangeEvent', event)
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
    this.croppedImage.file['name'] = this.imageName;
    console.log('-saveCroppedImage', this.croppedImage)
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
}


