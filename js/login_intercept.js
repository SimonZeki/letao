//将未登录过的用户拦截到登陆页面，只有登陆过后才可以访问页面
$(function () {
   $.ajax({
      type: 'get',
      url: '/employee/checkRootLogin',
      dataType: 'json',
      success: function (info) {
         console.log(info);
         if (info.success) {
            console.log('用户已经登陆');
         }

         if (info.error === 400) {

            location.href = "login.html";
         }
      }
   })
})