/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-09 10:57:24
*/
window.onload=function(){
 var arr="aaa";
 //var re=/a/;//baa
 //var re=/a/g;//bbb
  var re=/a+/g;//b


 arr=arr.replace(re,"b");

alert(arr);
}
    
