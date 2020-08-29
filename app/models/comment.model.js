const mongoose = require('mongoose');
const FKHelper = require('./helpers/foreign-key-helper');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    
    content: {
		type: String,
		unique: true,
		required: true
    },
    tags: [{
        type: Schema.ObjectId,
        ref: 'Note',
        validate: {
            isAsync: true,
            validator: function(v){
                return FKHelper(mongoose.model('Note'), v);
            },
            message: `Note doesn't exist`
        }
    }]
}, {
    timestamps: true
});


module.exports = mongoose.model('Comment', CommentSchema);