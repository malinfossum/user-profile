function showUserName(value) {
	userName = value;
	updateView();
}

function showUserAge(value) {
	userAge = value;
	updateView();
}

function showBackgroundColor(value) {
	favoriteColor = value;
	updateView();
}

function buttonUpdate() {
	if (userName === "") {
		output = "Please enter a name.";
		updateView();
		return;
	}

	if (userAge === "") {
		output = "Please enter a valid age.";
		updateView();
		return;
	}

	output = `
	<br>
	Name: ${userName}<br>
	Age: ${userAge}<br>
	Favorite color: ${favoriteColor}`;
	document.body.style.backgroundColor = favoriteColor;
	updateView();
}
