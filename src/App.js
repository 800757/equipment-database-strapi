import React, { useState } from 'react';
import './App.css';
import data from './data.json';

//function App() {

  //const [contacts, setContacts] = useState(data)
  const EditableTable = () => {
    const [equipmentData, setEquipmentData] = useState(data)
  
    const onChangeInput = (e, equipmentId) => {
      const { name, value } = e.target
  
      const editData = equipmentData.map((item) =>
        item.equipmentId === equipmentId && name ? { ...item, [name]: value } : item
      )
  
      setEquipmentData(editData)
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
        {equipmentData.map(({ equipmentId, equipmentType, equipmentName, employeeName, position, email }) => (
            <tr key={equipmentId}>
              <td className="id">
                <input
                  name="equipmentId"
                  value={equipmentId}
                  type="text"
                  onChange={(e) => onChangeInput(e, equipmentId)}
                  placeholder=" "
                />
              </td>
              <td className="type">
                <input
                  name="equipmentType"
                  value={equipmentType}
                  type="text"
                  onChange={(e) => onChangeInput(e, equipmentId)}
                  placeholder="Type"
                />
              </td>
              <td>
                <input
                  name="equipmentName"
                  value={equipmentName}
                  type="text"
                  onChange={(e) => onChangeInput(e, equipmentId)}
                  placeholder="Type Equipment Name"
                />
              </td>
              <td>
                <input
                  name="employeeName"
                  value={employeeName}
                  type="text"
                  onChange={(e) => onChangeInput(e, equipmentId)}
                  placeholder="Type Employee Name"
                />
              </td>
              <td>
                <input
                  name="position"
                  type="text"
                  value={position}
                  onChange={(e) => onChangeInput(e, equipmentId)}
                  placeholder="Type Position"
                />
              </td>
              <td>
                <input
                  name="email"
                  value={email}
                  type="text"
                  onChange={(e) => onChangeInput(e, equipmentId)}
                  placeholder="Type Email"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EditableTable;
//export default App;
