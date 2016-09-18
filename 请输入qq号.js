/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-17 15:42:00
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
   var oTxt=document.getElementById('input1');
   oTxt.onkeydown=function(ev){
      var oEvent=ev||event;
      if(oEvent.keyCode!=8 &&(oEvent.keyCode<96||oEvent.keyCode>105)&&(oEvent.keyCode<48||oEvent.keyCode>57)){
        return false;
      }
     
   }
 }
    
