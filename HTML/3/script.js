const buttonToPageCreate = document.getElementById("PageCreate");
const buttonToPageRead = document.getElementById("PageRead");
const buttonToPageUpdate = document.getElementById("PageUpdate");
const buttonToPageDelete = document.getElementById("PageDelete");

buttonToPageCreate.addEventListener("click", openPageCreate);
buttonToPageRead.addEventListener("click", openPageRead);
buttonToPageUpdate.addEventListener("click", openPageUpdate);
buttonToPageDelete.addEventListener("click", openPageDelete);

function openPageCreate() {
  openPage('Create');
}

function openPageRead() {
  openPage('Read');
}

function openPageUpdate() {
  openPage('Update');
}

function openPageDelete() {
  openPage('Delete');
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


function Working(
  id,
  first_name,
  last_name,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  date_of_employment,
  date_of_dismissal
) {
  this.id = id;
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
  this.specialty = specialty;
  this.experience = experience;
  this.salary = salary;
  this.gender = gender;
  this.company = company;
  this.department = department;
  this.position = position;
  this.date_of_employment = date_of_employment;
  this.date_of_dismissal = date_of_dismissal;

  this.getId = function() {
    return this.id;
  };
  this.getFirstName = function() {
    return this.first_name;
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
  this.getDateOfEmployment = function() {
    return this.date_of_employment;
  };
  this.getDateOfDismissal = function() {
    return this.date_of_dismissal;
  };
}

function FactoryWorker(
  id,
  first_name,
  last_name,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  date_of_employment,
  date_of_dismissal,
  factory_id,
  factory_name,
  factory_city
) {
  Working.call(
    this,
    id,
    first_name,
    last_name,
    age,
    specialty,
    experience,
    salary,
    gender,
    company,
    department,
    position,
    date_of_employment,
    date_of_dismissal
  );
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

function AirportWorker(
  id,
  first_name,
  last_name,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  date_of_employment,
  date_of_dismissal,
  airport_id,
  airport_name,
  airport_city
) {
  Working.call(
    this,
    id,
    first_name,
    last_name,
    age,
    specialty,
    experience,
    salary,
    gender,
    company,
    department,
    position,
    date_of_employment,
    date_of_dismissal
  );
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

