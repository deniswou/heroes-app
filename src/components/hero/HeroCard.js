import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';
 
export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    
  const imagePath = `/assets/${id}.jpg`;
  
    return (
        <Link to={`./hero/${id}`} className="my-card">
            <img src={imagePath} className="img img-responsive" alt={superhero} style={{flex: 'auto', width: '60vh'}}/>
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
