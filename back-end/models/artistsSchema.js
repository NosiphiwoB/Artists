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
     
  genre: {
    type: String,
    require: true
  },
  artist:
   { type: mongoose.Schema.Types.ObjectId, ref: 'genre' }
  
}
)


module.exports = mongoose.model('post', artistsSchema);
module.exports = mongoose.model('genre', genreSchema);
