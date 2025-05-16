let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  
  arr.map(arr => {
    if(arr.profession === "developer"){
       console.log(arr);
    }
  }); 
};
PrintDeveloperbyMap();

function PrintDeveloperbyForEach() {
  
 arr.forEach(arr => {
    if(arr.profession === "developer"){
        console.log(arr);
    }
 });
};
PrintDeveloperbyForEach();

function addData() {
 
  const newEmployee = {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);
}
addData();

function removeAdmin() {
 
 const arr1 = arr.filter(arr => arr.profession !== "admin");
 console.log(arr1);
}
removeAdmin();

function concatenateArray() {
  
  let arr1 = [
    { id: 4, name: "smith", age: "25", profession: "sales" },
    { id: 5, name: "rohan", age: "20", profession: "hr" },
    { id: 6, name: "suraj", age: "28", profession: "engineer" },
  ]
    let newArr = arr.concat(arr1);
    console.log(newArr);
}
concatenateArray();