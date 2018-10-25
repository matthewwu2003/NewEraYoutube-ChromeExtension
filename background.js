var pageurl = window.location.href;
var pageurla = pageurl.split("/");
var extension = pageurla[2];
var taburl;

var blocked = [];
blocked[0] = "chrome-extension://" + extension + "/New-Era-Youtube/index.js";
blocked[1] = "chrome-extension://" + extension + "/New-Era-Youtube/index.css";
blocked[2] = "chrome-extension://" + extension + "/background.js";
blocked[3] = "chrome-extension://" + extension + "/devjs.js";
blocked[4] = "chrome-extension://" + extension + "/devpage.html";
blocked[5] = "chrome-extension://" + extension + "/manifest.json";
blocked[6] = "chrome-extension://" + extension + "/popup.html";
blocked[7] = "chrome-extension://" + extension + "/popup.js";

chrome.tabs.onActivated.addListener(function(a){
  var tab = chrome.tabs.get(a.tabId, function(tab){
      taburl = tab.url;
      urlcheck();
});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tabInfo){
  var tabid = tabId;
    chrome.tabs.get(tabId, function(tab){
      taburl = tab.url;
      urlcheck();
  });
});



function urlcheck() {

      if(taburl.length > 16){
        f16chars = taburl.slice(0,16);
        if(f16chars == "chrome-extension"){
          for (var i = 0; i<8; i++){
            if (taburl == blocked[i]){
              var redirecttourl = "chrome-extension://" + extension + "/New-Era-Youtube/index.html";
              chrome.tabs.update({url: redirecttourl});
            }
          }
        }
      }
}
