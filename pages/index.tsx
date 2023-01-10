import React from 'react';
import RentalDetails from '../components/RentalDetails';

export default function Home() {
  return (
    <RentalDetails
      details={[
        ['Deposit', '5000 €'],
        ['KMs included', '200 / day'],
        ['Extra KM', '2 €'],
        ['Min Age', '21'],
      ]}
    />
  );
}
