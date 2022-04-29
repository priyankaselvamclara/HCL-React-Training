import React, { useState } from "react";
export function DeleteEmployee(props) {
  console.log('props',props);
  var [empDetails, setEmpDetails] = useState({
    id: props.deleteDataProps.id,
    name: props.deleteDataProps.name
  });
  return (
    <div className='deleteEmployee'>
     Employee {empDetails.name} deleted successfully!!!
    </div>
  );
}
