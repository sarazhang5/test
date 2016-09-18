/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-17 13:41:36
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
   var oUl=document.getElementById('menu');
   var oLi=oUl.getElementsByTagName('li');
document.oncontextmenu=function(ev){
   var oEvent=ev||event;
   oUl.style.display="block";
   oUl.style.left=oEvent.clientX+'px';
   oUl.style.top=oEvent.clientY+'px';
   return false;
}
document.onclick=function(){
   oUl.style.display="none";
}

 }
    
