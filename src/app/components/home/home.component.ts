import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  specialities = [
    { name: 'General physician', image: 'General_physician.svg' },
    { name: 'Gynecologist', image: 'Gynecologist.svg' },
    { name: 'Dermatologist', image: 'Dermatologist.svg' },
    { name: 'Pediatricians', image: 'Pediatricians.svg' },
    { name: 'Neurologist', image: 'Neurologist.svg' },
    { name: 'Gastroenterologist', image: 'Gastroenterologist.svg' }
  ];

  doctors = [
    { id:1, name: 'Dr. Richard James', speciality: 'General physician', image: 'assets/doctors/doc1.png' },
    { id:2, name: 'Dr. Emily Larson', speciality: 'Gynecologist', image: 'assets/doctors/doc2.png' },
    { id:3, name: 'Dr. Sarah Jonson', speciality: 'Dermatologist', image: 'assets/doctors/doc3.png' },
    { id:4, name: 'Dr. Christopher Lee', speciality: 'Pediatricians', image: 'assets/doctors/doc4.png' },
    { id:5, name: 'Dr. Jennifer Garcia', speciality: 'Neurologist', image: 'assets/doctors/doc5.png' },
    { id:6, name: 'Dr. Andrew', speciality: 'Gastroenterologist', image: 'assets/doctors/doc6.png' },
    { id:7, name: 'Dr. Christopher Davis', speciality: 'General physician', image: 'assets/doctors/doc7.png' },
    { id:8, name: 'Dr. Timothy White', speciality: 'Gynecologist', image: 'assets/doctors/doc8.png' },
    { id:9, name: 'Dr. Ava Mitchell', speciality: 'Dermatologist', image: 'assets/doctors/doc9.png' },
    { id:10, name: 'Dr. Jeffrey King', speciality: 'Pediatricians', image: 'assets/doctors/doc10.png' },
    // Add more as needed...
  ];

  scrollToSpeciality() {
    const element = document.getElementById('speciality-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  constructor(private router: Router) {}

  goToDoctorDetails(doctorId: number) {
    this.router.navigate(['/doctor', doctorId]);
  }



}
