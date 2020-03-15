const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    
    name: string,
    priority: number, //acts like z-index in case of css that helps decide the priority between menus
    categories: [{
        category: { type: Schema.Types.ObjectId, ref: 'menuLabels' },
        products: [{type: Schema.Types.ObjectId, ref: 'product'}],
        subcategories: [{
            subcategory: { type: Schema.Types.ObjectId, ref: 'menuLabels' }, //this will come from menulabels masterlist
            products: [{type: Schema.Types.ObjectId, ref: 'product'}]
        }]
    }],
    active: boolean,
}, { timestamps: true });

module.exports = mongoose.model('collection', collectionSchema);