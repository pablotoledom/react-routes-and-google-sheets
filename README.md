# Build a dinamic website quickly with React and Google sheets

This project allows you to create a dynamic website in a few minutes.

[![Example website](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_site_home.png)](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_site_home.png)

[![Example website](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_site_navigate.png)](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_site_navigate.png)

## Requirements

- NodeJs
- knowledge in Typescrip language
- knowledge in Create React App Package
- Google account

#### For the base of this project, Create React App was used, therefore all the commands of a CRA project are inherited. [Create React App](https://github.com/facebook/create-react-app).

## How to run and build

### Create a public Google sheet to use as a database for your website

1. Go to https://docs.google.com/spreadsheets.
2. Create a blank document and paste included example content in any file of **/google-sheets-db** directory.

[![Example website](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_google_sheet.png)](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_google_sheet.png)

3. Copy Google Sheet ID from document URL

[![Example website](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_google_sheet.png)](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_google_sheet.png)

4. Go to **https://console.developers.google.com/**.
5. Create a new or use existing project.
6. Type **Google Sheets API** in your search input, select it and enable API.
7. Go to **Credentials** menu, next click in **CREATE CREDENTIALS**, and continue in API Key option.
8. Copy you API Key.

### Build your API methods

First, paste your Google Sheet ID and API Key inside the file **/src/Api/index.ts**. Next, you can have for examples the API metohds contained in this file

[![Example website](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_key_edit.png)](https://raw.githubusercontent.com/pablotoledom/react-routes-and-google-sheets/main/assets/screenshot_key_edit.png)

### Run http local server to build a project in real time

1. Clone project.
2. Run **npm install** command.
3. Run **npm start** command.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build a production version of your website

1. Run command **npm run build**.
2. Deploy this project in your http server, the files are created in the **/build** folder.

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\

