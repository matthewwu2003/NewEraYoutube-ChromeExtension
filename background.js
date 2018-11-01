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

chrome.tabs.query({
  active:true,
  currentWindow:true
}, function (tabs){
  var currenttab = tabs[0];

});

chrome.tabs.onActivated.addListener(function(a){
  var tab = chrome.tabs.get(a.tabId, function(tab){
      taburl = tab.url;
      urlcheck();
});
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    var sendera = sender;
    if(request.msg === "devtooldetected"){
      setTimeout(function(){alert("New Era Youtube may have just crashed. Ensure that you only have trusted extensions installed. Modifications to the extension may also cause these issues. If you have have any issues, please contact the developer by email, which can be found on the chrome webstore page. Sorry for the inconvience.");}, 1000);

    }
    else if(request.msg === "onyoutube"){
      //sendResponse(sendera.tab.id);
      chrome.tabs.get(sendera.tab.id, function(tab){
        var sendertaburl = tab.url;

      });
      if(sendertaburl.includes(extension) == true){

        sendResponse("clean");
      }
      //alert("a" + sendera.tab.id);
    }
  }
);

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
