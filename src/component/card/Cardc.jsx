import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';

import {background,food} from '../../utils/clientimg'

import { useNavigate } from 'react-router-dom';
import "./Card.css"
const Cardc =({servicename,content,img})=>{


    const navigation =useNavigate();
    const handleReadmore=()=>{

        window.scrollTo({
            top: 0,
            behavior: 'instant',
          });
        if(servicename==="HOUSE KEEPING"){
            navigation("/Housecleaninggallery")
            return

        }
        if(servicename==="SECURITY"){
            navigation("/Security")

        }
        if(servicename==="CLEANING MATERIALS"){
            navigation("/Cleaning")

        }
        if(servicename==="PEST CONTROL"){
            navigation("/Pest")

        }
        if(servicename==="FIRE CREW"){
            navigation("/Fire")

        }
        if(servicename==="HVAC"){
            navigation("/Havc")

        }
        if(servicename==="ELECTRICALS"){
            navigation("/Electric")

        }
       
        
      }
    const backgroundimg=background();
    const foodimg =food();
    return (
        <>
         
                    <div style={{width:"250px"}} data-aos="fade-up"  className="col-lg-3 col-md-6 col-sm-12 ">
                        <div  className="bg-light rounded service-item card-shodow">
                            <div  className=" service-content d-flex align-items-center justify-content-center p-4">
                                <div className="service-content-icon text-center">
                               

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="205"
                                        image={img}
                                    />
                                   

                                    <h4 className="mb-3">{servicename}</h4>
                                    <p className="mb-4">{content}</p>
                                    <a onClick={handleReadmore} className="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
              
                
          
        </>
      );
}
export default Cardc;


export const TestimonyCard=({content,img})=>{


    return(
        <>
        <div className='testimon-card-container testimony-card-shadow'>
  
          <img className='testimony-logo' src={img} alt="" />

          <div className='testimony-card-text'>
            <p className="mb-4">
              {content}
            </p>
          </div>
            
          
        </div>
        
        </>
    )
}