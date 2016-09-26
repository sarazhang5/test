/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-26 15:24:29
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
  oText1=document.getElementById('text1');
  oText2=document.getElementById('text2');
  oBtn=document.getElementById('button');
  oDiv=document.getElementById('div1');
 oBtn.onclick=function(){
    oDiv.style[oText1.value]=oText2.value;
  }

}
    
