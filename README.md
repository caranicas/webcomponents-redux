# Webcomponents Redux

This is an on going experiment to get webcomponents to work with Redux. Right now it is ugly (not uglified) but it works. 

The next step will be to start to bring more tooling into it and discover how to make the development process more pleasurable and friction free. 


##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

### Start the development server

    polymer serve

### Run web-component-tester tests

    polymer test

### Build

    polymer build

### Test the build

This command serves the minified version of the app in an unbundled state, as it would be served by a push-compatible server:

    polymer serve build/unbundled
    
This command serves the minified version of the app generated using fragment bundling:

    polymer serve build/bundled
