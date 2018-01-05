# google-hangouts-show-unread-in-tab-title
This is a Chrome Extension that adds the number of unread hangouts conversations to start of the tab name (Assuming hangouts.google.com)

This extension was made using [this boilerplate](https://github.com/ashish-chopra/chrome-extension-seed.git)

Want to contribute? Build the application like so

1. Clone the repo:
    
        git clone

2. Move inside root folder and run:
    
        npm install
        bower install

3. Use following commands to run development lifecyle events:

        npm run clean       // to clean the ouput directory
        npm run build:dev   // build the source code inside 'dist' directory.
        npm run serve       // host the 'dist' on a web server at port 3000 (default)
        npm start           // start the development cycle (build t he code, serve it and watch for changes)

NOTE: In order to live reload the extension in chrome, the project used `chromereload.js` script which makes a
websocket connection with livereload server running and watch for 'reload' command. Make sure to remove this file
from `manifest.json` before releasing a production builds. 

# License

MIT 


