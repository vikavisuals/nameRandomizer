

// Button that creates a name for textbox
const generateNameBtn = document.querySelector("#generateNameBtn");
generateNameBtn.addEventListener("click", fetchNames);



function fetchNames() {

  const APIkey = "vi257045419";

  let url = `https://www.behindthename.com/api/random.json?usage=ita&gender=f&key=${APIkey}`

  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    // Transform the data into json
    .then(function (response) {
      return response.json();
    })
    // Your code for handling the data you get from the API
    .then(function (data) {
      console.log(data);
      console.log(data.names["0"]);
      let generatedName = document.querySelector("#generatedName");
      generatedName.value = data.names["0"];
    })

};