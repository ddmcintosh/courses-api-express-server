"use strict";

window.onload = init;

function init() {
  fetch(`http://localhost:8081/api/courses`)
    .then((response) => response.json())
    .then((data) => {
      fillTable(data);
    });

  //const resultsTable = document.getElementById("resultsTable");

  //const searchTypeDropdown = document.getElementById("searchTypeDropdown");

  //searchTypeDropdown.onchange = SearchTypeDropdownOnChange;

  //for (let course of courses) {
  // let option = new Option(courses.courseName, courses.courseName);

  // SearchTypeDropdownOnChange.appendChild("option");
  //}
}

function fillTable(data) {
  let resultsTable = document.getElementById("resultsTable");
  for (let x of data) {
    let row = resultsTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = x.dept;
    cell2.innerHTML = x.courseNum;
    cell3.innerHTML = `<a href="details.html?courseid=${x.id}">${x.courseName}</a>`;
  }
}
let anchor = document.createElement("a");
anchor.href = `details.html?courseid=${x.id}`;
anchor.text = "See details";

//function SearchTypeDropdownOnChange() {
//const searchTypeDropdown =
//  document.getElementById("searchTypeDropdown").value;
//}
