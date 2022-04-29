import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { DisplayEmployee } from './displayEmployee';
import { AddEmployee } from './addEmployee';
import { EditEmployee } from './editEmployee';
import { DeleteEmployee } from './deleteEmployee';
import { EmpProvider } from './empProvider';


export function EmployeeDashboard(props) {

  return (
    <div className='Employee'>
            <BrowserRouter > 
                <Routes>
                    <Route path="/" element={<DisplayEmployee />} />
                    <Route path="addEmployee" element={<AddEmployee />} />
                    <Route path="editEmpDet" element={<EditEmployee />} />
                    <Route path="deleteEmployee" element={<DeleteEmployee />} />
                </Routes>
            </BrowserRouter>
      
    </div>
  );
}
