import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.scss']
})
export class AlldoctorsComponent {

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
    { id:11, name: 'Dr. Zoe Kelly', speciality: 'Neurologist', image: 'assets/doctors/doc11.png' },
    { id:12, name: 'Dr. Patrick Harris', speciality: 'Gastroenterologist', image: 'assets/doctors/doc12.png' },
    { id:13, name: 'Dr. Chloe Evans', speciality: 'General physician', image: 'assets/doctors/doc13.png' },
    { id:14, name: 'Dr. Ryan Martinez', speciality: 'Gynecologist', image: 'assets/doctors/doc14.png' },
    { id:15, name: 'Dr. Amelia Hill', speciality: 'Dermatologist', image: 'assets/doctors/doc15.png' },
    // Add more as needed...
  ];

  selectedSpeciality: string = '';

  filterBySpeciality(speciality: string) {
    this.selectedSpeciality = speciality;
  }

  resetFilter() {
    this.selectedSpeciality = '';
  }

  get filteredDoctors() {
    if (!this.selectedSpeciality) {
      return this.doctors;
    }
    return this.doctors.filter(doctors => doctors.speciality === this.selectedSpeciality);
  }

  constructor(private router: Router) {}

  goToDoctorDetails(doctorId: number) {
    this.router.navigate(['/doctor', doctorId]);
  }

}
