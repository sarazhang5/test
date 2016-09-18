/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-08 19:18:24
*/
//留言
window.onload=function(){
 oText=document.getElementById('text1');
 oBtn=document.getElementById('button1');
 oDiv=document.getElementById('div1');

 oBtn.onclick=function(){
    oDiv.innerHTML=oText.value;
 }

}
    
