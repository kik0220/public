(function(){
  function main() {
    addThisButton();
    document.addEventListener("DOMSubtreeModified",function(event) {
      setTimeout(addThisButton(), 3000);
    });
  }
  function addThisButton() {
    var inlineFrames = document.getElementsByClassName('u100Frame');
    if( inlineFrames.length < 1){
      inlineFrames = document.getElementsByClassName('inlineFrame');
    }
    for(var i = 0; i < inlineFrames.length; i++){
      var inlineFrame=inlineFrames[i];
      if( inlineFrame.getElementsByClassName('addThisUnOfficial').length > 0){
        continue;
      }
      var inlineTitle = inlineFrame.getElementsByClassName('entryTitle');
      if( inlineTitle.length < 1) {
        continue;
      }
      var addThisPosition = inlineFrame.getElementsByClassName('abZone')[0].parentNode;
      var addThisDiv = document.createElement('div');
      addThisDiv.id = inlineFrame.id+'_addThisUnOfficial';
      addThisDiv.className = 'addthis_toolbox addthis_default_style addThisUnOfficial';
      addThisPosition.appendChild( addThisDiv);
      var addThisLink = document.createElement('a');
      addThisLink.className = 'addthis_button_compact';
      addThisDiv.appendChild( addThisLink);
      var addThisScript = document.createElement('script');
      addThisScript.type = 'text/javascript';
      addThisScript.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-51db39db77a83636&domready=1';
      addThisPosition.appendChild(addThisScript);
      try{
        addthis.toolbox(document.getElementById(addThisDiv.id), {},{ url : inlineTitle[0].href, title : inlineTitle[0].innerText});
      } catch(e) {}
    }
  }
  main();
})();