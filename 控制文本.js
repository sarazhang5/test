/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-26 12:51:48
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
  oBig=document.getElementById('big');
  oSmall=document.getElementById('small');
  oP=document.getElementsByTagName('p')[0];
  oRed=document.getElementById('red');
  oYellow=document.getElementById('yellow');
   num=14;
  oBig.onclick=function(){
    if(num>=26){
      alert('不能在变大了')
    }else{
      num+=2;
      oP.style.fontSize=num+'px';
    }
  }
 oSmall.onclick=function(){
    if(num<=8){
      alert('不能在变小了')
    }else{
      num-=2
      oP.style.fontSize=num+'px';
    }
 }
oRed.onclick=function(){
  oP.className="red";
}
oYellow.onclick=function(){
  oP.className="yellow";
}

}
    
