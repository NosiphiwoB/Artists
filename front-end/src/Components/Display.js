import React from "react";


const Display = (props) =>{
    const {card, editArtist, deleteArtist} = props
    return(
        <div>

        <div id="cards" >{card.map((item) => {
            return(
                <card key={item.id} className="card">
                    <p >{item.firstname}</p>
                    <p>{item.followers}</p>
                    <p>{item.awards}</p>
                    <p>{item.members}</p>
                    <div>
                    <button>E</button>
                    <button>X</button>
                    </div>
                </card>
            )
        })}</div>    
        </div>
    )

}

export default Display

