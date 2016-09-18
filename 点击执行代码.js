/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-15 17:30:29
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
    var oBtn=document.getElementById('btn');
    var oTxt=document.getElementById('txt');
    oBtn.onclick=function(){
       var newWindow=window.open('about:blank');
       newWindow.document.write(oTxt.value);
    }
}
