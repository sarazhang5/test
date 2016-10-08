/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-08 16:40:15
*/
window.onload=function(){
  var oStar=document.getElementById('btn1');
  var oOver=document.getElementById('btn2');
  var oBody=document.body;
  var timer=null;
  var arrImg=['img/b1.jpg','img/b2.jpeg','img/b3.jpeg','img/b4.jpg',];
  var num=0;
  oStar.onclick=function(){
   clearInterval(timer);
   timer=setInterval(function(){
      oBody.style.backgroundImage='url('+arrImg[num]+')';
      num++;
      num%=arrImg.length;
   },2000);

  };
oOver.onclick=function(){
  clearInterval(timer);
};


}
    
