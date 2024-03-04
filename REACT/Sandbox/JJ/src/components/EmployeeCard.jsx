import { employeesJSON } from '../pages/emplooyeesJSON';
import { getImageUrl } from '../utils/getImageUrl';

export default function EmployeeCard({ name, age, imgSrc, isWorking }){

    const employees = employeesJSON.map((employee) => (
        <div className='w3-cell'>
            <img src={getImageUrl(employee)} alt="" width={150} height={150}/>
            <h4><b>{name}</b></h4>
            <p>Age: {employee.age}</p>
            <p>{employee.isWorking ? 'Working 🟢' : "Not working 🟠"}</p>
        </div>
    ) 
    
    );

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            {employees}
        </div>

    );
}