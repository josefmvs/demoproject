import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectsProvider } from '../../providers/projects/projects';
import { NgZone } from '@angular/core';

@Injectable()
export class ProjectDuplicateValidator {
 
  debouncer: any;
 
  constructor(public projectsService: ProjectsProvider, public zone: NgZone){
 
  }
 
  checkDuplicate(control: FormControl): any {
 
    clearTimeout(this.debouncer);
 
    return new Promise(resolve => {
 
      this.debouncer = setTimeout(() => {
          

          
           this.projectsService.getProject(control.value).then(data => {
                  this.zone.run(() => {
                    var test = data; 

                    if(data.length == 0){
                     resolve(null);
                    }
                    else{
                        resolve({'projecthasDuplicate': true});
                    }
                  });
              })
              .catch(console.error.bind(console));

        // this.projectsService.getProject(control.value).subscribe((res) => {
        //   var data = res;
        //   if(1==1){
        //     resolve(null);
        //   }
        // }, (err) => {
        //   resolve({'projecthasDuplicate': true});
        // });
 
      }, 1000);      
 
    });
  }
 
}




// import { FormControl } from '@angular/forms'
// import { ProjectsProvider } from '../../providers/projects/projects';
// import { NgZone } from '@angular/core';

// export class ProjectDuplicateValidator {
// static projectsService: ProjectsProvider;
// static zone: NgZone;


//   constructor(projectsService: ProjectsProvider, zone: NgZone) {
//     ProjectDuplicateValidator.projectsService = projectsService;
//     ProjectDuplicateValidator.zone = zone;
//   }
   
 
//    static checkDuplicate(control: FormControl): any {
//     //var _this = this;
//     var _this = ProjectDuplicateValidator;
//     //return new Promise(resolve => {
  
      
//     //  _this.projectsService.getProject(control.value).then(data => {
//     //               _this.zone.run(() => {
//     //                 var test = data; 
//     //                  resolve(null);
//     //               });
//     //           })
//     //           .catch(console.error.bind(console));
            
//       //Fake a slow response from server
 
//     //   setTimeout(() => {
//     //     if(control.value.toLowerCase() === "greg"){
 
//     //       resolve({
//     //         "username taken": true
//     //       });
 
//     //     } else {
//     //       resolve(null);
//     //     }
//     //   }, 2000);
 
//     });
//   }
 
//}
