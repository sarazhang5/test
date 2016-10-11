/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-10 16:05:54
*/
window.onload=function(){
  var oBtn=document.getElementsByTagName('input')[0];
  oBtn.onclick=function(){
  var xhr=null;
  //兼容IE6
  try{
    xhr=new XMLHttpRequest();
  }catch(e){
    xhr=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open('get','1.txt',true);
  xhr.send();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      alert(xhr.responseText);
    }
  }
}









}
    
