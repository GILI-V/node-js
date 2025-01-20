const Service = require('./Service.js');
const repo = require('../1-dal_repository/HelpRequestRepo.js')
class HelpRequestService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new HelpRequestService();

