export const ASESMEN_POINTS = 10;
export const SUBMISSION_POINTS = 25;

export const mockAssesmentList = [
  { id: 1, name: "Kuis Tipe Data", type: "assesment", point: ASESMEN_POINTS },
  { id: 2, name: "Kuis Membangun Program Kotlin dengan IDE", type: "assesment", point: ASESMEN_POINTS },
  { id: 3, name: "Kuis Control Flow", type: "assesment", point: ASESMEN_POINTS },
  { id: 4, name: "Kuis Fungsi", type: "assesment", point: ASESMEN_POINTS },
  { id: 5, name: "Kuis Pengantar Kotlin", type: "assesment", point: ASESMEN_POINTS },
  { id: 6, name: "Kuis Kotlin Object-Oriented Programming", type: "assesment", point: ASESMEN_POINTS },
  { id: 7, name: "Kuis Kotlin Special Class", type: "assesment", point: ASESMEN_POINTS },
  { id: 8, name: "Ujian Akhir (Submission)", type: "submission", point: SUBMISSION_POINTS },
];

export const mockMembers = [
  {
    id: 'user-001',
    name: 'Andi Nugraha',
    progres: [1, 2, 3, 4, 5, 6, 7], 
  },
  {
    id: 'user-002',
    name: 'Budi Santoso',
    progres: [1, 2, 3, 4, 5, 6, 7, 8], 
  },
  {
    id: 'user-003',
    name: 'Citra Dewi',
    progres: [1, 2, 3],
  },
];