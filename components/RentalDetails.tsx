import React from 'react';

interface RentalDetailsProps {
  details: string[][];
}

const RentalDetails = ({ details }: RentalDetailsProps) => {
  return (
    <>
      <div className="container">
        <ul className="details">
          {details.map((detail, index) => (
            <li key={index} className="detail">
              <div className="detail-name">{detail[0]}</div>
              <div className="detail-value">{detail[1]}</div>
            </li>
          ))}
        </ul>
        <button className="button">Rent now</button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-width: 1px;
          border-color: #e1ecf4;
          width: 1000px;
          height: 100px;
          border-radius: 10px;
        }

        .details {
          list-style: none;
          display: flex;
        }

        .detail {
          font-size: 14px;
          line-height: 17px;
          height: 10px;
          padding: 0 50px;
        }

        li + li {
          border-left: solid #dceaf2 1px;
          height: 34px;
        }

        .detail-name {
          font-weight: 400;
        }

        .detail-value {
          font-weight: 900;
          color: #0169fe;
        }

        .button {
          background: #0169fe;
          font-style: normal;
          font-weight: 900;
          font-size: 14px;
          line-height: 17px;
          color: white;

          width: 240px;
          height: 40px;
          border-radius: 10px;
          margin-right: 35px;
        }
      `}</style>
    </>
  );
};

export default RentalDetails;
