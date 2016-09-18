/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-09 23:05:35
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
   var oBtn=document.getElementsByTagName('button');
   var oUp=document.getElementById('up');
   var oDown=document.getElementById('down');
   var oUl=document.getElementsByTagName('ul')[0];
   var oLi=oUl.getElementsByTagName('li');
   oUl.innerHTML+=oUl.innerHTML;
   oUl.offsetHeight=oLi[0].offsetHeight*oLi.length+'px';
   var timer=null;
   var ispeed=0;

oUp.onmousedown=function(){
   timer=setInterval(doTop,10);
   ispeed=-5;
};
oUp.onmouseup=function(){
    clearInterval(timer);
};

oDown.onmousedown=function(){
    timer=setInterval(doTop,10);
    ispeed=5;
};

oDown.onmouseup=function(){
    clearInterval(timer);
};

function doTop(){
    oUl.style.top=oUl.offsetTop+ispeed+'px';
    if(oUl.offsetTop<-oUl.offsetHeight/2){
    oUl.style.top=0;
    }
    else if(oUl.offsetTop>0){
    oUl.style.top=-(oUl.offsetHeight/2)+'px';
    }
}


}
    
