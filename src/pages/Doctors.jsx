import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const doctorsData = [
    {
        "Name": "Dr. Nitin Kochar",
        "City": "Mumbai",
        "Address": "Gurukrupa Ayurvedic Clinic",
        "Timing": "5:30 PM - 9:00 PM",
        "Consultation Fee": "₹ 800",
        "Experience (Years)": 34,
        "Latitude": 19.075984,
        "Longitude": 72.877656
    },
    {
        "Name": "Dr. Pratik Bhoite",
        "City": "Mumbai",
        "Address": "Tulasbharati Ayurveda Clinic, Virar West",
        "Timing": "9:00 PM - 11:00 PM",
        "Consultation Fee": "₹ 450",
        "Experience (Years)": 14,
        "Latitude": 19.455927,
        "Longitude": 72.806298
    },
    {
        "Name": "Dr. Sonali A Padwal",
        "City": "Mumbai",
        "Address": "Shri Sai Clinic, Borivali",
        "Timing": "11:00 AM - 1:00 PM, 7-9 PM",
        "Consultation Fee": "₹ 150",
        "Experience (Years)": 24,
        "Latitude": 19.230671,
        "Longitude": 72.856015
    },
    {
        "Name": "Dr. Hemang Parekh",
        "City": "Mumbai",
        "Address": "Ayushakti Ayurvedic Health Center",
        "Timing": "9:00 AM - 6:00 PM",
        "Consultation Fee": "₹ 300",
        "Experience (Years)": 20,
        "Latitude": 19.210273,
        "Longitude": 72.834125
    },
    {
        "Name": "Dr. Manaan Gandhi",
        "City": "Mumbai",
        "Address": "The Integral Ayurveda, Lower Parel",
        "Timing": "10:00 AM - 7:00 PM",
        "Consultation Fee": "₹ 500",
        "Experience (Years)": 10,
        "Latitude": 18.994963,
        "Longitude": 72.825928
    },
    {
        "Name": "Dr. Omkar Shahapurkar",
        "City": "Mumbai",
        "Address": "Siddhi Clinic, Dadar East",
        "Timing": "12:00 PM - 5:00 PM",
        "Consultation Fee": "₹ 200",
        "Experience (Years)": 19,
        "Latitude": 19.017614,
        "Longitude": 72.842609
    },
    {
        "Name": "Dr. Kushal Kelshikar",
        "City": "Mumbai",
        "Address": "Shree Deerghayu Ayurved Chikitsalaya",
        "Timing": "10:00 AM - 6:00 PM",
        "Consultation Fee": "₹ 300",
        "Experience (Years)": 12,
        "Latitude": 19.073481,
        "Longitude": 72.879621
    },
    {
        "Name": "Dr. Amol Sawant",
        "City": "Mumbai",
        "Address": "Shree Vishwavarsha Ayurved Clinic, Lalbaug",
        "Timing": "10:00 AM - 6:00 PM",
        "Consultation Fee": "₹ 300",
        "Experience (Years)": 11,
        "Latitude": 18.993843,
        "Longitude": 72.844414
    },
    {
        "Name": "Dr. Karande Shalaka Vijay",
        "City": "Mumbai",
        "Address": "303, 3rd Floor, Kesarinath Building, SV Road",
        "Timing": "11-5 Mon-Wed",
        "Consultation Fee": "₹ 300",
        "Experience (Years)": 13,
        "Latitude": 19.155128,
        "Longitude": 72.834364
    },
    {
        "Name": "Dr. Anita Gupta",
        "City": "Mumbai",
        "Address": "Aharayogam, Mulund West",
        "Timing": "By Appointment",
        "Consultation Fee": "₹ 2,000",
        "Experience (Years)": 29,
        "Latitude": 19.173267,
        "Longitude": 72.957595
    },
    {
        "Name": "Dr. Namrata Ostwal",
        "City": "Mumbai",
        "Address": "Tryambak Ayurvedic Clinic, Mulund West",
        "Timing": "By Appointment",
        "Consultation Fee": "₹ 600",
        "Experience (Years)": 21,
        "Latitude": 19.175283,
        "Longitude": 72.959057
    },
    {
        "Name": "Dr. Sonali Sawant",
        "City": "Mumbai",
        "Address": "Shree Vishwaswaroop Ayurved, Naupada, Thane",
        "Timing": "By Appointment",
        "Consultation Fee": "₹ 250",
        "Experience (Years)": 14,
        "Latitude": 19.187198,
        "Longitude": 72.976762
    },
    {
        "Name": "Dr. Jayesh Jadhav",
        "City": "Mumbai",
        "Address": "Aarogyam Ayurveda, Mulund East",
        "Timing": "By Appointment",
        "Consultation Fee": "₹ 600",
        "Experience (Years)": 17,
        "Latitude": 19.181582,
        "Longitude": 72.955302
    },
    {
        "Name": "Dr. Deepali Shastri",
        "City": "Mumbai",
        "Address": "Ayushakti Ayurved Health Centre, Dadar",
        "Timing": "9:00 AM - 7:00 PM",
        "Consultation Fee": "₹ 300",
        "Experience (Years)": 30,
        "Latitude": 19.017805,
        "Longitude": 72.838275
    },
    {
        "Name": "Dr. Surya Bhagwati",
        "City": "Mumbai",
        "Address": "Dr. Vaidya's New Age Ayurveda, Tardeo",
        "Timing": "10:30 AM - 7:30 PM",
        "Consultation Fee": "₹ 400",
        "Experience (Years)": 36,
        "Latitude": 18.975049,
        "Longitude": 72.812026
    },
    {
        "Name": "Dr. Madhavbaug",
        "City": "Mumbai",
        "Address": "Madhavbaug Clinic, Girgaon",
        "Timing": "10:00 AM - 7:00 PM",
        "Consultation Fee": "₹ 1,000",
        "Experience (Years)": 23,
        "Latitude": 18.953837,
        "Longitude": 72.813185
    }
];


const FindDoctors = () => {
    const [currentLocation, setCurrentLocation] = useState({ lat: 19.076, lng: 72.8777 }); // Default: Mumbai
    const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                console.error("Error fetching location", error);
            }
        );
    }, []);

    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    const handleCityFilter = (city) => {
        const results = doctorsData.filter((doctor) => doctor.City === city);
        setFilteredDoctors(results);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Find Doctors Near You</h1>
            <div className="mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => handleCityFilter("Mumbai")}
                >
                    Mumbai
                </button>
            </div>

            <LoadScript googleMapsApiKey="AIzaSyCCrf9STNXVdiDNW4xaITjoXgBn-gv81Ok">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={currentLocation}
                    zoom={12}
                >
                    {filteredDoctors.map((doctor, index) => (
                        <Marker
                            key={index}
                            position={{ lat: doctor.Latitude, lng: doctor.Longitude }}
                            title={doctor.Name}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>

            <div className="mt-10 w-full max-w-6xl">
                <h2 className="text-xl font-semibold mb-6 text-center">Doctors List</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-4 shadow-md bg-white"
                        >
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{doctor.Name}</h3>
                            <p><strong>Address:</strong> {doctor.Address}</p>
                            <p><strong>Timing:</strong> {doctor.Timing}</p>
                            <p><strong>Fee:</strong> {doctor["Consultation Fee"]}</p>
                            <p><strong>Experience:</strong> {doctor["Experience (Years)"]} years</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindDoctors;