var c = document.createElement('div');
c.id = "loadingdiv";
c.style = "position:fixed; width:100%; height:100%; display:none; top:0px; bottom:0px; left:0px; right:0px; background-color:rgb(255,255,255); z-index:10;";
document.body.appendChild(c);
var b = document.createElement('script');
b.src = chrome.runtime.getURL('/New-Era-Youtube/jquery-2.1.0.min.js');
document.body.appendChild(b);
var a = document.createElement('script');
a.src = chrome.runtime.getURL('/content.js');
document.body.appendChild(a);
var d = document.createElement('div');
d.id = "loadingtext";
d.style = "position:relative; top: 50%; left:50%; translate(-50%, -50%); -ms-translate(-50%, -50%); font-size:5em; color:rgb(0,0,0);"
d.appendChild(document.createTextNode("Loading..."));
document.getElementById("loadingdiv").appendChild(d);
var statusurl = "https://matthewwu2003.github.io/Services/chromeextensionmessages.html";
if (location.href === statusurl){
  var status = document.getElementById("status").innerHTML

  chrome.runtime.sendMessage({
    msg: "status",
    data: status
  });

}


//a.src = "chrome-extension://ffgaibhncmgbnlkpecinocpenlgeobgg/contentscript.js";


/*a.onload = function() {
  a.parentNode.removeChild(a);
};
*/
