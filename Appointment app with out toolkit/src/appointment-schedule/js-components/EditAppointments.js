import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import {Row, Col} from 'react-bootstrap';
import '../css-components/patient-details.css';
import { useLocation, useNavigate } from "react-router-dom";
import { editRecord } from "../../state/action-creator";
import { connect } from "react-redux"

function EditAppointments(props) {
    const { state } = useLocation();
    const [appointmentDet, setAppointmentDet] = useState(state);
    const [validated, setValidated] = useState(false); 
    const editTitle = (val)=>{
        setAppointmentDet({title:val});
        state.title = val;
    }
    const editDesc = (val)=>{
        setAppointmentDet({body:val});
        state.body = val;
    }
    
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === true) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        props.editRecord(state.id, state);
        setTimeout(() => {
            navigate('/appointments');
        }, 500)
      };
     
    return (
      <div className='editAppointments container'>
        <h3 className='mt-4 mb-4'>Edit Appointments</h3>
        <Form validated={validated} onSubmit={handleFormSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="12" className="form-block" controlId="validationCustomTitle">
                <Form.Label  className='col-md-2'>Appointment Title</Form.Label>
                <Form.Control  className='col-md-4 mb-3' 
                    required onChange={e => editTitle(e.target.value)}
                    type="text" name="title" value={appointmentDet.title} />
                    
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomDescription">
                <Form.Label className='col-md-2'>Appointment Description</Form.Label>
                <Form.Control className='col-md-4 mb-3' 
                    required onChange={e => editDesc(e.target.value)}
                    type="text"name="description" value={appointmentDet.body} />
            </Form.Group>
        </Row>
        <Button type="submit">Submit</Button>
    </Form>
    </div>
    );
  }
  

  
  const mapDispatchToProps = (dispatch) => {
    return {
      editRecord: (id,item) => dispatch(editRecord(id,item))
    }
  }
  
  export default connect(null, mapDispatchToProps)(EditAppointments)