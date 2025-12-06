// src/components/EventList.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import EventCard from './EventCard';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        
        const fetchedEvents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Urutkan berdasarkan tanggal (kita asumsikan 'date' adalah Firebase Timestamp)
        const sortedEvents = fetchedEvents.sort((a, b) => b.date.toDate() - a.date.toDate());

        setEvents(sortedEvents);
      } catch (err) {
        console.error("Error fetching events: ", err);
        setError("Gagal memuat daftar acara dari database.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return <div className="text-center p-8 text-indigo-600">Memuat Info Acara... 🗓️</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-600 border border-red-300 bg-red-50 rounded-lg">Error: {error}</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">📣 Info Acara Komunitas</h2>
      
      {events.length === 0 ? (
        <p className="text-center text-gray-500 p-6 border rounded-lg bg-gray-50">
          Belum ada acara yang dijadwalkan saat ini. Nantikan pengumuman selanjutnya!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;