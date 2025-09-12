import React from 'react';

// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function Map() {
  return (
    <div className="px-4 mb-3 pt-4">
      {/* Leaflet Map replacing placeholder */}
        <div className="px-4 mb-3 pt-4">
          <MapContainer center={[23.3441, 85.3096]} zoom={13} scrollWheelZoom={false} className="w-full h-48 md:h-64 rounded-lg border border-gray-400">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[23.3441, 85.3096]}>
                <Popup>
                Ranchi, Jharkhand, India
                </Popup>
            </Marker>
            </MapContainer>

          <div className="mb-10 flex justify-center pt-5">
            <button className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium">
              View Map
            </button>
          </div>
        </div>
    </div>
  );
};
