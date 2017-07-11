/**
 *  @xin chou 
 * Create on: 2017-07-08
 */


var formHandle = (function(){
    // 新增按钮添加新的一行
    function _btnHandler(data) {
        btn.onclick = function(){
            var tr = document.createElement('tr');
            var trHtml = '';
            trHtml += '<td><span class="textShow " style="display:none;">';
            trHtml += '</span><input  type="text" class="form-control name" placeholder="姓名" ></td><td><span class="textShow" style="display:none;">';
            trHtml += '</span><input  type="text" class="form-control sex" placeholder="性别" ></td><td><span class="textShow" v>';
            trHtml += '</span><input  type="text" class="form-control age" placeholder="年龄" ></td><td><span class="textShow" style="display:none;">';
            trHtml += '</span><input  type="text" class="form-control school" placeholder="学校" ></td>';
            trHtml += '<td><a href="#" class="modify" style="display:none;">修改</a>';
            trHtml += '<a href="#" class="delete" style="display:none;">删除</a>';
            trHtml += '<a href="#" class="confirm">确认</a>';
            trHtml += ' <a href="#" class="cancel">取消</a></td>';

            tr.innerHTML = trHtml;
            info.insertBefore(tr,info.firstChild);
            // 确认，取消  修改，删除
            _btnConfirm(data);
        }
    }

    // 确认提交等方法
    function _btnConfirm(data) {
        var info = document.querySelector('#info');
        var confirm = document.querySelectorAll('.confirm');
        var cancel = document.querySelectorAll('.cancel');
        var modify = document.querySelectorAll('.modify');
        var del = document.querySelectorAll('.delete');
        var name = document.querySelectorAll('.name');
        var sex = document.querySelectorAll('.sex');
        var age = document.querySelectorAll('.age');
        var school = document.querySelectorAll('.school');
        var textShow = document.querySelectorAll('.textShow');
        
        //确认
        confirm[0].onclick = function(){
            if (!name[0].value || !sex[0].value || !age[0].value || !school[0].value ) {
                alert('输入不完整，请重新输入');
                return false;
            }
            // 存储数据
            data.push({
                name: name[0].value,
                sex: sex[0].value,
                age: age[0].value,
                school: school[0].value
            })
            // 显示数据
            _showInput();
            
            // 更新数据
            // 检测数据是否发生变动，变动则修改数据
            if (name[0].value != data[1].name || sex[0].value != data[1].sex || age[0].value != data[1].age || school[0].value != data[1].school) {
                    data[1] = {
                    name: name[0].value,
                    sex: sex[0].value,
                    age: age[0].value,
                    school: school[0].value
                };
            }

            //  显示数据  
            for (var i = 0; i < textShow.length; i++) {
                textShow[i].style.display = 'block';
            }
            textShow[0].innerHTML = data[1].name;
            textShow[1].innerHTML = data[1].sex;
            textShow[2].innerHTML = data[1].age;
            textShow[3].innerHTML = data[1].school;
        }

        // 取消
        cancel[0].onclick = function () {
            if(name[0].value == ''){
                // 1.移除节点
                info.removeChild(info.firstChild);
                // 2.删除数据
                data.splice(1,1);
            }else{
            
                for (var i = 0; i < textShow.length; i++) {
                    textShow[i].style.display = 'block';
                }
                _showInput()
            }
        }
        
        // 修改
        modify[0].onclick = function () {
            for (var i = 0; i < textShow.length; i++) {
                textShow[i].style.display = 'none';
            }
            _hideInput();

            //更新数据
            data[1] = {
                name: name[0].value,
                sex: sex[0].value,
                age: age[0].value,
                school: school[0].value
            };

        }

        // 删除
        del[0].onclick = function () {
            // 1.移除节点
            info.removeChild(info.firstChild);
            // 2.删除数据
            data.splice(1,1);
        }
        
    }

    // 显示输入框
    function _showInput(){
        name[0].style.display = 'none';
        sex[0].style.display = 'none';
        age[0].style.display = 'none';
        school[0].style.display = 'none';
        confirm[0].style.display = 'none';
        cancel[0].style.display = 'none';
        modify[0].style.display = 'block';
        del[0].style.display = 'block';
    }

    // 隐藏输入框
    function _hideInput(){
        name[0].style.display = 'block';
        sex[0].style.display = 'block';
        age[0].style.display = 'block';
        school[0].style.display = 'block';
        confirm[0].style.display = 'block';
        cancel[0].style.display = 'block';
        modify[0].style.display = 'none';
        del[0].style.display = 'none';
    }

    // 渲染显示数据的方法
    function _renderInfo(data) {
        var html = '';

            html += '<tr><td><span class="show">';
            html += data[0].name +'</span><input style="display:none;" type="text" class="form-control" placeholder="姓名" id="name"></td><td><span class="show">';
            html += data[0].sex + '</span><input style="display:none;" type="text" class="form-control" placeholder="性别" id="sex"></td><td><span class="show">';
            html += data[0].age + '</span><input style="display:none;" type="text" class="form-control" placeholder="年龄" id="age"></td><td><span class="show">';
            html += data[0].school + '</span><input style="display:none;" type="text" class="form-control" placeholder="学校" id="school"></td>';
            html += '<td><a href="#" class="modify">修改</a>';
            html += ' <a href="#" class="delete" >删除</a>';
            html += '<a href="#" id="confirm" style="display:none;">确认</a>';
            html += ' <a href="#" id="cancel" style="display:none;">取消</a></td></tr>';
        
        info.innerHTML = html;
    }
    


    function init() {
        var data = [{
            name: '小明',
            sex: '男',
            age: 18,
            school: '河南大学'
        }];
        var modify = document.getElementById('modify');
        var del = document.getElementById('delete');
        var btn = document.getElementById('btn');

        // 渲染数据
        _renderInfo(data);
        // 绑定点击事件
        _btnHandler(data);

    }

    return {
        init: init
    }

})();


formHandle.init();


   

