import { useNavigate } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
var EmployeeData = require('./provider.json');
require('react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css');

export function NewPatient(props) {
  const navigate = useNavigate();
  const columns = [ {
    dataField: 'name',
    text: 'Doctor name',
    filter: textFilter()
  },{
    dataField: 'qualification',
    text: 'Doctor Qualification',
    filter: textFilter()
  },{
    dataField: 'speciality',
    text: 'Doctor Speciality',
    filter: textFilter()
  },{
    dataField: 'healthCondition',
    text: 'Patients health Condition',
    filter: textFilter()
  },
  {
    dataField: 'location',
    text: 'Doctor Location',
    filter: textFilter()
  }];
  let products = EmployeeData;
  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`,row.id);
      navigate(`/patientDetails/${row.id}`);
    }
 }
  return (
    <div className='newPatient'>
      <h3>New Patient Appointment</h3>
      <BootstrapTable hover keyField='name' data={ products } rowEvents={ tableRowEvents } columns={ columns } filter={ filterFactory() } />
    </div>
  );
}
