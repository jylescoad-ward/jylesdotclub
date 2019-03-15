var displayAnnouncement = "No";
var announcementContent = `This is a test announcement. Please do not worry.`;
var currentAnnouncementDate = `7th March 2019`;
var announceID = document.getElementById("announce");

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

console.log("Loaded Announcement Module");

function checkAnnouncements() {
	wait(300);
	if (displayAnnouncement === "No"){
		announceID.innerHTML = `<strong>No Current Announcements</strong>`;
	}
	else{
		announceID.innerHTML = `<strong style="font-size:14px;">New Announcement</strong><br>` + announcementContent + "<br><br>" + currentAnnouncementDate;
	}
}

checkAnnouncements()
