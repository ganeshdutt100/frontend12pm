// (pending, fulfilled, rejected);

// syntax
const myPromise = new Promise((resolve, reject) => {
  let isTaskSuccessful = false; // Change this to true to simulate a successful task
  setTimeout(() => {
    if (isTaskSuccessful) {
      resolve("Task is successful");
    } else {
      reject("Task is failed");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log("Success: " + result))
  .catch((error) => console.log("Error: " + error))
  .finally(() => console.log("Promise is settled"));
