const artistsSchema = require('../models/artistsSchema');
const genreSchema = require('../models/artistsSchema')
// const genreSchema = require('../models/genre')


const saveDetails = (app) => {
  
    app.post('/save_artist' , async (req, res) => {
        let {firstname , followers , awards , age} = req.body

    try{
        let post = new artistsSchema.Artist ({
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
            const findDetails = await artistsSchema.Artist.find()
            res.send(findDetails)
        }catch(error) {
            console.log('error', error)
        }
    })

    app.get('/:artistsById/:id', async (req, res) => {
        var {id} = req.params
        const artistFound = await artistsSchema.Artist.find({_id : id})
        console.log(artistFound)
        res.json(artistFound)
    })
    

    app.delete('/delete_artist/:id' , async (req , res)  =>  {
        try{
            const {id} = req.params  
            const artistToDelete = await artistsSchema.Artist.deleteOne({_id : id})
            res.send({message: "deleted", artistToDelete})
        }catch(err){
            console.log(err);
            res.sendStatus(501)
        }
    })


        app.put('/update_artist/:id', async (req, res) =>{
            const {id} = req.params
            const artistBody = req.body

            try {
                const artist = await artistsSchema.Artist.findByIdAndUpdate({_id : id , artistBody} );
                res.status(200).send({message: `Successfully updated` , data : artistBody})  
            } catch (error) {

                console.log(error)
                res.status(501)
                
            }
        
        })
        

    app.post('/save_genre' , async (req, res) => {
        let {genre} = req.body

    try{
        let post = new artistsSchema.Genre ({
            genre
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
            const findGenre = await artistsSchema.Genre.find()
            res.send(findGenre)
        }catch(error) {
            console.log('error', error)
        }
    })
    
    
}



module.exports = {saveDetails}