const form = document.getElementById("student-form");
const card = document.getElementById("student-card");
var arr = [];
//localStorage.clear()
if(localStorage.getItem("studentcard") !=null){
    arr=JSON.parse(localStorage.getItem("studentcard"))
    for(x in arr){
        card.innerHTML+=`
        <div class="cardwidth card text-white bg-info-subtle m-3" style="box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.489)">
      <div class="card-header text-center"><img src="${arr[x].image}" class="rounded-circle h-75 w-75" alt="profile Image "></div>
      <div class="card-body">
        <h5 class="card-title text-center text-dark">${arr[x].name}</h5>
        <h6 class="card-title text-center text-dark">${arr[x].magor}</h6>
        <ul class="list-group list-group-flush rounded-3">
        <li class="list-group-item">Birth: ${arr[x].date}</li>
        <li class="list-group-item">Gender: ${arr[x].gender}</li>
        <li class="list-group-item">Phone: ${arr[x].phone}</li>
      </ul>  </div>
    </div
    `
    }
}

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    let namee = e.target.name.value;
    let date = e.target.date.value
    let phone = e.target.number.value;
    let gender = e.target.gender.value;
    let magor = e.target.magor.value;
    let image;
 
if(e.target.image.value == ""){
    image = "Images/profile-placeholder.png"
}else{
    image = e.target.image.value;
}
const s1=new Student(namee,magor,date,gender,phone,image)
arr.push(s1)
 localStorage.setItem("studentcard",JSON.stringify(arr))

    card.innerHTML+=`
    <div class="cardwidth card text-white bg-info m-3" style="box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.489)">
  <div class="card-header text-center"><img src="${image}" class="rounded-circle h-75 w-75" alt="profile Image "></div>
  <div class="card-body">
    <h3 class="card-title text-center">${namee}</h3>
    <h6 class="card-title text-center">${magor}</h6>
    <ul class="list-group list-group-flush rounded-3">
    <li class="list-group-item">Birth: ${date}</li>
    <li class="list-group-item">Gender: ${gender}</li>
    <li class="list-group-item">Phone: ${phone}</li>
  </ul>  </div>
</div
`
   
// let table=document.getElementById("table");
// let row = document.createElement("tr");
// let column1= document.createElement("td");
// let column2= document.createElement("td");
// let column3= document.createElement("td");
// let column4= document.createElement("td");
// let column5= document.createElement("td");


// column1.textContent = namee
// column2.textContent = date
// column3.textContent = phone
// column4.textContent = grade
// column5.textContent = gender

// row.appendChild(column1);
// row.appendChild(column2);
// row.appendChild(column3);
// row.appendChild(column4);
// row.appendChild(column5);
// table.appendChild(row);

    //form.reset();

});

function Student(name, magor, date, gender,phone,image) {
    this.name = name;
    this.magor = magor;
    this.date = date;
    this.gender = gender;
    this.phone = phone;
    this.image = image;
  }