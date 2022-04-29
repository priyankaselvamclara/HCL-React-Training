import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button} from "react-bootstrap";
import { Employeedata } from './employeeInterface.ts'
import { EmpProvider } from './empProvider';
import { DisplayEmployee } from "./displayEmployee";

var EmpData = require('./employeeData.json');
//var fs = require('fs').promises;

export function AddEmployee(props) {
    var data;
    var [newState, setnewState] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const empId = event.target.empId;
        const name = event.target.name; 
        const age = event.target.age; 
        const location = event.target.location; 
        const designation = event.target.designation; 
        var newEmployeeData : Employeedata = {
            empId: empId.value,
            name: name.value,
            age: age.value,
            location: location.value,
            designation: designation.value
        }
        data = EmpData.push(newEmployeeData);
        setnewState(previousState => {
            return { ...previousState, newState: true }
        });
    };
  return (
    <div className='addEmployee'>
     <h1>Add Employee</h1>
     <Form className="addEmpForm" onSubmit={handleSubmit}>
     <div>
        <label>
          <span>Emp Id:</span><input placeholder="Enter employee id" name="empId" type="text"/>
        </label>
      </div>
      <div>
        <label>
          <span>Name:</span><input placeholder="Enter name" name="name" type="text"/>
        </label>
      </div>
      <div>
        <label>
        <span>Age:</span><input placeholder="Enter age"  name="age" type="text"/>
        </label>
      </div>
      <div>
        <label>
        <span>Location:</span><input placeholder="Enter location" name="location" type="text"/>
        </label>
      </div>
      <div>
        <label>
        <span>Designation:</span><input placeholder="Enter designation" name="designation" type="text"/>
        </label>
      </div>
      <div>
      <Button type="submit">submit</Button>
      </div>
    </Form>
    {newState &&
        <DisplayEmployee data={data}></DisplayEmployee>
    }
    </div>
  );
}
