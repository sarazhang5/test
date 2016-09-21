/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-21 23:30:21
*/
window.onload=function(){
  var oDiv=document.getElementsByTagName('div');
  for(i=0;i<oDiv.length;i++){
    oDiv[i].timer=null;
  oDiv[i].onmouseover=function(){
    changeMove(this,300);
  }
  oDiv[i].onmouseout=function(){
    changeMove(this,100);
  }
 }  
};
function changeMove(obj,iTarget){
  clearInterval(obj.timer);
  obj.timer=setInterval(function(){
   iSpeed=(iTarget-obj.offsetWidth)/8;
   iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
   if(obj.offsetWidth==iTarget){
    clearInterval(obj.timer);
   }else{
    obj.style.width=obj.offsetWidth+iSpeed+"px";
   }
  },30)
}
