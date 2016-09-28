/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-28 10:18:47
*/
window.onload=function(){
  oBtn=document.getElementsByTagName('input');
  var arr=['1','2','3','4','5'];
  var arrcolor=['red','orange','yellow','green','cyan'];
  for(var i=0;i<oBtn.length;i++){
    oBtn[i].num=0;
    oBtn[i].onclick=function(){
      this.value=arr[this.num];
      this.style.backgroundColor=arrcolor[this.num];
      this.num++;
      if(this.num===arr.length){
        this.num=0;
      }
    }
  }
}
    
