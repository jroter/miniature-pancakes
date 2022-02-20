# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install
This install the dependencies needed to run this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Components used
Many components were used for the development of the front-end so this section will explore each one
### `Accordion Component`
offers a reusable component for certain buttons that can display more when user hits the respective arrow icon 

### `Footer Component`
Handles the footer for the site with the given routes needed for the prototype such as routing to home, resources, module page and module library.

### `Header Component`
Handles the Header for the site with the given routes needed for the prototype such as routing to home, resources, module page and module library.

### `Like Button Component`
This component is a more naive component that takes in the current likes gotten back from the server and then hosts the number onto a component that is also able to make calls back to the server should a click be made on said component

### `Show Likes Component`
This component simply shows the amount of likes vs actually modifying the likes as in the like button component. 

### `Button Component` 
A simple re-usable button component 

### `Button Link Component`
A simple re-usable button that routes you elsewhere

### `Image Component` 
A image component that can take in new image sources to be used for whatever purpose via the front-end

### `Link Component` 
A component that acts as a button with an href tag taking you elsewhere

# Pages 

## `Landing Page` 
This is the front-page: the first page the user sees. The page will allow user to either start where they last were or parooze the next modules. Finally, the landing page should offer some interesting articles pertaining to the main subject of start-ups and entrepreneurships

## `Lesson Page` 
This page holds the library of different modules to the respected user along with dividing the page into what they've completed and what they need to complete

## `Module Page`
The standard prototype for the module pages will break up each module into different segments and offer orther resources on the page

## `Resource Page` 
This page hosts other sources of information students can access to find out more about start-ups and entrepreneurships


# How to Contribue 
- Need to decide if each module page’s should be hosted on the NoSQL database or written on the front-end as static information. 
- Research information regarding start-ups/entrepreneurship needs to be done as well.
- Pages need to be implemented for each module regarding what Is needed from the customer. 
- Authentication will be required if user specific information is going to be stored. Could create a naïve authenticator or use a cloud solution like AWS Cognito.
- Future video content should be embedded to create a seamless customer experience.
