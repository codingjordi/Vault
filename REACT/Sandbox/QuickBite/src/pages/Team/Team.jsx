import Card from '../../components/Card.jsx';
import EmployeeCard from './EmployeeCard.jsx';
import {employeesJSON} from '../emplooyeesJSON.js';

export default function Team(){
  
  const employees = employeesJSON;

  // const workingEmployees = employees.filter(employee => employee.isWorking == true);
  // const notWorkingEmployees = employees.filter(employee => employee.isWorking == false);

  //No se com fer per que els empleats que treballin estiguin a Working y els que no a Resting, no se com mapejar i filtrar-ho.


    return (
      <div class="w3-container w3-section">
        <h1 style={{marginBottom: "2rem"}}>QuickBite Team</h1>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Card>
            <h2>Working</h2>
            <div style={{display: "flex", justifyContent: "space-between", gap: "3rem"}}>
              <EmployeeCard employee={employees[0]}></EmployeeCard>
              <EmployeeCard employee={employees[1]}></EmployeeCard>
            </div>
          </Card>
          <Card>
            <h2>Resting</h2>
            <div style={{display: "flex", justifyContent: "space-between",  gap: "3rem"}}>
              <EmployeeCard employee={employees[2]}></EmployeeCard>
              <EmployeeCard employee={employees[3]}></EmployeeCard>
            </div>
          </Card>
        </div>
      </div>
    );
}