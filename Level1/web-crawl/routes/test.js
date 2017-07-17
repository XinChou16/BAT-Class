var fs = require('fs'); // 文件模块
var path =require('path');
var request =require('request');
var cheerio =require('cheerio');

var url = 'http://www.alexa.cn/siterank/1';// 无法爬取
var url2 = 'http://alexa.chinaz.com/Country/index_CN.html'
var rank = 10;// 排名

request(url2, function (err, response, body) {
    //   analyData(body);
    // console.log(body);
});

function analyDat(data) {
    if(data.indexOf('html') == -1) return false;
    var $ = cheerio.load(data);// 传递 HTML
    var sitesArr = $('.righttxt .tohome').toArray();//将所有a链接存为数组
    var result; 
    var sites = [];

    for (var i = 0; i < rank; i++) {
        var url = sitesArr[i].attribs.href;
        sites.push('http://wwww.' + url.slice(7));//保存网址，添加wwww前缀
    }
    getScript(sites);
    // console.log(result);
}
var urls = 
[ 'http://wwww.baidu.com',
  'http://wwww.qq.com',
  'http://wwww.taobao.com',
  'http://wwww.sohu.com',
  'http://wwww.hao123.com',
  'http://wwww.360.cn',
  'http://wwww.sina.com.cn',
  'http://wwww.weibo.com',
  'http://wwww.tmall.com',
  'http://wwww.google.com' ]
getScript(urls)
// 获取JS库文件地址
function getScript(urls) {
    console.log(urls);
    var scriptArr = [];// 保存script的数组;

    // for (var j = 0; j < urls.length; j++) {
        request(urls[1], function (err, res, bodyhtml) {
            var $ = cheerio.load(bodyhtml);
            var scriptFile = $('script[type="text/javascript"]').toArray();// 页面所有script引用
            var src = [];// scripts引用地址

            // 将scripts引用地址保存到src数组
            // if (scriptFile.length >-1){
                scriptFile.forEach(function(item,index){
                        src.push(item.attribs.src);
                });
            // }

            // 保存信息
            scriptArr.push({
                domain: urls[1],
                libsNum: scriptFile.length,
                libsSrc: src
            })
            console.log(scriptArr);
        });
    // };
}