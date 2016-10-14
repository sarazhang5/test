/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-14 21:10:56
*/
window.onload=function(){
/*var oDate=new Date();
oDate.setDate(oDate.getDate()+30);
document.cookie="username=sara;expires="+oDate;
document.cookie="age=20";*/
function setCookie(key,value,iday){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie=key+'='+value+';expires='+oDate;
};
/*setCookie('length','20',20);
setCookie('age','10',20);
setCookie('name','sara',20);
setCookie('bbb','nnn',20);*/

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

alert(getCookie('age'));
removeCookie('age');
alert(getCookie('age'));

}
    
