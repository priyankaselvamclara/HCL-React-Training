import { Employeedata } from './employeeInterface.ts';
import React, { useState } from "react";
import {DisplayEmployee} from './displayEmployee'
var EmpData = require('./employeeData.json');
export function EditEmployee(props) {
  var data;
  var [isEditEmp, setIsEditEmp] = useState(false);
  var [empDetails, setEmpDetails] = useState({
    id: props.editDataProps.id,
    name: props.editDataProps.name,
    age: props.editDataProps.age,
    location: props.editDataProps.location,
    designation: props.editDataProps.designation
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = props.editDataProps.id; 
    const name = event.target.name; 
    const age = event.target.age; 
    const location = event.target.location; 
    const designation = event.target.designation; 
    var editedEmployeeData : Employeedata = {
        id: id,
        name: name.value,
        age: age.value,
        location: location.value,
        designation: designation.value
    }
    EmpData.forEach(ele => {
      if(ele.id == editedEmployeeData.id) {
        ele.name = editedEmployeeData.name;
        ele.age = editedEmployeeData.age;
        ele.location = editedEmployeeData.location;
        ele.designation = editedEmployeeData.designation;
      }
    })
    setIsEditEmp(true);
  };
  const updateEmpName = (val)=>{
    empDetails.name = val;
    setEmpDetails({name:empDetails.name});
  }
  const updateEmpAge= (val)=>{
    empDetails.age = val;
    setEmpDetails({name:empDetails.name});
  }
  const updateEmpLocation = (val)=>{
    empDetails.location = val;
    setEmpDetails({name:empDetails.name});
  }
  const updateEmpDesignation = (val)=>{
    empDetails.designation = val;
    setEmpDetails({name:empDetails.name});
  }
  
  return (
    <div className='editEmployee'>
      Edit Employee Details
      <form className="addEmpForm" onSubmit={handleSubmit}>
      <div>
        <label>
          <span>Emp Id:</span><input name="empId" value={empDetails.id} type="number"/>
        </label>
      </div>
      <div>
        <label>
          <span>Name:</span><input placeholder="Enter name" name="name" value={empDetails.name}  onChange={e => updateEmpName(e.target.value)} type="text"/>
        </label>
      </div>
      <div>
        <label>
        <span>Age:</span><input placeholder="Enter age"  value={empDetails.age} name="age" onChange={e => updateEmpAge(e.target.value)} type="text"/>
        </label>
      </div>
      <div>
        <label>
        <span>Location:</span><input placeholder="Enter location" value={empDetails.location}  onChange={e => updateEmpLocation(e.target.value)} name="location" type="text"/>
        </label>
      </div>
      <div>
        <label>
        <span>Designation:</span><input placeholder="Enter designation" value={empDetails.designation} onChange={e => updateEmpDesignation(e.target.value)} name="designation" type="text"/>
        </label>
      </div>
      <div>
      <button type="submit">submit</button>
      </div>
    </form>
    {isEditEmp &&
        <DisplayEmployee data={data}></DisplayEmployee>
    }
    </div>
  );
}
