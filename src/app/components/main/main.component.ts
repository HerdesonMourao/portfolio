import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ClientsComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
