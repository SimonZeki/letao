// 1-表单校验
// 用户名和密码不能为空，用户名长度2-6，密码8-12
// 2-form表单提交默认情况下会刷新一次页面，





$(function () {
   //表单验证
   $(function () {
      $('form').bootstrapValidator({
         message: 'This value is not valid',
         feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
         },
         fields: {
            username: {
               message: '用户名验证失败',
               validators: {
                  notEmpty: {
                     message: '用户名不能为空'
                  },
                  stringLength: {
                     min: 2,
                     max: 6,
                     message: '用户名长度必须在2到6位之间'
                  },
                  regexp: {
                     regexp: /^[a-zA-Z0-9_]+$/,
                     message: '用户名只能包含大写、小写、数字和下划线'
                  }
               }
            },
            password: {
               validators: {
                  notEmpty: {
                     message: '密码不能为空'
                  },
                  stringLength: {
                     min: 6,
                     max: 12,
                     message: '密码长度必须在6到12位之间'
                  },
                  regexp: {
                     regexp: /^[a-zA-Z0-9_]+$/,
                     message: '密码只能包含大写、小写、数字和下划线'
                  }
               }
            }
         }
      });
   });

   $('form').on('success.form.bv', function (e) {
      // 阻止默认的表单提交
      e.preventDefault();

      $.ajax({
         type: "post",
         url: "/employee/employeeLogin",
         data: $('#form').serialize(),
         dataType: "json",
         success: function (info) {
            console.log(info);
            if (info.success) {
               location.href = "index.html";
            }
            if (info.error === 1000) {
               // 用户名不存在
               alert(info.message);
            }
            if (info.error === 1001) {
               // 密码错误
               alert(info.message);
            }
         }
      });
   });


   // 重置功能，只有重置按钮才可以被重置
   $('[type="reset"]').click(function() {

       $('#form').data("bootstrapValidator").resetForm();
   });
});