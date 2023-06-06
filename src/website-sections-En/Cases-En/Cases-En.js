import React from 'react';
import { useParams } from 'react-router-dom';
import './Cases-En.scss'
import SponsorshipSpousal from '../sponsorship-spousal-En/sponsorship-spousal-En';
import SponsorshipParental from '../sponsorship-parental-En/sponsorship-parental-En';
import SponsorshipChild from '../../components/sponsorship-child/sponsorship-child';

const NewPage = () => {
  const { referralCode } = useParams();

  const renderContent = () => {
    const codePrefix = referralCode.substr(0, 3);
  
    switch (codePrefix) {
      case 'SSP':
        return <SponsorshipSpousal />;
      case 'SPA':
        return <SponsorshipParental />;
      case 'SCH':
        return <SponsorshipChild />;
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
