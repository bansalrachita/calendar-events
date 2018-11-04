This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries
In this project, I've used react, redux and react-router JS libraries for building the Calendar app.<br>

Helper libraries were used as under -
- [create-react-app](https://github.com/facebook/create-react-app) for creating the framework template code.
- [Moment.js](https://momentjs.com/) for all date related calculations.
- [ESlint](https://eslint.org/) for maintaining the code quality.
- [Prettier](https://prettier.io/) as code formatter 
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) 
for styling the components.
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for styling the components.

## Setup
A copy of events from [here](https://gist.github.com/dannycochran/697345c1f21aa8c40e6925f9a8c0e0b0) is placed in the 
project as a file named as events.json
I've added some dummy data to it to better visualize the UI.

###Pre-requisites
- node
- npm
- GNU make (if running using makefile)

###Scripts

####1. Makefile
In the project directory, you can run:<br>

#####`make` 

There's a Makefile included in this project at the top of the repository. The
Makefile is very simple and has a default target to install the npm dependencies and start the server in development mode.

#####`make clean`
Before running the make command, use this command to Deletes the existing node_modules.


####2. npm scripts

The project can also be run using the package.json scripts. 
In the project directory, you can run:<br>

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
You will also see any lint errors in the console if running in the development mode.

The server is running at [http://localhost:8080](http://localhost:8080)<br>
Open the server [http://localhost:8080/api](http://localhost:8080/api) to view the data.

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>



// applied redux-observables
//written tests
//routing to save the state
//added more comments