const Item = require('../models/item');
const ItemSearch = require('../models/itemSearch');
const Price = require('../models/price');
const Search = require('../models/search');

class SearchController {
    constructor(response) {
        this.response = response;
    }

    categoriesModel() {
        var categories = new Array();

        this.response.filters.filter(filters => filters.id == "category")
            .map(id => id.values.map(values => categories.push(values.name)));

        return categories;
    }

    itemsModel() {
        var items = new Array();

        items = this.response.results.map(results =>
            new ItemSearch(
                new Item(results.id, results.title,
                    new Price(results.price, results.currency_id),
                    results.thumbnail, results.condition, results.shipping.free_shipping
                )
            ));

        return items;
    }

    responseFormat() {
        return new Search(this.categoriesModel(), this.itemsModel());
    }
}

module.exports = SearchController;
