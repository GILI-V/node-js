const { insert } = require("../1-dal_repository/HelpRequestRepo");
class Service {
    constructor(repo) {
        this.repo = repo
    }
    
    async getAll(repos) {
        try {
            return await this.repo.getAll(repos)

        }
        catch (error) {
            console.log(error);
            throw Error('no data')
        }

    }

    async getById(id) {
        try {
            const item = await this.repo.getByid(id)
            if (!item) {
                const err = new Error('not found');
                err.statusCode = 404;
                throw err;
            }
            return item;
        }
        catch (error) {
            throw error
        }
    }

    async insert(data) {
        try {
            const item = await this.repo.insert(data)
            if (item) {
                return new httpResonce(item)
            }
            throw new Error('item for insert not found')
        }
        catch (error) {
            throw error;

        }
    }

    async update(id, data) {
        try {
            const item = await this.repo.update(id, data, { 'new': true });

            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

}
module.exports = Service;