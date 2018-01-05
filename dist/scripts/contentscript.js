/**
 *  Name: contentscript.js
 *  Author: Pano Papadatos
 *  Date: 20 Feb, 2017
 *
 *   This script hosts the logic that runs inside the webpage that is being rendered by the browser.
 *   If you do not have need of content scripts, remove this script from manifest.json and src folder.
 */

console.log("Hey Pano")
(function(){
    setInterval(() => {
        console.log("HEYHEY")
        let all = document.querySelectorAll("div[role='option']");
        all.forEach(a => console.log(window.getComputedStyle(a).fontWeight));
    }, 1000);
})();

