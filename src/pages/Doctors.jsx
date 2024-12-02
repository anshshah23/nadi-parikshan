import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const doctorsData = [
    {
        Name: "Dr. Nitin Kochar",
        City: "Mumbai",
        Address: "Gurukrupa Ayurvedic Clinic",
        Timing: "5:30 PM - 9:00 PM",
        "Consultation Fee": "₹ 800",
        "Experience (Years)": 34,
        Lat: 19.076,
        Lng: 72.8777,
    },
    {
        Name: "Dr. Pratik Bhoite",
        City: "Mumbai",
        Address: "Tulasbharati Ayurveda Clinic, Virar West",
        Timing: "9:00 PM - 11:00 PM",
        "Consultation Fee": "₹ 450",
        "Experience (Years)": 14,
        Lat: 19.4527,
        Lng: 72.8068,
    },
    {
        Name: "Dr. Sonali A Padwal",
        City: "Mumbai",
        Address: "Shri Sai Clinic, Borivali",
        Timing: "11:00 AM - 1:00 PM, 7-9 PM",
        "Consultation Fee": "₹ 150",
        "Experience (Years)": 24,
        Lat: 19.229,
        Lng: 72.8577,
    },
];

const FindDoctors = () => {
    const [currentLocation, setCurrentLocation] = useState({ lat: 19.076, lng: 72.8777 }); // Default to Mumbai
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
        <div className="min-h-screen self-center flex flex-col items-center justify-center">
            <h1 className="text-lg md:text-2xl">Find Doctors Near You</h1>
            <button onClick={() => handleCityFilter("Mumbai")}>Mumbai</button>
            {/* Add more city filters if needed */}
            <div className="mt-20">
                <LoadScript googleMapsApiKey="<AIzaSyCCrf9STNXVdiDNW4xaITjoXgBn-gv81Ok>">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={currentLocation}
                        zoom={12}
                    >
                        {filteredDoctors.map((doctor, index) => (
                            <Marker
                                key={index}
                                position={{ lat: doctor.Lat, lng: doctor.Lng }}
                                title={doctor.Name}
                            />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Doctors List</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                    {filteredDoctors.map((doctor, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                padding: "15px",
                                width: "250px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>
                                {doctor.Name}
                            </h3>
                            <p style={{ margin: "5px 0" }}>
                                <strong>Address:</strong> {doctor.Address}
                            </p>
                            <p style={{ margin: "5px 0" }}>
                                <strong>Timing:</strong> {doctor.Timing}
                            </p>
                            <p style={{ margin: "5px 0" }}>
                                <strong>Fee:</strong> ₹{doctor["Consultation Fee"]}
                            </p>
                            <p style={{ margin: "5px 0" }}>
                                <strong>Experience:</strong> {doctor["Experience (Years)"]} years
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindDoctors;
