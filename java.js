// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Attach an event listener to the element with the ID "SearchBar"
document.getElementById("SearchBar").addEventListener("keyup", function () {

  // Get the value of the element
  const searchTerm = this.value.toLowerCase();

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

      // Clear the table body
      table.tBodies[0].innerHTML = '';
      
      // Iterate through the filtered data
       filteredData.forEach(item => {
      // Create a new table row
      const row = table.tBodies[0].insertRow();

      // Create cells for each property
      const posterCell = row.insertCell();
      posterCell.innerHTML = `<a href="${item.poster}"><img src="${item.poster}" alt="${item.title}" width="100" height="150"></a>`;

      const titleCell = row.insertCell();
      titleCell.innerText = item.title;

      const directorCell = row.insertCell();
      directorCell.innerText = item.director;

      const durationCell = row.insertCell();
      durationCell.innerText = item.duration;

      const yearCell = row.insertCell();
      yearCell.innerText = item.year;

      const festivalCell = row.insertCell();
      festivalCell.innerText = item.festivals.join(', ');
      row.appendChild(festivalCell);

      const actorCell = row.insertCell();
      actorCell.innerText = item.actors.map(actors => actors.name + actors.firstname + actors.nationality).join(', ');
      row.appendChild(actorCell);
});

    }};

      // Open the request and set the HTTP method and URL
      request.open('GET', 'movies.json');

      // Send the request
      request.send();
});