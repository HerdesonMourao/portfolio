import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      context: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    if(this.contactForm.valid){
      console.log('Dados do formulário:', this.contactForm.value);
      alert('Formulário enviado com sucesso!');

      this.contactForm.reset();
    } else {
      alert('Por favor, corrija os erros antes de enviar.');
    }
  }
}
