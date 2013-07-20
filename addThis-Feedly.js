(function(){
  function main(){
    if(parent!==self){
      return;
    }
    if(document.location.href.indexOf('//cloud.feedly.com/') === -1){
      return;
    }
    var inlFrms=document.getElementsByClassName('u100Frame');
    if(inlFrms.length < 1){
      inlFrms=document.getElementsByClassName('inlineFrame');
    }
    for(var i=0;i<inlFrms.length;i++){
      var inlFrm=inlFrms[i];
      if( inlFrm.getElementsByClassName('atUnOfi').length > 0){
        continue;
      }
      var inlTtl=inlFrm.getElementsByClassName('entryTitle');
      console.log(inlTtl);
      if( inlTtl.length<1){
        continue;
      }
      var atPos=inlFrm.getElementsByClassName('abZone')[0];
      var atD=document.createElement('div');
      atD.id=inlFrm.id+'_atUnOfi';
      atD.className='addthis_toolbox addthis_default_style atUnOfi';
      atPos.parentNode.appendChild(atD);
      atD.innerHTML='<a class="addthis_button_compact"></a>';
      var atS=document.createElement('script');
      atS.type='text/javascript';
      atS.src='//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-51db39db77a83636&domready=1';
      atPos.parentNode.appendChild(atS);
      addthis.toolbox(document.getElementById(atD.id),{},{url:inlTtl[0].href,title:inlTtl[0].innerText});
    }
  }
  main();
})();
