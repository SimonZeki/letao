$(function () {
   var currentPage = 1;
   var pageSize = 5;

   var currentId; // 当前编辑的用户 id
   var isDelete; // 修改的状态

   // 1. 一进入页面, 发送ajax请求, 获取用户列表数据, 通过模板引擎渲染
   render();

   function render() {
      $.ajax({
         type: "get",
         url: "/user/queryUser",
         data: {
            page: currentPage,
            pageSize: pageSize
         },
         dataType: "json",
         success: function (info) {
            console.log(info);
            // template( 模板id, 数据对象 )
            var htmlStr = template("tmp", info);
            $('tbody').html(htmlStr);

            // 分页功能
            // 根据后台返回的数据, 进行分页初始化
            $('#paginator').bootstrapPaginator({
               bootstrapMajorVersion: 3, // 版本号
               currentPage: info.page, // 当前页
               totalPages: Math.ceil(info.total / info.size), // 总页数
               // 给页码添加点击事件
               onPageClicked: function (a, b, c, page) {
                  console.log(page);
                  // 根据 page 重新请求数据, 进行渲染
                  currentPage = page; // 更新当前页

                  // 根据当前页, 重新渲染
                  render();
               }
            })
         }
      });
   }

   //点击按钮切换功能
   $('tbody').on('click', '.btn', function () {
      $('#userModal').modal('show');
      currentId = $(this).parent().data('id');
      isDelete = $(this).hasClass('btn-danger') ? 0 : 1;
   })

   //点击模态框确认按钮，实现启用/禁用功能
   $('#submitBtn').click(function(){
      $.ajax({
         type: 'post',
         url: '/user/updateUser',
         data: {
            id: currentId,
            isDelete: isDelete
         },
         dataType: 'json',
         success: function( info ){
            console.log( info );
            if( info.success ){
               $('#userModal').modal('hide');
               render();
            }
         }
      })
   })
})