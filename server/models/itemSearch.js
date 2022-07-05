const Item = require("./item");

class ItemSearch extends Item {
    constructor(item) {
        super(item.id, item.title, item.price, item.picture, item.condition, item.free_shipping);
    }
}

module.exports = ItemSearch;
