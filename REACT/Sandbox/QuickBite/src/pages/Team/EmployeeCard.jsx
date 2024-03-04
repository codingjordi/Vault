import { employeesJSON } from '../emplooyeesJSON';
import { getImageUrl } from '../../utils/getImageUrl';

export default function EmployeeCard({ employee }){
     

    // const workingEmployees = employeesJSON.filter(employee => 
    //     employee.isWorking == true
    // );

    // const notWorkingEmployees = employeesJSON.filter(employee => 
    //     employee.isWorking == false
    // );

     

    return (
            <div className='w3-cell'>
                <img src={getImageUrl(employee)} className='w3-round-xlarge' alt={employee.name} width={150} height={150} />
                <h4><b>{employee.name}</b></h4>
                <p>Age: {employee.age}</p>
                <p>{employee.isWorking ? 'Working 🟢' : "Not working 🟠"}</p>
            </div>
    );
}