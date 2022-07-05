const Item = require('../models/item');
const ItemDescription = require('../models/itemDescription');
const Price = require('../models/price');
const Search = require('../models/search');

class DescriptionController {
    constructor(response) {
        this.response = response;
    }

    itemsModel() {
        var items = new Array();

        items = new ItemDescription(
            new Item(this.response.id, this.response.title,
                new Price(this.response.price, this.response.currency_id),
                this.response.thumbnail, this.response.condition, this.response.shipping.free_shipping
            ), this.response.sold_quantity, this.response.plain_text
        );

        return items;
    }

    responseFormat() {
        return new Search(null, this.itemsModel());
    }
}

module.exports = DescriptionController;
