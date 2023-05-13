import React from 'react';
import { useParams } from 'react-router-dom';
import LeaveReview from '../review/review';
import './locationTest.scss'
import SponsorshipSpousal from '../sponsorship-spousal/sponsorship-spousal';
import SponsorshipParental from '../sponsorship-parental/sponsorship-parental';

const NewPage = () => {
  const { referralCode } = useParams();

  const renderContent = () => {
    const codePrefix = referralCode.substr(0, 3);
  
    switch (codePrefix) {
      case 'SSP':
        return <SponsorshipSpousal />;
      case 'SPA':
        return <SponsorshipParental />;
      default:
        return <p>Invalid referral code.</p>;
    }
  };
  

  return (
    <div class="ciab">
      <h1>Client Name</h1>
      <p>Referral Code: {referralCode}</p>
      {renderContent()}
    </div>
  );
};

export default NewPage;
