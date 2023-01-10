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

}



module.exports = {saveDetails}