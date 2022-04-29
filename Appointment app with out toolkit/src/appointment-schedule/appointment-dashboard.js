import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import './css-components/appointment-dashboard.css';
import { connect, useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state/index"
import { fetchPosts } from "../state/action-creator";


function AppointmentDashboard(props) {
  const [key, setKey] = useState('patientPortal');
  console.log('state@@@@@@@@@@@@@2', props.state);
  return (
    <div className="container appointmentDashboard">
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="patientPortal" title="Patient Portal">
          <Button className="m-4" variant="primary"><Link to="/newPatient">New Patient</Link></Button>
          <Button className="m-4" variant="secondary" onClick={() => props.fetchPosts()}><Link to="/existingPatient">Existing Patient</Link></Button>
        </Tab>
        <Tab eventKey="call" title="Call the call-centre">
          <h2>Patient Appointment Scheduling Call Center Services</h2>
          <p>Could your medical office benefit from appointment scheduling? As the leading provider of outsourced call center solutions, 3C Contact Services teaches its partners the necessary customer service skills needed to engage and retain patients, customers, and clients. Call us today at 1-888-353-2335.</p>
          <article>
            <h3>Benefits of Appointment Scheduling Call Center Services</h3>
            <p>There are many benefits to using appointment scheduling service solutions.</p>
            <section>
              <h4>Staff Benefits</h4>
              <p>With appointment scheduling services, you can reduce the workload of your staff and free them up to work on other tasks for your office. A large percentage of your staff’s daily work is likely on scheduling appointments, which costs you time and money. By outsourcing this work, you can increase your staff’s responsibilities while avoiding overstaffing or understaffing problems. With appointment scheduling services, you can be assured that your appointment scheduling is handled with the utmost professionalism, minimizing the common issues that cost you time and revenue.</p>
            </section>
            <section>
              <h4>Patient Benefits</h4>
              <p>Patients receive higher quality service when your medical office uses patient appointment scheduling. They can schedule appointments at their own convenience, choosing from all available times and dates. With scheduling services, your patients can receive fast and professional service at any time of day, meaning that they will never struggle to schedule an appointment with your medical office. These services ensure that the process is easier and more stress-free for your patients.</p>
            </section>
            <section>
              <h4>Other Benefits</h4>
              <p>Patients receive higher quality service when your medical office uses patient appointment scheduling. They can schedule appointments at their own convenience, choosing from all available times and dates. With scheduling services, your patients can receive fast and professional service at any time of day, meaning that they will never struggle to schedule an appointment with your medical office. These services ensure that the process is easier and more stress-free for your patients.</p>
            </section>
            </article>
          </Tab>
        <Tab eventKey="helpDesk" title="Connect to front-desk office">
          <p>Connect to front-desk office where the assistant will fix an appointment on behalf of the patient via EHR.</p>
          <h5>call us at <b>83457890</b></h5>
        </Tab>
      </Tabs>

    </div>
  );
  }
  

  const mapStateToProps = (state) => {

    return {
      state: state
    }
  
  }
  
  
  
  const mapDispatchToProps = (dispatch) => {
  
    return {
  
      fetchPosts: () => dispatch(fetchPosts())
    }
  
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDashboard)