/**
 *  @xin chou 
 * Create on: 2017-07-16
 */


$(function () {
    var check = $('.check'),
        libs = $('.lib');

    var checkLib = (function(){
        function _checkLib() {
            check.click(function(){
                var site = $('.website');
                $.post(
                    '/checkLib',
                    {
                        url: 'http://www.' + site.val() + '.com',
                        lib: libs.val()
                    },
                    function(data){
                        console.log(data);
                    }
                )
            })
        }

        
        function _query() {
            var query = $('.query');
            var rank = $('.rank');
            query.click(function(){
                $.post(
                    '/query',
                    {
                        rank: rank.val(),
                    },
                    function(data){
                        console.log(data);
                    }
                )
            })
        }

        function init() {
           _checkLib();
           _query();
        }

        return {
            init: init
        }

    })();

    // checkLib.init();

    (function(){
        var query = $('.query');

        query.click(function(){
            $.post(
                '/queryLibs',
                {
                    data: 0
                },
                function(data){
                    console.log(data)
                }
            )
        })
    })()
})


   

