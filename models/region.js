var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var RegionSchema = Schema({
    nativeId: { type: Number, require: true},
    parentId: { type: Number, require: true},
    code: { type: String, default:'00000000000', require: true} ,
    name: { type: String, require: true},
    shortName: String,
    groupName: String,
    phonics:  String,
    locale: { type: String, default:'all'} ,
    type: { type: String, require: true, enum: ['COUNTRY', 'PROVINCE', 'CITY', 'DISTRICT', 'TOWN']},
    valid: { type: Boolean, default: true},
    display: { type: Boolean, default: true},
    rank: { type: Number, require: true},
    subURL: String,
    parentIdList: { type: Array, require: true}
},{ timestamps: true, collection: 'common_region' });

mongoose.model('Region', RegionSchema);
