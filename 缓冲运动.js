/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-21 21:45:45
*/
window.onscroll=function(){
   var oDiv=document.getElementById('div1');
   var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
      t=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2;
      starMove(parseInt(t));
};
var timer=null;

function starMove(iTarget){
  var oDiv=document.getElementById('div1');
  var iSpeed=0;
   clearInterval(timer);
   timer=setInterval(function(){
    iSpeed=(iTarget-oDiv.offsetTop)/8;
    iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
    if(oDiv.offsetTop==iTarget){
      clearInterval(timer);
    }else{

        oDiv.style.top=oDiv.offsetTop+iSpeed+'px';
    }
   },20);
}
