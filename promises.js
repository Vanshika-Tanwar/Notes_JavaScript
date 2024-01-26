// Search Api requires a discussion of callbacks promises 
//thenable, async/await

// Promise
  // Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve,reject) => {
  const error = false;
  if (!error) {
    resolve("Yes!");
  }
  else{
    reject("No!");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("myNextPromise!");
  }, 3000);
});

myNextPromise.then(value => {
  console.log(value);
});

myPromise.then(value => {
  console.log(value);
}); */
/* 
const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
  //console.log(response);
  return response.json();
})
.then(data => {
  //console.log(data);
  data.forEach(user =>{
    console.log(user);
  })
});

console.log(users);

//Async/Await
 
const myUsers ={
  userList: []
}

const myCoolFunction = async() => {
  const respnse = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
} 

//myCoolFunction();

const anotherFunc = async() =>{
  const data = await myCoolFunction();
  console.log(data)
  myUsers.userList=data;
  console.log(myUsers.userList);
}

anotherFunc(); //same result
console.log(myUsers.userList); */

//workflow function

/* const getAllUserEmails = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray=jsonUserData.map(user => {
    return user.email;
  });
  console.log(userEmailArray);
  postToWebPage(userEmailArray);
} 

const postToWebPage = (data) => {
  console.log(data);
}

getAllUserEmails(); */

// 2nd parameter of fetch is a object

/*   const getDadJoke = async() => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept : "application/json"
    }
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData.joke); 
  }

getDadJoke();
 */

// not json data

/*   const getDadJoke = async() => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept : "application/json"
    }
  });
  const jsonJokeData = await response.text();
  console.log(jsonJokeData); 
  }

getDadJoke(); */

//post

/* const jokeObj ={
  id : "MeaFYLBAQuc",
  joke: "Have you heard the rumor going around about butter? Never mind, I shouldn't spread it." 
}

const postData = async(jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(jokeObj)
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse.headers); 
  }

postData(jokeObj); */


const requestJoke = async(firstName, lastName) => {
  const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}& lastName=${lastName}`);
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke); 
  }

requestJoke("Bruce","Lee");



