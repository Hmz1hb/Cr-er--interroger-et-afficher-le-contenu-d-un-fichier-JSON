// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

  
  //on load data
  request.onreadystatechange = function() {
      // Parse the response

      // Check the readyState and status of the request
    if (request.readyState === 4 && request.status === 200) {

      const data = JSON.parse(request.responseText);
            
      // Iterate through the data
      data.movies.forEach(item => {
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
      festivalCell.innerHTML = item.festivals.join(', <br>');
      row.appendChild(festivalCell);

      const actorCell = row.insertCell();
      actorCell.innerHTML = item.actors.map(actors => actors.name + actors.firstname+ actors.nationality).join(', <br>');
      row.appendChild(actorCell);
      })
    }
  };

        // Open the request and set the HTTP method and URL
        request.open('GET', 'movies.json');

        // Send the request
        request.send();
  
// Attach an event listener to the element with the ID "SearchBar"
document.getElementById("SearchBar").addEventListener("keyup", function() {
  // Get the value of the element
  const searchTerm = this.value.toLowerCase();

  // Set the onreadystatechange event handler
  request.onreadystatechange = function test() {
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
      festivalCell.innerHTML = item.festivals.join(', <br>');
      row.appendChild(festivalCell);

      const actorCell = row.insertCell();
      actorCell.innerHTML = item.actors.map(actors => actors.name + actors.firstname + actors.nationality).join(', <br>');
      row.appendChild(actorCell);
});
}}
      // Open the request and set the HTTP method and URL
      request.open('GET', 'movies.json');

      // Send the request
      request.send();

});

// sort table

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  //while loop that will continue until no switching has been done
  
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    //loop through all table rows  without thead
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      //getting the value from the current cell and the next cell respecting the loop
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
     //check if the two rows should switch
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
    //log the switch value if true then switch and mark the as done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      //if the switch value is false, check if the direction is "asc" and set the direction to "desc" and run the while loop again.
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
