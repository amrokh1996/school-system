const form = document.getElementById("student-form");

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    let namee = e.target.name.value;
    let date = e.target.date.value
    let phone = e.target.number.value;
    let gender = e.target.gender.value;
    let grade = e.target.grade.value;

    console.log(namee,date,phone,gender,grade)

let table=document.getElementById("table");
let row = document.createElement("tr");
let column1= document.createElement("td");
let column2= document.createElement("td");
let column3= document.createElement("td");
let column4= document.createElement("td");
let column5= document.createElement("td");


column1.textContent = namee
column2.textContent = date
column3.textContent = phone
column4.textContent = grade
column5.textContent = gender

row.appendChild(column1);
row.appendChild(column2);
row.appendChild(column3);
row.appendChild(column4);
row.appendChild(column5);
table.appendChild(row);

    //form.reset();

});