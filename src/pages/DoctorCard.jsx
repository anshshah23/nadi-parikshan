import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h2>
      <p className="text-gray-600 mb-1"><strong>Address:</strong> {doctor.address}</p>
      <p className="text-gray-600 mb-1"><strong>Timing:</strong> {doctor.timing}</p>
      <p className="text-gray-600 mb-1"><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
      <p className="text-gray-600"><strong>Experience:</strong> {doctor.experience} years</p>
    </div>
  );
};

export default DoctorCard;
