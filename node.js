// 缩略图界面的布局方法
function arrange(){
    var w = $(window).width();
    var h = $(window).height();
    var centerX = w / 2;
    var centerY = h / 2;

    $('#xc div').each(function(){
        var left = Math.random() * centerX + centerX / 2;
        var top = Math.random() * centerY + centerY / 2;
        var rotate = Math.random() * 80;

        $(this).css({
            'top':top,
            'left':left,
            'position':'absolute',
            'transform':'rotate(' + rotate + 'deg)'
        })
    })
}
// 函数调用 - 必须要执行
arrange();

$(window).resize(arrange);

$(function(){
    $('#xc div a').fancybox({
        // 图片右上角的关闭按钮
        closeBtn:true,
        // 自动播放: 真的
        autoPlay:true,
        helpers:{
            buttons:{},
            title:{type:'inside'},
            thumbs:{alwaysCenter:true}
        },
        beforeLoad:function(){
            this.title = $(this.element).text();
        }

    })
})