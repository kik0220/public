// ==UserScript==
// @name            FeedlyTool mini Remove ADs
// @author          kik0220
// @description     This is the edition that was limited to ads remove feature Chrome extension of "FeedlyTool".
// @description:ja  Chrome拡張「FeedlyTool」の広告削除機能に限定したものです。
// @icon            http://feedlytool.kk22.jp/icon.png
// @include           http://feedly.com/*
// @include           https://feedly.com/*
// @exclude         http://feedly.com/#welcome
// @exclude         https://feedly.com/#welcome
// @version         0.0.1
// @history         0.0.1   Initial version.
// @history:ja      0.0.1   最初のバージョン。
// ==/UserScript==

var adsKeyword = new RegExp("^\\s*(PR\\s*[:：]|AD\\s*[:：]|[［\\[]\\s*PR\\s*[\\]］])", "i");

document.body.addEventListener("DOMNodeInserted", function (e) {
  var entry = e.target;
  try {
    if (entry.className.indexOf('u0Entry') > -1) {
      var title = entry.getElementsByClassName('title')[0];
      if(title) {
        adsRemove(entry);
      }
    }
  } catch (e2) {}
}, false);

function adsRemove(entry) {
  try {if (!entry.attributes.getNamedItem('data-title').value.toUpperCase().match(adsKeyword)) {return;}} catch(e) {return;}
  var tool = entry.getElementsByClassName('condensedTools')[0];
  var close;
  if (tool !== undefined) {
    close = tool.childNodes[tool.childNodes.length - 2];
  } else {
    close = entry.getElementsByClassName('viewerIcon highlightableIcon')[0];
  }
  try { close.click(); } catch(e) {}
}
