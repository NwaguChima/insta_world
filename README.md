# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `login Info`

email: instaworld@gmail.com
password: test1234

You can also create your own account

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## About Project.

### Technology used includes

firebase for auth and file store
tailwindcss for styling
Context API for state sharing in app
React Lazy loading and suspense are used for better performance, to ensure the application is loaded in chunks, on request.
titles accurately changed as routing is done between pages
using prop types for props checking.
React memo is used to ensure unnecessary re-rendering.

### Folder Structure.

-Components: for the various building components
-Constants: For routes and other values
-Pages: For specific pages, just like in Next js
-Helpers: Helper functions for building
-Lib: For firebase connection
-Context: Context API for state transfer
-Services: For various firebase helper functions for making async calls to firebase
-Styles: For tailwind output
-Images: for various images used.
