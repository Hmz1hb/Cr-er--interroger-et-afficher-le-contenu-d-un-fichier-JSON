// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Set the onreadystatechange event handler
request.onreadystatechange = function() {
  // Check the readyState and status of the request
  if (request.readyState === 4 && request.status === 200) {
    // Parse the response
    const data = JSON.parse(request.responseText);

    // Get the table element
    const table = document.getElementById('data-table');

    // Iterate through the data
    data.forEach(item => {
      // Create a new table row
      const row = document.createElement('tr');

      // Create a cell for each property
      const nameCell = document.createElement('td');
      nameCell.innerText = item.name;
      row.appendChild(nameCell);

      const ageCell = document.createElement('td');
      ageCell.innerText = item.age;
      row.appendChild(ageCell);

      // Repeat for other properties...

      // Append the row to the table body
      table.appendChild(row);
    });
  }
}

// Open the request and set the HTTP method and URL
request.open('GET', 'movies.json');

// Send the request
request.send();
