// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
function add(a) {
    console.log("1");
    a();
}


function subtract() {
    setTimeout(() => {
        console.log("2"); // Macrotask
    }, 0);
}

function multiply() {
    Promise.resolve().then(() => {
        console.log("3"); // Microtask
    });
}

function divide() {

    console.log("4");
}

add(3);
subtract();
multiply();
divide();



add(()=>{
    subtract(()=>{
        multiply(()=>{
            divide(()=>{
                console.log("done");
            })
        })
    })
})




add(userId)
  .then(function(user) {
    return subtract(user.id);
  })
  .then(function(orders) {
    return multiply(orders[0].id);
  })
  .then(function(details) {
    return divide(user.email, details); // ⚠️ problem! see below
  })
  .then(function(response) {
    console.log("All done!", response);
  })
  .catch(function(err) {
    console.error("Something failed:", err);
  })
   .then(function(response) {
    console.log("All done!", response);
  })
  .catch(function(err) {
    console.error("Something failed:", err);
  });
