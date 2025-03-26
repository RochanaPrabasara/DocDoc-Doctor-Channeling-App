import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent {
  createAccountForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.createAccountForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  showCreateForm: boolean = true;

  toggleForms() {
    this.showCreateForm = !this.showCreateForm;
  }

  // Form submission
  onSubmit() {
    if (this.createAccountForm.invalid) return;

    const formData = this.createAccountForm.value;

    this.authService.registerUser(formData).subscribe({
      next: (res) => {
        alert('Account created successfully!');
        this.router.navigate(['/register']); // or show the login form inline if you prefer
      },
      error: (err) => {
        alert(err.error.message || 'Something went wrong');
      }
    }); 
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
  
      this.authService.loginUser(loginData).subscribe({
        next: (res: any) => {
          // 🟢 FIX: Use setUser() to update state & localStorage in one step
          this.authService.setUser(res.user);
          localStorage.setItem('token', res.token);
  
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
  
          this.loginForm.reset();
  
          // Redirect to homepage (or wherever you like)
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          this.snackBar.open(err.error.message || 'Login failed', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }
}
