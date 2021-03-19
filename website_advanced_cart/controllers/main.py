from odoo import fields, http, tools, _
from odoo.http import request

class WebsiteCustomCart(http.Controller):

    @http.route(['/custom_cart'], type='json', auth="public", method='post', website=True)
    def custom_cart(self, **post):
        if post.get('product_template_id') and post.get('add_qty'):
            order = request.website.sale_get_order(force_create=True)
            order._cart_update(
                product_id=int(post.get('product_template_id')),
                add_qty=int(post.get('add_qty')),
            )
            product_uom_qty = 0
            for line in order.order_line:
                if line.product_id.id == int(post.get('product_template_id')):
                    line.sudo().write({
                        'product_uom_qty': int(post.get('add_qty'))
                    })
            for line in order.order_line:
                product_uom_qty = product_uom_qty + line.product_uom_qty
            if product_uom_qty:
                return int(product_uom_qty)
            else:
                return False
        return False
