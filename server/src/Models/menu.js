const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    
    [{
        collectionId: { type: Schema.Types.ObjectId, ref: 'collection' },
        availabilty: {
            
            includeRange: [{
                recurring: [{
                startDate: date,
                endDate: date,
                day: [string],
                startTime: timestamp,
                endTime: timestamp,
                }],
                customRange: [{
                startDay: Date,
                endDay: Date,
                startTime: timestamp,
                endTime: timestamp,
                }]
            }],
            excludeRange: [{
                startDay: Date,
                endDay: Date,
                startTime: timestamp,
                endTime: timestamp,
            }]
        }
    }]

}, { timestamps: true });

module.exports = mongoose.model('menu', menuSchema);