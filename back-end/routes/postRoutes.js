const artistsSchema = require('../models/artistsSchema')

const saveDetails = (app) => {
  
    app.post('/save_details' , async (req, res) => {
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

    app.get('/get_details' , async (req, res) => {
        try {
            const findDetails = await artistsSchema.find()
            res.send(findDetails)
        }catch(error) {
            console.log('error', error)
        }
    })

    app.get('/:artistsId', async (req, res) => {
        var artistsId = req.params.artistsId
        const artistFound = await artistsSchema.find({_id : artistsId})
        res.json(artistFound)
    })

    app.delete('/delete_artist/:_id' , async (req , res)  =>  {
        try{
            const {id} = req.params  
            const artistToDelete = await artistsSchema.deleteOne({id : _id})
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
    //         const foundArtist = await artistsSchema({id,updateData})
    //         res.send({message: "Updated", foundArtist})
    //     }catch(err){
    //         console.log(err)
    //     }
    // } )

    app.put('/update_artist/:id', function (req, res) {
        var id = req.id;
            id = artistsSchema(id, req.body);
            id.save(function(err) {
        if (err) {
            return res.send('/id', {
                errors: err.errors,
                id: id
            });
        } else {
            res.json(id);
        }   
      })
    });
    
}



module.exports = {saveDetails}