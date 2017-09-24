import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ProjectsProvider } from '../../providers/projects/projects';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  username: string;
  password: string;
  superlogin_url : string;
  submitAttempt: boolean;
  constructor(public nav: NavController, public http: Http, 
  public projectService: ProjectsProvider, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
        username: ['', Validators.compose([Validators.minLength(4), Validators.required])],
        password: ['', Validators.compose([Validators.minLength(4), Validators.required])]
    });
  }
 
  login(){
      this.submitAttempt = true;

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      let credentials = {
        username: this.username,
        password: this.password
      };
      this.superlogin_url = 'https://shielded-journey-22053.herokuapp.com';
      this.http.post(this.superlogin_url + '/auth/login' , JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          this.projectService.init(res.json());
          this.nav.setRoot(HomePage);
        }, (err) => {
          console.log(err);
        });
      // this.projectService.init({});
      // this.nav.setRoot(HomePage);
  }
 
  launchSignup(){
    this.nav.push(SignupPage);
  }
 
}