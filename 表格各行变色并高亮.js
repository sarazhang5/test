/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-14 22:23:16
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
var oTab=document.getElementById('tab1');
var oldColor='';
var i=0;
for(i=0;i<oTab.tBodies[0].rows.length;i++){
    oTab.tBodies[0].rows[i].style.backgroundColor=i%2?'#ccc':'';

    oTab.tBodies[0].rows[i].onmouseover=function(){
        oldColor=this.style.backgroundColor;
        this.style.backgroundColor='yellow';
    }
    oTab.tBodies[0].rows[i].onmouseout=function(){
        this.style.backgroundColor=oldColor;
    }
}

}
