/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-11 12:49:56
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
  xhr.open('post','2.post.php' ,true);
  /*post方式，数据放在send（）里面作为参数传递*/
  xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
  xhr.send('username=leo&age=20');
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
    
