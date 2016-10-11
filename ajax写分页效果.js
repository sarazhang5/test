/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-11 22:25:00
*/
window.onload=function(){
  var oUl=document.getElementById('ul1');
  var aPage=document.getElementsByTagName('a');
  var i=0;
  for(i=0;i<aPage.length;i++){
    aPage[i].index=i;
    aPage[i].onclick=function(){
      ajax('get',(this.index+1)+'.txt','',function(data){
          var aDate=eval(data);
          oUl.innerHTML="";
          for(var i=0;i<aDate.length;i++){
            var oLi=document.createElement('li');
            oLi.innerHTML='<strong>'+aDate[i].user+'</strong>'+'<i>'+aDate[i].pass+'</i>';
            oUl.appendChild(oLi);
          }
      })
    }
  }
}
    
