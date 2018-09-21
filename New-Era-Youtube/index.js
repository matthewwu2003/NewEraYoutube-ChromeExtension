var vurl;
var taburl;
window.onload = geturl();

document.addEventListener('DOMContentLoaded', function() {
  var buttona = document.getElementById("buttona");
  buttona.addEventListener('click', function(){
    StreamVideo();
  });
});

document.addEventListener("keydown", function (keyevent){
  if (keyevent.ctrlKey && keyevent.shiftKey && keyevent.keyCode === 73){
    inspectdetected();
  }
  else if (keyevent.ctrlKey && keyevent.shiftKey && keyevent.keyCode === 74){
    inspectdetected();
  }
  else if (keyevent.ctrlKey && keyevent.shiftKey && keyevent.keyCode === 67){
    inspectdetected();
  }
  else if(keyevent.metaKey && keyevent.altKey && keyevent.keyCode === 73){
    inspectdetected();
  }
  else if (keyevent.metaKey && keyevent.shiftKey && keyevent.keyCode === 74){
    inspectdetected();
  }
  else if (keyevent.metaKey && keyevent.shiftKey && keyevent.keyCode === 67){
    inspectdetected();
  }
  else if (keyevent.keyCode === 123){
    inspectdetected();
  }
});

chrome.runtime.onMessage.addListener(
  function(request){
    if(request.msg === "devtooldetected"){
      inspectdetected();
    }
  }
);

function inspectdetected() {
  document.getElementById("bodya").innerHTML = "<h1>New Era Youtube have run into an unexpected error. Please refresh the page! Sorry for the inconvience.</h1>";
}

function geturl(){
  pageurl = window.location.href;
  if (pageurl.includes("?") == true) {
    urlsplit = pageurl.split("v=");
    var urlstarta = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f656d6265642f";
    var urlstart = "";
    for (var a = 0; a < urlstarta.length; a = a + 2) {
      urlstart += String.fromCharCode(parseInt(urlstarta.substr(a,2),16));
    };
    vurl = urlstart.concat(urlsplit[1]);
    addiframe();
  }
}

function addiframe() {
  parta = '<iframe src="'
  partb = '" frameborder="0" allow="autoplay" allowfullscreen style="position:absolute;width:100%;height:100%;left:0;top:0;border:0;" border="0"></iframe>'
  srcurl = parta.concat(vurl, partb);
  document.getElementById("divd").innerHTML = srcurl;
}


function StreamVideo(){
  var pageurl = window.location.href;
  var inputurl = document.getElementById("inputa").value;
  var urlsplit;
  var urlstarta = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f656d6265642f";
  var urlstart = "";
  for (var a = 0; a < urlstarta.length; a = a + 2) {
    urlstart += String.fromCharCode(parseInt(urlstarta.substr(a,2),16));
  };
  var v1 = inputurl.includes("youtube");
  var v2 = inputurl.includes("youtu.be");

  if (v1 === true) {
    urlsplit = inputurl.split("=");
    vurl = urlstart.concat(urlsplit[1]);
    addiframe();
  }
  else if (v2 === true) {
    urlsplit = inputurl.split("/");
    vurl = urlstart.concat(urlsplit[1]);
    addiframe();
  }
  else {
    var message = "Invalid URL! Please use www.youtube.com/watch?v=xxxxxxxxxxxxx or  http://youtu.be/xxxxxxxxxxxxx";
    document.getElementById("errormessage").innerHTML = message;
  }
}
