/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-18 15:56:20
*/
/*function myAddevent(object,sEvent,fn){
    if(object.attachEvent){
      object.attachEvent('on'+sEvent,fn)
    }else{
      object.addEventListener(sEvent,fn,false);
    }
}*/
function myAddEvent(obj,sEvent,fn){
   if(obj.attachEvent){
    obj.attachEvent('on'+sEvent,fn);
   }else{
    obj.addEventListener(sEvent,fn,false);
   }
}


window.onload=function(){
  var oImg=document.getElementById('ren');
  function a(ev){
  var oEvent=ev||event;
  //wheelDelta 上 正
  //           下 负
  //detail     上 负
  //           下 正
  var bDown=true;
  //判断滚轮向上滚(false)还是向下滚(true)
  //三目写法
  bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
  /*if(oEvent.wheelDelta){
    if(oEvent.wheelDelta<0){
        bDown=true;
    }
    else{
       bDown=false;
    }
   }else if(oEvent.detail){
    if(oEvent.detail>0){
        bDown=true;  
    }
    else{
       bDown=false;
    }
   }*/
  if(bDown){
    oImg.style.height=oImg.offsetHeight+10+'px';
  }else{
    oImg.style.height=oImg.offsetHeight-10+'px';
  }
}
  myAddEvent(oImg,'mousewheel',a);
  myAddEvent(oImg,'DOMMouseScroll',a);
}