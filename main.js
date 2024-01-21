import { fetchData } from "./fetchModule.js";
import { populateTable, clearColumns } from "./domModule.js";
import { filterData, filterBySearchTerm } from "./filterModule.js";

let userData = [];
let selectedOption = localStorage.getItem("selectedOption") || "alldata";

async function initialize() {
  userData = await fetchData();
  populateTable(userData);
}

document.querySelector(".dropdown-menu").addEventListener("click", (event) => {
  selectedOption = event.target.textContent.toLowerCase();
  localStorage.setItem("selectedOption", selectedOption);

  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  if (selectedOption === "alldata") {
    const searchResults = filterBySearchTerm(userData, searchTerm);
    populateTable(searchResults);
  } else {
    const filteredData = filterData(selectedOption, userData);
    const searchResults = filterBySearchTerm(filteredData, searchTerm);
    populateTable(searchResults);
  }
});

document.querySelector(".btn-outline-dark").addEventListener("click", () => {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  if (searchTerm && searchTerm.trim() !== "") {
    if (selectedOption === "alldata") {
      const searchResults = filterBySearchTerm(userData, searchTerm);
      populateTable(searchResults);
    } else {
      const filteredData = filterData(selectedOption, userData);
      const searchResults = filterBySearchTerm(filteredData, searchTerm);
      populateTable(searchResults);
    }
  } else {
    populateTable(userData);
  }
});

clearColumns();

initialize();
