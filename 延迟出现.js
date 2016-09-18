/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-09 10:51:31
*/
//留言
window.onload=function(){
    var oDiv1=document.getElementById('div1');
    var oDiv2=document.getElementById('div2');
    var timer=null;
    oDiv1.onmouseover=oDiv2.onmouseover=function(){
        oDiv2.style.display="block";
        clearTimeout(timer);
    }
    oDiv1.onmouseout=oDiv2.onmouseout=function(){
        timer=setTimeout(function(){
           oDiv2.style.display="none"; 
        },1000)

    }

    //oDiv1.onmouseover=show;
   // oDiv2.onmouseover=show;

    //oDiv1.onmouseout=hide;
    //oDiv2.onmouseout=hide;

}
    
