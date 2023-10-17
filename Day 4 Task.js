
//For the given JSON iterate over all for loops (for, for in, for of)

let obj = {
    "Name": "Vinith",
    "dob": "07-07-1998",
    "Age": "25",
    "Location": "Chennai",
    "Indian": true,
  };
// for of loop
 console.log("for of ");
  for (let key of Object.keys(obj)) {
    console.log(key, ":", obj[key]);
  }

  // for in loop
  
  console.log("for in ");
  for (let key in obj) {
    console.log(key, " :", obj[key]); 
  }

  //for loop

  console.log("for");
  
  let keys = Object.keys(obj);
  
  console.log("Using a for loop:");
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    console.log(key + ": " + value);
  }

  //-----------------------------------------------------

 //Create your own resume data in JSON format.
 let Resume = {
    "Name":"Vinith",
    "DoB" : "07-07-1998",
    "Role": "Developer",
    "Experience":"4 years",
    "Skills": ["HTML","CSS","JavaScript"],
    "Education":{
      "institute": "SDC",
      "Degree": "B.Sc(Physics)",
      "Passing Year": "2019",
      "percentage ": "65%",}
      "Language":["English","Tamil"],
    };