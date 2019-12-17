document.getElementById("PageCreate").addEventListener("click", openPageCreate);
document
  .getElementById("ButtonSubmitCreate")
  .addEventListener("click", onCreate);

document.getElementById("PageRead").addEventListener("click", openPageRead);
document.getElementById("PageRead").addEventListener("click", onReadWorkers);
document
  .getElementById("PageRead")
  .addEventListener("click", onReadWorkersFactory);
document
  .getElementById("PageRead")
  .addEventListener("click", onReadWorkersAirport);

document.getElementById("PageUpdate").addEventListener("click", openPageUpdate);

document.getElementById("PageDelete").addEventListener("click", openPageDelete);
document.getElementById('ButtonSubmitDelete').addEventListener('click', onDelete);


function onCreate(ev) {
  ev.preventDefault();

  var data = JSON.stringify({
    firstname: String(document.getElementById("cworkerFirstName").value),
    lastname: String(document.getElementById("cworkerLastName").value),
    age: String(document.getElementById("cworkerAge").value),
    specialty: String(document.getElementById("cworkerSpecialty").value),
    experience: String(document.getElementById("cworkerExperience").value),
    salary: String(document.getElementById("cworkerSalary").value)
  });
  if (document.getElementById("cgender_male").checked) {
    gender_value = "Male";
  }
  if (document.getElementById("cgender_female").checked) {
    gender_value = "Female";
  }
  if (document.getElementById("cgender_other").checked) {
    gender_value = "Other";
  }
  data += JSON.stringify({
    gender: String(gender_value)
  });
  data += JSON.stringify({
    company: String(document.getElementById("cworkerCompany").value),
    department: String(document.getElementById("cworkerDepartment").value),
    position: String(document.getElementById("cworkerPosition").value)
  });

  data = data.replace("}{", ",");
  data = data.replace("}{", ",");
  data = data.replace("}{", ",");


  xhrC = new XMLHttpRequest();
  xhrC.withCredentials = true;
  xhrC.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      alert(this.responseText);
      document.getElementById("createForm").dispatchEvent(new Event("submit"));
    }
  });

  xhrC.open("POST", "http://localhost:2403/workers");
  xhrC.setRequestHeader("Content-Type", "application/json");
  xhrC.send(data);
}


function onReadWorkers() {
  console.log("Reading start 1");
  xhrR = new XMLHttpRequest();
  xhrR.withCredentials = true;

  xhrR.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log("Reading start 2");

      result = JSON.parse(this.response);
      var resultTBody = document.createElement("tbody");
      result.map(function(nthWorker) {
        resultTBody.appendChild(parseWorkersToTableRow(nthWorker));
      });

      var table = document.getElementById("workersTableBody").parentElement;
      table.replaceChild(
        resultTBody,
        document.getElementById("workersTableBody")
      );
      resultTBody.id = "workersTableBody";

      console.log("Read Success");
    }
  });

  xhrR.open("GET", "http://localhost:2403/workers/");
  xhrR.setRequestHeader("Content-Type", "application/json");
  xhrR.send();
}


function onReadWorkersFactory() {
  console.log("Reading start Factory 1");
  xhrR = new XMLHttpRequest();
  xhrR.withCredentials = true;

  xhrR.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log("Reading start Factory 2");

      result = JSON.parse(this.response);
      var resultTBody = document.createElement("tbody");
      result.map(function(nthWorkerFactory) {
        resultTBody.appendChild(parseWorkersFactoryToTableRow(nthWorkerFactory));
      });

      var table = document.getElementById("workersFactoryTableBody")
        .parentElement;
      table.replaceChild(
        resultTBody,
        document.getElementById("workersFactoryTableBody")
      );
      resultTBody.id = "workersFactoryTableBody";

      console.log("Read Success Factory");
    }
  });

  xhrR.open("GET", "http://localhost:2403/workers-factory/");
  xhrR.setRequestHeader("Content-Type", "application/json");
  xhrR.send();
}


