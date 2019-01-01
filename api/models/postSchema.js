import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },

  first_name: {
    type: String,
    match: /^[a-zA-Z '.-]*$/,
    required: [true, 'first name is required...']
  },

  last_name: {
    type: String,
    match: /^[a-zA-Z '.-]*$/,
    required: [true, 'last name is required...']
  },

  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: [true, 'email is required...']
  },

  username: {
    type: String,
    match: /^[a-zA-Z0-9]+$/,
    required: [true, 'username is required...']
  },

  country: {
    type: String,
    required: [true, 'country is required...']
  },

  experience_level: {
    type: String,
    required: [true, 'experience level is required...']
  },

  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Posts', postSchema);