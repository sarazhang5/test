/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-09 16:12:23
*/
//留言
window.onload=function(){
   var oUl=document.getElementsByTagName('ul')[0];
   var oLi=oUl.getElementsByTagName('li');
   var oScroll=document.getElementById('scroll');
   var oBtn=document.getElementsByTagName('input');
   oUl.innerHTML+=oUl.innerHTML;
   oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';
   var speed=-5;
   var timer=null;
   timer=setInterval(function(){
      oUl.style.left=oUl.offsetLeft+speed+'px';
      if(oUl.offsetLeft<-oUl.offsetWidth/2){
              oUl.style.left=0;
      }
      else if(oUl.offsetLeft>0){
             oUl.style.left=-(oUl.offsetWidth/2)+'px';
      }

   },10);

   oBtn[0].onclick=function(){
            speed=-5;
            
   }
   oBtn[1].onclick=function(){
            speed=5;
            
   }

oUl.onmouseover=function(){
       clearInterval(timer);
}

oUl.onmouseout=function(){
      timer=setInterval(function(){
      oUl.style.left=oUl.offsetLeft+speed+'px';
      if(oUl.offsetLeft<-oUl.offsetWidth/2){
              oUl.style.left=0;
      }
      else if(oUl.offsetLeft>0){
             oUl.style.left=-(oUl.offsetWidth/2)+'px';
      }

   },10);
}







}
    
