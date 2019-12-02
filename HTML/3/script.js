
document.getElementById("PageCreate").addEventListener("click", openPageCreate);
document.getElementById("PageRead").addEventListener("click", openPageRead);
document.getElementById("PageUpdate").addEventListener("click", openPageUpdate);
document.getElementById("PageDelete").addEventListener("click", openPageDelete);

function openPageCreate() {
  var data = JSON.stringify({
    "firstname": String(document.getElementsByName("workerRadios").value),
    "lastname": String(document.getElementById("cthreadNumber").value),
    "specialty": String(document.getElementById("cfrequency").value),
    "experience": String(document.getElementById("cfrequency").value),
    "salary": String(document.getElementById("cfrequency").value),
    "gender": String(document.getElementById("cfrequency").value),
    "company": String(document.getElementById("cfrequency").value),
    "department": String(document.getElementById("cfrequency").value),
    "position": String(document.getElementById("cfrequency").value)
})

if (document.getElementById('cworker_default').checked) {
  rate_value = document.getElementById('cworker_default').value;
}
if (document.getElementById('cworker_factory').checked) {
  rate_value = document.getElementById('cworker_factory').value;
}
if (document.getElementById('cworker_air').checked) {
  rate_value = document.getElementById('cworker_air').value;
}
  console.log(data);
  openPage("Create");
}

function openPageRead() {
  xhrR = new XMLHttpRequest();
  xhrR.withCredentials = true;
  xhrR.open("GET", "http://localhost:2403/");
  xhrR.setRequestHeader("Content-Type", "application/json");
  xhrR.send();
  openPage("Read");
}

function openPageUpdate() {
  
  openPage("Update");
}

function openPageDelete() {
  
  openPage("Delete");
}

function openPage(pageName) {
  var i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(pageName).style.display = "block";
}
document.getElementById("PageCreate").click();

function InsertIntoTable() {
  var table = document.getElementById("ReadTable");
  var row = table.insertRow(table.length);
  for (let index = 0; index < 8; index++) {
    var cell = row.insertCell(index);
    cell.innerHTML = "2";
  }
  table.insertRow(table.length);
}
InsertIntoTable();




function Working(
  id,
  firstname,
  last_name,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position
) {
  this.id = id;
  this.firstname = firstname;
  this.last_name = last_name;
  this.age = age;
  this.specialty = specialty;
  this.experience = experience;
  this.salary = salary;
  this.gender = gender;
  this.company = company;
  this.department = department;
  this.position = position;

  this.getId = function() {
    return this.id;
  };
  this.getFirstName = function() {
    return this.firstname;
  };
  this.getLastName = function() {
    return this.last_name;
  };
  this.getAge = function() {
    return this.age;
  };
  this.getSpecialty = function() {
    return this.specialty;
  };
  this.getExperience = function() {
    return this.experience;
  };
  this.getSalary = function() {
    return this.salary;
  };
  this.getGender = function() {
    return this.gender;
  };
  this.getCompany = function() {
    return this.company;
  };
  this.getDepartment = function() {
    return this.department;
  };
  this.getPosition = function() {
    return this.position;
  };
}

function FactoryWorker(
  id,
  firstname,
  last_name,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  factory_id,
  factory_name,
  factory_city
) {
  Working.apply(this, [].slice.call(arguments,0,7));
  this.factory_id = factory_id;
  this.factory_name = factory_name;
  this.factory_city = factory_city;

  this.getFactoryId = function() {
    return this.factory_id;
  };
  this.getFactoryName = function() {
    return this.factory_name;
  };
  this.getFactoryCity = function() {
    return this.factory_city;
  };
}
FactoryWorker.prototype = Object.create(Working.prototype);
FactoryWorker.prototype.constructor = FactoryWorker;

function AirportWorker(
  id,
  firstname,
  last_name,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  airport_id,
  airport_name,
  airport_city
) {
  Working.apply(this, [].slice.call(arguments,0,7));
  this.airport_id = airport_id;
  this.airport_name = airport_name;
  this.airport_city = airport_city;

  this.getAirportId = function() {
    return this.airport_id;
  };
  this.getAirportName = function() {
    return this.airport_name;
  };
  this.getAirportCity = function() {
    return this.airport_city;
  };
}
AirportWorker.prototype = Object.create(Working.prototype);
AirportWorker.prototype.constructor = AirportWorker;


