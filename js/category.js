/**
 * ITCAST WEB
 * Created by zhousg on 2017/2/17.
 */
window.onload = function(){
    /*����*/
    //scroll();

    /*ʹ��iscroll�������*/
    new IScroll('.jd_cateLeft');
    new IScroll('.jd_cateRight',{
        scrollX:true,
        scrollY:false
    });
};

var scroll = function(){
    /*
    * 1.�νӵĻ�����������
    * */
    var scrollBox = document.querySelector('.jd_cateLeft > ul');


    var startY = 0;
    var distanceY = 0;

    /*��ǰ��λ*/
    var currentY = 0;/*index*/

    scrollBox.addEventListener('touchstart',function(e){
        startY = e.touches[0].clientY;
    });
    scrollBox.addEventListener('touchmove',function(e){
        var moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        /*���㽫Ҫȥ��λ��λ��*/
        var position = currentY + distanceY;
        /*��λ*/
        scrollBox.style.transform = 'translateY('+position+'px)';
        scrollBox.style.webkitTransform = 'translateY('+position+'px)';
    });
    scrollBox.addEventListener('touchend',function(e){
        /*��¼���ڶ�λ*/
        currentY = currentY + distanceY;

        /*���ò���*/
        startY = 0;
        distanceY = 0;
    });
}