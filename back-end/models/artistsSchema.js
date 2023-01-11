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


const genreSchema = mongoose.Schema({
   id:{
    type:Number,
    require:true
   },
  genre:{
    type:[String],
    require:true
  }

})


module.exports = mongoose.model('post', artistsSchema)