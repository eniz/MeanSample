'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  title: { type: String, default: '', trim: true },
  body: { type: String, default: '', trim: true },
  user: { type: Schema.ObjectId, ref: 'User' },
  comments: [{
  body: { type: String, default: '' },
  	user: { type: Schema.ObjectId, ref: 'User'},
  	createdAt: { type: Date, default: Date.now }
  }],
  image: {
    cdnUri: String,
    files: []
  },
  createdAt  : {type : Date, default : Date.now}
});

/**
 * Validations
 */
ArticleSchema.path('title').required(true, 'Article title cannot be blank');
ArticleSchema.path('body').required(true, 'Article body cannot be blank');

mongoose.model('Article', ArticleSchema);
