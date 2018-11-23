$(function () {

   // 进度条功能
   // 进度条要在ajax 发送请求前显示，在ajax请求回来后立刻结束

   //----------- ajax 全局事件 -----------
   // NProgress .start();
   // NProgress .done();

   $(document).ajaxStart(function(){
      NProgress .start();
   })

   $(document).ajaxStop(function(){

      setTimeout(function(){
         NProgress .done();
      },300)

   })

   //二级菜单切换
   $('.category').click(function () {
      $(this).next().stop().slideToggle();
   });

   //侧边栏滑动效果
   $('.icon_menu').click(function () {
      $('.sidebar').toggleClass('remove_l');
      $('.main').toggleClass('remove_l');
      $('.main_herder').toggleClass('remove_l');
   })


   //公共的退出功能

   //1- 点击右侧退出小图标显示模态框
   $('.icon_logout').click(function(){
      $('#logoutModal').modal("show");
   });

   //2- 点击退出就会隐藏模态框 并且 退出到登陆界面
   $('#logoutBtn').click(function(){
      //发送ajax 请求给后台，让后台删除用户的登陆状态
      $.ajax({
         type: 'get',
         url: '/employee/employeeLogout',
         dataType: 'json',
         success: function(info){
            console.log(info);

            location.href = 'login.html';
            
         }
      })
   })


})