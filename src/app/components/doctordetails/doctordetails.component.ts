import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctordetails',
  templateUrl: './doctordetails.component.html',
  styleUrls: ['./doctordetails.component.scss']
})
export class DoctordetailsComponent implements OnInit {

  doctorId: number | null = null;
  doctor: any;
  selectedDate!: string;
  availableSlots: string[] = [];
  selectedSlot!: string;
  next7Days: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private bookingService: BookingService,   
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {

    //window.scrollTo({ top: 0, behavior: 'smooth' });

    this.doctorId = Number(this.route.snapshot.paramMap.get('id'));
    this.doctor = this.doctorService.getDoctorById(this.doctorId);
  
    if (this.doctor) {
      // generate next 7 days
      this.generateNext7Days();
      // select today's date
      this.selectedDate = this.next7Days[0];
      this.availableSlots = this.doctor.slots[this.selectedDate] || [];
    }
  }

  generateNext7Days() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      this.next7Days.push(date.toISOString().split('T')[0]); // 'YYYY-MM-DD'
    }
  }

  selectDate(date: string) {
    this.selectedDate = date;
    this.selectedSlot = '';
    this.availableSlots = this.doctor.slots[date] || [];
  }
  
  selectSlot(slot: string) {
    this.selectedSlot = slot;
  }

  bookAppointment() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user || !user.fullName || !user.email) {
      alert('Please log in to book an appointment!');
      this.router.navigate(['/register']);
      return;
    }

    if (this.selectedSlot) {
      const bookingData = {
        doctorId: this.doctor.id,
        doctorName: this.doctor.name,
        date: this.selectedDate,
        time: this.selectedSlot,
        patientName: user.fullName, // auto-filled
        patientEmail: user.email // auto-filled
      };

      this.bookingService.createBooking(bookingData).subscribe({
        next: () => {
          alert('Appointment booked successfully!');
          this.selectedSlot = '';
        },
        error: () => {
          alert('Booking failed, please try again.');
        }
      });
    } else {
      alert('Please select a slot before booking.');
    }

    this.snackBar.open('Appointment Booked Successfully!', 'Undo', {
      duration: 3000, // Display time in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

  }
}