function onReadWorkersAirport() {
  console.log("Reading start Airport 1");
  xhrR = new XMLHttpRequest();
  xhrR.withCredentials = true;

  xhrR.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log("Reading start Airport 2");

      result = JSON.parse(this.response);
      var resultTBody = document.createElement("tbody");
      result.map(function(nthWorkerAirport) {
        resultTBody.appendChild(parseWorkersAirportToTableRow(nthWorkerAirport));
      });

      var table = document.getElementById("workersAirportTableBody")
        .parentElement;
      table.replaceChild(
        resultTBody,
        document.getElementById("workersAirportTableBody")
      );
      resultTBody.id = "workersAirportTableBody";

      console.log("Read Success Airport");
    }
  });

  xhrR.open("GET", "http://localhost:2403/workers-airport/");
  xhrR.setRequestHeader("Content-Type", "application/json");
  xhrR.send();
}


function onUpdate(ev) {
  ev.preventDefault();

 
  var data = JSON.stringify({
    firstname: String(document.getElementById("cworkerFirstName").value),
    lastname: String(document.getElementById("cworkerLastName").value),
    age: String(document.getElementById("cworkerAge").value),
    specialty: String(document.getElementById("cworkerSpecialty").value),
    experience: String(document.getElementById("cworkerExperience").value),
    salary: String(document.getElementById("cworkerSalary").value)
  });
  console.log(data);
  if (document.getElementById("cgender_male").checked) {
    gender_value = "Male";
  }
  if (document.getElementById("cgender_female").checked) {
    gender_value = "Female";
  }
  if (document.getElementById("cgender_other").checked) {
    gender_value = "Other";
  }
  data += JSON.stringify({
    gender: String(gender_value)
  });
  console.log(data);
  data += JSON.stringify({
    company: String(document.getElementById("cworkerCompany").value),
    department: String(document.getElementById("cworkerDepartment").value),
    position: String(document.getElementById("cworkerPosition").value)
  });
  console.log(data);
  data = data.replace("}{", ",");
  data = data.replace("}{", ",");
  data = data.replace("}{", ",");
  console.log(data);
  
  xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
          console.log(this.responseText);
      }
  });

  xhr.open("PUT", "http://ipAddres:2403/cpu/"+document.getElementById("uid").value);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}


function onDelete(ev) {
  ev.preventDefault();
  xhrD = new XMLHttpRequest();
  xhrD.withCredentials = true;

  xhrD.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhrD.open("DELETE","http://localhost:2403/workers/" 
            + String(document.getElementById("dworkerId").value));
  xhrD.setRequestHeader("Content-Type", "application/json");
  xhrD.send();
  alert("Worker with id " + dworkerId.value + " deleted");
}

function openPageCreate() {
  openPage("Create");
}

