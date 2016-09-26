/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-26 10:54:40
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
  oMessage=document.getElementById('message');
  oEnter=document.getElementById('enter');
  oBtn=document.getElementById('button');
  oSpan=document.getElementById('Mname');
  oBtn.onclick=function(){
    if(oEnter.value==""){
      alert('请输入内容')
    }else{
      oMessage.innerHTML+=oSpan.innerHTML+":"+oEnter.value+"</br>";
      oEnter.value="";
    }
  }

}
    
