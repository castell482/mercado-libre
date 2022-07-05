const express = require('express');

const config = require('../config/dev');
const apiCall = require('../config/API_helper');

const SearchController = require('../controllers/searchController');
const DescriptionController = require('../controllers/descriptionController');

const router = express.Router();

router.get('', (req, res) => {
    apiCall.make_API_call(`${config.MERCADOLIBRE_SEARCH}${req.query.search}`)
        .then(async response => {
            res.json(new SearchController(response).responseFormat())
        })
        .catch(error => {
            res.send(error)
        });
});

router.get('/:id', function (req, res) {
    apiCall.make_API_call(`${config.MERCADOLIBRE_ITEM}${req.params.id}`)
        .then(responseId => {
            apiCall.make_API_call(`${config.MERCADOLIBRE_ITEM}${req.params.id}\/description`)
                .then(responseDescription => {
                    res.json(new DescriptionController(Object.assign({}, responseId, responseDescription)).responseFormat())
                })
                .catch(error => {
                    res.send(error)
                });
        })
        .catch(error => {
            res.send(error)
        });
});

module.exports = router;
