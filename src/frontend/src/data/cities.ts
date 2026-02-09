export interface City {
  name: string;
  timezone: string;
  lat?: number;
  lng?: number;
}

export const cities: City[] = [
  { name: 'New York, USA', timezone: 'America/New_York', lat: 40.7128, lng: -74.006 },
  { name: 'Los Angeles, USA', timezone: 'America/Los_Angeles', lat: 34.0522, lng: -118.2437 },
  { name: 'Chicago, USA', timezone: 'America/Chicago', lat: 41.8781, lng: -87.6298 },
  { name: 'London, UK', timezone: 'Europe/London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris, France', timezone: 'Europe/Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Berlin, Germany', timezone: 'Europe/Berlin', lat: 52.52, lng: 13.405 },
  { name: 'Tokyo, Japan', timezone: 'Asia/Tokyo', lat: 35.6762, lng: 139.6503 },
  { name: 'Mumbai, India', timezone: 'Asia/Kolkata', lat: 19.076, lng: 72.8777 },
  { name: 'Delhi, India', timezone: 'Asia/Kolkata', lat: 28.7041, lng: 77.1025 },
  { name: 'Bangalore, India', timezone: 'Asia/Kolkata', lat: 12.9716, lng: 77.5946 },
  { name: 'Sydney, Australia', timezone: 'Australia/Sydney', lat: -33.8688, lng: 151.2093 },
  { name: 'Singapore', timezone: 'Asia/Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Dubai, UAE', timezone: 'Asia/Dubai', lat: 25.2048, lng: 55.2708 },
  { name: 'Toronto, Canada', timezone: 'America/Toronto', lat: 43.6532, lng: -79.3832 },
  { name: 'Vancouver, Canada', timezone: 'America/Vancouver', lat: 49.2827, lng: -123.1207 },
  { name: 'Mexico City, Mexico', timezone: 'America/Mexico_City', lat: 19.4326, lng: -99.1332 },
  { name: 'São Paulo, Brazil', timezone: 'America/Sao_Paulo', lat: -23.5505, lng: -46.6333 },
  { name: 'Buenos Aires, Argentina', timezone: 'America/Argentina/Buenos_Aires', lat: -34.6037, lng: -58.3816 },
  { name: 'Cairo, Egypt', timezone: 'Africa/Cairo', lat: 30.0444, lng: 31.2357 },
  { name: 'Johannesburg, South Africa', timezone: 'Africa/Johannesburg', lat: -26.2041, lng: 28.0473 },
  { name: 'Moscow, Russia', timezone: 'Europe/Moscow', lat: 55.7558, lng: 37.6173 },
  { name: 'Istanbul, Turkey', timezone: 'Europe/Istanbul', lat: 41.0082, lng: 28.9784 },
  { name: 'Bangkok, Thailand', timezone: 'Asia/Bangkok', lat: 13.7563, lng: 100.5018 },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', lat: 22.3193, lng: 114.1694 },
  { name: 'Seoul, South Korea', timezone: 'Asia/Seoul', lat: 37.5665, lng: 126.978 },
];
