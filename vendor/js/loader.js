console.log("Loaded Loader Module");
function loadPageWait() {
	myVar = setTimeout(showPage, 3000);
	console.log("Timeout Started");
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
  console.log("Page Loaded");
}