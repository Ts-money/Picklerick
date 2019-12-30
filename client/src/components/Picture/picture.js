import React from "react";
import "./picture.css";

function RickAndMortyPictures(props) {

    const display = { display: `${props.showInput}` };

    const movieProps = props.pictures.map(picture => (
        <div className="card" key={picture.id}>
            <img className="picture card-img-top" alt={picture.name} src={picture.image} onClick={() => props.handleIncrement(picture.id)} />
        </div>
    ));

    return (
        <div className="imgArea">
            {movieProps}
        </div>
    );

}

export default RickAndMortyPictures;