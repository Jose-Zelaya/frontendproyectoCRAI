import React, { useEffect, useState } from 'react';
import { Campus } from '../../interfaces/Campus';
import CampusCard from '../CampusCard/CampusCard';
import Header from '../Header/Header';
import './MainContent.css';
import { apiConnection } from './../../api/apiConnection';

const MainContent = () => {
  const [campus, setCampus] = useState<Campus[]>([]);

  useEffect(() => {
    const getAllCampus = async () => {

      try {

        const response = await apiConnection.get<Campus[]>('campus/get-all-campus');
        if (!response.data) {
          console.log("NO HAY DATOS RECIBIDOS")
          return;
        }
        
        setCampus(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    getAllCampus();

  }, []);
  return (
    <>
      <Header />
      <div className="card-container">
        {
          campus.map((sede:Campus) => <CampusCard key={sede._id} sedes={sede} />)
        }
      </div>
    </>
  );
};

export default MainContent;
