# Restaurant Reviews :stew:
*A practice project for the Udacity Front End Web Developer Nanodegree Program*

## Getting started
:exclamation: You need a web server to run this game.  
[**Please review the application on it's GitHub Page.**](https://sixl-daniel.github.io/mws-restaurant-stage-1/)

### Use your existing web hoster
Just upload all files to a new directory at your website host with a FTP application. Point a domain to the games directory and you are good to go.

### Use a local web server with Node
You can setup a simple *HTTP Server* on your local machine by using *NodeJS*.

1. **Download and install NodeJS**  
Download the latest stable release from [https://nodejs.org/](https://nodejs.org/) and install it with default setting.

2. **Install http-server from npm**  
Install the package *http-server* globally with the node package manager command line tool. Open a command prompt and enter:
    ```
    $ npm install http-server -g
    ```
3. **Clone this repository**  
Change to a folder you want the app in. Then clone the files of this repo to a new directory and change into it:
    ```
    $ git clone https://github.com/Sixl-Daniel/mws-restaurant-stage-1.git MyNewAppDirectory
    $ cd MyNewAppDirectory
    ```
3. **Start your web server**
    ```
    $ http-server -p 8000
    ```
5. **Point your browser to your local website**  
Open your browser and go to http://localhost:8000 to start the app.  

### Use a local web server with Python

1. **Download and install Python**
Navigate to [Python's download page](https://www.python.org/downloads/) to download and install the software.

2. **Clone this repository**  
Change to a folder you want the app in. Then clone the files of this repo to a new directory and change into it:
    ```
    $ git clone https://github.com/Sixl-Daniel/mws-restaurant-stage-1.git MyNewAppDirectory
    $ cd MyNewAppDirectory
    ```
3. **Start your web server**  
If you installed Python 2.x, start the server with `python -m SimpleHTTPServer 8000`. For Python 3.x, use `python3 -m http.server 8000`.

5. **Point your browser to your local website**  
Open your browser and go to http://localhost:8000 to start the app.  

## Project Specs
- **Responsive Design**
    - Is the site UI compatible with a range of display sizes?
    - Are images responsive?
    - Are application elements visible and usable in all viewports?
- **Accessibility**
    - Are images accessible?
    - Is focus used appropriately to allow easy navigation of the site?
    - Are site elements defined semantically?
- **Offline Availability**
    - Are pages that have been visited available offline?

## Libraries
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/), [Google Fonts](https://fonts.google.com/), [normalize-scss](https://github.com/JohnAlbin/normalize-scss) and [Workbox](https://developers.google.com/web/tools/workbox/).

## Code snippets & Tutorials

- **NodeJS - Setup a Simple HTTP Server / Local Web Server**  
[http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server]()

- **Workbox - Guides - Get started**  
[https://developers.google.com/web/tools/workbox/guides/get-started]()

- **Responsive typography with REMs:  
How to build a scalable typographic foundation in three steps**  
[https://blog.bugsnag.com/responsive-typography-with-rems]()