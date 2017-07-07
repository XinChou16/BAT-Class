(function (window){
    function LoadLazy(ids) {
        if (!(this instanceof LoadLazy)) {
            return new LoadLazy(ids)
        }
        this.bodyScrollHeight = document.body.scrollTop;// body滚动高度
        this.windowHeight = window.innerHeight;// 视窗高度
        this.imgs = document.getElementsByClassName(ids[0]);// 获取所有的图片

        this.init();
    }

    LoadLazy.prototype = {
        init: function () {
            this.showPic();
        },

        showPic: function(){
            for (var i = 0; i < imgs.length; i++) {
                var imgHeight = imgs[i].offsetTop;

                // 判断每个图片距离顶部的距离是否小于窗口滚动的距离
                if (imgHeight < this.windowHeight + this.bodyScrollHeight) {
                    imgs[i].src = imgs[i].getAttribute(ids[1]);// 更改图片src属性，显示图片
                    imgs[i].className = imgs[i].className.replace(ids[2],''); // 删除掉懒加载的属性
                }
            }
        }
    }

    window.loadLazy = LoadLazy;
})(window)

/**
 * 参数说明
 * 参数一： 图片的类名
 * 参数二： 图片的地址属性
 * 参数三：图片替换成的新类名
 */
window.onscroll = window.loadLazy(['lazyLoad','data-src','lazyLoading']);