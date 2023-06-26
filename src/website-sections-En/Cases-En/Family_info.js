import MyStyling from "./case-input-styling";
import DropdownStyle from "./case-dropdown-style";
import React, { useState } from "react";

function renderInput(id, label, value, maxLength, placeholder, handleChange) {
  return (
    <div>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        type="text"
        id={`input-${id}`}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

function renderDropdown(id, label, value, options, placeholder, handleChange) {
  return (
    <div>
      <label htmlFor={`dropdown-${id}`}>{label}</label>
      <select
        id={`dropdown-${id}`}
        value={value}
        style={DropdownStyle}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function FamilyInfo() {
  const [showInputs, setShowInputs] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);

  const handleHelloButtonClick = () => {
    setShowInputs(true);
    setFamilyMembers((prevMembers) => {
      const newMember = {
        id: prevMembers.length + 1,
        WhosFIllingForm: "",
        addressApp: "",
        fullNameRel: "",
        DOBRel: "",
        COBRel: "",
        maritalStatusRel: "",
        emailRel: "",
        addyRel: "",
        fullNameMother: "",
        DOBMother: "",
        COBMother: "",
        maritalStatusMother: "",
        emailMother: "",
        addyMother: "",
        fullNameFather: "",
        DOBFather: "",
        COBFather: "",
        maritalStatusFather: "",
        emailFather: "",
        addyFather: "",
        children: [],
        siblings: [],
        isYesNo: "",
      };
      return [...prevMembers, newMember];
    });
  };

  const handleRemoveAllInputs = () => {
    setFamilyMembers([]);
    setShowInputs(false);
  };

  const handleInputChange = (e, memberId, key, childIndex = null, siblingIndex = null) => {
    const updatedMembers = familyMembers.map((member) => {
      if (member.id === memberId) {
        if (childIndex !== null) {
          const updatedChildren = member.children.map((child, index) => {
            if (index === childIndex) {
              return {
                ...child,
                [key]: e.target.value,
              };
            }
            return child;
          });
          return {
            ...member,
            children: updatedChildren,
          };
        }
        if (siblingIndex !== null) {
          const updatedSiblings = member.siblings.map((sibling, index) => {
            if (index === siblingIndex) {
              return {
                ...sibling,
                [key]: e.target.value,
              };
            }
            return sibling;
          });
          return {
            ...member,
            siblings: updatedSiblings,
          };
        }
        return {
          ...member,
          [key]: e.target.value,
        };
      }
      return member;
    });

    setFamilyMembers(updatedMembers);
  };

  const handleRemoveFamilyMember = (memberId) => {
    const updatedMembers = familyMembers.filter((member) => member.id !== memberId);
    setFamilyMembers(updatedMembers);
  };

  

  const handleAddSibling = (memberId) => {
    const updatedMembers = familyMembers.map((member) => {
      if (member.id === memberId) {
        const newSiblingIndex = member.siblings.length + 1;
        const newSibling = {
          id: newSiblingIndex,
          relationshipSiblings: "",
          fullNameSiblings: "",
          DOBSiblings: "",
          COBSiblings: "",
          maritalStatusSiblings: "",
          emailSiblings: "",
          addySiblings: "",
        };
        return {
          ...member,
          siblings: [...member.siblings, newSibling],
        };
      }
      return member;
    });
    setFamilyMembers(updatedMembers);
  };

  const handleRemoveSibling = (memberId, siblingId) => {
    const updatedMembers = familyMembers.map((member) => {
      if (member.id === memberId) {
        const updatedSiblings = member.siblings.filter((sibling) => sibling.id !== siblingId);
        return {
          ...member,
          siblings: updatedSiblings,
        };
      }
      return member;
    });
    setFamilyMembers(updatedMembers);
  };

  function Divider() {
    return <hr style={{ borderTop: "2px solid #7D85C7", marginBottom: "20px" }} />;
  }


  function DividerGray() {
    return <hr style={{ borderTop: "1px dotted #808080", marginBottom: "20px" }} />;
  }

  //org involvement 

  const [inputSets, setInputSets] = React.useState([]);
  const handleRemoveSet = (setId) => {
    setInputSets((prevSets) => prevSets.filter((set) => set.id !== setId));
  };
  
  const handleAddAnother = () => {
    setInputSets((prevSets) => [
      ...prevSets,
      {
        id: Date.now(),
        from: '',
        to: '',
        organization: '',
        organizationType: '',
        activities: '',
        location: '',
      },
    ]);
  };

  //gov pos.
  const [governmentPositions, setGovernmentPositions] = React.useState([]);
  const handlePositionChange = (e, index, field) => {
    const { value } = e.target;
    setGovernmentPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions[index][field] = value;
      return updatedPositions;
    });
  };
  
  const handleRemovePosition = (index) => {
    setGovernmentPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions.splice(index, 1);
      return updatedPositions;
    });
  };
  
  const handleAddPosition = () => {
    setGovernmentPositions((prevPositions) => [
      ...prevPositions,
      {
        from: '',
        to: '',
        country: '',
        department: '',
        activities: '',
      },
    ]);
  };

  

  //service
  const [serviceHistory, setServiceHistory] = React.useState([]);
  const handleServiceChange = (e, index, field) => {
    const { value } = e.target;
    setServiceHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory[index][field] = value;
      return updatedHistory;
    });
  };
  
  const handleRemoveService = (index) => {
    setServiceHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory.splice(index, 1);
      return updatedHistory;
    });
  };
  
  const handleAddService = () => {
    setServiceHistory((prevHistory) => [
      ...prevHistory,
      {
        country: '',
        branch: '',
        from: '',
        to: '',
        rank: '',
        reason: '',
        combatDates: '',
      },
    ]);
  };


  //addy
  const [addressSets, setAddressSets] = React.useState([]);
  const handleAddressChange = (e, index, field) => {
    const { value } = e.target;
    setAddressSets((prevSets) =>
      prevSets.map((set, i) => {
        if (i === index) {
          return {
            ...set,
            [field]: value,
          };
        }
        return set;
      })
    );
  };
  
  const handleRemoveAddress = (index) => {
    setAddressSets((prevSets) => prevSets.filter((set, i) => i !== index));
  };
  
  const handleAddAddress = () => {
    setAddressSets((prevSets) => [
      ...prevSets,
      {
        from: '',
        to: '',
        street: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
      },
    ]);
  };

  //education
  const [highestEducation, setHighestEducation] = React.useState("");
  const [yearsOfEducation, setYearsOfEducation] = React.useState("");
  const [yearsOfElementarySchool, setYearsOfElementarySchool] = React.useState("");
  const [yearsOfSecondarySchool, setYearsOfSecondarySchool] = React.useState("");
  const [yearsOfUniversityCollege, setYearsOfUniversityCollege] = React.useState("");
  const [yearsOfTradeSchool, setYearsOfTradeSchool] = React.useState("");
  const [educationDetails, setEducationDetails] = React.useState([
    {
      id: 0,
      from: "",
      to: "",
      institution: "",
      cityCountry: "",
      certificate: "",
      fieldOfStudy: ""
    }
  ]);
  
  const handleAddEducationDetail = () => {
    setEducationDetails((prevDetails) => {
      const newId = prevDetails.length;
      return [
        ...prevDetails,
        {
          id: newId,
          from: "",
          to: "",
          institution: "",
          cityCountry: "",
          certificate: "",
          fieldOfStudy: ""
        }
      ];
    });
  };

  const handleHighestEducationChange = (e) => {
    const value = e.target.value;
    setHighestEducation(value);
  };
  
  const handleYearsOfEducationChange = (e) => {
    const value = e.target.value;
    setYearsOfEducation(value);
  };
  
  const handleYearsOfElementarySchoolChange = (e) => {
    const value = e.target.value;
    setYearsOfElementarySchool(value);
  };
  
  const handleYearsOfSecondarySchoolChange = (e) => {
    const value = e.target.value;
    setYearsOfSecondarySchool(value);
  };
  
  const handleYearsOfUniversityCollegeChange = (e) => {
    const value = e.target.value;
    setYearsOfUniversityCollege(value);
  };
  
  const handleYearsOfTradeSchoolChange = (e) => {
    const value = e.target.value;
    setYearsOfTradeSchool(value);
  };
  
 const handleRemoveEducationDetail = (id) => {
  setEducationDetails((prevDetails) =>
    prevDetails.filter((detail) => detail.id !== id)
  );
};

