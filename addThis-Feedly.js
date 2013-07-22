javascript:(function(){
  if(document.location.href.indexOf('//cloud.feedly.com/')<0)return;
  var head_script=document.createElement('script');
  head_script.type='text/javascript';
  head_script.src='//s7.addthis.com/js/300/addthis_widget.js#domready=1&async=1';
  document.head.appendChild(head_script);
  add_addthis();
  document.addEventListener("DOMSubtreeModified",function(e){
    setTimeout(add_addthis(),3000);
  });
  function add_addthis(){
    var entries=document.getElementsByClassName('u100Frame');
    if( entries.length<1){
      entries=document.getElementsByClassName('inlineFrame');
    }
    for(var i=0;i<entries.length;i++){
      var entry=entries[i];
      var entry_title=entry.getElementsByClassName('entryTitle');
      if(entry_title.length<1){
        continue;
      }
      if(entry.getElementsByClassName('addThisUnOfficial').length>0){
        continue;
      }
      var add_div_position=entry.getElementsByClassName('abZone')[0].parentNode;
      var add_div=document.createElement('div');
      add_div.className='addthis_toolbox addthis_default_style addThisUnOfficial';
      add_div.style.padding.top='2px';
      add_div_position.appendChild(add_div);
      add_div.innerHTML='<a class="addthis_button_compact" addthis:url='+entry_title[0].href+' addthis:title='+entry_title[0].innerText+' />';
      var add_div_script=document.createElement('script');
      add_div_position.appendChild(add_div_script);
      add_div_script.innerText='addthis.toolbox(".addThisUnOfficial");';
    }
  }
})();