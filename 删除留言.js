/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-14 17:52:20
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
aLa=document.getElementsByTagName('a');
oUl=document.getElementById('ul1');
var i=0;
for(i=0;i<aLa.length;i++){
    aLa[i].onclick=function(){
        oUl.removeChild(this.parentNode);
    }
}


}
