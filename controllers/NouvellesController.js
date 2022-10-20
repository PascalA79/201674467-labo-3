const NouvelleModel = require('../models/nouvelle');
const Repository = require('../models/repository');
module.exports =
    class NouvellesController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext, new Repository(new NouvelleModel()));
        }
        put(data){
            data.Date=this.repository.get(data.Id).Date;
            super.put(data)
        }
        post(data){
            data.Date=Date.now();
            super.post(data)
        }
    }