function openPageRead() {
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


function parseWorkersToTableRow(workers) {
  var row = document.createElement("tr");

  id = document.createElement("td");
  id.innerText = workers["id"];
  row.appendChild(id);

  workerName = document.createElement("td");
  workerName.innerText = workers["firstname"] + " " + workers["lastname"];
  row.appendChild(workerName);

  age = document.createElement("td");
  age.innerText = workers["age"];
  row.appendChild(age);

  specialty = document.createElement("td");
  specialty.innerText = workers["specialty"];
  row.appendChild(specialty);

  salary = document.createElement("td");
  salary.innerText = workers["salary"];
  row.appendChild(salary);

  gender = document.createElement("td");
  gender.innerText = workers["gender"];
  row.appendChild(gender);

  company = document.createElement("td");
  company.innerText = workers["company"];
  row.appendChild(company);

  position = document.createElement("td");
  position.innerText = workers["position"];
  row.appendChild(position);

  return row;
}

function parseWorkersFactoryToTableRow(workers) {
  var row = document.createElement("tr");

  id = document.createElement("td");
  id.innerText = workers["id"];
  row.appendChild(id);

  workerName = document.createElement("td");
  workerName.innerText = workers["firstname"] + " " + workers["lastname"];
  row.appendChild(workerName);

  age = document.createElement("td");
  age.innerText = workers["age"];
  row.appendChild(age);

  specialty = document.createElement("td");
  specialty.innerText = workers["specialty"];
  row.appendChild(specialty);

  salary = document.createElement("td");
  salary.innerText = workers["salary"];
  row.appendChild(salary);

  gender = document.createElement("td");
  gender.innerText = workers["gender"];
  row.appendChild(gender);

  company = document.createElement("td");
  company.innerText = workers["company"];
  row.appendChild(company);

  position = document.createElement("td");
  position.innerText = workers["position"];
  row.appendChild(position);

  factoryid = document.createElement("td");
  factoryid.innerText = workers["factoryid"];
  row.appendChild(factoryid);

  factoryname = document.createElement("td");
  factoryname.innerText = workers["factoryname"];
  row.appendChild(factoryname);

  factorycity = document.createElement("td");
  factorycity.innerText = workers["factorycity"];
  row.appendChild(factorycity);

  return row;
}

function parseWorkersAirportToTableRow(workers) {
  var row = document.createElement("tr");

  id = document.createElement("td");
  id.innerText = workers["id"];
  row.appendChild(id);

  workerName = document.createElement("td");
  workerName.innerText = workers["firstname"] + " " + workers["lastname"];
  row.appendChild(workerName);

  age = document.createElement("td");
  age.innerText = workers["age"];
  row.appendChild(age);

  specialty = document.createElement("td");
  specialty.innerText = workers["specialty"];
  row.appendChild(specialty);

  salary = document.createElement("td");
  salary.innerText = workers["salary"];
  row.appendChild(salary);

  gender = document.createElement("td");
  gender.innerText = workers["gender"];
  row.appendChild(gender);

  company = document.createElement("td");
  company.innerText = workers["company"];
  row.appendChild(company);

  position = document.createElement("td");
  position.innerText = workers["position"];
  row.appendChild(position);

  airportid = document.createElement("td");
  airportid.innerText = workers["airportid"];
  row.appendChild(airportid);

  airportname = document.createElement("td");
  airportname.innerText = workers["airportname"];
  row.appendChild(airportname);

  airportcity = document.createElement("td");
  airportcity.innerText = workers["airportcity"];
  row.appendChild(airportcity);

  return row;
}



function Working(
  id,
  firstName,
  lastName,
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
  this.firstName = firstName;
  this.lastName = lastName;
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
  this.getfirstName = function() {
    return this.firstName;
  };
  this.getLastName = function() {
    return this.lastName;
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
  firstName,
  lastName,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  factoryId,
  factoryName,
  factoryCity
) {
  Working.apply(this, [].slice.call(arguments, 0, 7));
  this.factoryId = factoryId;
  this.factoryName = factoryName;
  this.factoryCity = factoryCity;

  this.getFactoryId = function() {
    return this.factoryId;
  };
  this.getFactoryName = function() {
    return this.factoryName;
  };
  this.getFactoryCity = function() {
    return this.factoryCity;
  };
}
FactoryWorker.prototype = Object.create(Working.prototype);
FactoryWorker.prototype.constructor = FactoryWorker;

function AirportWorker(
  id,
  firstName,
  lastName,
  age,
  specialty,
  experience,
  salary,
  gender,
  company,
  department,
  position,
  airportId,
  airportName,
  airportCity
) {
  Working.apply(this, [].slice.call(arguments, 0, 7));
  this.airportId = airportId;
  this.airportName = airportName;
  this.airportCity = airportCity;

  this.getAirportId = function() {
    return this.airportId;
  };
  this.getAirportName = function() {
    return this.airportName;
  };
  this.getAirportCity = function() {
    return this.airportCity;
  };
}
AirportWorker.prototype = Object.create(Working.prototype);
AirportWorker.prototype.constructor = AirportWorker;
