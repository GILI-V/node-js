const Service = require('./Service.js');
const repo = require('../4-repositories/HelpRequestRepo.js')
class HelpRequestService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new HelpRequestService();