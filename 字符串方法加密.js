/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-13 17:11:57
*/
window.onload=function(){
var aInput=document.getElementsByTagName('input');
var oPass=document.getElementById('pass');
aInput[1].onclick=function(){

   var str=aInput[0].value;

  oPass.innerHTML='';
  for(var i=0;i<str.length;i++){
    str1=String.fromCharCode(str.charCodeAt(i)-1000)+',';
    oPass.innerHTML+=str1;
  }
  aInput[0].value='';
}

}
    
