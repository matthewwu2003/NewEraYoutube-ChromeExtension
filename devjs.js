var pageurl = window.location.href;
var pageurla = pageurl.split("/");
var extension = pageurla[2];
var taburl;

chrome.tabs.onUpdated.addEventListener(function(tabId, changeInfo, tabInfo){

  chrome.tabs.get(tabid, function(tab){
    taburl = tab.url;
  });

  var taburlsplit = taburl.split("/");
  if(taburlsplit[2] == extension){
    
  }
});
