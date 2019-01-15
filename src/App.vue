<template>
    <div class="a">
    <Tgls @clicked="updateTGLS"/>
      <Tax @clicked="updateTax"/>
      <McrTransactionId @clicked="updateMcrTransactionId"/>
      <DiscountCode @clicked="updateDiscountCode"/>
      <pre>
      {{intro}}
      {{mcr_transaction_id}}
      {{mcr_transaction_products}}
      {{products}}
      {{forproducts}}
      {{quantity}}
      {{unit_price}}
      {{unit_price_less_tax}}
      {{sku}}
      {{ifproducts}}
      {{discountcode}}
      {{rm_trans}}
      {{affiliateconfig}}
      {{orderid}}
      {{mcr_transaction_id_blank}}
        </pre>
    </div>

</template>

<script>
    import Tgls from './components/TGLS'
    import Tax from './components/Tax'
    import McrTransactionId from './components/McrTransactionId'
    import DiscountCode from './components/DiscountCode'

    export default{
        name: 'App',
        components: {
          DiscountCode,
          Tgls,
          Tax,
          McrTransactionId
        },
        data() {
          return {
            intro: '\n' +
          '<!-- START of Rakuten Marketing Conversion Tag -->\n' +
          '<!-- 「注意／削除する場合はリンクシェアジャパンへ連絡下さい」「ATTENTION／Please contact LINKSHARE Japan when you delete」 -->\n' +
          '<script type="text/javascript">',
            mcr_transaction_id: '  var MCR_TRANSACTION_ID       = {{mcr-transaction_id}};',
            mcr_transaction_products: '  var MCR_TRANSACTION_PRODUCTS = {{mcr-product_transaction_products}};',
            products: '  var products = [];',
            forproducts: '  for (var i = 0; i < MCR_TRANSACTION_PRODUCTS.length; i++) {',
            quantity: '      var quantity            = parseInt(MCR_TRANSACTION_PRODUCTS[i].quantity, 10);',
            unit_price: '      var unit_price          = parseInt(MCR_TRANSACTION_PRODUCTS[i].price, 10);',
            unit_price_less_tax: '      var unit_price_less_tax = Math.floor(unit_price / 108 * 100);',
            sku: '      var sku                 = MCR_TRANSACTION_PRODUCTS[i].id;',
            ifproducts: '      if (products[sku]) {\n' +
                    '            products[sku].quantity += quantity;\n' +
                    '        } else {\n' +
                    '            products[sku] = {\n' +
                    '                quantity         : quantity,\n' +
                    '                unitPriceLessTax : unit_price_less_tax,\n' +
                    '                unitPrice        : unit_price,\n' +
                    '                SKU              : sku,\n' +
                    '                productName      : sku\n' +
                    '            };\n' +
                    '        }\n' +
                    '    }\n' +
                    '\n' +
                    '    var line_items = [];\n' +
                    '    for (var sku in products) {\n' +
                    '        if (products[sku].SKU) {\n' +
                    '            line_items.push(products[sku]);\n' +
                    '        }\n' +
                    '    }\n',
            discountcode: null,
            rm_trans: '  var rm_trans = {',
            affiliateconfig: '      affiliateConfig: {ranMID: \'XXX\', discountType: \'order\'},',
            orderid: '      orderid : MCR_TRANSACTION_ID,\n' +
                    '        currency: \'JPY\',\n' +
                    '        customerStatus: \'\',\n' +
                    '        conversionType: \'Sale\',\n' +
                    '        customerID: \'\',\n' +
                    '        discountCode: \'\',\n' +
                            '        discountAmount: 0,\n' +
                    '        taxAmount: 0,\n' +
                    '        lineitems: line_items\n' +
                    '    };\n',
            mcr_transaction_id_blank: '',
          }
        },
        methods: {
            updateTGLS (tgls) {
              this.affiliateconfig = tgls
            },
          updateTax (tax) {
            this.unit_price_less_tax = tax
          },
          updateMcrTransactionId(mcr_transaction_id_blank) {
              this.mcr_transaction_id_blank = mcr_transaction_id_blank
          },
          updateDiscountCode(discount_code) {
              this.discountcode = discount_code
          }
        }
    }
</script>