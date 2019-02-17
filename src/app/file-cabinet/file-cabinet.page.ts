import { Component, OnInit } from '@angular/core';
declare var gapi: any
import * as config from '../../config'
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as $ from 'jquery'
import { SearchService } from '../services/search.service';



@Component({
  selector: 'app-file-cabinet',
  templateUrl: './file-cabinet.page.html',
  styleUrls: ['./file-cabinet.page.scss'],
})
export class FileCabinetPage implements OnInit {


  constructor(
    public authService: AuthService
    , public afStorage: AngularFireStorage
    , public storageService: StorageService
    , public searchService: SearchService
  ) {
    this.loadGapi().then((res)=>{
        console.log(res);
    })
  }

  files = [
  ]
  
  ngOnInit() {
  }

  upload(){

    $('.hidden-input').click()

    $('.hidden-input').change((e:any)=>{
        e.stopImmediatePropagation();
        var file = e.target.files[0];
        console.log('The file "' + file.name +  '" has been selected.');
        this.storageService.uploadFile(file)
    });

  }


  loadGapi(){
    return new Promise((resolve,reject)=>{
      gapi.load('client:auth2', _=> {

        gapi.client.init({
            'apiKey': config.google.apikey,
            'clientId': config.google.webClientId,
            'scope': 'https://www.googleapis.com/auth/drive',
            'discoveryDocs': [
              'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
              'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
            ]
        }).then(function () {
            resolve(gapi)
            let gAuth = gapi.auth2.getAuthInstance();
              console.log('gAuth',gAuth)
              console.log('gapi',gapi)

              let test = gapi.client.drive.files.list()
              console.log("test ", test)
            // Listen for sign-in state changes.
            gAuth.isSignedIn.listen((res)=>{
              console.log('listen gapi',res)
            });
        });
      })

    })
  }

  onClickDownload(file, event){
    this.storageService.downloadFile(file)
  }




   // var fileMetadata = {
    //   'name': 'photo.jpg'
    // };
    // var media = {
    //   mimeType: 'image/jpeg',
    //   body: fs.createReadStream('files/photo.jpg')
    // };
    // gapi.client.drive.files.create({
    //   resource: fileMetadata,
    //   media: media,
    //   fields: 'id'
    // }, function (err, file) {
    //   if (err) {
    //     // Handle error
    //     console.error(err);
    //   } else {
    //     console.log('File Id: ', file.id);
    //   }
    // });


    // var docId = '...';
    // var content = 'Hello World';
    // var contentBlob = new  Blob([content], {
    //   'type': 'text/plain'
    // });

    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    // let accessToken = this.authService.user.credential.accessToken;
    // console.log("using token ", accessToken)
    // console.log("from ", this.authService.user)
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState != XMLHttpRequest.DONE) {
    //     return;
    //   }
    //   console.log(xhr.response);
    // };
    // xhr.open('POST', 'https://www.googleapis.com/upload/drive/v3/files/?uploadType=media');
    // // xhr.open('POST', 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media');
    // xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    // xhr.send(contentBlob);

}
