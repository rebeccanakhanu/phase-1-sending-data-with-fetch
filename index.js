// Add your code here
const submitData = {
    userName: "Becky",
    userEmail:"rebeccanakhanu@gmail.com"
  };
  
  // method: "POST" is missing from the object below
  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(submitData),
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("hello, something went wrong");
      console.log(error.message);
    });