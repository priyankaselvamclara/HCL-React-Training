import React from "react";
import { ListAppointments } from "./js-components/list-appointmnents";
export const patientDetailsContext = React.createContext(null);

export function PatientDetailsProvider(props) {
    return(
        <patientDetailsContext.Provider value={props}>
            
              <ListAppointments />
            
        </patientDetailsContext.Provider>
    );
}

