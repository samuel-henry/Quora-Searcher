/*created by Samuel Henry (samueljameshenrythefirst.com)*/
function searchQuoraOnClick(info, tab) {
  window.open('https://www.quora.com/search?q=' + info.selectionText,'_'+Math.random());
}

var context = "selection";
var title = "Search selected text on Quora";
var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": searchQuoraOnClick});
