/* 
* @Author: Marte
* @Date:   2016-10-17 14:33:31
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-17 16:16:39
*/
window.onload=function(){
      //普通写法
    /*var arr=[1,2,3,4,5];
    var arr2=[2,2,2,2,2];
    arr.sum=function(){
        var result=0;
        for(var i=0;i<this.length;i++){
            result+=this[i];
        }
        return result;
    };
    arr2.sum=function(){
        var result=0;
        for(var i=0;i<this.length;i++){
            result+=this[i];
        }
        return result;
    };

    alert(arr.sum());
    alert(arr2.sum());*/
       //原型写法
    /*var arr=[1,2,3,4,5];
    var arr2=[2,2,2,2,2];
    var arr3=[0,0,2,2,0];
    Array.prototype.sum=function(){
        var result=0;
        for(var i=0;i<this.length;i++){
            result+=this[i];
        }
        return result;
    }
    alert(arr.sum());//15
    alert(arr2.sum());//10
    alert(arr3.sum());//4*/


    
}