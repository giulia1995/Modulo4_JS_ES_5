
let userData = []; //Save Users Data

//fetch
async function fetchData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    userData = await response.json();
    populateTable(userData);
  } catch (error) {
    console.error('Si è verificato un errore:', error.message);
  }
}
//Components
function populateTable(users) {
  const nameColumn = document.getElementById('name');
  const userColumn = document.getElementById('user');
  const emailColumn = document.getElementById('email');

  
  clearColumns();

  users.forEach(user => {
    const nameCell = document.createElement('div');
    nameCell.textContent = user.name;
    nameColumn.appendChild(nameCell);

    const userCell = document.createElement('div');
    userCell.textContent = user.username;
    userColumn.appendChild(userCell);

    const emailCell = document.createElement('div');
    emailCell.textContent = user.email;
    emailColumn.appendChild(emailCell);
  });
}

// Show data in components grid
document.querySelector('.dropdown-menu').addEventListener('click', (event) => {
  const selectedOption = event.target.textContent.toLowerCase();
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

//All Data
  if (selectedOption === 'alldata') {
    const searchResults = filterBySearchTerm(userData, searchTerm);
    populateTable(searchResults);
  } else {
    
    const filteredData = filterData(selectedOption);
    const searchResults = filterBySearchTerm(filteredData, searchTerm);
    populateTable(searchResults);
  }
});

//Data Fltered
function filterData(selectedOption) {
  return userData.map(user => ({ [selectedOption]: user[selectedOption] }));
}

function filterBySearchTerm(data, searchTerm) {
  return data.filter(user => {
    const userValue = user[Object.keys(user)[0]].toString().toLowerCase();
    return userValue.includes(searchTerm);
  });
}

function clearColumns() {
  const nameColumn = document.getElementById('name');
  const userColumn = document.getElementById('user');
  const emailColumn = document.getElementById('email');

  nameColumn.innerHTML = 'NAME';
  userColumn.innerHTML = 'USERNAME';
  emailColumn.innerHTML = 'EMAIL';
}


fetchData();
