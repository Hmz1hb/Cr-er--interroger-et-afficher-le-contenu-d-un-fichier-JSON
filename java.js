// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Set the onreadystatechange event handler
request.onreadystatechange = function() {
  // Check the readyState and status of the request
  if (request.readyState === 4 && request.status === 200) {
    // Parse the response
    const data = JSON.parse(request.responseText);

    // Log the data to the console
    console.log(data);
  }
}

// Open the request and set the HTTP method and URL
request.open('GET', 'movies.json');

// Send the request
request.send();
