const Item = require("./item");

class ItemDescription extends Item {
    constructor(item, sold_quantity, description) {
        super(item.id, item.title, item.price, item.picture, item.condition, item.free_shipping);
        this.sold_quantity = sold_quantity;
        this.description = description;
    }
}

module.exports = ItemDescription;
