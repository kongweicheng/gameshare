/**
 * ITCAST WEB
 * Created by zhousg on 2017/2/17.
 */
window.onload = function(){
    /*滚动*/
    //scroll();

    /*使用iscroll滚动插件*/
    new IScroll('.jd_cateLeft');
    new IScroll('.jd_cateRight',{
        scrollX:true,
        scrollY:false
    });
};

var scroll = function(){
    /*
    * 1.衔接的滑动滑动起来
    * */
    var scrollBox = document.querySelector('.jd_cateLeft > ul');


    var startY = 0;
    var distanceY = 0;

    /*当前定位*/
    var currentY = 0;/*index*/

    scrollBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    scrollBox.addEventListener('touchmove',function(e){
        var moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        /*计算将要去定位的位子*/
        var position = currentY + distanceY;
        /*定位*/
        scrollBox.style.transform = 'translateY('+position+'px)';
        scrollBox.style.webkitTransform = 'translateY('+position+'px)';
    });
    scrollBox.addEventListener('touchend',function(e){
        /*记录现在定位*/
        currentY = currentY + distanceY;

        /*重置参数*/
        startY = 0;
        distanceY = 0;
    });
}