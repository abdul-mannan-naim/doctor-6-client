import React from 'react';

const InfoSinglecard = ({card}) => {
    const {id, name,description,icon,bgClass }=card;
    return (
        <div class={`card text-white p-6 card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} className="  "  alt="Movie" />
            </figure>
            <div class="card-body">
                <h2 class="card-title"> {name} </h2>
                <p> {description} </p>
                
            </div>
        </div>
    );
};

export default InfoSinglecard;