# Build a dinamic website quickly with React and Google sheets

This project allows you to create a dynamic website in a few minutes.


[![Example website](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_site_home.png)](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_site_home.png)

## Requirements

- NodeJs
- knowledge in Typescrip language
- knowledge in Create React App Package
- Google account

#### For the base of this project, Create React App was used, therefore all the commands of a CRA project are inherited.

## How to build

### Run http local server to build a project in real time
1. Clone project
2. Run **npm install** command
3. Run **npm start** command

### Create a public Google sheet to use as a database for your website

1. Go to https://docs.google.com/spreadsheets
2. Create a blank document and paste included example content in any file of **/google-sheets-db** directory
3. Go to https://console.developers.google.com/
4. Create a new or use existing project
5. Type **Google Sheets API** in your search input, select it and enable API
6. Go to **Credentials** menu, next click in **CREATE CREDENTIALS**, and continue in API Key option.
7. Copy you API Key.

### Build your API methods

First, paste your API Key inside the file **/src/Api/index.ts**. Next, you can have for examples the API metohds contained in this file

## Build a production version of your website

1. Run command **npm run build**
2. Deploy this project in your http server, the files are created in the **/build** folder.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

