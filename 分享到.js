/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-19 18:25:48
*/
window.onload=function(){
   var oDiv=document.getElementById('div1');
   oDiv.onmouseover=function(){
    startMove(0);
   }
   oDiv.onmouseout=function(){
    startMove(-100);
   }
     
}
var timer=null;
function startMove(iTarget){
    var oDiv=document.getElementById('div1');
      clearInterval(timer);
    timer=setInterval(function(){
        var iSpeed=0;
        if(oDiv.offsetLeft<iTarget){
            iSpeed=10;
        }else{
            iSpeed=-10;
        }
        if(oDiv.offsetLeft==iTarget){
            clearInterval(timer);
        }else{
            oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
        }

    },10)
};
//因为把var timer=null放在startMove里面导致div抖动，放在外面就好了。