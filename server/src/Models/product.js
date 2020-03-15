const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    
    productName: string,
    
    productItems: [{
        
        itemLabel: string, //default - null
        defaultRecipe: { type: Schema.Types.ObjectId, ref: 'recipes' }, //is from recipe database
        defaultState: {
             enum: ['ReadyToEat', 'MealKIt'],  //selects whether to show the RTE/Mealkit when page opens
        },
        recipeOptions: [{
            Id: { type: Schema.Types.ObjectId, ref: 'recipes' }, //is from recipe database
            mealKitServings: [{
                servingId: { type: Schema.Types.servingid, ref: 'recipes' },
                salesPrice: number,
                discount : {
                    active: boolean,
                    price: number,
                }
            }],
            readyToEatServings: [{
                servingId: { type: Schema.Types.servingid, ref: 'recipes' },
                salesPrice: number,
                discount : {
                    active: boolean,
                    price: number,
                }
            }],
                //accompanients can be of multiple types
            accompaniants: [{
                label: { type: Schema.Types.ObjectId, ref: 'menuLabels' }, //this will come from menulabels masterlist
                    // one accompanient can contain multiple product items
                accompanientItems: [{
                    accompanientItem: {
                        id: { type: Schema.Types.ObjectId, ref: 'product' },
                        discount: number, 
                }//this discount is applied on accompanient standard price when added with the product.
                }]
            }]
    
        }]
    }],
    
    
    deliveryModes: [{
    
    onDemand: {
        active: boolean,
        timeRange: number,
        },
    pickup: {
        active: boolean,
        timeRange: number,
        },
    preOrder: {
        active: boolean,
        timeRange: number,
      }
}]
    
   
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);



 