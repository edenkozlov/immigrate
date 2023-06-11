import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/button/Button';
import ContainIt from '../containIt/containIt';
import PersonalInfo from '../Cases-En/Personal_info';

function SponsorshipChild() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => { setModalIsOpen(true); };
    const closeModal = () => { setModalIsOpen(false); };
    return (
        <div>
            <div class="mycentering"></div>
            <ContainIt title="Sponsorship: Parental">
                <div className='sideBySide'>
                    <Button
                        text={<><i className="fas fa-user"></i> Personal Information</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-plane"></i> Travel History</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-users"></i> Family Information</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-passport"></i> Passport Information</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i class="fas fa-upload"></i> Document Upload</>}
                        onClick={openModal}
                    />
                </div>
                <div className='sideBySide'>
                    <Button
                        text={<><i className="fas fa-globe-americas"></i> Language Details</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-phone"></i> Contact Information</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-flag"></i> National Identity</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-graduation-cap"></i> Education Details</>}
                        onClick={openModal}
                    />
                    <Button
                        text={<><i className="fas fa-hammer"></i> Occupation Details</>}
                        onClick={openModal}
                    />
                    
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <div className="modal-header">
                            <h2>Personal Information</h2>
                                <div className="modal-buttons">
                                <button className="modal-submit" type="submit">
                                    Submit
                                </button>
                                <button className="modal-close" onClick={closeModal}>
                                    Close Modal
                                </button>
                                </div>
                        </div>
                        <PersonalInfo />
                    </Modal>

                </div>

            </ContainIt>

        </div>
    );
}

export default SponsorshipChild;

