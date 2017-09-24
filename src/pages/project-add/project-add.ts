import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectsProvider  } from '../../providers/projects/projects';
import { ProjectDuplicateValidator } from '../../app/validators/projectduplicate';
import { UsernameValidator } from '../../app/validators/username';
/**
 * Generated class for the ProjectAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-add',
  templateUrl: 'project-add.html',
})
export class ProjectAddPage {
  projectAddForm: FormGroup;
  submitAttempt: boolean;
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,  
  public formBuilder: FormBuilder, public projectsProvider: ProjectsProvider,
  public viewCtrl: ViewController, public zone: NgZone, public projectDupValidator : ProjectDuplicateValidator) {


    // let isExist = (control: FormControl) => {
    //   // in here, `db` is magically reliable
    //   //return db.getUsario(control.value).then(data => data ? {} : {"is_usario": true});
    //   return this.projectsProvider.getProject(this.title).then(data => {
    //               this.zone.run(() => {
    //                 var test = data; 
    //                // this.projectsProvider.createProject({title: this.title});
    //                // this.viewCtrl.dismiss();

    //                 if(data.length > 0){
    //                   //return true;
    //                   return {"is_exist": true};
    //                 }
    //                 else{
    //                   return null;
    //                 }
    //               });
    //           })
    //           .catch(console.error.bind(console));

    // };

    // let _isExist = isExist;

    this.projectAddForm = formBuilder.group({
        title: ['', Validators.compose([Validators.minLength(3), Validators.required]), projectDupValidator.checkDuplicate.bind(projectDupValidator)]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectAddPage');
  }

   closeModal() {
    this.viewCtrl.dismiss();
  }

  save(){

    this.submitAttempt = true;
    
 
    if(this.projectAddForm.valid){
        console.log("success!")
        console.log('new project save');
        // this.projectsProvider.createProject(this.projectname).catch(function(err){
        //   console.log(err);
        // });

        
        //this.projectsProvider.createProject({projectname : this.projectname});
              // .then(data => {
              //     this.zone.run(() => {
              //       var test = data; 
              //     });
              // })
              // .catch(console.error.bind(console));

        // this.projectsProvider.getProject(this.title).then(data => {
        //           this.zone.run(() => {
        //             var test = data; 
        //             this.projectsProvider.createProject({title: this.title});
        //             this.viewCtrl.dismiss();
        //           });
        //       })
        //       .catch(console.error.bind(console));
         this.projectsProvider.createProject({title: this.title});
         this.viewCtrl.dismiss();
    } 

  }

}
