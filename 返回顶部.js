/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-15 16:22:41
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
oBtn=document.getElementById('btn');
var timer=null;
var sys=true;
//用户滚动滚动条清除计时器
window.onscroll=function(){
    if(!sys){
     clearInterval(timer);
    }
    sys=false;
}
//点击按钮返回到顶部
oBtn.onclick=function(){
    timer=setInterval(function(){
        var ascrollTop=document.documentElement.scrollTop|| document.body.scrollTop;
        var ispeed=Math.floor(-ascrollTop/8);
        if(ascrollTop==0){
            clearInterval(timer);
        }
        sys=true
document.documentElement.scrollTop=document.body.scrollTop=ascrollTop+ispeed;
    },30);
}

}
