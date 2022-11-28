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

var archive = new Vue({
     el: '#archive',
     data: {
          object:[
               {
                    names: [
                         '2022年厦门理工学院第四届网络空间安全大赛落下帷幕',
                         '我院学子在第十五届全国大学生信息安全竞赛创新实践能力赛全国总决赛中获三等奖',
                         '我院学子在第十五届全国大学生信息安全竞赛创新实践能力赛华东南分区赛中喜获佳绩',
                         '2021年厦门理工学院第三届网络空间安全大赛落下帷幕',
                         '我院学子在2019年“黑盾杯”网络空间安全知识和安全技能竞赛获全省亚军',
                         '我院学子在第四届“福建省高校网络空间安全大赛”中获全省第二名',
                         '厦门理工学院“国科-i春秋”杯第二届网络空间安全大赛完满结束',
                         '厦门理工学院“国科-i春秋”杯第二届网络空间安全大赛完满结束',
                         '我院学子在2017-2018全国高校信息安全铁人三项赛取得优异成绩',
                         '我院学子在第三届“福建省高校网络空间安全大赛”中获全省第三名',
                         '我院CodeMonster团队在第四届“黑盾杯”信息安全竞赛中勇夺全省第二名',
                         '我院CodeMonster信息安全团队在第二届48小时黑客马拉松破解大奖赛获佳绩',
                         '厦门理工学院“国科杯”第一届网络信息安全大赛圆满落幕', 
                         '我院顺利举办“国科杯”第一届信息安全校赛总决赛',
                         '我院学子在信息安全铁人三项赛华南赛区中喜获季军',
                         '我院学子喜获第二届“福建省高校网络空间安全大赛”佳绩'
                    ],
                    links:[
                         'hhttps://mp.weixin.qq.com/s?__biz=Mzg4NDcxMzQyMA==&mid=2247484265&idx=1&sn=d171b11c1dd3631b388b5c5651fe4417',
                         'hhttps://cs.xmut.edu.cn/info/1074/4562.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/4543.htm',
                         'hhttps://mp.weixin.qq.com/s?__biz=Mzg4NDcxMzQyMA==&mid=2247484028&idx=1&sn=530145d367d4d33c7f43994d75052a5e',
                         'hhttps://cs.xmut.edu.cn/info/1074/1032.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1046.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1036.htm',
                         'hhttps://cs.xmut.edu.cn/info/1058/2898.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1042.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1066.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1094.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1093.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1102.htm',
                         'hhttps://cs.xmut.edu.cn/info/1058/3317.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1100.htm',
                         'hhttps://cs.xmut.edu.cn/info/1074/1122.htm'
                    ],
                    dates: [
                         '2022年11月19日',
                         '2022年09月06日',
                         '2022年07月07日',
                         '2021年12月11日',
                         '2019年09月16日',
                         '2018年12月19日',
                         '2018年12月10日',
                         '2018年11月15日',
                         '2018年11月15日',
                         '2017年12月14日',
                         '2017年12月08日',
                         '2017年12月08日',
                         '2017年05月15日',
                         '2017年05月07日',
                         '2017年04月28日',
                         '2016年12月14日'
                    ],
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
                    date: "2021",
                    links:['Anonymous','Anonymous','Anonymous','Anonymous'],
                    avatars:['https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg'],
                    descri:['Anonymous','Anonymous','Anonymous','Anonymous'],
                    members: ['Anonymous (Leader)','Anonymous','Anonymous','Anonymous']
               },{
                    date: "2020",
                    links:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    avatars:['https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg'],
                    descri:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    members: ['Anonymous (Leader)','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous']
               },{
                    date: "2019",
                    links:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    avatars:['https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg'],
                    descri:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    members: ['Anonymous (Leader)','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous']
               },{
                    date: "2018",
                    links:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    avatars:['https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg'],
                    descri:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    members: ['Anonymous (Leader)','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous']
               },{
                    date: "2017",
                    links:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    avatars:['https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg'],
                    descri:['Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    members: ['Anonymous (Leader)','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous']
               },{
                    date: "2016",
                    links:['hhttps://github.com/xishir','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    avatars:['https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/xishir.jpg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg','https://cdn.jsdelivr.net/gh/xmutsec/xmutsec_cdn@20221126/assert/members/anonymous.svg'],
                    descri:['De1ta/Codemonster CTF退役选手 Tencent 打杂工程师','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous'],
                    members: ['xishir (Founder)','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous','Anonymous']
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
                         '[2022/11/04] - 2022年SkyNICOCTF暨厦门理工学院第四届网络空间安全大赛', 
                         '[2022/05/??] - 2022年CMCTF-5（AWD）线上攻防对抗赛', 
                         '[2022/04/??] - 2022年CMCTF-4（CTF）比赛',
                         '[2021/10/??] - 2021年厦门理工学院第三届网络空间安全大赛',
                         '[2018/??/??] - 2018年举办第二届厦门理工“国科-i春秋杯”网络信息安全大赛',
                         '[2018/02/13] - 举办2018MOCTF新春欢乐赛♂♂♂',
                         '[2017/05/06] - 举办第一届厦门理工“国科杯”网络信息安全大赛'
                    ],
               },{
                    date: "2022",
                    plan: [
                         '[2022/10/??] - 2022年国家网络安全宣传周福建省第三届“闽盾杯”网络空间安全大赛（黑盾赛道） 优秀奖',
                         '[2022/09/22] - 中国工业互联网安全大赛（福建省选拔赛）暨福建省第二届工业互联网创新大赛 个人金牌',
                         '[2022/08/??] - 网鼎杯网络安全大赛 青龙组 晋级半决赛',
                         '[2022/09/22] - 中国工业互联网安全大赛（福建省选拔赛）暨福建省第二届工业互联网创新大赛 团体二等奖',
                         '[2022/08/??] - 第十五届全国大学生信息安全竞赛—创新实践能力赛总决赛 团体三等奖',
                         '[2022/06/28] - 第十五届全国大学生信息安全竞赛创新实践能力赛 华东南赛区 团体一等奖'
                    ],
               },{
                    date: "2021",
                    plan: [
                         '[2021/12/08] - 第二届“闽盾杯”网络空间安全大赛教育行业攻防赛道，防守方第一名', 
                         '[2021/12/08] - 第二届“闽盾杯”网络空间安全大赛黑盾赛道，高校组第三名', 
                    ]
               },{
                    date: "2020",
                    plan: [
                         '[2020/??/??] - 福建省黑盾杯网络空间安全技能大赛 一等奖',
                         '[2020/??/??] - 网鼎杯网络安全大赛 青龙组 晋级半决赛',
                    ],
               },{
                    date: "2019",
                    plan: [
                         '[2019/??/??] - X-NUCA 全国高校网安联赛 第 23 名',
                         '[2019/??/??] - 福建省黑盾杯网络空间安全技能大赛 特等奖',
                         '[2019/??/??] - 全国软件测试大赛 Web 安全测试个人赛总决赛 二等奖',
                         '[2019/??/??] - 全国软件测试大赛 Web 安全测试个人赛省赛 一等奖',
                         '[2019/??/??] - 全国大学生信息安全竞赛创新能力实践赛全国总决赛 三等奖',
                         '[2019/??/??] - 第十二届全国大学生信息安全竞赛创新能力实践赛华东南赛区半决赛 特等奖',
                         '[2019/??/??] - 第五届百越杯福建省高校网络空间安全大赛 三等奖',
                         '[2019/??/??] - 高校网络信息安全管理运维挑战赛 三等奖',
                         '[2019/??/??] - “黄鹤杯”网络安全人才与创新峰会暨网络安全服务与创新能力大赛 优秀奖',
                         '[2019/??/??] - 西湖论剑中国杭州网络安全技能大赛 优秀奖',
                    ],
               },{
                    date: "2018",
                    plan: [
                         '[2018/12/28] - “百越杯”第四届福建省高校网络空间安全大赛 一等奖',
                         '[2018/12/07] - 信息安全铁人三项赛全国总决赛 二等奖',
                         '[2018/06/09] - 第十一届全国大学生信息安全大赛 三等奖（华东南赛区第4名）',
                         '[2018/05/11] - 2018 信息安全铁人三项赛福建赛区 一等奖（第2名）',
                         '[2018/04/26] - 2018 安恒“西湖论剑杯”全国大学生网络空间安全技能大赛 个人赛三等奖'
                    ],
               },{
                    date: "2017",
                    plan: [
                         '[2017/11/27] - 2017“黑盾杯”福建省大学生网络与信息安全竞赛 一等奖',
                         '[2017/11/25] - 2017 360第二届48小时黑客马拉松破解大奖赛 第四名',
                         '[2017/10/28] - “百越杯”第三届福建省高校网络空间安全大赛 一等奖、三等奖、优胜奖',
                         '[2017/08/26] - 2017 XNUCA第一期Web专题 第9名',
                         '[2017/04/22] - 2017 信息安全铁人三项赛企业赛华南赛区 三等奖（第3名）'
                    ],
                    date: "2016",
                    plan: [
                         '[2016/12/11] - “百越杯”第二届福建省高校网络空间安全大赛 二等奖、三等奖、优胜奖',
                         '[2016/06/09] - 协会成立'
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