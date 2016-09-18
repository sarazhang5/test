/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-17 17:55:32
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
   var oDiv=document.getElementById('div1');
   var disX=0;
   var disY=0;
   oDiv.onmousedown=function(ev){
    var oEvent=ev||event;
     disX=oEvent.clientX-oDiv.offsetLeft;
     disY=oEvent.clientY-oDiv.offsetTop;
     document.onmousemove=function(ev){
         var oEvent=ev||event;
         var l=oEvent.clientX-disX;
         var t=oEvent.clientY-disY;
         if(l<0){
          l=0;
         }else if(l>document.documentElement.clientWidth-oDiv.offsetWidth){
          l=document.documentElement.clientWidth-oDiv.offsetWidth;
         }
         if(t<0){
          t=0;
         }else if(t>document.documentElement.clientHeight-oDiv.offsetHeight){
          t=document.documentElement.clientHeight-oDiv.offsetHeight;
         }
         oDiv.style.left=l+'px';
         oDiv.style.top=t+'px';
      document.onmouseup=function(){
        document.onmousemove=null;
        document.onmouseup=null;
      }
    }
   return false;
   }
   
 }
    
