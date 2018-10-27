var pageurl = window.location.href;
var pageurla = pageurl.split("/");
var extension = pageurla[2];
var taburl;
var inspectedtabId = chrome.devtools.inspectedWindow.tabId;


chrome.tabs.get(inspectedtabId, function(tab){
  taburl = tab.url;
  var taburlsplit = taburl.split("/");
  if(taburlsplit[2] == extension){
    sendmessage();
  }
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tabInfo){
  if (tabId == inspectedtabId){
    chrome.tabs.get(inspectedtabId, function(tab){
      taburl = tab.url;
      var taburlsplit = taburl.split("/");
      if(taburlsplit[2] == extension){
        sendmessage();
      }
    });
  }
});

function sendmessage() {
  chrome.runtime.sendMessage({
    msg: "devtooldetected.",
    data: {info: "1"}
  });
}
