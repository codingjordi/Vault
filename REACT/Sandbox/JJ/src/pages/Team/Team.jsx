import Card from '../../components/Card.jsx';
import EmployeeCard from '../../components/EmployeeCard.jsx';
import {employeesJSON} from '../emplooyeesJSON.js';

export default function Team(){
  
  const employees = employeesJSON;

    return (
      <div class="w3-content">
        <h1>QuickBite Team</h1>
        <Card>
          <h2>Working</h2>
          <EmployeeCard></EmployeeCard>
        </Card>
        <Card>
          <h2>Resting</h2>
        </Card>
      </div>
    );
}