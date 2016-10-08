/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-08 17:49:38
*/
window.onload=function(){
 var oBody=document.body;
 var oImg=document.getElementsByTagName('img')[0];
 var timer=null;
 oBody.style.backgroundImage="url(img/给网易音乐加广告.png)";

setTimeout(function(){
 oImg.style.display="inline-block";

 setTimeout(function(){
  oImg.style.display="none";
 },3000)
},2000)








}
    
