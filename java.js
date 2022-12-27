// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Attach an event listener to the element with the ID "SearchBar"
document.getElementById("SearchBar").addEventListener("keyup", function test () {
  // Get the value of the element
  const searchTerm = this.value;

  // Set the onreadystatechange event handler
  request.onreadystatechange = function() {
    // Check the readyState and status of the request
    if (request.readyState === 4 && request.status === 200) {
      // Parse the response
      const data = JSON.parse(request.responseText);
    
      // Filter the data by the search term
      const filteredData = data.movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));

      // Log the filtered data to the console
      console.log(filteredData);
    }
  }

  // Open the request and set the HTTP method and URL
  request.open('GET', 'movies.json');

  // Send the request
  request.send();
});

