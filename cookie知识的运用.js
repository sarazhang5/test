/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-14 22:29:10
*/

function setCookie(key,value,iday){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie=key+'='+value+';expires='+oDate;
};
function getCookie(key){
  var arr1=document.cookie.split('; ');
  var i=0;
  for(i=0;i<arr1.length;i++){
    var arr2=arr1[i].split('=');
    if(arr2[0] == key){
      return decodeURI(arr2[1]);
    }
  }
  return"";
};
function removeCookie(key){
    setCookie(key,'1',-1);
}

window.onload=function(){
var oForm=document.getElementById('form1');
var oPass=document.getElementsByName('pass')[0];
var oUser=document.getElementsByName('user')[0];
var oBtn=document.getElementsByTagName('a')[0];
oForm.onsubmit=function(){
  setCookie('user',oUser.value,30);
  oPass.value="";
}
oUser.value=getCookie('user');

oBtn.onclick=function(){
  removeCookie('user');
  oUser.value="";
  oPass.value="";
}
}
    
