import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProjectsProvider } from '../../providers/projects/projects';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
 
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  superlogin_url : string;

  constructor(public nav: NavController, public http: Http, public projectService: ProjectsProvider) {
 
  }

  register(){
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      let user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
     this.superlogin_url = 'https://shielded-journey-22053.herokuapp.com';
      this.http.post(this.superlogin_url + '/auth/register', JSON.stringify(user), {headers: headers})
        .subscribe(res => {
          this.projectService.init(res.json());
          this.nav.setRoot(HomePage);
        }, (err) => {
          console.log(err);
        }); 
  }
}