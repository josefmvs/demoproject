import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../test-config/mocks-ionic';
import { MyApp } from '../../app/app.component';
import { ProjectsProvider } from '../../providers/projects/projects';


let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: HomePage', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [MyApp, HomePage],
 
            providers: [
                NavController, ProjectsProvider
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(HomePage);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('displays projects containing a project name in the list', () => {
        
       

        let projectsService = fixture.debugElement.injector.get(ProjectsProvider);

         projectsService.getProjects().then((data) => {
            let projects = data;

            let firstProject = projects[0];
 
            fixture.detectChanges();
    
            de = fixture.debugElement.query(By.css('ion-list ion-item'));
            el = de.nativeElement; 
    
            expect(el.textContent).toContain(firstProject.title);
        });

        
 
    });
});
