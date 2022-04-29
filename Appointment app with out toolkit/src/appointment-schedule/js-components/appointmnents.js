import React, {useEffect, useState} from "react";
import { Button, Table } from "react-bootstrap";
//import { useDispatch } from "react-redux";
//import { bindActionCreators } from 'redux'
//import { actionCreators } from "../state/index"
import { connect } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPosts, deleteRecord } from "../../state/action-creator";
function Appointments(props) {
  let navigate = useNavigate();
  useEffect(()=>{
    if(props.state.fetch.data.length === 0) {
      props.fetchPosts();
    }
  },[])
  const editRecord = (selectedAppointments)=> {
    navigate('/editAppointments', {
      state: selectedAppointments
  })
  }
  return (
    <div>
      <h1>List of Appointments</h1>
      <Table striped bordered hover>
            <thead>
                <tr>
                  <th>User Id</th>
                  <th>Appointment Title</th>
                  <th>Appointment Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.state.fetch.data.map((appointment, i) => {
                        return (
                            <tr key={i}>
                                <td>{appointment.id}</td>
                                <td>{appointment.title}</td>
                                <td>{appointment.body}</td>
                                <td>
                                    <div className="d-flex">
                                        <Button variant="primary"
                                            className="d-flex ms-auto me-3" size="sm" onClick={()=>editRecord(appointment)}>Edit</Button>
                                        <Button variant="danger"
                                            className="d-flex ms-auto me-3" size="sm" onClick={()=>props.deleteRecord(appointment.id)}>Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>

    </div>
)
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deleteRecord: (id) => dispatch(deleteRecord(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointments)