/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-08 18:41:12
*/
//选项卡
window.onload=function(){
    var i=0;
    var oInput=document.getElementsByTagName('input');
    var oDiv=document.getElementsByTagName('div');
    for(i=0;i<oInput.length;i++){
        oInput[i].index=i;
        oInput[i].onclick=function(){
            for(i=0;i<oInput.length;i++){
                oInput[i].className="";
                oDiv[i].style.display="none";
            }
            oDiv[this.index].style.display="block";
            this.className="col";
        }
    }

}
    
