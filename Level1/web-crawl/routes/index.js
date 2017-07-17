var express = require('express');
var mongoose = require('mongoose');
var User = require('../model/user');
var router = express.Router();
var request = require('request');
var cheerio =require('cheerio');

/* 显示主页 */
router.get('/', function(req, res, next) {
  res.render('index');
});

// 检查是否引用某个库
router.post('/checkLib',function(req,res,next){
	var url = req.body.url;
	var lib = req.body.lib;
	var response = res;
	// console.log(url + lib);
	request(url,function(err,res,body){
		var containLib = body.indexOf(lib)
		if(containLib == -1){
			response.json({
				message: '不包含',
				url: url,
				lib: lib
			});
		}else{
			response.json({
				message: '包含',
				url: url,
				lib: lib
			});
		}
	})

})


// 检查是否引用某个库
router.post('/query',function(req,res,next){
	var top = req.body.rank;
	var response = res;
	console.log(top);
	

})

router.post('/queryLibs',function(req,res,next) {
	var url = 'http://www.qq.com';
    request(url, function (err, response, body) {
        console.log('error:', err); 
        analyData(body);
        // console.log(response.text);
    });

    function analyData(data) {
        if(data.indexOf('html') == -1) return false;// 判断data是否乱码

        var $ = cheerio.load(data);
        var scriptFile = $('script[type="text/javascript"]').toArray();// 页面所有script引用
        var src = [];// scripts引用地址
        var scriptArr = [];
        res.json(scriptFile[0]);
        // console.log(scriptFile[1])
        // 将scripts引用地址保存到src数组
        if (scriptFile){
            scriptFile.forEach(function(item,index){
                if (item.attribs.src){
                    src.push(item.attribs.src);
                }
            });
        }
        // 保存信息
        scriptArr.push({
            domain: url,
            libsNum: src.length,
            libsSrc: src
        })
    };
})


module.exports = router;
