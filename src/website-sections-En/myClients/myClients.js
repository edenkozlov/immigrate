import React, { useState } from "react";
import Modal from "react-modal";
import "./myClients.scss";
import { Fade } from "react-reveal";

function MyClients() {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedClientCode, setSelectedClientCode] = useState("");
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);

  function handleAddClient() {
    const firstName = prompt("Enter client's first name:");
    const middleName = prompt("Enter client's middle name:");
    const lastName = prompt("Enter client's last name:");
    if (firstName && lastName) {
      const caseType = prompt("Enter case type:");
      const code = Math.random().toString(36).substr(2, 6).toUpperCase();
      setClients([
        ...clients,
        { firstName, middleName, lastName, code, cases: [{ type: caseType }] },
      ]);
    }
  }

  function handleClientClick(client) {
    setSelectedClientName(client.firstName);
    setSelectedClientCode(client.code);
    setIsModalOpen(true);
  }

  function handleDeleteClient(index) {
    const newClients = [...clients];
    newClients.splice(index, 1);
    setClients(newClients);
  }

  function confirmDeleteClient(index) {
    if (window.confirm("Are you sure you want to delete this client?")) {
      handleDeleteClient(index);
    }
  }

  function handleEditName(index, nameType) {
    const newName = prompt(`Enter the new ${nameType} for the client:`);
    if (newName) {
      const newClients = [...clients];
      newClients[index][nameType] = newName;
      setClients(newClients);
    }
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div>
        <div>
          <button className="button2 myMargin2" onClick={handleAddClient}>
            <i className="fas fa-user"></i> Add a client
          </button>
          <button
            className="myMargin topRight button2"
            onClick={() => setIsHowItWorksModalOpen(true)}
          >
            How it works <i className="fas fa-question"></i>
          </button>
        </div>

        <Modal
          isOpen={isHowItWorksModalOpen}
          onRequestClose={() => setIsHowItWorksModalOpen(false)}
        >
          <h2>How It Works</h2>
          <ol>
            <li>Create a new client by clicking the "Add a new client" button.</li>
            <li>Enter the client's name and select the case type from the options provided.</li>
            <li>A referral code will be generated for the client. Share this code with the client to allow them to work on the case with your supervision.</li>
            <li>Click on the client's name to view their details and progress.</li>
            <li>Once the case progress is at 100%, you will be able to "Automate Case!"</li>
          </ol>
          <button className="button2" onClick={() => setIsHowItWorksModalOpen(false)}>
            Close
          </button>
        </Modal>

        <div className="cen">
          {clients.length === 0 ? (
            <p>No Current Clients...</p>
          ) : (
            <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Code</th>
                <th>Case Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
  {clients.map((client, index) => (
   <tr key={index}>
   <td>
     <span>{client.firstName}</span>{" "}
     <i className="fas fa-edit edit-icon" onClick={() => handleEditName(index, "firstName")}></i>
   </td>
   <td>
     <span>{client.middleName}</span>{" "}
     <i className="fas fa-edit edit-icon" onClick={() => handleEditName(index, "middleName")}></i>
   </td>
   <td>
     <span>{client.lastName}</span>{" "}
     <i className="fas fa-edit edit-icon" onClick={() => handleEditName(index, "lastName")}></i>
   </td>
   <td>{client.code}</td>
   <td>{client.cases[0]?.type ?? "-"}</td>
   <td>
     <button className="button2 myMargin" onClick={() => handleClientClick(client)}>
       View Details
     </button>
     <button className="button2 myMargin" onClick={() => handleClientClick(client)}>
       Update Client
     </button>
     <button className="button2 myMargin" onClick={() => confirmDeleteClient(index)}>
       Delete
     </button>
   </td>
 </tr>
 
  ))}
</tbody>

          </table>
        )}
      </div>

      <Modal
  className="custom-modal-content"
  overlayClassName="custom-modal-overlay"
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)}
>
  
  <h3>Client Name: {selectedClientName}</h3>
  <h4>Client Referral Code: {selectedClientCode}</h4>
  <h4>
    Case Type:{" "}
    {clients.find((c) => c.firstName === selectedClientName)?.cases[0]?.type ?? "-"}
  </h4>
  <h4 className="cen">Check up on {selectedClientName}'s progress:</h4>
  
  <iframe src="http://localhost:3001/"></iframe>

  <br />
  <div className="cen">
    <button className="fade">Automate Case!</button>
  </div>
  <div className="cen">
    <button className="fade" onClick={() => setIsModalOpen(false)}>
      Close
    </button>
  </div>
</Modal>
</div>
</Fade>
);
}

export default MyClients;
