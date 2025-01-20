const express = require('express');
const router = express.Router();
const Service=require('../2-bll_service/HelpRequestService')


router.get('/', async (req, res) => {
    res.json(await Service.getAll());
});

module.exports = router;