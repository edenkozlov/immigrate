import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/button/Button';
import ContainIt from '../containIt/containIt';
import PersonalInfo from '../Cases-En/Personal_info';
import TravelInfo from '../Cases-En/Travel_info';
import FamilyInfo from '../Cases-En/Family_info';
import PassportInfo from '../Cases-En/Passposrt_info';
import DocumentUpload from '../Cases-En/Document_Upload';
import LanguageDetails from '../Cases-En/language_details';
import ContactInfo from '../Cases-En/contact_info';
import EducationInfo from '../Cases-En/education_info';
import NationalIdentity from '../Cases-En/national_identiy';
import OccupationDetails from '../Cases-En/occupation_details';

function SponsorshipChild() {

    //Peronsal Information
    const [modalIsOpenPersonal, setModalIsOpenPersonal] = useState(false);
    const openModalPersonal = () => { setModalIsOpenPersonal(true); };
    const closeModalPersonal = () => { setModalIsOpenPersonal(false); };
    //Travel History
    const [modalIsOpenTravel, setModalIsOpenTravel] = useState(false);
    const openModalTravel = () => { setModalIsOpenTravel(true); };
    const closeModalTravel = () => { setModalIsOpenTravel(false); };

    // Family Information
    const [modalIsOpenFamily, setModalIsOpenFamily] = useState(false);
    const openModalFamily = () => { setModalIsOpenFamily(true); };
    const closeModalFamily = () => { setModalIsOpenFamily(false); };

    // Passport Information
    const [modalIsOpenPassport, setModalIsOpenPassport] = useState(false);
    const openModalPassport = () => { setModalIsOpenPassport(true); };
    const closeModalPassport = () => { setModalIsOpenPassport(false); };

    // Document Upload
    const [modalIsOpenUpload, setModalIsOpenUpload] = useState(false);
    const openModalUpload = () => { setModalIsOpenUpload(true); };
    const closeModalUpload = () => { setModalIsOpenUpload(false); };

    // Language Details
    const [modalIsOpenLanguage, setModalIsOpenLanguage] = useState(false);
    const openModalLanguage = () => { setModalIsOpenLanguage(true); };
    const closeModalLanguage = () => { setModalIsOpenLanguage(false); };

    // Contact Information
    const [modalIsOpenContact, setModalIsOpenContact] = useState(false);
    const openModalContact = () => { setModalIsOpenContact(true); };
    const closeModalContact = () => { setModalIsOpenContact(false); };

    // National Identity
    const [modalIsOpenIdentity, setModalIsOpenIdentity] = useState(false);
    const openModalIdentity = () => { setModalIsOpenIdentity(true); };
    const closeModalIdentity = () => { setModalIsOpenIdentity(false); };

    // Education Details
    const [modalIsOpenEducation, setModalIsOpenEducation] = useState(false);
    const openModalEducation = () => { setModalIsOpenEducation(true); };
    const closeModalEducation = () => { setModalIsOpenEducation(false); };

    // Occupation Details
    const [modalIsOpenOccupation, setModalIsOpenOccupation] = useState(false);
    const openModalOccupation = () => { setModalIsOpenOccupation(true); };
    const closeModalOccupation = () => { setModalIsOpenOccupation(false); };


    return (
        <div>
            <div class="mycentering"></div>
            <ContainIt title="Sponsorship: Child">
                <div className='sideBySide'>
                    <Button
                        text={<><i className="fas fa-user"></i> Personal Information</>}
                        onClick={openModalPersonal}
                    />
                    <Button
                        text={<><i className="fas fa-plane"></i> Travel History</>}
                        onClick={openModalTravel}
                    />
                    <Button
                        text={<><i className="fas fa-users"></i> Family Information</>}
                        onClick={openModalFamily}
                    />
                    <Button
                        text={<><i className="fas fa-passport"></i> Passport Information</>}
                        onClick={openModalPassport}
                    />
                    <Button
                        text={<><i class="fas fa-upload"></i> Document Upload</>}
                        onClick={openModalUpload}
                    />
                </div>
                <div className='sideBySide'>
                    <Button
                        text={<><i className="fas fa-globe-americas"></i> Language Details</>}
                        onClick={openModalLanguage}
                    />
                    <Button
                        text={<><i className="fas fa-phone"></i> Contact Information</>}
                        onClick={openModalContact}
                    />
                    <Button
                        text={<><i className="fas fa-flag"></i> National Identity</>}
                        onClick={openModalIdentity}
                    />
                    <Button
                        text={<><i className="fas fa-graduation-cap"></i> Education Details</>}
                        onClick={openModalEducation}
                    />
                    <Button
                        text={<><i className="fas fa-hammer"></i> Occupation Details</>}
                        onClick={openModalOccupation}
                    />
                    {/*Peronal Info Modal*/}
                    <Modal isOpen={modalIsOpenPersonal} onRequestClose={closeModalPersonal}>
                        <div className="modal-header">
                            <h2>Personal Information</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalPersonal}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <PersonalInfo />
                    </Modal>

                    {/*Travel Info Modal*/}
                    <Modal isOpen={modalIsOpenTravel} onRequestClose={closeModalTravel}>
                        <div className="modal-header">
                            <h2>Travel Information</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalTravel}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <TravelInfo />
                    </Modal>

                    {/* Family Information Modal */}
                    <Modal isOpen={modalIsOpenFamily} onRequestClose={closeModalFamily}>
                        <div className="modal-header">
                            <h2>Family Information</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalFamily}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <FamilyInfo />
                    </Modal>

                    {/* Passport Information Modal */}
                    <Modal isOpen={modalIsOpenPassport} onRequestClose={closeModalPassport}>
                        <div className="modal-header">
                            <h2>Passport Information</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalPassport}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <PassportInfo />
                    </Modal>

                    {/* Document Upload Modal */}
                    <Modal isOpen={modalIsOpenUpload} onRequestClose={closeModalUpload}>
                        <div className="modal-header">
                            <h2>Document Upload</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalUpload}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <DocumentUpload />
                    </Modal>

                    {/* Language Details Modal */}
                    <Modal isOpen={modalIsOpenLanguage} onRequestClose={closeModalLanguage}>
                        <div className="modal-header">
                            <h2>Language Details</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalLanguage}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <LanguageDetails />
                    </Modal>

                    {/* Contact Information Modal */}
                    <Modal isOpen={modalIsOpenContact} onRequestClose={closeModalContact}>
                        <div className="modal-header">
                            <h2>Contact Information</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalContact}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <ContactInfo />
                    </Modal>

                    {/* National Identity Modal */}
                    <Modal isOpen={modalIsOpenIdentity} onRequestClose={closeModalIdentity}>
                        <div className="modal-header">
                            <h2>National Identity</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalIdentity}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <NationalIdentity />
                    </Modal>

                    {/* Education Details Modal */}
                    <Modal isOpen={modalIsOpenEducation} onRequestClose={closeModalEducation}>
                        <div className="modal-header">
                            <h2>Education Details</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalEducation}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <EducationInfo />
                    </Modal>

                    {/* Occupation Details Modal */}
                    <Modal isOpen={modalIsOpenOccupation} onRequestClose={closeModalOccupation}>
                        <div className="modal-header">
                            <h2>Occupation Details</h2>
                            <div className="modal-buttons">
                                <button className="modal-close" onClick={closeModalOccupation}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <OccupationDetails />
                    </Modal>

                </div>

            </ContainIt>

        </div>
    );
}

export default SponsorshipChild;

