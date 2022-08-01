// flag{QQ:378768535}
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

var team = new Vue({
     el: '#members',
     data: {
          object:[
               {
                    date: "2022",
                    members: ['Test1', 'Test2', 'Test3']
               },
               {
                    date: "2021",
                    members: ['Test1', 'Test2', 'Test3', 'Test4']
               },
               {
                    date: "2019",
                    members: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
               },
               {
                    date: "2019",
                    members: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
               },
               {
                    date: "2019",
                    members: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
               },
               {
                    date: "2019",
                    members: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
               },
               {
                    date: "2019",
                    members: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
               },
               {
                    date: "2019",
                    members: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
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

var award = new Vue({
     el: '#award',
     data: {
          object:[
               {
                    date: "2022",
                    members: [
                         '2022年最佳吃饭大赛总决赛总冠军', 
                         '中国互联网应急响应中心最佳封禁IP单位'
                    ],
               },{
                    date: "2021",
                    members: [
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