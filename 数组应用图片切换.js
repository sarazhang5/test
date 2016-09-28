/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-27 19:55:41
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
    btnLeft=document.getElementById('left');
    btnRight=document.getElementById('right');
    oDiv=document.getElementById('show');
    oImg=oDiv.getElementsByTagName('img')[0];
    oSpan=oDiv.getElementsByTagName('span')[0];
    oText=oDiv.getElementsByTagName('p')[0];
    var arrImg=['img/y1.jpg','img/y2.jpg','img/y3.jpg','img/y4.jpg'];
    var arrText=['青春烂漫','出尘脱俗','眉目如画','窈窕淑女'];
    var num=0;
    function fnTable(){
     oImg.src=arrImg[num];
     oText.innerHTML=arrText[num];
     oSpan.innerHTML=num+1+"/"+arrImg.length;
    }
    fnTable();
    btnLeft.onclick=function(){
      num++;
      if(num==arrText.length){
        num=0;
      }
        fnTable();
    }
    btnRight.onclick=function(){
        num--;
      if(num==-1){
        num=arrText.length-1;
      };
      alert(num);
        fnTable();
    }
}
