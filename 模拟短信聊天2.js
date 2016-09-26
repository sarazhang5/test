/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-26 21:09:52
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
  var oTou=document.getElementById('tou');
  var oTouImg=document.getElementById('touimg');
  oDiv=document.getElementById('text1');
  oText=document.getElementById('text2');
  oBtn=document.getElementById('button');
  var arr=["img/tou0.png","img/tou1.png","img/tou2.png","img/tou3.png","img/tou4.png"]
  var num=0;
  oTou.onclick=function(){
    num++;
      if(num>=arr.length){
        num=0;
      }else{
        oTouImg.src=arr[num];
        oTou.style.left="15"+'px';
      }
  }
oBtn.onclick=function(){
  oDiv.innerHTML+=oTou.innerHTML+oText.value+"</br>";
}

}
    
