/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-30 21:13:59
*/
//此js可以封装为了以后参考暂时不封装
window.onload=function(){
  oUl=document.getElementById('QQ');
  aUl=oUl.getElementsByTagName('ul');
  oH2=oUl.getElementsByTagName('h2');
  var aLi=null;
  var arrLi=[];
  var oldActiv=null;
  //获取三个ul中的li并存在数组中
  for(var i=0;i<aUl.length;i++){
      aLi=aUl[i].getElementsByTagName('li');
      for(var j=0;j<aLi.length;j++){
        arrLi.push(aLi[j]);
      }
  }
  //操作数组中的li，点击添加背景
  for(var i=0;i<arrLi.length;i++){
    oldActiv=arrLi[i];
    arrLi[i].onclick=function(){
        oldActiv.className="";
        oldActiv=this;
        this.className="activ";
    }
  }
  //点击h2展开，再点击收起。
  for(var i=0;i<oH2.length;i++){
    oH2[i].index=i;
    oH2[i].onclick=function(){
        if(this.className==""){
      aUl[this.index].style.display="block";
      this.className="active";
       }else{
      aUl[this.index].style.display="none";
      this.className="";
      };
    } 
  }

}
    
