/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-11 10:55:06
*/
window.onload=function(){
  var oBtn=document.getElementsByTagName('input')[0];
  oBtn.onclick=function(){
   ajax('get','getlist.php','',function(data){
    var data=JSON.parse(data);
      var oUl=document.getElementById('ul1');
      var html='';
      for(var i=0;i<data.length;i++){
        html+='<li><a href="#">'+data[i].title+'</a>[<span>'+data[i].date+'</span>]</li>'
      }
      oUl.innerHTML=html;
  });
setInterval(function(){
  ajax('get','getlist.php','',function(data){
    var data=JSON.parse(data);
      var oUl=document.getElementById('ul1');
      var html='';
      for(var i=0;i<data.length;i++){
        html+='<li><a href="#">'+data[i].title+'</a>[<span>'+data[i].date+'</span>]</li>'
      }
      oUl.innerHTML=html;
  });
},2000);

}
}
    
