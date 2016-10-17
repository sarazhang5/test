/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-17 10:37:23
*/

window.onload=function(){
    //1
  /*.alert(a);//undefined
  var a=1;*/
    //2
  /*alert(a);// a is not defined
  a=1;*/
    //3
  /*alert(a);//undefined
  var a=1;
  alert(a)//1
  function fn1(){alert(2);}//没有弹出*/
     //4
 /*alert(a); //function a(){alert(4);}
  var a=1;
  alert(a);//1
  function a(){alert(2);}
  alert(a);//1
  var a=3;
  alert(a);//3
  function a(){alert(4);}
  alert(a);//3
  alert(typeof a);//number
  a();// a is not a function*/

    //5
  /*var a=1;
  function fn1(){
    alert(a);
    var a=2;
  }
  fn1();//undefined
  alert(a)//1 */
    //6
/*var a=1;
  function fn1(){
    alert(a);//1
     a=2;
  }
  fn1();
  alert(a)//2 */
    //7
  /*var a=1;
  function fn1(a){
    alert(a);
     a=2;
  }
  fn1();
  alert(a)*/
     //8
 var a=1;
  function fn1(a){
    alert(a);
     a=2;
  }
  fn1(a);
  alert(a)

}
    
