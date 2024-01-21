export { filterData, filterBySearchTerm };

function filterData(selectedOption, userData) {
  if (selectedOption === "alldata") {
    return userData;
  }

  return userData.map((user) => ({ [selectedOption]: user[selectedOption] }));
}

function filterBySearchTerm(data, searchTerm) {
  return data.filter((user) => {
    const userValue = user[Object.keys(user)[0]].toString().toLowerCase();
    return userValue.includes(searchTerm);
  });
}
