import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

	files=[]
  filesCollection
  constructor(
  	private afStorage: AngularFireStorage
    , private afs: AngularFirestore
  ) {
  	this.filesCollection = this.afs.collection('files')
    this.filesCollection.snapshotChanges().subscribe(
      (dataSet)=>{
        let files = []
        for(let data of dataSet){
          let task = {...data.payload.doc.data()}
          task.id = data.payload.doc.id

          files.push(task)
        }

        this.files = files
        console.log("this.files", this.files)
      }
    )
  }

  uploadFile(file, path = 'filecabinet'){
    console.log('[uploadFile]', file)
    console.log('-path', path)
    let fullPath = `${path}/${file.name}`;
    const fileRef = this.afStorage.ref(fullPath);
    const uploadTask = this.afStorage.upload(fullPath,file);

    let afUploadTask = uploadTask.percentageChanges()

    uploadTask.snapshotChanges().pipe(
        finalize(async () => {
          console.log('-finalize', path)
          fileRef.getDownloadURL().subscribe((downloadURL)=>{
            this.filesCollection.add({
            name:file.name
            , path: fullPath
            , downloadURL: downloadURL
            })
          })
      
        } )
     )
    .subscribe((res)=>{
      console.log('afUploadTask', res)

    })
  }

  downloadFile(file){
    console.log('[downloadFile]', file)
    
    var tempLink = document.createElement('a');
    tempLink.href = file.downloadURL;
    tempLink.setAttribute('download', name);
    tempLink.click();
  }

  deleteFile(file){
  	console.log('[deleteFile]', file)
  }

}
