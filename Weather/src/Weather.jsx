import React, { useContext, useEffect, useState } from "react";
import { loc } from "./App";
import Card from 'react-bootstrap/Card';
import './App.css';
import { Container } from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
const Weathernow = ()=>{
    const location = useContext(loc);
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a54d0d7983c626e644d021092c7e5154&units=metric`).then(response => response.json()).then(json=>
            setData(json)).catch(error => console.error(error));
            
    },[location]);
    
    if(!data){
        return <div> Loading....</div>
    }
    const major = data.weather[0].main;
    const des = data.weather[0].description;
    const temperature = data.main?.temp;
    const tem_min = data.main?.temp_min;
    const tem_max = data.main?.temp_max;
    const humi = data.main?.humidity;
    const press = data.main?.pressure;
    const feel_like = data.main?.feels_like;
    const visi = data.visibility;
    const wind_speed = data.wind?.speed;
    const direction = data.wind?.deg;
    const gus = data.wind?.gust;
    if(!data.weather){
        return <div>loading</div>
    }
    
    const url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
   
    return(
        <div>
             {console.log(data)}
             <h1>{location}</h1>
             <Row xs={1} md={2}>
             <Col>
                
            <Card style={{ width: '30rem' }} className="try">
      <Card.Body>
        <Card.Title>Current Weather</Card.Title>
        <Card.Text>
        <div><img src={url} alt="Loading..."></img></div>
        <div>Weather={major}</div>
        <div>Description={des}</div>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    
                
            <Card style={{ width: '30rem' }} className="try">
      <Card.Body>
        <Card.Title>Temperature</Card.Title>
        <Card.Text>
        <div>Temperature={temperature} Degree Celsius</div>
        <div>Min Temperature={tem_min} Degree Celsius</div>
        <div>Max Temperature={tem_max} Degree Celsius</div>
        <div>Feels like={feel_like} Degree Celsius</div>
        
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    
        <Col>
                
                <Card style={{ width: '30rem' }} className="try">
          <Card.Body>
            <Card.Title>Wind</Card.Title>
            <Card.Text>
            <div>Wind speed={wind_speed} </div>
        <div>Wind deg={direction} </div>
        
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        
        <Card style={{ width: '30rem' }} className="try">
          <Card.Body>
            <Card.Title>Wind</Card.Title>
            <Card.Text>
            <div>Visibility={visi} </div>
        <div>Humidity={humi} </div>
        <div>Pressure={press} </div>
        
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
       
        </Row>
            
        </div>
    )
}

export default Weathernow;