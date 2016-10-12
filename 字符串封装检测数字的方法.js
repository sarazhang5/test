/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-12 14:33:24
*/
window.onload=function(){
var aInput=document.getElementsByTagName('input');
aInput[1].onclick=function(){
  var val=aInput[0].value;
  if(testFn(val)){
    alert('都是数字'+val);
  }else{
    alert('不都是数字'+val);
  }
}
function testFn(str){
  var n=0;
  for(var i=0;i<str.length;i++){
    n=str.charCodeAt(i);
    if(n<48||n>96) return false;
  }
  return true;
}

}
    