const handleEducationDetailChange = (id, field, value) => {
  setEducationDetails((prevDetails) =>
    prevDetails.map((detail) => {
      if (detail.id === id) {
        return { ...detail, [field]: value };
      }
      return detail;
    })
  );
};

const educationOptions = [
  "None",
  "Secondary or less",
  "Trade/Apprenticeship Certificate/Diploma",
  "Non-University Certificate/Diploma",
  "Post-Secondary – No Degree",
  "Bachelor’s Degree",
  "Post Graduate – No Degree",
  "Master’s Degree",
  "Doctorate - Ph D"
];

  //spouse's father info

  const [SpouseFatherFamily, setSpouseFatherFamily] = React.useState("");
  const handleSpouseFatherFamily = (e) => {
    const value = e.target.value;
    setSpouseFatherFamily(value);
  };

  const [SpouseFatherGiven, setSpouseFatherGiven] = React.useState("");
  const handleSpouseFatherGiven = (e) => {
    const value = e.target.value;
    setSpouseFatherGiven(value);
  };

  const [SpouseFatherDOB, setSpouseFatherDOB] = React.useState("");
  const handleSpouseFatherDOB = (e) => {
    const value = e.target.value;
    setSpouseFatherDOB(value);
  };

  const [SpouseFatherDOD, setSpouseFatherDOD] = React.useState("");
  const handleSpouseFatherDOD = (e) => {
    const value = e.target.value;
    setSpouseFatherDOD(value);
  };

  const [SpouseFatherTOB, setSpouseFatherTOB] = React.useState("");
  const handleSpouseFatherTOB = (e) => {
    const value = e.target.value;
    setSpouseFatherTOB(value);
  };

  const [SpouseFatherCOB, setSpouseFatherCOB] = React.useState("");
  const handleSpouseFatherCOB = (e) => {
    const value = e.target.value;
    setSpouseFatherCOB(value);
  };

    //spouse's Mother info

    const [SpouseMotherFamily, setSpouseMotherFamily] = React.useState("");
    const handleSpouseMotherFamily = (e) => {
      const value = e.target.value;
      setSpouseMotherFamily(value);
    };
  
    const [SpouseMotherGiven, setSpouseMotherGiven] = React.useState("");
    const handleSpouseMotherGiven = (e) => {
      const value = e.target.value;
      setSpouseMotherGiven(value);
    };
  
    const [SpouseMotherDOB, setSpouseMotherDOB] = React.useState("");
    const handleSpouseMotherDOB = (e) => {
      const value = e.target.value;
      setSpouseMotherDOB(value);
    };
  
    const [SpouseMotherDOD, setSpouseMotherDOD] = React.useState("");
    const handleSpouseMotherDOD = (e) => {
      const value = e.target.value;
      setSpouseMotherDOD(value);
    };
  
    const [SpouseMotherTOB, setSpouseMotherTOB] = React.useState("");
    const handleSpouseMotherTOB = (e) => {
      const value = e.target.value;
      setSpouseMotherTOB(value);
    };
  
    const [SpouseMotherCOB, setSpouseMotherCOB] = React.useState("");
    const handleSpouseMotherCOB = (e) => {
      const value = e.target.value;
      setSpouseMotherCOB(value);
    };

    const [childFatherInfo, setChildFatherInfo] = React.useState([]);

    const handleChildFatherFamily = (e, childIndex) => {
      const value = e.target.value;
      setChildFatherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], family: value };
        return updatedInfo;
      });
    };
    
    const handleChildFatherGiven = (e, childIndex) => {
      const value = e.target.value;
      setChildFatherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], given: value };
        return updatedInfo;
      });
    };
    
    const handleChildFatherDOB = (e, childIndex) => {
      const value = e.target.value;
      setChildFatherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], dob: value };
        return updatedInfo;
      });
    };
    
    const handleChildFatherDOD = (e, childIndex) => {
      const value = e.target.value;
      setChildFatherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], dod: value };
        return updatedInfo;
      });
    };
    
    const handleChildFatherTOB = (e, childIndex) => {
      const value = e.target.value;
      setChildFatherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], tob: value };
        return updatedInfo;
      });
    };
    
    const handleChildFatherCOB = (e, childIndex) => {
      const value = e.target.value;
      setChildFatherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], cob: value };
        return updatedInfo;
      });
    };
    
    //child's mother info
    const [childMotherInfo, setChildMotherInfo] = React.useState([]);
    
    const handleChildMotherFamily = (e, childIndex) => {
      const value = e.target.value;
      setChildMotherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], family: value };
        return updatedInfo;
      });
    };
    
    const handleChildMotherGiven = (e, childIndex) => {
      const value = e.target.value;
      setChildMotherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], given: value };
        return updatedInfo;
      });
    };
    
    const handleChildMotherDOB = (e, childIndex) => {
      const value = e.target.value;
      setChildMotherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], dob: value };
        return updatedInfo;
      });
    };
    
    const handleChildMotherDOD = (e, childIndex) => {
      const value = e.target.value;
      setChildMotherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], dod: value };
        return updatedInfo;
      });
    };
    
    const handleChildMotherTOB = (e, childIndex) => {
      const value = e.target.value;
      setChildMotherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], tob: value };
        return updatedInfo;
      });
    };
    
    const handleChildMotherCOB = (e, childIndex) => {
      const value = e.target.value;
      setChildMotherInfo((prevInfo) => {
        const updatedInfo = [...prevInfo];
        updatedInfo[childIndex] = { ...updatedInfo[childIndex], cob: value };
        return updatedInfo;
      });
    };
    
    //child's yes/no
    const [isChildImmigrating, setIsChildImmigrating] = React.useState([]);
    
    const handleChildImmigrating = (e, childIndex) => {
      const value = e.target.value === "Yes";
      setIsChildImmigrating((prevValues) => {
        const updatedValues = [...prevValues];
        updatedValues[childIndex] = value;
        return updatedValues;
      });
    };
    
    const handleRemoveChild = (memberId, childId) => {
      const updatedMembers = familyMembers.map((member) => {
        if (member.id === memberId) {
          const updatedChildren = member.children.filter((child) => child.id !== childId);
          return {
            ...member,
            children: updatedChildren,
          };
        }
        return member;
      });
      setFamilyMembers(updatedMembers);
    };
    
    const handleAddChild = (memberId) => {
      const updatedMembers = familyMembers.map((member) => {
        if (member.id === memberId) {
          const newChildIndex = member.children.length + 1;
          const newChild = {
            id: newChildIndex,
            relationshipChildren: "",
            fullNameChildren: "",
            DOBChildren: "",
            COBChildren: "",
            maritalStatusChildren: "",
            emailChildren: "",
            addyChildren: "",
          };
          return {
            ...member,
            children: [...member.children, newChild],
          };
        }
        return member;
      });
      setFamilyMembers(updatedMembers);
    };

    

    
  return (
    <div>
      <MyStyling />
      <div>
        <div>
          <button onClick={handleHelloButtonClick}>Add Family Member</button>
        </div>
        <br></br>
      </div>
      {showInputs && (
        <div>
          {familyMembers.map((member) => (
            <div key={member.id}>
              <div className="myrowfr">
                {renderDropdown(
                  `${member.id}-0`,
                  "Indicate whether you are filling out this form for:",
                  member.WhosFIllingForm,
                  [
                    "yourself (principal applicant)",
                    "on behalf of your family members 18 years of age or older",
                  ],
                  "Select an option",
                  (e) => handleInputChange(e, member.id, "WhosFIllingForm")
                )}
              </div>

              <h3>Relationship - Spouse, common-law partner or conjugal partner</h3>
              <div className="myrowfr">
                {renderInput(
                  `${member.id}-5`,
                  "Full Name",
                  member.fullNameRel,
                  20,
                  "insert full name here",
                  (e) => handleInputChange(e, member.id, "fullNameRel")
                )}
                {renderInput(
                  `${member.id}-6`,
                  "Date of Birth",
                  member.DOBRel,
                  7,
                  "Example: 2022/01/01",
                  (e) => handleInputChange(e, member.id, "DOBRel")
                )}
                {renderInput(
                  `${member.id}-7`,
                  "Country or territory of birth",
                  member.COBRel,
                  7,
                  "Example: 2022/01/01",
                  (e) => handleInputChange(e, member.id, "COBRel")
                )}
                {renderDropdown(
                  `${member.id}-8`,
                  "Marital Status",
                  member.maritalStatusRel,
                  ['Annulled Marriage', 'Common-Law', 'Divorced', 'Married', 'Separated', 'Single', 'Unknown', 'Widowed'],
                  "Select an option",
                  (e) => handleInputChange(e, member.id, "maritalStatusRel")
                )}
                {renderInput(
                  `${member.id}-9`,
                  "Email",
                  member.emailRel,
                  7,
                  "example@abc.com",
                  (e) => handleInputChange(e, member.id, "emailRel")
                )}
                {renderInput(
                  `${member.id}-10`,
                  "Date of death, if deceased (YYYY/MM/DD)",
                  member.addyRel,
                  7,
                  "1234 ave",
                  (e) => handleInputChange(e, member.id, "addyRel")
                )}
                {renderInput(
                  100,
                "Family name of spouse's father",
                SpouseFatherFamily,
                20,
                "Example: 1",
                handleSpouseFatherFamily
                )}
                {renderInput(
                  101,
                "Given name of spouse's father",
                SpouseFatherGiven,
                20,
                "Example: 1",
                handleSpouseFatherGiven
                )}
                {renderInput(
                  102,
                "Spouse's father date of birth (YYYY/MM/DD)",
                SpouseFatherDOB,
                10,
                "Example: 1",
                handleSpouseFatherDOB
                )}
                {renderInput(
                  103,
                "Spouse's father date of death, if deceased (YYYY/MM/DD)",
                SpouseFatherDOD,
                10,
                "Example: 1",
                handleSpouseFatherDOD
                )}
                {renderInput(
                  104,
                "Spouse's father town/city of birth",
                SpouseFatherTOB,
                10,
                "Example: 1",
                handleSpouseFatherTOB
                )}
                {renderInput(
                  105,
                "Spouse's father country of birth",
                SpouseFatherCOB,
                10,
                "Example: 1",
                handleSpouseFatherCOB
                )}
                {renderInput(
                  106,
                "Family name of spouse's Mother",
                SpouseMotherFamily,
                20,
                "Example: 1",
                handleSpouseMotherFamily
                )}
                {renderInput(
                  107,
                "Given name of spouse's Mother",
                SpouseMotherGiven,
                20,
                "Example: 1",
                handleSpouseMotherGiven
                )}
                {renderInput(
                  108,
                "Spouse's Mother date of birth (YYYY/MM/DD)",
                SpouseMotherDOB,
                10,
                "Example: 1",
                handleSpouseMotherDOB
                )}
                {renderInput(
                  109,
                "Spouse's Mother date of death, if deceased (YYYY/MM/DD)",
                SpouseMotherDOD,
                10,
                "Example: 1",
                handleSpouseMotherDOD
                )}
                {renderInput(
                  110,
                "Spouse's Mother town/city of birth",
                SpouseMotherTOB,
                10,
                "Example: 1",
                handleSpouseMotherTOB
                )}
                {renderInput(
                  111,
                "Spouse's Mother country of birth",
                SpouseMotherCOB,
                10,
                "Example: 1",
                handleSpouseMotherCOB
                )}


              {renderDropdown(
  `${member.id}-yesno`,
  "Is your spouse immigrating with you",
  member.isYesNo,
  ["Yes", "No"],
  "Select an option",
  (e) => handleInputChange(e, member.id, "isYesNo")
)}
</div>
<div>
{member.isYesNo === "Yes" && (
  <div>
    {renderDropdown(
      `${member.id}-additional`,
      "Indicate whether you are filling out this form for:",
      member.additionalForm,
      [
        "Yourself (the principal applicant)",
        "On behalf of any of your family members 18 years of age or older",
      ],
      "Select an option",
      (e) => handleInputChange(e, member.id, "additionalForm")
    )}

    {/* Additional inputs when the answer is Yes */}
    <h3>Questionnaire: Have any of your family members listed in this application, ever:</h3>
    {renderDropdown(
      `${member.id}-crimeConvicted`,
      "Been convicted of a crime or offence in Canada for which a pardon has not been granted under the Criminal Records Act of Canada?",
      member.crimeConvicted,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "crimeConvicted")
    )}

    {renderDropdown(
      `${member.id}-crimeConvictedOtherCountry`,
      "Been convicted of or are currently charged with, on trial for, or party to a crime or offence, or subject of any criminal proceedings in any other country or territory?",
      member.crimeConvictedOtherCountry,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "crimeConvictedOtherCountry")
    )}

    {renderDropdown(
      `${member.id}-previousClaims`,
      "Made previous claims for refugee protection in Canada or at a Canadian visa office abroad, in any other country(ies) or territory(ies), or with the United Nations High Commissioner for Refugees (UNHCR)?",
      member.previousClaims,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "previousClaims")
    )}

    {renderDropdown(
      `${member.id}-refusedStatus`,
      "Been refused refugee status, an immigrant or permanent resident visa (including a Certificat de Sélection du Québec [CSQ] or application to the Provincial Nominee Program) or a visitor or temporary resident visa, for Canada or any other country or territory?",
      member.refusedStatus,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "refusedStatus")
    )}

    {renderDropdown(
      `${member.id}-refusedAdmission`,
      "Been refused admission to, or ordered to leave, Canada or any other country or territory?",
      member.refusedAdmission,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "refusedAdmission")
    )}

    {renderDropdown(
      `${member.id}-actOfGenocide`,
      "Been involved in an act of genocide, in a war crime or in the commission of a crime against humanity?",
      member.actOfGenocide,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "actOfGenocide")
    )}

    {renderDropdown(
      `${member.id}-armedStruggle`,
      "Ued, planned or advocated the use of armed struggle or violence to reach political, religious or social objectives?",
      member.armedStruggle,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "armedStruggle")
    )}

    {renderDropdown(
      `${member.id}-associatedWithGroup`,
      "Been associated with a group that used, uses, or advocated or advocates the use of armed struggle or violence to reach political, religious or social objectives?",
      member.associatedWithGroup,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "associatedWithGroup")
    )}

    {renderDropdown(
      `${member.id}-criminalActivity`,
      "Been a member of an organization that is or was engaged in an activity that is part of a pattern of criminal activity?",
      member.criminalActivity,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "criminalActivity")
    )}
    
    {renderDropdown(
      `${member.id}-detained`,
      "Have been detained, incarcerated or put in jail?",
      member.detained,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "detained")
    )}

    {renderDropdown(
      `${member.id}-seriousDisease`,
      "Have had any serious disease or physical or mental disorder?",
      member.seriousDisease,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "seriousDisease")
    )}

    {renderInput(
      `${member.id}-additionalDetails`,
      "If the answer to any of these questions is yes, please provide details below (maximum 679 characters):",
      member.additionalDetails,
      679,
      "Enter details here",
      (e) => handleInputChange(e, member.id, "additionalDetails")
    )}

<h3>What organizations have you supported, been a member of or been associated with? Include any political, social, youth or student organization, trade unions and professional associations. Do not use abbreviations. Indicate the city and country or territory where you were a member. Write “none” in the first input field if you have not been a member of any association/organization.</h3>
            {inputSets.map((inputSet) => (
        <div key={inputSet.id}>
          <div className="myrowfr">
            {renderInput(
              `${inputSet.id}-from`,
              'From (YYYY/MM)',
              inputSet.from,
              10,
              'Example: 2021/01',
              (e) => handleInputChange(e, inputSet.id, 'from')
            )}
            {renderInput(
              `${inputSet.id}-to`,
              'To (YYYY/MM)',
              inputSet.to,
              10,
              'Example: 2022/12',
              (e) => handleInputChange(e, inputSet.id, 'to')
            )}
            {renderInput(
              `${inputSet.id}-organization`,
              'Name of organization',
              inputSet.organization,
              100,
              'Example: ABC Corporation',
              (e) => handleInputChange(e, inputSet.id, 'organization')
            )}
            {renderInput(
              `${inputSet.id}-organizationType`,
              'Type of organization',
              inputSet.organizationType,
              100,
              'Example: Technology Company',
              (e) => handleInputChange(e, inputSet.id, 'organizationType')
            )}
            {renderInput(
              `${inputSet.id}-activities`,
              'Activities and/or positions held within organization',
              inputSet.activities,
              100,
              'Example: Software Developer',
              (e) => handleInputChange(e, inputSet.id, 'activities')
            )}
            {renderInput(
              `${inputSet.id}-location`,
              'City and country/territory',
              inputSet.location,
              100,
              'Example: New York, USA',
              (e) => handleInputChange(e, inputSet.id, 'location')
            )}
            <div class="myrowfr">
            <button onClick={() => handleRemoveSet(inputSet.id)}>Remove</button>
            </div>
          </div>
          {inputSets.length > 1 && <DividerGray />}
        </div>
      ))}
      {/* Existing sections */}
      <div >
        <button onClick={handleAddAnother}>Add</button>
      </div>
  
<h3>List any government positions (such as civil servant, judge, police officer, employee in a security organization) you have held. Include positions you have held before or after your retirement. Do not use abbreviations. Write “none” in the first input field if you have not held any government positions.</h3>

      {governmentPositions.map((position, index) => (
  <div key={index} className="myrowfr">
    {renderInput(
      `from-${index}`,
      'From (YYYY/MM)',
      position.from,
      10,
      'Example: 2021/01',
      (e) => handlePositionChange(e, index, 'from')
    )}

    {renderInput(
      `to-${index}`,
      'To (YYYY/MM)',
      position.to,
      10,
      'Example: 2022/12',
      (e) => handlePositionChange(e, index, 'to')
    )}

    {renderInput(
      `country-${index}`,
      'Country/territory and level of jurisdiction',
      position.country,
      100,
      'Example: USA, National',
      (e) => handlePositionChange(e, index, 'country')
    )}

    {renderInput(
      `department-${index}`,
      'Department/branch',
      position.department,
      100,
      'Example: Ministry of Finance',
      (e) => handlePositionChange(e, index, 'department')
    )}

    {renderInput(
      `activities-${index}`,
      'Activity and/or positions held',
      position.activities,
      100,
      'Example: Policy Development',
      (e) => handlePositionChange(e, index, 'activities')
    )}
   

<div >
      <button onClick={() => handleRemovePosition(index)}>Remove</button>
      
      </div>
      <div>
          {inputSets.length > 1 && <DividerGray />}
        </div>
  </div>
))}
<button onClick={handleAddPosition}>Add Position</button>

<h3>Provide complete details of military and paramilitary service for each of the countries in whose armed forces you served. Write “none” in the first input field if you have not undertaken military and/or paramilitary service. Note: Please ensure that you do not leave any gaps in time.</h3>
{serviceHistory.map((service, index) => (
  <div key={index}>
    <div className="myrowfr">
      {renderInput(
        `country-${index}`,
        'Name of country or territory',
        service.country,
        100,
        'Example: USA',
        (e) => handleServiceChange(e, index, 'country')
      )}

      {renderInput(
        `branch-${index}`,
        'Branch of service, unit numbers and names of commanding officers',
        service.branch,
        100,
        'Example: Army, 1st Infantry Division',
        (e) => handleServiceChange(e, index, 'branch')
      )}

      {renderInput(
        `from-${index}`,
        'From (YYYY/MM)',
        service.from,
        10,
        'Example: 2021/01',
        (e) => handleServiceChange(e, index, 'from')
      )}

      {renderInput(
        `to-${index}`,
        'To (YYYY/MM)',
        service.to,
        10,
        'Example: 2022/12',
        (e) => handleServiceChange(e, index, 'to')
      )}

      {renderInput(
        `rank-${index}`,
        'Rank(s)',
        service.rank,
        50,
        'Example: Captain',
        (e) => handleServiceChange(e, index, 'rank')
      )}

      {renderInput(
        `reason-${index}`,
        'Reason for end of service',
        service.reason,
        100,
        'Example: Honorable discharge',
        (e) => handleServiceChange(e, index, 'reason')
      )}

      {renderInput(
        `combatDates-${index}`,
        'Dates and places of any active combat',
        service.combatDates,
        100,
        'Example: 2010-2012, Iraq',
        (e) => handleServiceChange(e, index, 'combatDates')
      )}

      <div>
        <button onClick={() => handleRemoveService(index)}>Remove</button>
      </div>
    </div>
    {index !== serviceHistory.length - 1 && <DividerGray />}
  </div>
))}

<button onClick={handleAddService}>Add Service</button>
          
        
<h3>List all addresses where you have lived in the past 10 years or since your 18th birthday if it was less than 10 years ago. Do not use P.O. box addresses.</h3>

