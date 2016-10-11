/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-11 12:30:06
*/
window.onload=function(){
  var oBtn=document.getElementsByTagName('input')[0];
  oBtn.onclick=function(){
  var xhr=null;
  try{
    xhr=new XMLHttpRequest();
  }catch(e){
    xhr=new ActiveXObject("Microsoft.XMLHTTP");//兼容IE6
  }
  xhr.open('get','2.get.php?username='+encodeURI("刘伟")+'&age=30&'+ new Date().getTime() ,true);
  xhr.send();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      if(xhr.status==200){
        alert(xhr.responseText);
      }else{
        alert('出错了,Err:'+xhr.status);
      }
    }
  }
  }
}
    
