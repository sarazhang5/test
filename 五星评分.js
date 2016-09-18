/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-14 16:24:40
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
 oStar=document.getElementById('star');
 oLi=oStar.getElementsByTagName('li');
 oP=oStar.getElementsByTagName('P')[0];
 var i=0;
 var Pdatas=[
    '差',
    '较差',
    '一般',
    '好',
    '力荐'
 ]
 for(i=0;i<oLi.length;i++){
    oLi[i].index=i;
    oLi[i].onmouseover=function(){
         oP.style.display="block";
         for(i=0;i<=this.index;i++){
         oLi[i].className="active";
         }
         oP.innerHTML=Pdatas[this.index]
    }

    oLi[i].onmouseout=function(){
         oP.style.display="none";
         for(i=0;i<=this.index;i++){
         oLi[i].className="";
         }
    }
   oLi[i].onclick=function(){
    alert('您的评价已经成功, '+(this.index+1) +'分');
 }
}
}
