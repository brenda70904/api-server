class Collection {
    constructor(model) {
        this.model = model;
    }

    async create(json) {
        try {
            const record = await this.model.create(json);
            return record;
        } catch (e) {
            console.error("collection error");
            return e;
        };
    };

    async read(id = null) {
        try {
            if (!id) {
                const record = await this.model.findAll();
                return record;
            }else{
                const record = await this.model.findOne({where:{id}});
                return record;
            }
        } catch (e) {
            console.error("unable to get");
            return e;
        }
    }

    async update(data, id){
        try{
            // const record = await this.model.update(data, {where:{id}});
            let foundObj = await this.model.findOne({where:{id}});
            let record = await foundObj.update(data);
            return record;
        }catch(e){
            console.error("can't update");
        };
    };

    async delete(id){
        try{
            let record = await this.model.destory({where:{id}});
            return "record deleted";
        }catch(e){
            console.error("delete unsuccessful");
        };
    }

}


module.exports = Collection; 