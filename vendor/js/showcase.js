var mainContentID = document.getElementById("mainContent");
var descriptionContentID = document.getElementById("descriptionContent");

var showcaseTitle = "Welcome!";
var showcaseContent = "Welcome to my website, have a look around! I suggest going into the guides page because there are some [somewhat] useful guides.";
var showcaseDescription = "Published on the 26th of March 2019";

console.log("Showcase Module Loaded");

function spawnContent(){
	mainContentID.innerHTML = `<div class="showcase title">` + showcaseTitle + `</div><br><br><div class="showcaseContent">` + showcaseContent + `</div>`;
	descriptionContentID.innerHTML = `<div class="description-line"></div>` + showcaseDescription;
	console.log("Content has been spawned");
}

spawnContent();