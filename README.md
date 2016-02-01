# Angular Playground - prototyping area for angularjs

Only use the master branch as a clean playground template. Feature testing should happen in separate branches!

#### Libraries included are:
- angular 1.5.0-rc.1
- angular-ui (bootstrap)
- underscore
- jquery
- typescript
- gulp (compiles and concats typescript and LESS)

#### Global dependencies:
- node (installer from nodejs.org)
- npm (comes with node)
- bower (npm install bower -g)
- gulp (npm install gulp -g)
- typescript (npm install typescript -g)
- tsd (npm install tsd -g)
- http-server (npm install http-server -g)

#### Setup:
- npm install
- bower install
- tsd install
- gulp vendor (*builds js and css from bower libraries*)
- gulp (*builds and watches application code*)

lastly, open a new terminal, navigate to the the **public/** directory, and run http-server
