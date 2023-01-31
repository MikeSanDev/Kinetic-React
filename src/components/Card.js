import React, { useState } from 'react'

function Card() = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='top'>
                <img
                    className="card-img"
                    src={isHovered ? props.hoverImage : props.image}
                    alt={props.name}
                />
            </div>
            <div className="bottom">
                <h2 className="name">{props.name}</h2>
            </div>
        </div>
    );


}

export default Card