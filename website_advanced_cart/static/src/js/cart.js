odoo.define('website_advanced_cart.cart', function (require) {
    'use strict';
    var ajax = require("web.ajax");

    console.log("===website_advanced_cart======JS LOAD THAI====")

    $(document).ready(function(){

         $(document).on("click", ".popover .close", function() {
            $('#add_to_cart_custom').popover('hide');
          });

        $('#add_to_cart_custom').popover({
            trigger: 'manual',
            placement: 'top',
            html: true,
            title: function() {
              return '<div class="font-weight-bold text-center" style="color:white">Success<a href="#" class="close" data-dismiss="alert">×</a></div>'
            },
             content: function() {
              return '<div class="media"><div class="media-body"><p class="text-black" style="margin-bottom: 0;">Product has been added to cart</p></div></div>'
            }
         });

        $(".js_product #add_to_cart_custom").click(function(){
            var product_template_id = $(this).closest("form").find(".product_id").val()
            var add_qty = $(this).closest("form").find(".quantity").val()
            if(product_template_id && add_qty){
                ajax.jsonRpc('/custom_cart', 'call', {'product_template_id': product_template_id, 'add_qty':add_qty}).then(function(data){
                  if(data){
                    $('#add_to_cart_custom').popover('show');
                    if($('#my_cart .my_cart_quantity').length){
                        $('#my_cart .my_cart_quantity').text(data);
                        $('.nav-item').removeClass('d-none');
                    }
                    else{
                        $('<sup class="my_cart_quantity badge badge-primary">'+data+'</sup>').insertAfter("#my_cart i.fa-shopping-cart");
                    }
//                    setTimeout(function () {
//                        $('#add_to_cart_custom').popover('hide');
//                    }, 2000);
                  }
                })
            }
         })


    });

});