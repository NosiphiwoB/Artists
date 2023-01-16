import React from "react";


const Display = (props) =>{
    const {card, editArtist, deleteArtist} = props
    return(
        <div>

        <div id="cards" >{card.map((item) => {
            return(
                <card key={item.id} className="card">
                    <li >{item.firstname}</li>
                    <li>{item.followers}</li>
                    <li>{item.awards}</li>
                    <li>{item.members}</li>
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

