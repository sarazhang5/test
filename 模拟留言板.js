/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-14 16:55:26
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
 oBtn=document.getElementById('button');
 oTxt=document.getElementById('txt');
 oUl=document.getElementById('ul1');
 aLi=oUl.getElementsByTagName('li');
oBtn.onclick=function(){
  oLi=document.createElement('li');
  oLi.innerHTML=oTxt.value;
  if(aLi.length==0){
    oUl.appendChild(oLi)
  }else{
    oUl.insertBefore(oLi,aLi[0]);
  }
  
}



}
