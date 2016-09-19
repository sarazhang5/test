/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-19 14:38:49
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
var oBtn=document.getElementById('button');
var oImg=document.getElementById('image');
var timer=null;
oBtn.onclick=function(){
    clearInterval(timer);
    timer=setInterval(function(){
        if(oImg.offsetLeft>=1000){
            alert('到达终点');
            clearInterval(timer);
        }else{
            oImg.style.left=oImg.offsetLeft+10+'px';
        }
    },100);

}


}
