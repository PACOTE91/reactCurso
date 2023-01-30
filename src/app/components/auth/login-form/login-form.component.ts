import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem('token', response.token);
      },
      (error) => console.log('Ha habido algun error ' + error)
    );
  }
}
