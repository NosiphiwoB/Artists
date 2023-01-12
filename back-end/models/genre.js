const mongoose = require('mongoose')

const genreSchema = mongoose.Schema({
     
  genre: {
    type: String,
    require: true
  },
  artist:
   { type: mongoose.Schema.Types.ObjectId, ref: 'genre' }
  
}
)


module.exports = mongoose.model('genre', genreSchema);