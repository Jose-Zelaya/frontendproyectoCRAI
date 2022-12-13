import React from 'react';
import { Formik, Form, Field,} from 'formik';
import Header from '../Header/Header';
import './ReservationForm.css';
import { Button, formControlClasses } from '@mui/material';
import {useState } from "react";
import { apiConnection } from '../../api/apiConnection';
import axios from 'axios';
import { Reserva } from '../../interfaces/reserva';
import { convertTypeAcquisitionFromJson } from 'typescript';


interface MyFormValues {
  firstName: string;
}


export const ReservationForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' };


  const reserva = {
  id_sala : "6396a1aefbe2a6564d720cd3",
  nombre : "", 
  apellido : "",
  numcuenta : 0, 
  horas_reservadas: 0, 
  integrantes : ""
};

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-group">
          <h1 className='title-style'>Reservación</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <form className="fields-container" id = "Formulario">
              
              <input id="firstName" type= {'text'} name="firstName" placeholder="Primer Nombre" className="fields-form"
              onChange = {(e)=>{reserva.nombre = e.target.value}}
              />

              <input type= {'text'}
                id="firstLastName"
                name="firstLastName"
                placeholder="Primer Apellido"
                className="fields-form"
                onChange = {(e)=>{reserva.apellido = e.target.value}}
              />
              
              <input type= {'text'}
                id="studentCode"
                name="studentCode"
                placeholder="No. cuenta"
                className="fields-form"
                onChange = {(e)=>{reserva.numcuenta = parseInt(e.target.value)}}
              />

              <Field id="hours" as="select" name="hours" className="select-form"
              onchange = {reserva.horas_reservadas = 2 /*document?.getElementById("hours")?.innerText!*/}>
                <option value={1}>1 hora</option>
                <option value={2}>2 horas</option>
              </Field>

              <label htmlFor="membersTeam">Integrantes | No. Cuenta </label>

              <input type= {'text'} id="membersTeam" name="membersTeam" className="textarea-form" 
              onChange = {(e)=>{reserva.integrantes = e.target.value}}/>

              <button className="button-form"
               
               onClick={()=>{
                  
                  apiConnection.post("reserva/create-reserva",reserva).then(function (response) {
                  console.log("Enviado correctamente", reserva)})
                .catch(function (error) {
                  console.log("No se ha podido enviar",error);
                });
                document.getElementById("Formulario")?.onreset!
              }}>

                ENVIAR
              </button>

            </form>
          </Formik>
        </div>
      </div>
    </>
  );
};
