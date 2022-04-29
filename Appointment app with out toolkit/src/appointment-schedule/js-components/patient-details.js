import { PatientDetailsProvider } from '../patient-details-provider';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import {Row, Col} from 'react-bootstrap';
import '../css-components/patient-details.css';
import '../custom-Hooks/hook.css'
//import { ListAppointments } from './list-appointmnents';
import { useNavigate } from "react-router-dom";
//import useAppointmentBookedTimes from "../custom-Hooks/appointment-booked-times";

export function PatientDetails({children}) {
    
    var patientDetails;
    const [validated, setValidated] = useState(false); 
    const [patientDet, setPatientDet] = useState(null);
    //const [hookData, setHookData] = useState(null);
    //useAppointmentBookedTimes
    //const hookDetails = useAppointmentBookedTimes(); 
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        //hookDetails("success","PatientDetails");
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        patientDetails = {
            name: event.target[0].value,
            age: event.target[1].value,
            gender: event.target[2].value,
            email: event.target[3].value,
            phoneNumber: event.target[4].value,
            contactModeEmail: event.target[5].checked,
            contactModePhone: event.target[6].checked
        }
        setPatientDet(patientDetails);
        setTimeout(() => {
            navigate('/listAppointments');
        }, 500)
         // setHookData("success");
          //console.log('hookData',hookData);
          
      };
      /*const clickSubmit = (e) => {
        //useAppointmentBookedTimes(0 , "PatientDetails"); 
        console.log("^^^^^^^^^^^^^^^^^^",e.target.value)
        //e.preventDefault();
        
      }*/
      //const clickSubmit = useAppointmentBookedTimes("success" , "PatientDetails"); 
       
    return (
      <div className='patientDetails container'>
        <h3 className='mt-4 mb-4'>Patient Details</h3>
        <Form validated={validated} onSubmit={handleFormSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="12" className="form-block" controlId="validationCustomName">
                <Form.Label  className='col-md-2'>Name</Form.Label>
                <Form.Control  className='col-md-4 mb-3' 
                    required
                    type="text" name="name" 
                    placeholder="Name" />
                    
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomAge">
                <Form.Label className='col-md-2'>Age</Form.Label>
                <Form.Control className='col-md-4 mb-3' 
                    required
                    type="number"
                    placeholder="Age" />
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomGender">
                <Form.Label className='col-md-2'>Gender</Form.Label>
                <Form.Select className='col-md-4 mb-3' aria-label="select Gender" required>
                    <option>select menu</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                <Form.Label className='col-md-2'>Email</Form.Label>
                <Form.Control className='col-md-4 mb-3'
                    required
                    type="email" 
                    placeholder="Email"
                />
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomPhoneNo">
                <Form.Label className='col-md-2'>Phone Number</Form.Label>
                <Form.Control className='col-md-4 mb-3'
                    required 
                    type="number" minLength="8" maxLength="10"
                    placeholder="Phone Number"
                />
            </Form.Group>
            <Form.Group as={Col} md="12" id="contactMode" controlId="validationCustomContactMode">
                <Form.Label className='col-md-3'>Preferred mode of communication</Form.Label>
                <Form.Check id="email">
                    <Form.Check.Input type="Radio" isValid  name="group1"/>
                    <Form.Check.Label>Email</Form.Check.Label>
                </Form.Check>
                <Form.Check id="phone">
                    <Form.Check.Input type="Radio" isValid name="group1" />
                    <Form.Check.Label>Phone</Form.Check.Label>
                </Form.Check>
            </Form.Group>
        </Row>
        <Form.Group className="mb-12">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid" />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    <PatientDetailsProvider props={patientDet} />
    </div>
    );
  }
  