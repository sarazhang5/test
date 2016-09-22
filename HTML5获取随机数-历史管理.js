/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-22 10:33:40
*/
window.onload=function(){
  oBtn=document.getElementById('button');
  oDiv=document.getElementById('div1');
  oBtn.onclick=function(){
  oDiv.innerHTML=randomNum(35,7);
  }
}
function randomNum(iAll,iNow){
  oBtn=document.getElementById('button');
  oDiv=document.getElementById('div1');
  var arr=[];
  var newArr=[];
  for(var i=1;i<=iAll;i++){
    arr.push(i);
  }
  for(var i=0;i<iNow;i++){
    newArr.push(arr.splice(Math.floor(Math.random()*arr.length),1));
  }
  return newArr;
}