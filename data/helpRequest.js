const enumes = require('./enum');
module.exports =
    [
        { id:1, location: 1, description: "puncture", phone: "0522104977", status: enumes.statues.waiting, numOfPersons: 2, priority: enumes.priority.low, volunteer: 12 },
        { id:2, location: 2, description: "puncture", phone: "0522104977", status: enumes.statues.finished, numOfPersons: 2, priority: enumes.priority.high, volunteer_code: 12 }
    ]