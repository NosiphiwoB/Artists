const mongoose = require('mongoose')

const artistsSchema = mongoose.Schema({
   firstname:{
    type: String,
    require: true
   },
   
   followers: {
     type: Number,
     require: true
   },
   awards: {
    type: [String],
    require: true
   },
   age: {
    type: Number,
    require: true
   }
}
)

module.exports = mongoose.model('post', artistsSchema)