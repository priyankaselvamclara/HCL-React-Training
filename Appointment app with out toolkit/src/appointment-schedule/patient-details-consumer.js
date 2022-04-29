//import { ExistingPatient } from "./existing-patient";
import { patientDetailsContext} from './patient-details-provider';

export const PatientDetailsConsumer = (Child) => (props) => (
    <patientDetailsContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </patientDetailsContext.Consumer>
  );