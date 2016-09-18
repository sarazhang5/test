/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-18 11:44:42
*/
window.onload=function(){
  var oParent=document.getElementById('parent');
  var oDiv1=document.getElementById('div1');
  var oDiv2=document.getElementById('div2');
  var oDiv3=document.getElementById('div3');
  var disY=0;
  oDiv1.onmousedown=function(ev){
      var oEvent=ev||event;
      disY=oEvent.clientY-oDiv1.offsetTop;
  document.onmousemove=function(ev){
      var oEvent=ev||event;
      var t=oEvent.clientY-disY;
      if(t<0){
        t=0
      }else if(t>oParent.offsetHeight-oDiv1.offsetHeight){
        t=oParent.offsetHeight-oDiv1.offsetHeight;   
       }
      oDiv1.style.top=t+'px';
      var scale=t/(oParent.offsetHeight-oDiv1.offsetHeight);
      document.title=scale;
      oDiv3.style.top=-(oDiv3.offsetHeight-oDiv2.offsetHeight)*scale+'px';
  }
  document.onmouseup=function(){
    document.onmousemove=null;
    document.onmouseup=null;
  }
  return false;
  }
}
    
