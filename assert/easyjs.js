// flag{QQ:378768535}
console.log(
"骚年，你都学会用f12或其他手段来打开控制台了，为什么不加入我们呢😅\n               #########                       \n              ############                     \n              #############                    \n             ##  ###########                   \n            ###  ###### #####                  \n            ### #######   ####                 \n           ###  ########## ####                \n          ####  ########### ####               \n        #####   ###########  #####             \n       ######   ### ########   #####           \n       #####   ###   ########   ######         \n      ######   ###  ###########   ######       \n     ######   #### ##############  ######      \n    #######  ##################### #######     \n    #######  ##############################    \n   #######  ###### ################# #######   \n   #######  ###### ###### #########   ######   \n   #######    ##  ######   ######     ######   \n   #######        ######    #####     #####    \n    ######        #####     #####     ####     \n     #####        ####      #####     ###      \n      #####      ;###        ###      #        \n        ##       ####        ####              \n","Send resume to : join#iloli.moe (Replace # to @)");
$('li a').click(function () {
     target = $(this).attr('goto');
     switchTo(target);
});
function switchTo(target) {
     $('.row section').each(function () {
         $(this).removeClass('active');
     });
     $(target).addClass('active');
}
$(function(){
     $(".nav").find("a").click(function(e){
          $('.nav a').removeClass("active");
          $(this).addClass("active");
     });
})
var links = new Vue({
     el: '#links',
     data: {
          object:[
               {
                    links:['https://fjnusec.cn/','https://dlusec.cn/'],
                    avatars:['https://cdn.jsdelivr.net/gh/NISASec/blog_image/blog/QQ%E5%9B%BE%E7%89%8720210804132927.jpg','https://dlusec.cn/img/DLUSEC.png'],
                    names: ['福建师范大学网络与信息安全协会', '大理大学网络安全协会'],
                    descri: ['FJNUSEC','DLUSEC']
               },
          ]
     },
     // cnm报你妈错呢傻逼
     methods: {
          even: function (numbers) {
               return numbers.filter(function (number) {
                    return number
               })
          },
          getHref: function (url){
               return url
          }
     }
})

var team = new Vue({
     el: '#members',
     data: {
          object:[
               {
                    date: "2022",
                    links:['https://rce.iloli.moe','https://www.baidu.com','https://www.bilibili.com'],
                    avatars:['https://bfs.iloli.moe/logo.png','https://bfs.iloli.moe/logo.png','https://bfs.iloli.moe/logo.png'],
                    descri:['我是中国人我是中国人我是中国人我是中国人','中国人是我中国人是我中国人是我中国人是我', '你好世界你好世界你好世界你好世界你好世界你好世界'],
                    members: ['Test1', 'Test2', 'Test3']
               },
               {
                    date: "2019",
                    links:['https://rce.iloli.moe','https://www.baidu.com','https://www.bilibili.com'],
                    avatars:['https://bfs.iloli.moe/logo.png','https://bfs.iloli.moe/logo.png','https://bfs.iloli.moe/logo.png'],
                    descri:['日本人日本人日本人日本人日本人日本人','日本人日本人日本人日本人日本人日本人日本人日本人日本人日本人日本人', '你好世日本人日本人日本人日本人日本人'],
                    members: ['Test1', 'Test2', 'Test3']
               }
          ]
     },
     // cnm报你妈错呢傻逼
     methods: {
          even: function (numbers) {
               return numbers.filter(function (number) {
                    return number
               })
          },
          getHref: function (url){
               return url
          }
     }
})

var award = new Vue({
     el: '#award',
     data: {
          object:[
               {
                    date: "主办",
                    plan: [
                         '2022年CMCTF-5（AWD）线上攻防对抗赛', 
                         '2022年CMCTF-4（CTF）比赛',
                         '2021年厦门理工学院'
                    ],
               },{
                    date: "2022",
                    plan: [
                         '2022年最佳吃饭大赛总决赛总冠军', 
                         '中国互联网应急响应中心最佳封禁IP单位'
                    ],
               },{
                    date: "2021",
                    plan: [
                         '2021年XX单位XX攻防演习最佳被溯源单位', 
                    ]
               }
          ]
     },
     // cnm报你妈错呢傻逼
     methods: {
          even: function (numbers) {
               return numbers.filter(function (number) {
                    return number
               })
          }
     }
})