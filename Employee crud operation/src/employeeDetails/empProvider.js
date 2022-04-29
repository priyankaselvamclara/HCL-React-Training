import React, { createContext, useState } from 'react';
var EmployeeData = require('./employeeData.json');

const EmpContext = createContext();
export const EmpProvider = ({ children }) => {
    var [empData, setEmpData] = useState(EmployeeData);
    /*setEmpData = newEmpData => {
        this.setState({ empData: setEmpData });
      };*/
    return (
      <EmpProvider.Provider value={{ empData }}>
        {children}
      </EmpProvider.Provider>
    );
  };
  export const EmpConsumer = EmpContext.Consumer;
/*export class UserProvider extends React.Component {
    setEmpData = newEmpData => {
    this.setState({ empData: setEmpData });
  };

  state = {
    username: 'user',
    updateUsername: this.updateUsername,
  };

  render() {
    return (
      <EmpContext.Provider value={this.state}>
        {this.props.children}
      </EmpContext.Provider>
    );
  }
}*/

