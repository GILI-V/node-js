const Repository = require('./Repository');
const categories = require('../data/helpRequest');

class HelpRequestRepo extends Repository {
    constructor() {
        super(HelpRequest);
    }
}

module.exports = new HelpRequestRepo();