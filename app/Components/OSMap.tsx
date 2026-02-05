// components/OpenStreetMap.tsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

interface OpenStreetMapProps {
  position: [number, number]
  zoom: number
}

const OpenStreetMap = ({ position, zoom }: OpenStreetMapProps) => {
  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={position}
        zoom={zoom}
        className="w-full h-full rounded-b-lg"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Gusto Restaurant</strong> <br />
            123 Main Street, New York
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default OpenStreetMap