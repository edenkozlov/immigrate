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
              <h3>Applicant Information</h3>
              <div className="myrowfr">
                {renderInput(
                  `${member.id}-1`,
                  "Address",
                  member.addressApp,
                  20,
                  "1234 ave",
                  (e) => handleInputChange(e, member.id, "addressApp")
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
                  "Provide address below. If deceased, give city or town, country or territory and date",
                  member.addyRel,
                  7,
                  "1234 ave",
                  (e) => handleInputChange(e, member.id, "addyRel")
                )}
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
                      ['Annulled Marriage', 'Common-Law', 'Divorced', 'Married', 'Separated', 'Single', 'Unknown', 'Widowed'],
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
