// //opening database

// let db;

// //requesting the index db api to open a database
// let openRequest=indexedDB.open("myDatabase",2);

// openRequest.addEventListener("success",(e)=>{
// console.log("DB Success");

// db=openRequest.result;
// })

// openRequest.addEventListener("error",(e)=>{
// console.log("DB Error");
// })

// openRequest.addEventListener ("upgradeneeded",(e)=>{
// console.log("DB Upgraded and also for initial DB creation");

// db=openRequest.result;

// db.createObjectStore("video",{keyPath:"id"});
// db.createObjectStore("image",{keyPath:"id"});
// })

// //create object store

// //make transactions










// Open a database
// Create objectstore
// Make transactions
let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e) => {
    console.log("DB Success");
    db = openRequest.result;
})
openRequest.addEventListener("error", (e) => {
    console.log("DB error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB upgraded and also for initial DB creation");
    db = openRequest.result;

    db.createObjectStore("video", { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
})