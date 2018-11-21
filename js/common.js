$(function () {
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


   //点击退出按钮显示模态框
   $('.icon_logout').click(function(){
      $('#logoutModal').modal("show");
   })
})