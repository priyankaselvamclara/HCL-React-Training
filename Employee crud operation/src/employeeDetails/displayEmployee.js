import { Link } from "react-router-dom";
import React, { useState } from "react";
import { EmpConsumer } from './empProvider';
import { EditEmployee } from "./editEmployee";
import { DeleteEmployee } from "./deleteEmployee";
var EmployeeData = require('./employeeData.json');

export function DisplayEmployee(props) {
  const [isEditEmp, setIsEditEmp] = useState(false);
  const [isDeleteEmp, setIsDeleteEmp] = useState(false);
  const [editData, setEditData] = useState('');
  const [deleteData, setDeleteData] = useState('');
  //const [empData, setEmpData] = useState(EmployeeData);
  const editEmpData = (ele) => {
    /*EmployeeData = EmployeeData.forEach(emp => {
      console.log('@@@@@@@@@@@@@@@2emp',emp);
      if(ele.id == emp.id) {
        console.log('@@@@@@@@@@@@@@@2emp',emp);
        ele.name = emp.name;
        ele.age = emp.age;
        ele.location = emp.location;
        ele.designation = emp.designation;
      }
    })
    setEmpData(EmployeeData);*/
    setIsEditEmp(true);
    setEditData(ele);
  }
  const deleteEmpData = (ele) => {
    setIsDeleteEmp(true);
    setDeleteData(ele);
    EmployeeData = EmployeeData.filter(emp => {
      return ele.id !== emp.id;
    })
  }
  return (  
          <div className='DisplayEmployee'>  
          <h1>Employee Details</h1>
           <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead> 
            <tbody>
              {EmployeeData.map((item, id) => (
                <tr key={id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.location}</td>
                  <td>{item.designation}</td>
                  <td><button onClick={()=>editEmpData(item)} >Edit Details</button></td>
                  <td><button onClick={()=>deleteEmpData(item)} >Delete Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="addEmpBtn"><Link to="/addEmployee">Add Employee</Link></button>
          { isEditEmp && <EditEmployee editDataProps={editData} />}
          { isDeleteEmp && <DeleteEmployee deleteDataProps={deleteData} />}
          </div>        
    )  
}