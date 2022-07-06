# Iframe Demo

This prototype demonstrates how a page can be displayed in an iframe and interact with the parent page.  
Depends on the [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) library for resizing and messaging.

## Requirements

Node.js Version 16  
NPM version 8

## Running the Demo

### Installing Dependencies

open a terminal, navigate to `parent-page/` install dependencies with `npm i`  
open a second terminal, navigate to `framed-page/` install dependencies with `npm i`

### Starting

open a terminal, navigate to `parent-page/` start with `npm start`  
open a second terminal, navigate to `framed-page/` start with `npm start`  
Both parts have to be running for the demo.  
open `http://localhost:3000` if the browser does not open automatically

## Adopting for Local Development

In the `parent-page/.env` file replace the given URL with the URL you would like to show in the iframe.
After changing the `.env` file the app has to be restarted. 
Besides the `.env` file the `parent-page` folder does not require any changes or contains anything of further importance.

In `framed-page/index.html` relevant code elements are marked. Search for `//@info` to find the relevant elements.

### Disclaimer

This is a makeshift demo, it does not always follow best practices.
