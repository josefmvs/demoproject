
STEPS in using the Client Demo 

1. Connect to internet before logging in.
2. After running the app login using 

  Username: demouser
  Password: demouser
  Please wait for a few seconds for it to connect to cloud server
  
  Or if you want to create a new account by signing up

  Click Sign Up at the bottom of the Login page. 
  Make sure the username and password is more than 4 chars to be valid in login.
  Please wait for a few seconds for it to connect to cloud server after saving
  Sign Up has no error handling so make sure to correctly fill-it up.
  Don't use the same username and email address. Check the form and try submitting again if nothing happens after a few sec.
  
3. Onece logged-in you can disconnect from internet to see the local storage works using Pouchdb.

4. Start adding projects

5. If you logout and login again using the same account ( connected to internet ), the projects you added bofore will automatically sync to our CouchDB cloud database.


Steps in running the Test

1. Open console
2. Go to the projects root folder
3. Execute 'npm run test'
4. Browser opens to show results
5. Click DEBUG button to show new results if there are updates to app code


Required from this Demo App

Functions:
* Create a basic email/password login screen which is the default screen when the app loads
* Create an Authentication service which allows any valid email and password of at least 4 characters to login, and provides validation messages on the screen otherwise 
* Create a Projects screen which lists the available projects (using the Ionic list components) and has a toolbar button to create a new project.
* Create a Projects service class which uses Pouchdb local Storage to store and retrieve the projects
* A Project has a name, and the name must be unique. Creating another project with the same name will have a validation error
* Unit tests for the Projects screen
 

