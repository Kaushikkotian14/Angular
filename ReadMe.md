# Steps to create Angular:
 - 1.md 11-Angular
 - 2.cd 11-Angular
 - 3.npm install -g @angular/cli@16
 - 4. ng new file_name
   - a.Routing
   - b.CSS
 - 5.cd file_name
 - 6.To start: ng serve

# To generate new components:
- ng generate component component_name
# To create service file:
- ng generate service service_name

# To add Bootstrap:
  - npm install bootstrap
  - Add CDn links in styles and script in angular.json file 

# Delete routing.module.ts :
- ng generate module app-routing --module app --flat

# To install Json server in folder:
- npm install -g json-server
# To run : 
- json-server --watch db.json --port 3000

# Angular Material (need to install for each project): 
- ng add @angular/material

# To change port no.: 
- ng serve --port 4500

# MongoDB:
- 1.npm init -y
- 2.npm install express mongoose cors body-parser
- 3.node server.js(filename of mongodb server)

# ng Store (need to install for each project): 
- npm install @ngrx/store@16 @ngrx/effects@16 @ngrx/store-devtools@16

# Http interceptors:
- type nul > error-interceptor.ts
  (showing error but create file) 

# For Angular 16(Standalone):
- ng new Foldername --standalone

# MSAL(Microsoft Authentication Library):
- npm install @azure/msal-browser @azure/msal-angular

#Testing:ng test 
        # ng test --code-coverage
        - Karma - test runner
        - Jasmin- Angular testing framework
        - TestBed - Angular testing utility
