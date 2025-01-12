
const express = require('express');
const router = express.Router();
const service = require('../2-bll_service/HelpRequestService')

router.get('/', async (req, res) => {
    res.json(await service.getAll());
});

router.get('/:id',async (req, res) => {
    let result = await service.getById(req.params.categoryId);
    res.json(result);
});

router.post('/', (req, res) => {
    let newCategory = req.body;
    newCategory.id = Math.max(...categories.map(cat => cat.id)) + 1;
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

module.exports = router;