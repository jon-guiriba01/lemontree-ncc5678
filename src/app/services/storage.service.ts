import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

	files=[]
  filesCollection
  constructor(
  	private afStorage: AngularFireStorage
    , private afs: AngularFirestore
    , private alertController: AlertController
    , private loadingController: LoadingController
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

  loading
  async uploadFile(file, group, path = 'filecabinet'){
    console.log('[uploadFile]', file)
    console.log('-path', path)
    let fullPath = `${path}/${file.name}`;
    const fileRef = this.afStorage.ref(fullPath);

    this.loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent'
     });

    this.loading.present();
    
    const uploadTask = this.afStorage.upload(fullPath,file);

    let afUploadTask = uploadTask.percentageChanges()

    return new Promise((resolve,reject)=>{

      uploadTask.snapshotChanges().pipe(
        finalize(async () => {
          console.log('-finalize', path)

          fileRef.getDownloadURL().subscribe((downloadURL)=>{

            this.filesCollection.add({
            name:file.name
            , path: fullPath
            , downloadURL: downloadURL
            , group: group
            }).then((uploadAddToFirestoreFinished)=>{
              this.loading.dismiss()
            }).catch((err)=>{
              reject()
              console.log("err", err)
            })

            resolve(downloadURL)
            
          })
        


        } )
       )
      .subscribe((res)=>{
        console.log('afUploadTask', res)

      })
    })
  }

  downloadFile(file){
    console.log('[downloadFile]', file)
    
    var tempLink = document.createElement('a');
    tempLink.href = file.downloadURL;
    tempLink.setAttribute('download', name);
    tempLink.click();
  }

  async deleteFile(file){
  	console.log('[deleteFile]', file)
    this.filesCollection.doc(file.id).delete()
    this.afStorage.ref(file.path).delete()

   }

}
