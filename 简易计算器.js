/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-14 11:55:35
*/
//留言
//ie8不能运行，火狐浏览器向下有问题，谷歌浏览器正常
window.onload=function(){
 oInput1=document.getElementById('input1');
 oInput2=document.getElementById('input2');
 oInput3=document.getElementById('input3');
 oBtn=document.getElementById('button');
oBtn.onclick=function(){
if(oInput1.value=="" || oInput2.value==""){
    alert('请输入数字');
    return false;
}else if(isNaN(parseInt(oInput1.value)+parseInt(oInput2.value))){
    alert('请输入正确的数字格式');
    return false;
}
oInput3.value=parseInt(oInput1.value)+parseInt(oInput2.value);

}

}
