/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-13 19:07:26
*/
window.onload=function(){
var oDiv=document.getElementsByTagName('div')[0];
var oSpan=oDiv.getElementsByTagName('span')[0];
var oBtn=oDiv.getElementsByTagName('a')[0];
var str=oSpan.innerHTML;
var onOff=true;
oBtn.onclick=function(){
  if(onOff){
  oSpan.innerHTML=str.substring(0,7);
  oBtn.innerHTML='展开';
  onOff=false;
}else{
  oSpan.innerHTML=str;
  oBtn.innerHTML='收缩';
  onOff=true;
}
}

}
    
