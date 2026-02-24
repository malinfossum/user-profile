const app = document.getElementById("app");

let userName = "";
let userAge = "";
let favoriteColor = "#000000";
let output = "";

updateView();
function updateView() {
	app.innerHTML = /*HTML*/ `
    <h1>User Profile</h1>

    <section>
      <label for="userName">Name:</label>
      <input onchange="showUserName(this.value)" id="userName" type="text" placeholder="Please enter a name" autocomplete="off" value="${userName}">

      <br><br>

      <label for="userAge">Age:</label>
      <input onchange="showUserAge(this.value)" id="userAge" type="number" min="0" placeholder="Please enter a valid age" value="${userAge}">

      <br><br>

      <label for="favoriteColor">Color:</label>
      <input onchange="showBackgroundColor(this.value)" id="favoriteColor" type="color" value="${favoriteColor}">

      <br><br>

      <button onclick="buttonUpdate()">Update profile</button>

      <br><br>

      <p>User Info: ${output}</p>
    </section>
  `;
}
