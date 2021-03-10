import React from 'react';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx'
import './index.css';

const App = () => (
    <>
        <h1 className="heading_style"> List of top 5 Netflix series in 2021 </h1>
        {Sdata.map((val) => {            
            return (
                <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />  );          
        })}
    </>
);

export default App;
