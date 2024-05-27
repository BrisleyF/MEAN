import { Component, Input } from '@angular/core';

interface IUser {
  nombre:string;
  email:string;
}

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})

export class UserDetailsComponent {
  @Input() user: {nombre:string, email:string} = {
    nombre: '',
    email: ''
  };

  //user2!: IUser;

}
