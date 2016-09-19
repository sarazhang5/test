/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-19 15:35:05
*/
window.onload=function(){
var oBtn=document.getElementById('button');
var oImg=document.getElementById('image');
var timer=null;
var iSpeed=10;
oBtn.onclick=function(){
    clearInterval(timer);
    timer=setInterval(function(){
        if(oImg.offsetLeft>=1000){
            alert('到达终点');
            clearInterval(timer);
        }else{
            oImg.style.left=oImg.offsetLeft+iSpeed+'px';
        }
    },100);

}


}
