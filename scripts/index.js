"use strict";

let courses = [
  {
    id: 1,
    dept: "CompSci",
    courseNum: 101,
    courseName: "HTML5 and CSS3",
    instructor: "Rob",
    startDate: "July 8",
    numDays: 10,
  },
  {
    id: 2,
    dept: "CompSci",
    courseNum: 102,
    courseName: "JavaScript",
    instructor: "Dana",
    startDate: "July 22",
    numDays: 35,
  },
  {
    id: 3,
    dept: "CompSci",
    courseNum: 201,
    courseName: "Angular",
    instructor: "Rob",
    startDate: "Sep 9",
    numDays: 15,
  },
  {
    id: 4,
    dept: "CompSci",
    courseNum: 301,
    courseName: "Java",
    instructor: "Maaike",
    startDate: "Oct 1",
    numDays: 15,
  },
  {
    id: 5,
    dept: "CompSci",
    courseNum: 302,
    courseName: "C#",
    instructor: "Dana",
    startDate: "Oct 1",
    numDays: 15,
  },
  {
    id: 6,
    dept: "CompSci",
    courseNum: 401,
    courseName: "Java Spring Boot",
    instructor: "Maaike",
    startDate: "Nov 1",
    numDays: 15,
  },
  {
    id: 7,
    dept: "CompSci",
    courseNum: 202,
    courseName: ".NET Web API",
    instructor: "Dana",
    startDate: "Nov 1",
    numDays: 15,
  },
  {
    id: 8,
    dept: "Math",
    courseNum: "101",
    courseName: "Algebra",
    instructor: "Zephaniah",
    startDate: "Sep 15",
    numDays: 10,
  },
  {
    id: 9,
    dept: "Math",
    courseNum: "201",
    courseName: "Statistics",
    instructor: "Elisha",
    startDate: "Oct 15",
    numDays: 10,
  },
  {
    id: 10,
    dept: "English",
    courseNum: "101",
    courseName: "Composition",
    instructor: "Natalie",
    startDate: "Aug 1",
    numDays: 5,
  },
  {
    id: 11,
    dept: "English",
    courseNum: "201",
    courseName: "Creative Fiction",
    instructor: "Siddalee",
    startDate: "Sep 1",
    numDays: 6,
  },
  {
    id: 12,
    dept: "English",
    courseNum: "202",
    courseName: "Playwriting",
    instructor: "Ezra",
    startDate: "Oct 1",
    numDays: 5,
  },
  {
    id: 13,
    dept: "Finance",
    courseNum: "101",
    courseName: "Basic Finance",
    instructor: "Pursalane",
    startDate: "Jun 1",
    numDays: 5,
  },
  {
    id: 14,
    dept: "Finance",
    courseNum: "201",
    courseName: "Basics of Stocktrading",
    instructor: "Ian",
    startDate: "Dec 1",
    numDays: 5,
  },
  {
    id: 15,
    dept: "Finance",
    courseNum: "301",
    courseName: "Entrepreneurship",
    instructor: "Zachary",
    startDate: "May",
    numDays: 5,
  },
  {
    id: 16,
    dept: "Finance",
    courseNum: "401",
    courseName: "Tax Laws",
    instructor: "Brittany",
    startDate: "Aug 1",
    numDays: 5,
  },
];

window.onload = init;

function init() {
  fetch(`http://localhost:8081/api/courses`)
    .then((response) => response.json())
    .then((data) => {
      fillTable(data);
    });
  /* const resultsTable = document.getElementById("resultsTable");

  const searchTypeDropdown = document.getElementById("searchTypeDropdown");

  searchTypeDropdown.onchange = SearchTypeDropdownOnChange;

  for (let course of courses) {
    let option = new Option(course.courseName, course.courseName);

    searchTypeDropdown.appendChild(option);
  } */
}

/*function SearchTypeDropdownOnChange() {
  let searchTypeDropdown = document.getElementById("searchTypeDropdown").value;

  let courseNum;
  let id;
 // resultsTable.innerHTML = searchTypeDropdown;

  for (let i of courses ) {
   if (i.courseName.includes(searchTypeDropdown)) {
    courseNum 
   }

   
} */

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
