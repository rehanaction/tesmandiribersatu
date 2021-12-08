
import fetch from 'node-fetch'
globalThis.fetch = fetch
fetch('https://gutendex.com/books/')
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors




