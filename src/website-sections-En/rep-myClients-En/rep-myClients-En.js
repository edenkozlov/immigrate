import React, { useState } from "react";
import Modal from "react-modal";
import "./rep-myClients-En.scss";
import { Fade } from "react-reveal";

function MyClients() {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedClientCode, setSelectedClientCode] = useState("");
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);
  const [isClientDetailsModalOpen, setIsClientDetailsModalOpen] = useState(false);
  const [selectedCaseType, setSelectedCaseType] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [middleNameInput, setMiddleNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  function handleAddClient() {
    setIsModalOpen(true);
  }

  function handleFirstNameChange(event) {
    setFirstNameInput(event.target.value);
  }

  function handleMiddleNameChange(event) {
    setMiddleNameInput(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastNameInput(event.target.value);
  }

  function generateCode() {
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "SSP";
    for (let i = 0; i < 3; i++) {
      code += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    setSelectedClientCode(code);
  }

  function handleClientClick(client) {
    setSelectedClientName(client.firstName);
    setSelectedClientCode(client.code);
    setIsClientDetailsModalOpen(true);
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
      const nameTypes = nameType.split(".");
      if (nameTypes.length > 1) {
        const clientIndex = parseInt(nameTypes[0]);
        const nestedNameType = nameTypes[1];
        newClients[clientIndex][nestedNameType] = newName;
      } else {
        newClients[index][nameType] = newName;
      }
      setClients(newClients);
    }
  }

  function handleSelectCaseType(caseType) {
    setIsModalOpen(false);
    const caseCode = generateCaseCode(caseType);
    const code = `${caseCode}`;
    setSelectedCaseType(caseType); // Add this line to set the selected case type
    setClients([
      ...clients,
      {
        firstName: firstNameInput,
        middleName: middleNameInput,
        lastName: lastNameInput,
        code,
        cases: [{ type: caseType }],
      },
    ]);
    setFirstNameInput("");
    setMiddleNameInput("");
    setLastNameInput("");
  }
  

  function generateCaseCode(caseType) {
    let prefix;
    switch (caseType) {
      case "Sponsorship Spousal":
        prefix = "SSP";
        break;
      case "Sponsorship Parental":
        prefix = "SPA";
        break;
      case "Sponsorship Child":
        prefix = "SCH";
        break;
      default:
        prefix = "";
        break;
    }
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 3; i++) {
      code += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return `${prefix}${code}`;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div>
        <div>
          <button className=" myMargin2" onClick={handleAddClient}>
            <i className="fas fa-user"></i> Add a client
          </button>
          <button
            className="myMargin topRight"
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
                      <i
                        className="fas fa-edit edit-icon"
                        onClick={() => handleEditName(index, "firstName")}
                      ></i>
                    </td>
                    <td>
                      <span>{client.middleName}</span>{" "}
                      <i
                        className="fas fa-edit edit-icon"
                        onClick={() => handleEditName(index, "middleName")}
                      ></i>
                    </td>
                    <td>
                      <span>{client.lastName}</span>{" "}
                      <i
                        className="fas fa-edit edit-icon"
                        onClick={() => handleEditName(index, "lastName")}
                      ></i>
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
          isOpen={isClientDetailsModalOpen}
          onRequestClose={() => setIsClientDetailsModalOpen(false)}
        >
          <h3>Client Name: {selectedClientName}</h3>
          <h4>Client Referral Code: {selectedClientCode}</h4>
          <h4>Case Type: {selectedCaseType}</h4>
          <h4 className="cen">Check up on {selectedClientName}'s progress:</h4>
          <iframe
            src={`http://localhost:3001/Signin/RefCode/new-page/${selectedClientCode}`}
            width="1400"
            height="650"
          ></iframe>

          <br />
          <div className="cen">
            <button className="fade">Automate Case!</button>
          </div>
          <div className="cen">
            <button className="fade" onClick={() => setIsClientDetailsModalOpen(false)}>
              Close
            </button>
          </div>
        </Modal>

        <Modal
          className="custom-modal-content"
          overlayClassName="custom-modal-overlay"
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={{
            content: {
              width: "500px", // Specify the desired width
              height: "300px", // Specify the desired height
              margin: "auto", // Center the modal horizontally
            },
          }}
        >
          <h2>Create Your Case</h2>
          <input
  type="text"
  value={firstNameInput}
  onChange={handleFirstNameChange}
  style={{ margin: "0 auto 4px", textAlign: "center" }}
  placeholder="Client's First Name"
/>
<input
  type="text"
  value={middleNameInput}
  onChange={handleMiddleNameChange}
  style={{ margin: "0 auto 4px", textAlign: "center" }}
  placeholder="Client's Middle Name"
/>
<input
  type="text"
  value={lastNameInput}
  onChange={handleLastNameChange}
  style={{ margin: "0 auto 4px", textAlign: "center" }}
  placeholder="Client's Last Name"
/>
            
          <button
            className="button2"
            onClick={() => handleSelectCaseType("Sponsorship Spousal")}
          >
            Sponsorship Spousal
          </button>
          <button
            className="button2"
            onClick={() => handleSelectCaseType("Sponsorship Parental")}
          >
            Sponsorship Parental
          </button>
          <button
            className="button2"
            onClick={() => handleSelectCaseType("Sponsorship Child")}
          >
            Sponsorship Child
          </button>
          <button
            className="button2"
            onClick={() => handleSelectCaseType("")}
          >
            some BS case
          </button>
        </Modal>
      </div>
    </Fade>
  );
}

export default MyClients;
