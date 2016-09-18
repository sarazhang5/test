/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-15 22:37:32
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
    var oLi=document.getElementsByTagName('li');
    var i=0;
    document.onmousemove=function(ev){
      var oEvent= ev||event;
      for(i=oLi.length-1;i>0;i--){
        oLi[i].style.left=oLi[i-1].style.left;
        oLi[i].style.top=oLi[i-1].style.top;
      }
      oLi[0].style.left=oEvent.clientX+'px';
      oLi[0].style.top=oEvent.clientY+'px';
    }
}
