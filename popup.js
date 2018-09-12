var vurl;
var outputurl;
var currenttaburl;
var taburl;

window.onload = gettaburl();

function gettaburl() {

var a = {active: true, currentWindow: true};
function b(tabs){
  var currenttaburl = tabs[0].url;
  output(currenttaburl);
}
chrome.tabs.query(a, b);
}



function output(taburl) {

  var v1 = taburl.includes("youtube");
  var v2 = taburl.includes("youtu.be");

  if (v1 === true) {
    urlsplit = taburl.split("=");
    outputurl = "New-Era-Youtube/index.html?v=".concat(urlsplit[1]);
    chrome.tabs.create({url: outputurl});
  }
  else if (v2 === true) {
    urlsplit = taburl.split("/");
    voutputurl = "New-Era-Youtube/index.html?v=".concat(urlsplit[1]);
    chrome.tabs.create({url: outputurl});
  }
  else {
    chrome.tabs.create({url: "New-Era-Youtube/index.html"});
  }
}
