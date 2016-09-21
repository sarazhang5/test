/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-21 13:24:54
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
  var t1=new Tab('div1');
  t1.init();

  var t2=new Tab('div2');
  t2.init();
}
function Tab(id){
  this.oParent=document.getElementById(id);
  this.oBtn=this.oParent.getElementsByTagName('input');
  this.oDiv=this.oParent.getElementsByTagName('div');
}
Tab.prototype.init=function(){
  var This=this;
  for(i=0;i<this.oBtn.length;i++){
     this.oBtn[i].index=i;
      this.oBtn[i].onclick=function(){
        This.change(this);
   }
}
};
Tab.prototype.change=function(obj){
        var i=0;
        for(i=0;i<this.oBtn.length;i++){
          this.oBtn[i].className="";
          this.oDiv[i].className="";
        }
        obj.className="active";
        this.oDiv[obj.index].className="show";
 
}