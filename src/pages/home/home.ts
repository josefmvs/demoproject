import { Component } from "@angular/core";
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ProjectsProvider  } from '../../providers/projects/projects';
import { LoginPage } from '../login/login';
import {ProjectAddPage} from '../project-add/project-add';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  projects: any;
  hasDuplicate: boolean;
  constructor(public modalCtrl: ModalController,public nav: NavController, public projectsService: ProjectsProvider, public alertCtrl: AlertController) {
 
  }
 
  ionViewDidLoad(){
 
    this.projectsService.getProjects().then((data) => {
      this.projects = data;
    });

  
  }
 
  logout(){
    this.projectsService.logout();
    this.projects = null;
    this.nav.setRoot(LoginPage);
  }
 
  createProject(){
      let myModal = this.modalCtrl.create(ProjectAddPage);
      myModal.onDidDismiss(() => {
        // this.navCtrl.pop();
        //this.getAppointments();
      });
      myModal.present();
    // let prompt = this.alertCtrl.create({
    //   title: 'Add',
    //   message: 'Add Project',
    //   inputs: [
    //     {
    //       name: 'title'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel'
    //     },
    //     {
    //       text: 'Save',
    //       handler: data => {
            
    //         this.projectsService.createProject({title: data.title});
    //       }
    //     }
    //   ]
    // });
 
    // prompt.present();
 
  }
 
  updateProject(project){
 
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: 'Update Project',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.projectsService.updateProject({
              _id: project._id,
              _rev: project._rev,
              title: data.title
            });
          }
        }
      ]
    });
 
    prompt.present();
  }
 
  deleteProject(project){
    this.projectsService.deleteProject(project);
  }
 
}