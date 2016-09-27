/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-27 16:30:04
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
    oUl=document.getElementsByTagName('ul')[0];
    oLi=oUl.getElementsByTagName('li');
    var onOff="ture"
    for(i=0;i<oLi.length;i++){
        oLi[i].onclick=function(){
            if(onOff=="ture"){
                this.style.background="url(img/ye1.png) no-repeat"
                onOff="false"
            }else{
                this.style.background="url(img/ye2.png) no-repeat";
                onOff="ture"
            }
        }
    }

}
