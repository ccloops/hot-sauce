# Hot Sauce Viewer

## Overview

An application that displays a grid of hot sauces. If you click on a hot sauce, you will be taken to a detail view page with a longer description of the hot sauce. On hover of a hot sauce, an x will appear, which will allow you to remove a hot sauce from state.

This application queries a hotsauces.json file from the server and sends necessary data to the client application.

This application was built with Node version 11.1.0.

## Getting Started

To run this application, complete the following steps:

1. Navigate to the following url: https://github.com/ccloops/hot-sauce
2. Clone the repo to your local machine: `git clone https://github.com/ccloops/hot-sauce`
3. Run the command: `npm install`
4. Touch a `.env` file and add the following variables:
  * PORT=3000
  * DATA_URL=http://localhost:3000/sauces
5. Run the command: `npm start`
6. In your browser, navigate to: http://localhost:3000

** If you run `npm start` before you have added the `.env` file, make sure to remove the `.cache` directory before you run the `npm start` command again.

## Built With

* React - Client Framework
* Superagent - Node Service API to query the hotsauces.json data.
* Styled Components - UI Components / styling

## Note

* The Texas Pete image url was returning a 404. I manually edited the json file with an updated image url.

## Authors

Catherine Looper

## License 
This application is licensed under the MIT License