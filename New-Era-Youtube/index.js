var vurl;
var taburl;
var videoid = "";


var tabid = "";
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
  function(request, sender, sendResponse){
    var sendera = sender;
    if(request.msg === "devtooldetected"){
      inspectdetected();
    }
    else if(request.msg === "status"){
      document.getElementById("statustext").innerHTML = request.data;
    }
    /*if(request.msg === "contentjsload"){
      checkiframe();
    }
    */
    //else if(request.msg === "onsaveurl"){
    //  chrome.tabs.get(sendera.tab.id, function(tab){
    //    tabid = tab.id;
    //    alert(tabid);
    //  });
  //    getcurrentid();

    //  chrome.tabs.getCurrent(tab){
    //    var id = tab.id;
    //    alert("id"+id);
  //    });

      //chrome.tabs.query({
      //  active:true,
    //    currentWindow:true
      //}, function (tabs){
        //var currenttab = tabs[0];
      //  if(currenttab){
      //    alert(currenttab);
    //    }

  //    });



//      if(tabid === currenttab){
//        document.getElementById("loadingdiv").style.display = "block";
//        alert("block");
//      }
//  }
//    else if(request.msg === "onarchiveurl"){
//      chrome.tabs.get(sendera.tab.id, function(tab){
//        var tabid = tab.id;
//        chrome.tabs.query({
//          active:true,
//        }, function (tabs){
//          var currenttab = tabs[0];

//        if(tabid === currenttab){
//          document.getElementById("loadingdiv").style.display = "none";
//        }
//      });
});


      //alert("a" + sendera.tab.id);



function inspectdetected() {
  document.getElementById("bodya").innerHTML = "<h1>New Era Youtube have run into an unexpected error. Please refresh the page! Sorry for the inconvience.</h1>";
}
/*function checkiframe(){
  var iframeurl = document.getElementById("iframea").src;
  var linkb = "68747470733a2f2f7765622e617263686976652e6f72672f736176652f68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d";
  var linkc = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f7761746368";
  var linkd = "7765622e617263686976652e6f7267";
  var linkb2 = "";
  var linkc2 = "";
  var linkd2 = "";
  for (var b = 0; b < linkb.length; b = b + 2) {
    linkb2 += String.fromCharCode(parseInt(linkb.substr(b,2),16));
  }
  for (var c = 0; c < linkc.length; c = c + 2) {
    linkc2 += String.fromCharCode(parseInt(linkc.substr(c,2), 16));
  }
  for (var d = 0; d < linkd.length; d = d + 2) {
    linkd2 += String.fromCharCode(parseInt(linkd.substr(d,2), 16));
  }
  var q = iframeurl.includes(linkb2);
  var r = iframeurl.includes(linkc2);
  var s = iframeurl.includes(linkd2);
  alert(iframeurl);
  if (q === true){
    alert("block");
    //document.getElementById("loadingdiv").style.display = "block";
  }
  else if (r === true & s === true){
    alert("none");
    //document.getElementById("loadingdiv").style.display = "none";
  }
}*/
function geturl(){
  pageurl = window.location.href;
  if (pageurl.includes("?") == true) {
    urlsplit = pageurl.split("v=");
    videoid = urlsplit[1];
    var urlstarta = "68747470733a2f2f7765622e617263686976652e6f72672f736176652f68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f656d6265642f";
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
  partb = '" frameborder="0" allow="autoplay" allowfullscreen style="position:absolute;width:100%;height:100%;left:0;top:0;border:0;" border="0"></iframe><div id="loadingdiv"><div id="divf"><h1 style="vertical-align:middle;color:white;">Unblocking...</h1></div></div';
  srcurl = parta.concat(vurl, partb);
  document.getElementById("divd").innerHTML = srcurl;
  document.getElementById("loadingdiv").style.display = "block";
  setTimeout(unblock, 8000);
}
function unblock(){
  document.getElementById("loadingdiv").style.display = "none";
}


function StreamVideo(){
  var pageurl = window.location.href;
  var inputurl = document.getElementById("inputa").value;
  var urlsplit;
  var urlstarta = "68747470733a2f2f7765622e617263686976652e6f72672f736176652f68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f656d6265642f";
  var urlstart = "";
  for (var a = 0; a < urlstarta.length; a = a + 2) {
    urlstart += String.fromCharCode(parseInt(urlstarta.substr(a,2),16));
  };
  var v1 = inputurl.includes("youtube");
  var v2 = inputurl.includes("youtu.be");
  var v3 = inputurl.includes("youtube.com/embed");

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
  else if (v3 === true) {
    urlsplit = inputurl.split("/embed/");
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
  //urlstarta = "68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d";
  urlstarta = "68747470733a2f2f7765622e617263686976652e6f72672f736176652f68747470733a2f2f73747265616d2e6d7965646170702e636f6d2f3f6677643d68747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d";
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
    partb = '&autoplay=0" frameborder="0" allow="autoplay" allowfullscreen style="position:absolute;width:100%;height:100%;left:0;top:0;border:0;" border="0"></iframe><div id="loadingdiv"><h1 style="vertical-align:middle;color:white;">Unblocking...</h1></div';
    srcurl = parta.concat(vurl, partb);
    document.getElementById("divd").innerHTML = srcurl;
    document.getElementById("loadingdiv").style.display = "block";
    setTimeout(unblock, 8000);
    chrome.runtime.sendMessage({
      msg: "checkagain",
      data: {info: "1"}
    });
  }




}
