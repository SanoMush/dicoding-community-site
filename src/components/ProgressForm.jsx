// src/components/ProgressForm.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import { mockAssesmentList } from '../data/mockData'; // Untuk daftar asesmen

const ProgressForm = ({ onUpdate }) => {
  const [members, setMembers] = useState([]);
  const [selectedMemberDocId, setSelectedMemberDocId] = useState('');
  const [selectedAssesmentId, setSelectedAssesmentId] = useState('');
  const [currentProgres, setCurrentProgres] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // 1. Ambil daftar anggota saat komponen dimuat
  useEffect(() => {
    const fetchMembersList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "members"));
        const membersList = querySnapshot.docs.map(doc => ({
          docId: doc.id,
          name: doc.data().name,
          progres: doc.data().progres || [] // Pastikan progres adalah array, default array kosong
        }));
        setMembers(membersList);
      } catch (err) {
        console.error("Error fetching members list:", err);
        setMessage({ type: 'error', text: 'Gagal memuat daftar anggota.' });
      }
    };
    fetchMembersList();
  }, []);

  // 2. Update currentProgres saat anggota dipilih
  const handleMemberChange = (e) => {
    const docId = e.target.value;
    setSelectedMemberDocId(docId);
    
    // Cari progres anggota yang dipilih
    const member = members.find(m => m.docId === docId);
    setCurrentProgres(member ? member.progres : []);
    setMessage('');
  };

  // 3. Handle Submit: Memperbarui data di Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedMemberDocId || !selectedAssesmentId) {
      setMessage({ type: 'error', text: 'Mohon pilih Anggota dan Asesmen.' });
      return;
    }

    const newAssesmentId = Number(selectedAssesmentId);

    // Cek apakah asesmen sudah diselesaikan
    if (currentProgres.includes(newAssesmentId)) {
      setMessage({ type: 'warning', text: 'Anggota ini sudah menyelesaikan asesmen tersebut!' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: 'info', text: 'Memperbarui progres...' });

    try {
      // Buat referensi ke dokumen anggota yang akan diupdate
      const memberRef = doc(db, "members", selectedMemberDocId);
      
      // Buat array progres baru dengan menambahkan ID asesmen yang baru selesai
      const newProgres = [...currentProgres, newAssesmentId];
      
      await updateDoc(memberRef, {
        progres: newProgres
      });

      // Beri notifikasi berhasil
      setMessage({ type: 'success', text: `Progres ID ${newAssesmentId} berhasil ditambahkan! Leaderboard me-refresh.` });
      
      // Panggil onUpdate untuk me-refresh Leaderboard di App.js
      if (onUpdate) onUpdate();
      
      // Perbarui state lokal
      setSelectedAssesmentId('');
      setCurrentProgres(newProgres); 
      
    } catch (error) {
      console.error("Error updating document: ", error);
      setMessage({ type: 'error', text: 'Gagal memperbarui progres ke database.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMessageStyle = (type) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-700 border-green-300';
      case 'error': return 'bg-red-100 text-red-700 border-red-300';
      case 'warning': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'info': return 'bg-blue-100 text-blue-700 border-blue-300';
      default: return 'hidden';
    }
  };


  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">➕ Input Progres Anggota</h3>
      
      {message && message.text && (
        <div className={`p-3 mb-4 border rounded-md ${getMessageStyle(message.type)}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        
        {/* Pilih Anggota */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Anggota:</label>
          <select 
            value={selectedMemberDocId} 
            onChange={handleMemberChange} 
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Pilih Anggota --</option>
            {members.map(member => (
              <option key={member.docId} value={member.docId}>{member.name}</option>
            ))}
          </select>
        </div>

        {/* Pilih Asesmen */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Asesmen Selesai:</label>
          <select 
            value={selectedAssesmentId} 
            onChange={(e) => setSelectedAssesmentId(e.target.value)} 
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Pilih Asesmen --</option>
            {mockAssesmentList.map(assesment => (
              <option key={assesment.id} value={assesment.id}>
                {assesment.name} (ID: {assesment.id} / {assesment.point} Poin)
              </option>
            ))}
          </select>
        </div>

        {/* Tampilkan Progres Saat Ini */}
        {selectedMemberDocId && (
          <div className="mb-4 text-sm text-gray-600 p-3 bg-gray-50 border rounded">
            <p className="font-semibold">Progres Saat Ini:</p>
            <p>Total **{currentProgres.length}** asesmen selesai. Progres ID: [{currentProgres.join(', ')}]</p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting || !selectedMemberDocId || !selectedAssesmentId}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 transition duration-150"
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan Progres'}
        </button>
      </form>
    </div>
  );
};

export default ProgressForm;