{addressSets.map((addressSet, index) => (
  <div key={index}>
    <div className="myrowfr">
      {renderInput(
        `from-${index}`,
        'From (YYYY/MM)',
        addressSet.from,
        10,
        'Example: 2021/01',
        (e) => handleAddressChange(e, index, 'from')
      )}
      {renderInput(
        `to-${index}`,
        'To (YYYY/MM)',
        addressSet.to,
        10,
        'Example: 2022/12',
        (e) => handleAddressChange(e, index, 'to')
      )}
      {renderInput(
        `street-${index}`,
        'Street and number',
        addressSet.street,
        100,
        'Example: 123 Main St',
        (e) => handleAddressChange(e, index, 'street')
      )}
      {renderInput(
        `city-${index}`,
        'City or town',
        addressSet.city,
        100,
        'Example: New York',
        (e) => handleAddressChange(e, index, 'city')
      )}
      {renderInput(
        `province-${index}`,
        'Province, state or district',
        addressSet.province,
        100,
        'Example: New York',
        (e) => handleAddressChange(e, index, 'province')
      )}
      {renderInput(
        `country-${index}`,
        'Country or territory',
        addressSet.country,
        100,
        'Example: USA',
        (e) => handleAddressChange(e, index, 'country')
      )}
      {renderInput(
        `postalCode-${index}`,
        'Postal code or zip code',
        addressSet.postalCode,
        10,
        'Example: 12345',
        (e) => handleAddressChange(e, index, 'postalCode')
      )}
      <div>
        <button onClick={() => handleRemoveAddress(index)}>Remove</button>
      </div>
    </div>
    {index !== addressSets.length - 1 && <DividerGray />}
    {/* Add the gray divider after every set except the last one */}
  </div>
))}
{addressSets.length > 0 && <div><DividerGray /></div>}
{/* Add the gray divider if there is at least one address set */}
<button onClick={handleAddAddress}>Add Address</button>
  </div>
)}
<h3>Education Information</h3>
      <div className="myrowfr">
        {renderDropdown(
          0,
          "Enter your highest level of education (required)",
          highestEducation,
          educationOptions,
          "Select level of education",
          handleHighestEducationChange
        )}
        {renderInput(
          1,
          "Number of years of education in total (required)",
          yearsOfEducation,
          2,
          "Example: 12",
          handleYearsOfEducationChange
        )}

        {renderInput(
          2,
          "Number of years of elementary/primary school (required)",
          yearsOfElementarySchool,
          2,
          "Example: 6",
          handleYearsOfElementarySchoolChange
        )}

        {renderInput(
          3,
          "Number of years of secondary/high school (required)",
          yearsOfSecondarySchool,
          2,
          "Example: 3",
          handleYearsOfSecondarySchoolChange
        )}

        {renderInput(
          4,
          "Number of years of university/college (required)",
          yearsOfUniversityCollege,
          2,
          "Example: 1",
          handleYearsOfUniversityCollegeChange
        )}

        {renderInput(
          5,
          "Number of years of trade school or other post-secondary school (required)",
          yearsOfTradeSchool,
          2,
          "Example: 0",
          handleYearsOfTradeSchoolChange
        )}
      </div>

<h4>
        Give full details of all the secondary and post-secondary education
        (including university, college, and apprenticeship training) they have
        had.
      </h4>
      {educationDetails.map((detail) => (
  <div key={detail.id}>
    <div className="myrowfr">
      {renderInput(
        `${detail.id}-from`,
        "From (YYYY/MM)",
        detail.from,
        7,
        "Example: 2022/01",
        (value) =>
          handleEducationDetailChange(detail.id, "from", value.target.value)
      )}
      {renderInput(
        `${detail.id}-to`,
        "To (YYYY/MM)",
        detail.to,
        7,
        "Example: 2022/12",
        (value) =>
          handleEducationDetailChange(detail.id, "to", value.target.value)
      )}
      {renderInput(
        `${detail.id}-institution`,
        "Name of institution",
        detail.institution,
        24,
        "Example: ABC University",
        (value) =>
          handleEducationDetailChange(detail.id, "institution", value.target.value)
      )}
      {renderInput(
        `${detail.id}-cityCountry`,
        "City and country/territory",
        detail.cityCountry,
        21,
        "Example: New York, USA",
        (value) =>
          handleEducationDetailChange(detail.id, "cityCountry", value.target.value)
      )}
      {renderInput(
        `${detail.id}-certificate`,
        "Type of certificate or diploma issued",
        detail.certificate,
        17,
        "Example: Computer Science",
        (value) =>
          handleEducationDetailChange(detail.id, "certificate", value.target.value)
      )}
      {renderInput(
        `${detail.id}-fieldOfStudy`,
        "Field of study",
        detail.fieldOfStudy,
        17,
        "Example: Computer Science",
        (value) =>
          handleEducationDetailChange(detail.id, "fieldOfStudy", value.target.value)
      )}
    </div>
    {detail.id === educationDetails.length - 1 && (
      <button onClick={handleAddEducationDetail}>Add Another</button>
    )}
    {detail.id !== 0 && (
      <button onClick={() => handleRemoveEducationDetail(detail.id)}>
        Remove
      </button>
    )}
    <br></br>
  </div>
))}



              </div>
              <h3>Relationship - Mother</h3>
              <div className="myrowfr">
                {renderInput(
                  `${member.id}-11`,
                  "Full Name",
                  member.fullNameMother,
                   20,
                  "insert full name here",
                  (e) => handleInputChange(e, member.id, "fullNameMother")
                )}
                {renderInput(
                  `${member.id}-12`,
                  "Date of Birth",
                  member.DOBMother,
                  7,
                  "Example: 2022/01/01",
                  (e) => handleInputChange(e, member.id, "DOBMother")
                )}
                {renderInput(
                  `${member.id}-13`,
                  "Country or territory of birth",
                  member.COBMother,
                  7,
                  "Example: 2022/01/01",
                  (e) => handleInputChange(e, member.id, "COBMother")
                )}
                {renderDropdown(
                  `${member.id}-14`,
                  "Marital Status",
                  member.maritalStatusMother,
                  ['Annulled Marriage', 'Common-Law', 'Divorced', 'Married', 'Separated', 'Single', 'Unknown', 'Widowed'],
                  "Select an option",
                  (e) => handleInputChange(e, member.id, "maritalStatusMother")
                )}
                {renderInput(
                  `${member.id}-15`,
                  "Email",
                  member.emailMother,
                  7,
                  "example@abc.com",
                  (e) => handleInputChange(e, member.id, "emailMother")
                )}
                {renderInput(
                  `${member.id}-16`,
                  "Provide address below. If deceased, give city or town, country or territory and date",
                  member.addyMother,
                  7,
                  "1234 ave",
                  (e) => handleInputChange(e, member.id, "addyMother")
                )}
              </div>
              <h3>Relationship - Father</h3>
              <div className="myrowfr">
                {renderInput(
                  `${member.id}-17`,
                  "Full Name",
                  member.fullNameFather,
                  20,
                  "insert full name here",
                  (e) => handleInputChange(e, member.id, "fullNameFather")
                )}
                {renderInput(
                  `${member.id}-18`,
                  "Date of Birth",
                  member.DOBFather,
                  7,
                  "Example: 2022/01/01",
                  (e) => handleInputChange(e, member.id, "DOBFather")
                )}
                {renderInput(
                  `${member.id}-19`,
                  "Country or territory of birth",
                  member.COBFather,
                  7,
                  "Example: 2022/01/01",
                  (e) => handleInputChange(e, member.id, "COBFather")
                )}
                {renderDropdown(
                  `${member.id}-20`,
                  "Marital Status",
                  member.maritalStatusFather,
                  ['Annulled Marriage', 'Common-Law', 'Divorced', 'Married', 'Separated', 'Single', 'Unknown', 'Widowed'],
                  "Select an option",
                  (e) => handleInputChange(e, member.id, "maritalStatusFather")
                )}
                {renderInput(
                  `${member.id}-21`,
                  "Email",
                  member.emailFather,
                  7,
                  "example@abc.com",
                  (e) => handleInputChange(e, member.id, "emailFather")
                )}
                {renderInput(
                  `${member.id}-22`,
                  "Provide address below. If deceased, give city or town, country or territory and date",
                  member.addyFather,
                  7,
                  "1234 ave",
                  (e) => handleInputChange(e, member.id, "addyFather")
                )}
              </div>
              <h3>Children</h3>
{member.children.map((child, childIndex) => (
  <div key={child.id}>
    <div>
    <div className="myrowfr">
      {renderInput(
        `${member.id}-${childIndex}-23`,
        "Relationship",
        child.relationshipChildren,
        20,
        'example: "step son"',
        (e) =>
          handleInputChange(e, member.id, "relationshipChildren", childIndex)
      )}
      {renderInput(
        `${member.id}-${childIndex}-24`,
        "Full Name",
        child.fullNameChildren,
        20,
        "insert full name here",
        (e) => handleInputChange(e, member.id, "fullNameChildren", childIndex)
      )}
      {renderInput(
        `${member.id}-${childIndex}-25`,
        "Date of Birth",
        child.DOBChildren,
        7,
        "Example: 2022/01/01",
        (e) => handleInputChange(e, member.id, "DOBChildren", childIndex)
      )}
      {renderInput(
        `${member.id}-${childIndex}-26`,
        "Country or territory of birth",
        child.COBChildren,
        7,
        "Example: 2022/01/01",
        (e) => handleInputChange(e, member.id, "COBChildren", childIndex)
      )}
      {renderDropdown(
        `${member.id}-${childIndex}-27`,
        "Marital Status",
        child.maritalStatusChildren,
        [
          'Annulled Marriage',
          'Common-Law',
          'Divorced',
          'Married',
          'Separated',
          'Single',
          'Unknown',
          'Widowed'
        ],
        "Select an option",
        (e) =>
          handleInputChange(e, member.id, "maritalStatusChildren", childIndex)
      )}
      {renderInput(
        `${member.id}-${childIndex}-28`,
        "Email",
        child.emailChildren,
        7,
        "example@abc.com",
        (e) => handleInputChange(e, member.id, "emailChildren", childIndex)
      )}
      {renderInput(
        `${member.id}-${childIndex}-29`,
        "Provide address below. If deceased, give city or town, country or territory and date",
        child.addyChildren,
        7,
        "1234 ave",
        (e) => handleInputChange(e, member.id, "addyChildren", childIndex)
      )}

      {renderDropdown(
        `${member.id}-${childIndex}-30`,
        "Is your child immigrating to Canada with you or below the age of 18?",
        isChildImmigrating[childIndex] ? "Yes" : "No",
        ["Yes", "No"],
        "Select an option",
        (e) => handleChildImmigrating(e, childIndex)
      )}
    
      {isChildImmigrating[childIndex] && (
        <>
          {renderInput(
            `${member.id}-${childIndex}-31`,
            "Family name of child's father",
            childFatherInfo[childIndex]?.family || "",
            20,
            "Example: 1",
            (e) => handleChildFatherFamily(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-32`,
            "Given name of child's father",
            childFatherInfo[childIndex]?.given || "",
            20,
            "Example: 1",
            (e) => handleChildFatherGiven(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-33`,
            "Child's father date of birth (YYYY/MM/DD)",
            childFatherInfo[childIndex]?.dob || "",
            10,
            "Example: 1",
            (e) => handleChildFatherDOB(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-34`,
            "Child's father date of death, if deceased (YYYY/MM/DD)",
            childFatherInfo[childIndex]?.dod || "",
            10,
            "Example: 1",
            (e) => handleChildFatherDOD(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-35`,
            "Child's father town/city of birth",
            childFatherInfo[childIndex]?.tob || "",
            10,
            "Example: 1",
            (e) => handleChildFatherTOB(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-36`,
            "Child's father country of birth",
            childFatherInfo[childIndex]?.cob || "",
            10,
            "Example: 1",
            (e) => handleChildFatherCOB(e, childIndex)
          )}
        </>
      )}

      {isChildImmigrating[childIndex] && (
        <>
          {renderInput(
            `${member.id}-${childIndex}-37`,
            "Family name of child's mother",
            childMotherInfo[childIndex]?.family || "",
            20,
            "Example: 1",
            (e) => handleChildMotherFamily(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-38`,
            "Given name of child's mother",
            childMotherInfo[childIndex]?.given || "",
            20,
            "Example: 1",
            (e) => handleChildMotherGiven(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-39`,
            "Child's mother date of birth (YYYY/MM/DD)",
            childMotherInfo[childIndex]?.dob || "",
            10,
            "Example: 1",
            (e) => handleChildMotherDOB(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-40`,
            "Child's mother date of death, if deceased (YYYY/MM/DD)",
            childMotherInfo[childIndex]?.dod || "",
            10,
            "Example: 1",
            (e) => handleChildMotherDOD(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-41`,
            "Child's mother town/city of birth",
            childMotherInfo[childIndex]?.tob || "",
            10,
            "Example: 1",
            (e) => handleChildMotherTOB(e, childIndex)
          )}
          {renderInput(
            `${member.id}-${childIndex}-42`,
            "Child's mother country of birth",
            childMotherInfo[childIndex]?.cob || "",
            10,
            "Example: 1",
            (e) => handleChildMotherCOB(e, childIndex)
          )}
          
        </>
      )}
      </div>
      
      <div>
      {isChildImmigrating[childIndex] && (
        <>
      <h3>Questionnaire: Have any of your family members listed in this application, ever:</h3>
    {renderDropdown(
      `${member.id}-crimeConvicted`,
      "Been convicted of a crime or offence in Canada for which a pardon has not been granted under the Criminal Records Act of Canada?",
      member.crimeConvicted,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "crimeConvicted")
    )}

    {renderDropdown(
      `${member.id}-crimeConvictedOtherCountry`,
      "Been convicted of or are currently charged with, on trial for, or party to a crime or offence, or subject of any criminal proceedings in any other country or territory?",
      member.crimeConvictedOtherCountry,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "crimeConvictedOtherCountry")
    )}

    {renderDropdown(
      `${member.id}-previousClaims`,
      "Made previous claims for refugee protection in Canada or at a Canadian visa office abroad, in any other country(ies) or territory(ies), or with the United Nations High Commissioner for Refugees (UNHCR)?",
      member.previousClaims,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "previousClaims")
    )}

    {renderDropdown(
      `${member.id}-refusedStatus`,
      "Been refused refugee status, an immigrant or permanent resident visa (including a Certificat de Sélection du Québec [CSQ] or application to the Provincial Nominee Program) or a visitor or temporary resident visa, for Canada or any other country or territory?",
      member.refusedStatus,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "refusedStatus")
    )}

    {renderDropdown(
      `${member.id}-refusedAdmission`,
      "Been refused admission to, or ordered to leave, Canada or any other country or territory?",
      member.refusedAdmission,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "refusedAdmission")
    )}

    {renderDropdown(
      `${member.id}-actOfGenocide`,
      "Been involved in an act of genocide, in a war crime or in the commission of a crime against humanity?",
      member.actOfGenocide,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "actOfGenocide")
    )}

    {renderDropdown(
      `${member.id}-armedStruggle`,
      "Ued, planned or advocated the use of armed struggle or violence to reach political, religious or social objectives?",
      member.armedStruggle,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "armedStruggle")
    )}

    {renderDropdown(
      `${member.id}-associatedWithGroup`,
      "Been associated with a group that used, uses, or advocated or advocates the use of armed struggle or violence to reach political, religious or social objectives?",
      member.associatedWithGroup,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "associatedWithGroup")
    )}

    {renderDropdown(
      `${member.id}-criminalActivity`,
      "Been a member of an organization that is or was engaged in an activity that is part of a pattern of criminal activity?",
      member.criminalActivity,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "criminalActivity")
    )}
    
    {renderDropdown(
      `${member.id}-detained`,
      "Have been detained, incarcerated or put in jail?",
      member.detained,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "detained")
    )}

    {renderDropdown(
      `${member.id}-seriousDisease`,
      "Have had any serious disease or physical or mental disorder?",
      member.seriousDisease,
      ["No", "yes"],
      "Select an option",
      (e) => handleInputChange(e, member.id, "seriousDisease")
    )}

    {renderInput(
      `${member.id}-additionalDetails`,
      "If the answer to any of these questions is yes, please provide details below (maximum 679 characters):",
      member.additionalDetails,
      679,
      "Enter details here",
      (e) => handleInputChange(e, member.id, "additionalDetails")
    )}
    </>
      )}
      </div>
      
    </div>
    <button onClick={() => handleRemoveChild(member.id, child.id)}>
      Remove Child
    </button>
    <DividerGray />
  </div>
))}

<button onClick={() => handleAddChild(member.id)}>Add Child</button>
              <h3>Siblings</h3>
              {member.siblings.map((sibling, siblingIndex) => (
                <div key={sibling.id}>
                  <div className="myrowfr">
                    {renderInput(
                      `${member.id}-${siblingIndex}-30`,
                      "Relationship",
                      sibling.relationshipSiblings,
                      20,
                      'example: step brother',
                      (e) =>
                        handleInputChange(e, member.id, "relationshipSiblings", null, siblingIndex)
                    )}
                    {renderInput(
                      `${member.id}-${siblingIndex}-31`,
                      "Full Name",
                      sibling.fullNameSiblings,
                      20,
                      "insert full name here",
                      (e) => handleInputChange(e, member.id, "fullNameSiblings", null, siblingIndex)
                    )}
                    {renderInput(
                      `${member.id}-${siblingIndex}-32`,
                      "Date of Birth",
                      sibling.DOBSiblings,
                      7,
                      "Example: 2022/01/01",
                      (e) => handleInputChange(e, member.id, "DOBSiblings", null, siblingIndex)
                    )}
                    {renderInput(
                      `${member.id}-${siblingIndex}-33`,
                      "Country or territory of birth",
                      sibling.COBSiblings,
                      7,
                      "Example: 2022/01/01",
                      (e) => handleInputChange(e, member.id, "COBSiblings", null, siblingIndex)
                    )}
                    {renderDropdown(
                      `${member.id}-${siblingIndex}-34`,
                      "'Annulled Marriage', 'Common-Law', 'Divorced', 'Married', 'Separated', 'Single', 'Unknown', 'Widowed'",
                      sibling.maritalStatusSiblings,
                      ["answer 1", "answer 2"],
                      "Select an option",
                      (e) =>
                        handleInputChange(e, member.id, "maritalStatusSiblings", null, siblingIndex)
                    )}
                    {renderInput(
                      `${member.id}-${siblingIndex}-35`,
                      "Email",
                      sibling.emailSiblings,
                      7,
                      "example@abc.com",
                      (e) => handleInputChange(e, member.id, "emailSiblings", null, siblingIndex)
                    )}
                    {renderInput(
                      `${member.id}-${siblingIndex}-36`,
                      "Provide address below. If deceased, give city or town, country or territory and date",
                      sibling.addySiblings,
                      7,
                      "1234 ave",
                      (e) => handleInputChange(e, member.id, "addySiblings", null, siblingIndex)
                    )}
                  </div>
                    
                  <button onClick={() => handleRemoveSibling(member.id, sibling.id)}>
                    Remove Sibling
                  </button>
                  <DividerGray />
                </div>
                
              ))}
              <button onClick={() => handleAddSibling(member.id)}>Add Sibling</button>
              
              <div >
              <Divider />
              <button onClick={() => handleRemoveFamilyMember(member.id)}>
                Remove previously added family member
              </button>
              
              <div>
          <button onClick={handleHelloButtonClick}>Add family member</button>
        </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FamilyInfo;
