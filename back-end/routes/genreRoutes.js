const genreSchema = require('../models/genre')

const saveDetails = (app) => {

// app.post('/save_genre' , async (req, res) => {
//     let {artist , genre} = req.body

// try{
//     let post = new genreSchema ({
//         artist , genre
//     })
//     const postSaved = await post.save()
//     console.log("post") 
//     res.send({massage:"Succesfully saved", postSaved})
// }catch (error) {
//     console.error("post error", error)
//     res.send({massage:"post error"}).status(403)
// }

// });
}


module.exports = {saveDetails}