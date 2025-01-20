const Repository = require('./Repository');
const HelpRequest = require('../data/helpRequest'); // נתיב נכון למיקום HelpRequest

class HelpRequestRepo extends Repository {
    constructor() {
        super(HelpRequest); // מעביר את HelpRequest למחלקת האב
    }
}

module.exports = new HelpRequestRepo();
