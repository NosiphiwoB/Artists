const artistsSchema = require('../models/artistsSchema');
const genreSchema = require('../models/artistsSchema')
// const genreSchema = require('../models/genre')


const saveDetails = (app) => {
  
    app.post('/save_artist' , async (req, res) => {
        let {firstname , followers , awards , age} = req.body

    try{
        let post = new artistsSchema ({
            firstname , followers , awards, age
        })
        const postSaved = await post.save()
         
        res.send({massage:"Succesfully saved", postSaved})
    }catch (error) {
        console.error("post error", error)
        res.send({massage:"post error"}).status(403)
    }

    })

    app.get('/get_artist' , async (req, res) => {
        try {
            const findDetails = await artistsSchema.find()
            res.send(findDetails)
        }catch(error) {
            console.log('error', error)
        }
    })

    app.get('/:artistsById', async (req, res) => {
        var artistsId = req.params.artistsId
        const artistFound = await artistsSchema.find({_id : artistsId})
        res.json(artistFound)
    })

    app.delete('/delete_artist/:id' , async (req , res)  =>  {
        try{
            const {id} = req.params  
            const artistToDelete = await artistsSchema.deleteOne({_id : id})
            res.send({message: "deleted", artistToDelete})
        }catch(err){
            console.log(err);
            res.sendStatus(501)
        }
    })

    // app.put('/update_artist/:id' , async (req ,res) =>  {
    //     const id = req.params.id
    //     const updateData = req.body
    //     try{
    //      const foundArtist =  artistsSchema.findByIdAndUpdate(id);
    //         const foundArtist = await artistsSchema({id:updateData})
    //         res.send({message: "Updated", foundArtist})
    //         console.log(foundArtist)
    //     }catch(err){
    //         console.log(err)
    //     }
    // } )


app.put("/updade_artist/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result =  artistsSchema.findByIdAndUpdate(id, {firstname: req.body.firstname, followers: req.body.followers, awards: req.body.awards, age: req.body.age});
        if(result){
            res.send({message: "Updated", result})
            console.log(result)
            artistsSchema10.save()
        }else{
            res.send({message: "Not Updated"})
        }
    } catch (error) {
        console.log(err)
    }
})


    app.post('/save_genre' , async (req, res) => {
        let { genre, artist } = req.body

    try{
        let post = new genreSchema ({
            genre, artist
        })
        const postSaved = await post.save()
         
        res.send({massage:"Succesfully saved", postSaved})
    }catch (error) {
        console.error("post error", error)
        res.send({massage:"post error"}).status(403)
    }

    })


    app.get('/get_genre' , async (req, res) => {
        try {
            const findGenres = await genreSchema.find()
            res.send(findGenres)
        }catch(error) {
            console.log('error', error)
        }
    })
    
    
}



module.exports = {saveDetails}