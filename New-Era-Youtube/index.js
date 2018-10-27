var vurl;
var taburl;
var videoid = "";
window.onload = geturl();

document.addEventListener('DOMContentLoaded', function() {
  var buttona = document.getElementById("buttona");
  var buttonb = document.getElementById("buttonb");
  buttona.addEventListener('click', function(){
    StreamVideo();
  });
  buttonb.addEventListener('click', function(){
    bypass1();
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

document.addEventListener("contextmenu", function(rtclick){
  rtclick.preventDefault();
}, false);

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
    videoid = urlsplit[1];
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
  parta = '<iframe id="iframea" src="';
  partb = '" frameborder="0" allow="autoplay" allowfullscreen style="position:absolute;width:100%;height:100%;left:0;top:0;border:0;" border="0"></iframe>';
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
    videoid = urlsplit[1];
    vurl = urlstart.concat(urlsplit[1]);
    addiframe();
  }
  else if (v2 === true) {
    urlsplit = inputurl.split("/");
    videoid = urlsplit[1];
    vurl = urlstart.concat(urlsplit[1]);
    addiframe();
  }
  else {
    var message = "Invalid URL! Please use www.youtube.com/watch?v=xxxxxxxxxxxxx or  http://youtu.be/xxxxxxxxxxxxx";
    document.getElementById("errormessage").innerHTML = message;
  }
}

function bypass1() {
  urlstarta = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d";
  var urlstart = "";
  for (var a = 0; a < urlstarta.length; a = a + 2) {
    urlstart += String.fromCharCode(parseInt(urlstarta.substr(a,2),16));
  };
  vurl = urlstart.concat(videoid);
  if(videoid == ""){
    alert("Oops. It look like you have pressed me too early. Only press me if it states: Video Unavailable");
  }
  else if(videoid != ""){
    parta = '<iframe id="iframeb" scroll="no" src="';
    partb = '&autoplay=0" frameborder="0" allow="autoplay" allowfullscreen style="position:absolute;width:100%;height:100%;left:0;top:0;border:0;" border="0"></iframe>';
    srcurl = parta.concat(vurl, partb);
    document.getElementById("divd").innerHTML = srcurl;
    chrome.runtime.sendMessage({
      msg: "checkagain",
      data: {info: "1"}
    });
  }




}
