const promise = new Promise((resolve, reject) => {
  resolve({ name: "Ashfaque", age: 28 });

  reject("Something went wrong");
});

promise
  .then(data => {
    console.log("1", data);
  })
  .catch(error => {
    console.log("error: ", error);
  });
