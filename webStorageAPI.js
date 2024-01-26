// refers to Windows API not a part of DOM
//avl to JS by global variable windows

// window.alert("ok");
//alert("ok");

const myObj = {
  name : "Max",
  hobbies : ["eat" , "sleep", "code"],
  logname: function () {
    console.log(this.name);
  }
};

const myArr= ["eat" , "sleep", "code"] ;

sessionStorage.setItem("mySessionStore", JSON.stringify(myArr));

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);


