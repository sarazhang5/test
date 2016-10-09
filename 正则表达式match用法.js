/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-09 10:25:21
*/
window.onload=function(){
 var arr="has123weare54theworld89";
 var re=/\d+/g
 alert(arr.match(re));//FF获取到123,54,89
                      //IE,chrome获取到1.
}
    
