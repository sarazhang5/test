/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-25 15:22:37
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
  oBtn=document.getElementById('btn');
  oMask=document.getElementById('mask');
  oSet=document.getElementById('set');
  oDiv=document.getElementById('div1');
  oBlue=document.querySelector('.blue');
  oRed=document.querySelector('.cred');
  oOrange=document.querySelector('.corange');
  oWidth=document.querySelector('.divwidth');
  oliw=oWidth.getElementsByTagName('li');
  oHeight=document.querySelector('.divheight');
  olih=oHeight.getElementsByTagName('li');
  oBtn1=document.getElementById('btn1');
  oBtn2=document.getElementById('btn2');
 alert(document.body.scrollHeight);
  oBtn.onclick=function(){
    var sHeight=document.body.scrollHeight || document.documentElement.scrollHeight;
    var sWidth=document.body.scrollWidth || document.documentElement.scrollWidth;;
    oMask.style.height=sHeight+'px';
    oMask.style.width=sWidth+'px';
   oSet.style.display="block";

  oBlue.onclick=function(){
    oDiv.style.backgroundColor="blue";
  }
  oRed.onclick=function(){
    oDiv.style.backgroundColor="red";
  }
  oOrange.onclick=function(){
    oDiv.style.backgroundColor="orange";
  }
  oliw[0].onclick=function(){
    oDiv.style.width=50+'px';
  }
oliw[1].onclick=function(){
    oDiv.style.width=100+'px';
  }
  oliw[2].onclick=function(){
    oDiv.style.width=150+'px';
  }
olih[0].onclick=function(){
  oDiv.style.height=50+'px';
}
olih[1].onclick=function(){
  oDiv.style.height=100+'px';
}
olih[2].onclick=function(){
  oDiv.style.height=150+'px';
}

  }
oBtn1.onclick=function(){
  oMask.style.width=0;
  oSet.style.display="none";
}
oBtn2.onclick=function(){
  oDiv.style.backgroundColor="yellow";
  oDiv.style.width=100+"px";
  oDiv.style.height=100+"px";
}










}
    
