import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCQAgCFomKfdclN14OpAszv4c44ohEtKiE",
  authDomain: "personalexpensemanager-daa2c.firebaseapp.com",
  databaseURL: "https://personalexpensemanager-daa2c.firebaseio.com",
  projectId: "personalexpensemanager-daa2c",
  storageBucket: "personalexpensemanager-daa2c.appspot.com",
  messagingSenderId: "744160918087"
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
/*
database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});



database.ref("expenses").on("value", snapshot => {
  const expenses = [];
  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});


database
  .ref("expenses")
  .once("value")
  .then(snapshot => {
    const val = snapshot.val();
    console.log(val);
  });



database.ref("expenses").push({
  description: "Snacks",
  note: "aaa",
  amount: 12,
  createdAt: 305
});

database.ref("expenses").push({
  description: "Dinner",
  note: "bbb",
  amount: 100,
  createdAt: 805
});

database.ref("expenses").push({
  description: "Supper",
  note: "ccc",
  amount: 200,
  createdAt: 1105
});


database
  .ref()
  .set({
    name: "Ashfaque",
    age: 28,
    isSingle: false,
    stresslevel: 6,
    job: { title: "Fullstack Developer", company: "Google" },
    location: { city: "Bangalore", country: "India" }
  })
  .then(() => {
    console.log("Data is saved.");
  })
  .catch(e => {
    console.log("This failed.", e);
  });

database
  .ref("attributes")
  .set({
    height: 165,
    weight: 57
  })
  .then(() => {
    console.log("Data is saved again.");
  })
  .catch(e => {
    console.log("This failed too.", e);
  });
 

database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("Remove succeeded.");
  })
  .catch(e => {
    console.log("Remove failed.", e);
  });


database.ref("isSingle").set(null);
database.ref().update({
  stresslevel: 9,
  "job/company": "Amazon",
  "location/city": "Bangalore"
});

database
  .ref()
  .once("value")
  .then(snapshot => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch(e => {
    console.log("Error fetching data", e);
  });

database.ref().on(
  "value",
  snapshot => {
    const val = snapshot.val();
    console.log(val);
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  },
  e => {
    console.log("Error fetching data", e);
  }
);
*/
