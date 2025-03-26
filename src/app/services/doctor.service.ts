import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  // doctor.service.ts
private doctors = [
  {
    id: 1,
    name: 'Dr. Richard James',
    speciality: 'General physician',
    image: 'assets/doctors/doc1.png',
    bio: 'Dr. Richard James is a highly skilled General Physician with a passion for primary healthcare. He is dedicated to diagnosing and managing a wide range of health conditions, emphasizing patient education and preventive care to ensure long-term wellness.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 2,
    name: 'Dr. Emily Larson',
    speciality: 'Gynecologist',
    image: 'assets/doctors/doc2.png',
    bio: 'Dr. Emily Larson is a compassionate Gynecologist committed to women’s health at every stage of life. She specializes in reproductive health, prenatal care, and gynecological surgeries, offering personalized care tailored to each patient’s unique needs.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 3,
    name: 'Dr. Sarah Jonson',
    speciality: 'Dermatologist',
    image: 'assets/doctors/doc3.png',
    bio: 'Dr. Sarah Jonson is an experienced Dermatologist who focuses on diagnosing and treating skin conditions. He is passionate about helping patients achieve healthy, radiant skin through both medical and cosmetic dermatology services.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 4,
    name: 'Dr. Christopher Lee',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc4.png',
    bio: 'Dr. Christopher Lee is a caring Pediatrician devoted to children’s health and wellbeing. He combines clinical expertise with a friendly approach, ensuring young patients and their families receive the best possible care from infancy to adolescence.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 5,
    name: 'Dr. Jennifer Garcia',
    speciality: 'Neurologist',
    image: 'assets/doctors/doc5.png',
    bio: 'Dr. Jennifer Garcia is a dedicated Neurologist specializing in the diagnosis and treatment of complex neurological disorders. He provides expert care for conditions such as migraines, epilepsy, and stroke, using the latest advancements in neurological medicine.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 6,
    name: 'Dr. Andrew',
    speciality: 'Gastroenterologist',
    image: 'assets/doctors/doc6.png',
    bio: 'Dr. Andrew is a skilled Gastroenterologist who specializes in managing digestive system disorders. He is committed to providing comprehensive care for conditions like IBS, liver disease, and gastrointestinal cancers with a patient-focused approach.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 7,
    name: 'Dr. Christopher Davis',
    speciality: 'General physician',
    image: 'assets/doctors/doc7.png',
    bio: 'Dr. Christopher Davis brings a wealth of experience as a General Physician. He offers comprehensive care for acute and chronic illnesses and emphasizes the importance of a healthy lifestyle and preventive strategies to promote overall well-being.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 8,
    name: 'Dr. Timothy White',
    speciality: 'Gynecologist',
    image: 'assets/doctors/doc8.png',
    bio: 'Dr. Timothy White is a trusted Gynecologist with expertise in reproductive health, prenatal care, and minimally invasive gynecological procedures. He prioritizes open communication and patient-centered care to support women through every life stage.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 9,
    name: 'Dr. Ava Mitchell',
    speciality: 'Dermatologist',
    image: 'assets/doctors/doc9.png',
    bio: 'Dr. Ava Mitchell is a board-certified Dermatologist with a keen eye for diagnosing skin disorders and performing cosmetic dermatology procedures. His goal is to help patients improve both the health and appearance of their skin.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 10,
    name: 'Dr. Jeffrey King',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc10.png',
    bio: 'Dr. Jeffrey King is a passionate Pediatrician with a gentle approach to treating children and adolescents. He is dedicated to creating a positive healthcare experience, promoting healthy development, and addressing a wide range of pediatric conditions.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 11,
    name: 'Dr. Jeffrey King',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc10.png',
    bio: 'Dr. Jeffrey King is a passionate Pediatrician with a gentle approach to treating children and adolescents. He is dedicated to creating a positive healthcare experience, promoting healthy development, and addressing a wide range of pediatric conditions.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 12,
    name: 'Dr. Jeffrey King',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc10.png',
    bio: 'Dr. Jeffrey King is a passionate Pediatrician with a gentle approach to treating children and adolescents. He is dedicated to creating a positive healthcare experience, promoting healthy development, and addressing a wide range of pediatric conditions.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 13,
    name: 'Dr. Jeffrey King',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc10.png',
    bio: 'Dr. Jeffrey King is a passionate Pediatrician with a gentle approach to treating children and adolescents. He is dedicated to creating a positive healthcare experience, promoting healthy development, and addressing a wide range of pediatric conditions.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 14,
    name: 'Dr. Jeffrey King',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc10.png',
    bio: 'Dr. Jeffrey King is a passionate Pediatrician with a gentle approach to treating children and adolescents. He is dedicated to creating a positive healthcare experience, promoting healthy development, and addressing a wide range of pediatric conditions.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

  {
    id: 15,
    name: 'Dr. Jeffrey King',
    speciality: 'Pediatricians',
    image: 'assets/doctors/doc10.png',
    bio: 'Dr. Jeffrey King is a passionate Pediatrician with a gentle approach to treating children and adolescents. He is dedicated to creating a positive healthcare experience, promoting healthy development, and addressing a wide range of pediatric conditions.',
    experience: '4 Years',
    fee: 50,
    slots: ['02:30 pm', '03:00 pm', '03:30 pm', '04:00 pm', '04:30 pm']
  },

    // Add more doctors here...
];


  constructor() {}

  // Method to get all doctors
  getAllDoctors() {
    return this.doctors;
  }

  // Method to get a single doctor by ID
  getDoctorById(id: number) {
    return this.doctors.find(doc => doc.id === id);
  }
}
