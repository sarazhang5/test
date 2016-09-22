/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-22 17:03:18
*/
/*var oParent=null;
var oBtn=null;
var oDiv=null;
window.onload=function(){
  oParent=document.getElementById("div1");
  oBtn=oParent.getElementsByTagName('input');
  oDiv=oParent.getElementsByTagName('div'); 
  init();    
}

function init(){
  for(i=0;i<oBtn.length;i++){
     oBtn[i].index=i;
      oBtn[i].onclick=change;
   }
};

function change(){
        var i=0;
        for(i=0;i<oBtn.length;i++){
          oBtn[i].className="";
          oDiv[i].className="";
        }
        this.className="active";
        oDiv[this.index].className="show";
}*/
window.onload=function(){

 /*var a={
  name:'小明'
 };
 var b=a;//a把值和地址都赋值给了b。
 b.name='小青';
 alert(a.name);//a.name被改变。
var a={
  name:'小明'
 };
 var b={};
 for(var attr in a){
  b[attr]=a[attr];//普通类型字符串的赋值
 }
 b.name='小青';
 alert(a.name);//a.name没有被改变
*/
var a={
  name:'小明'
 };
 var b={};
 extend(b,a);
 b.name='小青';
 alert(a.name)

function extend(obj1,obj2){//封装函数
  for(var attr obj2){
    obj1[attr]=obj2[attr];
  }
}


}