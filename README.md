
STEPS in using the Demo 

1. Connect to internet before logging in.

2. After running the app login using 

  Username: demouser
  Password: demouser

  Or if you want to create a new account

  Click Sign In at the bottom of the Login page. Make sure your username and password is more than 4 chars to be valid in login.
  
  
3. Onece logged-in you can disconnect from internet to see the local storage works using Pouchdb.

4. Start adding projects

5. If you logout and login again using the same account ( connected to internet ), the projects you added bofore will automatically sync to our CouchDB cloud database.


Steps in running the Test

1. Open console
2. Go to the projects root folder
3. Execute 'npm run test'
4. Browser opens to show results
5. Click button to show new results if there are updates to app code


Required from this Demo App

The test tasks are:
* Create a basic email/password login screen which is the default screen when the app loads
  - DONE
* Create an Authentication service which allows any valid email and password of at least 4 characters to login, and provides validation messages on the screen otherwise 
  - DONE
* Create a Projects screen which lists the available projects (using the Ionic list components) and has a toolbar button to create a new project.
  - DONE
* Create a Projects service class which uses local Storage to store and retrieve the projects
  - DONE
* A Project has a name, and the name must be unique. Creating another project with the same name will have a validation error
  - DONE
* Develop unit tests for the Projects screen
  - DONE
 

