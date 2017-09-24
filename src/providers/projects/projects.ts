import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
declare var require: any;
PouchDB.plugin(require('pouchdb-find').default);

@Injectable()
export class ProjectsProvider {
 
  data: any;
  db: any;
  remote: any;
 
  constructor() {
 
  }
 
  init(details){
 
    this.db = new PouchDB('demoproject');
 

    if(details.userDBs){
         this.remote = details.userDBs.supertest;
 
          let options = {
            live: true,
            retry: true,
            continuous: true
          };
      
          this.db.sync(this.remote, options);

          console.log(this.db);
    }
   
 
  }
 
  logout(){
 
    this.data = null;
 
    this.db.destroy().then(() => {
      console.log("database removed");
    });
  }
 
  getProjects() {
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.db.allDocs({
        include_docs: true
 
      }).then((result) => {
 
        this.data = [];
 
        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });
 
        resolve(this.data);
 
        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });
 
      }).catch((error) => {
 
        console.log(error);
 
      }); 
 
    });
 
  }

  getProject(title: string){
    var _db = this.db;
    var _title = title;
    var exist = false;
    return this.db.createIndex({
      index: {fields: ['title']}
    }).then(function () {
      return _db.find({
        selector: {title: {$eq: _title}}
      }).then(function (res) {
           return res.docs;
      });
    });
  }
 
  createProject(project){

    

    this.db.post(project);
  }
 
  updateProject(project){
    this.db.put(project).catch((err) => {
      console.log(err);
    });
  }
 
  deleteProject(project){
    this.db.remove(project).catch((err) => {
      console.log(err);
    });
  }
 
  handleChange(change){
 
    let changedDoc = null;
    let changedIndex = null;
 
    this.data.forEach((doc, index) => {
 
      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }
 
    });
 
    //A document was deleted
    if(change.deleted){
      this.data.splice(changedIndex, 1);
    } 
    else {
 
      //A document was updated
      if(changedDoc){
        this.data[changedIndex] = change.doc;
      } 
 
      //A document was added
      else {
        this.data.push(change.doc); 
      }
 
    }
 
  }
 
}
