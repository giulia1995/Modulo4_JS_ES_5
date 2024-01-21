export { populateTable, clearColumns };

function populateTable(users) {
  const nameColumn = document.getElementById("name");
  const userColumn = document.getElementById("user");
  const emailColumn = document.getElementById("email");

  clearColumns();

  users.forEach((user) => {
    const nameCell = document.createElement("div");
    nameCell.textContent = user.name;
    nameColumn.appendChild(nameCell);
   

    const userCell = document.createElement("div");
    userCell.textContent = user.username;
    userColumn.appendChild(userCell);


    const emailCell = document.createElement("div");
    emailCell.textContent = user.email;
    emailColumn.appendChild(emailCell);
  
  });
}

function clearColumns() {
  const nameColumn = document.getElementById("name");
  const userColumn = document.getElementById("user");
  const emailColumn = document.getElementById("email");

  nameColumn.innerHTML = "NAME";
  userColumn.innerHTML = "USERNAME";
  emailColumn.innerHTML = "EMAIL";
}
