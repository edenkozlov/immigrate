import React, { useState } from "react";
import Modal from "react-modal";
import "./myClients.scss";
import {Fade} from "react-reveal";

function MyClients() {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedClientCode, setSelectedClientCode] = useState("");
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);
  const [isProgress, setIsProgress] =useState(false);


  function handleAddClient() {
    const clientName = prompt("Enter client name:");
    if (clientName) {
      const code = Math.random().toString(36).substr(2, 6).toUpperCase();
      setClients([...clients, { name: clientName, code, cases: []}]);
    }
  }


  
  function handleClientClick(client) {
    setSelectedClientName(client.name);
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


  return (
    <Fade bottom duration={1000} distance="40px">
    <div>
      <div>
        <button className="myMargin" onClick={handleAddClient}>
        <i class="fas fa-user"></i> Add a new client
        </button>
        <button className="myMargin2" onClick={() => setIsHowItWorksModalOpen(true)}>
          How it works <i class="fas fa-question"></i>
        </button>
        </div>


      <Modal isOpen={isHowItWorksModalOpen} onRequestClose={() => setIsHowItWorksModalOpen(false)}>
  <h2>How It Works</h2>
  <ol>
    <li>Create a new client by clicking the "Add a new client" button.</li>
    <li>Enter the client's name and select the case type from the options provided.</li>
    <li>A referral code will be generated for the client. Share this code with the client to allow them to work on the case with your supervision.</li>
    <li>Click on the client's name to view their details and progress.</li>
    <li>Once the case progress is at 100% you will be able to "Automate Case!".</li>
  </ol>
  <button onClick={() => setIsHowItWorksModalOpen(false)}>Close</button>
</Modal>


      <div className="cen">
        {clients.length === 0 ? (
          <p>No Current Clients...</p>
        ) : (
          <table>
            <thead class="table-header">
              <tr>
                <th>Client Name</th>
                <th>Code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>
                    <button class="myMargin"onClick={() => handleClientClick(client)}>
                      {client.name}
                    </button>
                  </td>
                  <td>{client.code}</td>
                  <td class="center-button">
                    <button class="myMargin" onClick={() => confirmDeleteClient(index)}>
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Modal class="cen" isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
      <button className="myMargin2" onClick={() => setIsProgress(true)}>
          Progress <i class="fas fa-tasks"></i>
        </button>
        <Modal
  isOpen={isProgress}
  onRequestClose={() => setIsProgress(false)}
  style={{
    content: {
      width: '50%',
      height: '25%',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  }}
>
 
  <h2 class="cen">Progress:</h2>
  
  <div class="cen2">
        <button class="fade" onClick={() => setIsProgress(false)}>Close</button>
        </div>
</Modal>
        <h3>Client Name: {selectedClientName}</h3>
        <h4>Client Referral Code: {selectedClientCode}</h4>
        <h4>Case:</h4>

        <h4 class="cen">Check up on {selectedClientName}'s progress:</h4>

        <div class="button-row">
        <button class="fade">Step 1</button>
        <button class="fade">Step 2</button>
        </div>
        <div class="button-row">
        <button class="fade">Step 3</button>
        <button class="fade">Step 4</button>
        </div>
        <div class="button-row">
        <button class="fade">Step 5</button>
        <button class="fade">Step 6</button>
        </div>
        <br></br>
        <div class="cen">
        <button class="fade">Automate Case!</button>
        </div>
        <br></br>
        <div class="cen2">
        <button class="fade" onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
    </Fade>
  );
}

export default MyClients;
