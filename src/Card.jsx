import React from 'react';
import Images from './Images.jsx'

function Card(props) {
    // console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc}/>
                    <div className="card_info">
                        <span className="card_category"> {props.title} </span>
                        <h3 className="card_title"> {props.sname} </h3>
                        <a href={props.link} target="_">
                            <button>Watch now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>);
}

export default Card;