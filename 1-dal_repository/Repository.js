class Repository {

    constructor(data) {
        this.data = data;
    }
    
    async getAll(query) {
        try {
            return await this.data;
        }
        catch (error) {
            console.log(error);
            throw Error('error getting the list of data');
        }
    }
    async get(id) {
        try {
            const item = await this.data.filter(elem => elem.id == id);
            if (!item && !item[0]) {
                const error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            }

            return item[0];
        } catch (errors) {
            throw errors;
        }
    }

    // async insert(newItem) {
    //     try {
    //         this.data.push(newItem)
    //         item = newItem;
    //         if (item) {
    //             return new HttpResponse(item);
    //         }
    //         throw new Error('Something wrong happened');
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // async update(id, data) {
    //     try {
    //         const item = await this.model.findByIdAndUpdate(id, data, { 'new': true });
    //         return new HttpResponse(item);
    //     } catch (errors) {
    //         throw errors;
    //     }
    // }

    // async delete(id) {
    //     try {
    //         const item = await this.model.findByIdAndDelete(id);
    //         if (!item) {
    //             const error = new Error('Item not found');
    //             error.statusCode = 404;
    //             throw error;
    //         } else {
    //             return new HttpResponse(item, { 'deleted': true });
    //         }
    //     } catch (errors) {
    //         throw errors;
    //     }
    // }
}

module.exports = Repository;
