const state = {
code1 :
`<!-- START of Rakuten Marketing Conversion Tag -->
<script type="text/javascript">
var MCR_TRANSACTION_ID          = {{mcr-transaction_id}};
var MCR_TRANSACTION_PRODUCTS    = {{mcr-transaction_products}};
var MCR_TRANSACTION_DISCOUNT    = {{mcr-transaction_discount}};

var products = [];  
for (var i = 0; i < MCR_TRANSACTION_PRODUCTS.length; i++) {
    var quantity            = parseInt(MCR_TRANSACTION_PRODUCTS[i].quantity, 10);
    var unit_price_less_tax = parseInt(MCR_TRANSACTION_PRODUCTS[i].price, 10);      
    var unit_price          = unit_price_less_tax;`,

code2 :
`    var sku                 = MCR_TRANSACTION_PRODUCTS[i].id;`,
code3 :`
    if (products[sku]) {
        products[sku].quantity += quantity;
    } else {
        products[sku] = {
            quantity         : quantity,
            unitPriceLessTax : unit_price_less_tax,
            unitPrice        : unit_price,
            SKU              : sku,
            productName      : product_name
        };
    }
}

var line_items = [];
for (var sku in products) {
    if (products[sku].SKU) {
        line_items.push(products[sku]);
    }
}
`,

code4 :
`var rm_trans = {
    affiliateConfig: {ranMID: 'XXX', discountType: 'order'},
    orderid : MCR_TRANSACTION_ID,
    currency: 'JPY',
    customerStatus: '',
    conversionType: 'Sale',
    customerID: '',
    discountCode: discount,
    discountAmount: discountAmount,
    taxAmount: 0,
    lineitems: line_items
};
`
}

export default {
    state,
}