/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-09 11:49:08
*/
window.onload=function(){
 var aT=document.getElementsByTagName('textarea');
 var oInput=document.getElementsByTagName('input')[0];
 var re=/越干越|越来越响|企业/g;
 oInput.onclick=function(){
  aT[1].value=aT[0].value.replace(re,function(str){
    var resoult="";
    for(var i=0;i<str.length;i++){
     resoult+="*";
    }
    return resoult;
  });
 }
}
    
