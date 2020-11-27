const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true
    //add validation
  },
  createdAt: {
    type: Date,
    default: Date.now
    //use a getter method
  },
  //username,
  //reactions(replies)
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
