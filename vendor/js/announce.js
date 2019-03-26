var announceJSON;
var announceJSONURL = "https://raw.githubusercontent.com/jylescoad-ward/jylesdotclub/master/vendor/js/announce.json";
var announceJSONRequest = new XMLHttpRequest();


var displayAnnouncement; var announcementContent; var currentAnnouncementDate;
var refreshButtonID = document.getElementsByClassName("refreshAnnounce");
var announceID = document.getElementById("announce");

function getAnnouncement() {
	announceJSONRequest.onload = function() {}
		announceJSONRequest.open('GET', announceJSONURL);
		announceJSONRequest.responseType = 'json';
		announceJSONRequest.send();
		announceJSONRequest.onload = function() {
		announceJSON = announceJSONRequest.response;
	};
	JSON.parse(announceJSON);
	displayAnnouncement = announceJSON.show;
	announcementContent = announceJSON.content;
	currentAnnouncementDate = announceJSON.date;
}
//getAnnouncement();


function pushAnnouncement() {
	var a = document.getElementById("announcementDate").value;
	var b = document.getElementById("announcementDetails").value;
	var c = document.getElementById("showDropdownBox").value;
	var announceJSONToPush = {
		"date": a,
		"content": b,
		"show": c
	};
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var fh = fso.CreateTextFile("/announce.json", true);
	fh.writeline(announceJSONToPush);
	fh.Close();
	
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

console.log("Loaded Announcement Module");
function checkAnnouncements() {
	wait(30);
	displayAnnouncement = "down"
	if (displayAnnouncement === "No"){
		announceID.innerHTML = `<strong>No Current Announcements</strong>`;
	}
	else{
		if (displayAnnouncement === "down"){
			refreshButtonID.disabled = true;
			announceID.innerHTML = ("Announcement System is temporarily down.");
		}
		else{
			announceID.innerHTML = `<strong style="font-size:14px;">New Announcement</strong><br>` + announcementContent + `<br><br>` + currentAnnouncementDate;
		}
	}
}


checkAnnouncements();

