/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-28 10:10:09
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
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
    
