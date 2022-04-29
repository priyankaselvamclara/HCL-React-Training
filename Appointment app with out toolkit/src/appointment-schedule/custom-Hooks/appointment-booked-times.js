import {useState , useEffect} from "react";
import { useAlert } from 'react-alert';

// Remember to start the name of your custom hook with "use"
function useAppointmentBookedTimes(initializer , componentName){
    const alert = useAlert();
    const [message , setMessage] = useState(initializer);
      console.log('message',message);
    // Increases the value of counter by 1
       function setmes(){
        setMessage(message);
        }
      
  
    useEffect(() => {
        // Some logic that will be used in multiple components
        if(message === "success") {
        console.log('am called hook');
        alert.show("The " 
        + componentName + " is submitted times succesfully.");
        }
        
    },[message]); 
      
    // Calls the useEffect hook if the counter updates
    return setmes;
}
  
export default useAppointmentBookedTimes;