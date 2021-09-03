// Include the classes for Employee and subclasses
const Employee = require("../lib/employee.js");
const Engineer = require("../lib/engineer.js");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

// this will hold all of the completed employee cards, and be hooked onto the HTML
var empCards = `<br>`; 

var employeeList = [];

// this takes in the data and for each object inside (data is an array of objects), create an idCard
// the objects are classes of Engineer, Manager, or Intern
function generateHTML (employees) {

  employees.forEach((element) => {
  var employeeObj; 
  // roleIcon will hold the HTML for the icon representing the role
  let roleIcon = ``;
  let special = ``;

  switch(element.employeeType) {
    case "Manager":
      // code block
      employeeObj = new Manager(element.employeeName, element.employeeID, element.empEmail, element.employeeOffice);
      roleIcon = `<i class="fas fa-coffee"></i>`;
      special = `Office Number: ${employeeObj.officeNumber}`;
      break;
    case "Engineer":
      // code block
      employeeObj = new Engineer(element.employeeName, element.employeeID, element.empEmail, element.employeeGithub);
      roleIcon = '<i class="fas fa-glasses"></i>';
      special = `GitHub: <a href="${employeeObj.getGithub()}" target="_blank" rel="noopener noreferrer">${employeeObj.github}</a>`;
      break;
    case "Intern":
      // code block
      employeeObj = new Intern(element.employeeName, element.employeeID, element.empEmail, element.employeeSchool);
      roleIcon = `<i class="fas fa-user-graduate"></i>`;
      special = `School: ${employeeObj.getSchool()}`;
      break;
    default:
      // code block
  };

  makeCards(employeeObj, roleIcon, special);
  });
  return makeHTML();
}

function makeCards(employee, icon, special) {
  // this function creates the employee cards
  // the employee object is passed in, along with the icon to be used and the special text/link for the role
  empCards = empCards + `
  <div class="col-md-4">
    <div class="card">
      <h5 class="card-header">
        <p>${employee.getName()}</p>
        <p>${icon} ${employee.getRole()}</p>
      </h5>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.getID()}</li>
          <li class="list-group-item">Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
          <li class="list-group-item">${special}</li>
        </ul>
      </div>
    </div>
  </div>
  `;
}

function makeHTML () {
// function which generates the HTML skeleton
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags for boostrap -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <!-- fontawesome CSS -->
        <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <!-- app-specific CSS file -->
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
      </head>
    
      <body>
        <header class="jumbotron">
          <h1 class="display-3">My Team</h1>
        </header>
        <div class="container">
            <div class="row">
                ${empCards}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="../index.js"></script>
      </body>
    </html>`;
}

module.exports = generateHTML;1