/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-17 20:24:42
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
function myAddEvent(Object,sEvent,fn){
  if(Object.attachEvent){
    Object.attachEvent('on'+sEvent,fn)
  }else{
    Object.addEventListener(sEvent,fn,false);
  }
 } 

 function a(){
  alert('a');
 };
 function b(){
  alert('b');
 }
window.onload=function(){
 var oBtn=document.getElementById('input1');
 myAddEvent(oBtn,'click',a);
 myAddEvent(oBtn,'click',b);
 }
    
