/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-28 11:04:56
*/
window.onload=function(){
  aBtn=document.getElementsByTagName('input');
  oText=document.getElementsByTagName('p');
  var arr=['小花','小草','春天'];
  for(var i=0;i<aBtn.length;i++){
    aBtn[i].index=i;
    aBtn[i].onclick=function(){
        this.value=arr[this.index];
        oText[this.index].innerHTML=arr[this.index];
        }
    }
}
    
