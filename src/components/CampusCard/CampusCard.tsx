import React from 'react';
import './CampusCard.css';
import { Link } from 'react-router-dom';
import { Campus } from '../../interfaces/Campus';
import { Button, Card, CardActions, CardContent } from '@mui/material';

interface CampusProps {
  sedes: Campus;
}

const CampusCard = ({ sedes }: CampusProps) => {
  return (
    <>
      <Card className="card">
        <img
          src={require(`../../assets/${sedes.nameImg}`)}
          alt="Campus"
          className="img-card"
        />
        <CardContent className="content-card">
          <p className="title-card">
            <span>{sedes.campusName}</span> {sedes.campusPlace}
          </p>
          <p className="title-card">
            {sedes.sedeName}
          </p>
          <p className="direction-campus-card">{sedes.campusDirection}</p>
        </CardContent>
        <CardActions className="card-actions">
          <Button variant="contained" className="button-card">
            <Link
              to={`/rooms/${sedes._id}`}
              style={{
                textDecoration: 'none',
                color: '#fff',
                width: '100%',
                height: '100%',
              }}
            >
              Reservar ahora
            </Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CampusCard;
