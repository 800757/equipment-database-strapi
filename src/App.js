import React, { useEffect, useState } from 'react';
//import useFetch from './hooks/useFetch';

import './App.css';

//import data from './data.json';

export default function App() {
  const [equipment, setEquipment] = useState({});
  const [error, setError] = useState(null);


  try {
    useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetch("http://localhost:1337/api/equipments?populate=%2A")
        .then((response) => response.json())
        .then((json) => setEquipment(json));
    }, []);
  
    console.log(equipment);
  } catch (error) {
    setError(error)
  }

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="App-container">
       <h1 className="title">ReactJS Editable Table</h1>
       <table>
         <thead>
          <tr>
             <th>Id</th>
             <th>Equipment Type</th>
             <th>Equipment Name</th>
             <th>Employee Name</th>
             <th>Position</th>
             <th>Email</th>
           </tr>
         </thead>
         <tbody>
       {equipment.data?.map((equipment) => 
             <tr key={equipment.id}>
               <td className="id">
               {equipment.id}
               </td>
               <td className="type">
               {equipment.attributes.type}
               </td>
               <td>
               {equipment.attributes.name}
               </td>
               <td>
               {equipment.attributes.employee.data.attributes.name}
               </td>
               <td>
               {equipment.attributes.employee.data.attributes.committee}
               </td>
               <td>
               {equipment.attributes.employee.data.attributes.email}
               </td>
             </tr>
           )}
         </tbody>
      </table>
     </div>
  );
}
//export default EditableTable;
//export default App;
