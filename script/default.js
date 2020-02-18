/* Open when someone clicks on the span element */
function menu_open() {
    document.getElementById("menu").style.width = "250px";
    //document.getElementById("main_frame").style.marginLeft = "0";
    document.getElementById("main_frame").style.zIndex = "-1";
    document.getElementById("main_frame").style.opacity = "0.4";

}
 
function onDownloadClick(){
  document.getElementById("download").innerHTML = "Hold up...";
  document.getElementById("download").style.opacity = "0.5";
}


/* Close when someone clicks on the "x" symbol inside the overlay */
function menu_close() {
    document.getElementById("menu").style.width = "0";
    //document.getElementById("main_frame").style.marginLeft = "0";
    document.getElementById("main_frame").style.opacity = "1";
    document.getElementById("main_frame").style.zIndex = "1";
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
