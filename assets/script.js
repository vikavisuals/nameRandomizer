


// Button that creates a name for textbox
const generateNameBtn = document.querySelector("#generateNameBtn");
generateNameBtn.addEventListener("click", createName);

// Textbox that will show a name
function createName() {
  let generatedName = document.querySelector("#generatedName");
  generatedName.value = url;

}



let url = "https://www.behindthename.com/api/random.json?usage=ita&gender=f&key=vi257045419"

fetch(url) // Call the fetch function passing the url of the API as a parameter

  .then((resp) => resp.json()) // Transform the data into json

  .then(function (data) {
    // Your code for handling the data you get from the API
    console.log(data)
    console.log(data.names)

  })
  .catch(function (error) {
    // This is where you run code if the server returns any errors
    console.log(error);
  });