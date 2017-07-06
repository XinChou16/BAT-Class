/**
 *  @xin chou 2017-07-06
 */

$(document).ready(function(){
    var addInfo = (function () {
        function Add(ids) {
            if (!(this instanceof Add)) {
                return new Add(ids);
            }

            this.modify = $('#ids[0]');
            this.delete = $('#ids[1]');
            this.btn = $('#ids[2]');

            this.init();
        }

        Add.prototype = {
            init: function () {
                var self = this;
                console.log(btn)
                this.btn.on('click',self.btnHandler);

            },
            btnHandler: function () {
               alert(1);
            }
        }

        return {
            Add: Add,
        }
    })()

    addInfo.Add(['modify','delete','btn'])
})

