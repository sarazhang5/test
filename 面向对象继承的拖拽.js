/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-24 13:24:06
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
/*window.onload=function(){
  oDiv1=document.getElementById('div1');
  var disX=0;
  var disY=0;
   oDiv1.onmousedown=function(ev){
    var oEvent=ev||event;
    disX=oEvent.clientX-oDiv1.offsetLeft;
    disY=oEvent.clientY-oDiv1.offsetTop;

    document.onmousemove=function(ev){
    var oEvent=ev||event;
    oDiv1.style.left=oEvent.clientX-disX+'px';
    oDiv1.style.top=oEvent.clientY-disY+'px';

    }
   document.onmouseup=function(){
    document.onmousemove=null;
    document.onmouseup=null;
   }
   return false;
   }

}
var oDiv1=null;
var disX=0;
var disY=0;
window.onload=function(){
  oDiv1=document.getElementById('div1');
  inint();
}   
function inint(){
  oDiv1.onmousedown=fnDown;
}

function fnDown(ev){
    var oEvent=ev||event;
    disX=oEvent.clientX-oDiv1.offsetLeft;
    disY=oEvent.clientY-oDiv1.offsetTop;

   document.onmousemove=fnMove;
   document.onmouseup=fnUp;
   return false;
   }

function fnMove(ev){
    var oEvent=ev||event;
    oDiv1.style.left=oEvent.clientX-disX+'px';
    oDiv1.style.top=oEvent.clientY-disY+'px';

};
function fnUp(){
    document.onmousemove=null;
    document.onmouseup=null;
   }*/
window.onload=function(){
  var d1=new Drag('div1');
  d1.inint();
  var d2=new ChildDrag('div2');
  d2.inint();
}
function Drag(id){
  this.obj=document.getElementById(id);
  this.disX=0;
  this.disY=0;
}
Drag.prototype.inint=function(){
  var This=this;
  this.obj.onmousedown=function(ev){
    var ev=ev||window.event;
    This.fnDown(ev);
    return false;
  };
};
Drag.prototype.fnDown=function(ev){
    this.disX=ev.clientX-this.obj.offsetLeft;
    this.disY=ev.clientY-this.obj.offsetTop;
    var This=this;
   document.onmousemove=function(ev){
     var ev=ev||window.event;
     This.fnMove(ev);
   };
   document.onmouseup=this.fnUp; 
};
Drag.prototype.fnMove=function(ev){
    this.obj.style.left=ev.clientX-this.disX+'px';
    this.obj.style.top=ev.clientY-this.disY+'px';
};
Drag.prototype.fnUp=function(){
  document.onmousemove=null;
  document.onmouseup=null;
};

function ChildDrag(id){
  Drag.call(this,id);
}
extend(ChildDrag.prototype,Drag.prototype);
ChildDrag.prototype.fnMove=function(ev){
  var L=ev.clientX-this.disX;
  var T=ev.clientY-this.disY;
  if(L<0){
    L=0;
  }else if(L>document.documentElement.clientWidth-this.obj.offsetWidth){
    L=document.documentElement.clientWidth-this.obj.offsetWidth;
  };
  if(T<0){
    T=0;
  }
  else if(T>document.documentElement.clientHeight-this.obj.offsetHeight){
    T=document.documentElement.clientHeight-this.obj.offsetHeight;
  }
    this.obj.style.left=L+'px';
    this.obj.style.top=T+'px';
};
function extend(obj1,obj2){
  for(var attr in obj2){
    obj1[attr]=obj2[attr];
  }
}
