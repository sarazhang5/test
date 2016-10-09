/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-08 21:59:37
*/
window.onload=function(){
var arr="has123weare54theworld89";
function fnNum(arr){
  var str=[];
  var temp="";
for(var i=0;i<arr.length;i++){
  if(arr.charAt(i)<="9"&&arr.charAt(i)>="0"){
    temp+=arr.charAt(i);
  }else{
    if(temp){
      str.push(temp);
      temp="";
    }
  }
}
if(temp){
      str.push(temp);
      temp="";
    }
return str;
}
alert(fnNum(arr));

}
    
