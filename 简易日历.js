/* 
* @Author: Marte
* @Date:   2016-09-07 20:55:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-08 21:01:27
*/
//留言
window.onload=function(){
    var datas=[
     '新年快到了，好开心',
     '二月份期待春天',
     '三月柳枝发新芽',
     '四月万物复苏，天气温暖了',
     '要过劳动节了',
     '六一儿童节，哈哈哈',
     '七月要加油',
     '八月好好好',
     '今天是九月',
     '十月',
     '十一月份',
     '十二月'
]
 var oH2=document.getElementsByTagName('h2');
 var oDiv1=document.getElementById('div1');
 var i=0;
 for(i=0;i<oH2.length;i++){
    oH2[i].index=i;
    oH2[i].onmouseover=function(){
        for(i=0;i<oH2.length;i++){
            oH2[i].className="";
        }
        this.className='active';
        oDiv1.innerHTML='<h3>'+(this.index+1)+'月'+'</h3>'+'<p>'+datas[this.index]+'</p>';
    }
 }
}
    
