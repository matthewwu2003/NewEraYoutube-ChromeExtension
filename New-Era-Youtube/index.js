var vurl;
var taburl;
window.onload = geturl();

document.addEventListener('DOMContentLoaded', function() {
  var buttona = document.getElementById("buttona");
  buttona.addEventListener('click', function(){
    StreamVideo();
  });
});

function geturl(){
  pageurl = window.location.href;
  if (pageurl.includes("?") == true) {
    urlsplit = pageurl.split("v=");
    urlstart = "https://stream.myedapp.com/?fwd=https://www.youtube.com/embed/";
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
  var urlstart = "https://stream.myedapp.com/?fwd=https://www.youtube.com/embed/";
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
