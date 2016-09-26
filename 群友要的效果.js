/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-26 16:27:01
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
  oDiv=document.getElementById('div1');
  oDiv.onclick=function(){
    if(oDiv.innerHTML=="我爱你哈"){
      oDiv.innerHTML="我要照顾你";
    }else if(oDiv.innerHTML=="我要照顾你"){
      oDiv.innerHTML="一辈子";
    }else if(oDiv.innerHTML=="一辈子"){
      oDiv.innerHTML="这是一次单程旅行";
    }else if(oDiv.innerHTML=="这是一次单程旅行"){
      oDiv.innerHTML="不可以回点和后悔";
    }else if(oDiv.innerHTML=="不可以回点和后悔"){
      oDiv.innerHTML="你只能同意";
      alert('嫁给我吧');
    }
  }

}
    
