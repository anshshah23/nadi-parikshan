import React from 'react';
import MapSection from './MapSection';
import DoctorCard from './DoctorCard';
import doctorsData from './doctorsData';

const DoctorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Doctors Near You
      </h1>

      {/* Map Section */}
      <div className="mb-10">
        <MapSection />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorsData.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
