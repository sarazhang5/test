/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-28 17:34:38
*/
//此js可以封装为了以后参考暂时不封装
window.onload=function(){
  oDiv=document.getElementById('show');
  aLi=oDiv.getElementsByTagName('li');
  oImg=oDiv.getElementsByTagName('img')[0];
  oText=oDiv.getElementsByTagName('p')[0];
  oSpan=oDiv.getElementsByTagName('span')[0];
  var arrImg=['img/x1.jpg','img/x2.jpg','img/x3.jpg','img/x4.jpg'];
  var arrText=['秋叶之静美','秋天到了','美如秋叶','最美的季节'];
  var num=0;
  //初始化
  oText.innerHTML=arrText[num];
  oSpan.innerHTML=num+1+'/'+arrImg.length;
  oImg.src=arrImg[num];

  for(var i=0;i<aLi.length;i++){
    var oldActive=null;
    oldActive=aLi[num];
    aLi[i].index=i;
     aLi[i].onclick=function(){
        oImg.src=arrImg[this.index];
        oText.innerHTML=arrText[this.index];
        oSpan.innerHTML=this.index+1+'/'+arrImg.length;
        //第一种方法添加active
         /*for(i=0;i<aLi.length;i++){
         aLi[i].className="";
       }
         this.className="active";*/
         //第二种方法添加active
         oldActive.className="";
         oldActive=this;
         this.className="active";
     }
  }

}
    
