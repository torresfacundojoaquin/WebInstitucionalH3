import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sending = false;

  attemptedSubmit = false;

  showModal = false;
  modalMessage = '';
  modalType: 'success' | 'error' = 'success';

  model = {
    name: '',
    email: '',
    message: '',
  };

  async submit(form: NgForm) {
    this.attemptedSubmit = true;
    form.control.markAllAsTouched();

    if (this.sending) return;
    if (!form.valid) return;

    this.sending = true;

    const endpoint = 'https://formspree.io/f/mvzbgdjo';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.model),
      });

      if (res.ok) {
        this.openModal('Mensaje enviado correctamente 🎉', 'success');
        form.resetForm();
        this.attemptedSubmit = false;
      } else {
        this.openModal('Error al enviar el mensaje. Intentá nuevamente.', 'error');
      }
    } catch {
      this.openModal('Error de conexión. Revisá tu internet.', 'error');
    } finally {
      this.sending = false;
    }
  }

  openModal(message: string, type: 'success' | 'error') {
    this.modalMessage = message;
    this.modalType = type;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.modalMessage = '';
  }
}