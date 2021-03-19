# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright 2018 Odoo Helper
# See LICENSE file for full copyright and licensing details.
#
##############################################################################
{
    'name': 'Website Advanced Cart',
    'category': 'Website',
    'summary': 'Website Advanced Cart',

    'version': '0.1',
    'description': """
Website Advanced Cart
==================
        This module allows add to cart product without go to cart page using ajax. like a professional website.
        """,

    'author': 'Odoo Helper',
    'license': 'AGPL-3',

    'depends': [
        'base','website','website_sale'
        ],
    'data': [
        'views/assets.xml',
        'views/template.xml',
    ],
    'images': ['images/OdooHelper.jpg'],
    'price': 24.28,
    'currency': 'USD',

    'installable': True,
    'application': False
}
