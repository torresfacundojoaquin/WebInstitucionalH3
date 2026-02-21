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

    const endpoint = 'https://api.web3forms.com/submit';

    const payload = {
      access_key: '3e593baf-a712-42ae-b5e2-ca7b38be9793',
      name: this.model.name,
      email: this.model.email,
      message: this.model.message,

      subject: 'Nueva consulta desde la web',
      from_name: this.model.name,
      replyto: this.model.email,
    };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        this.openModal('Mensaje enviado correctamente 🎉', 'success');
        form.resetForm();
        this.attemptedSubmit = false;
      } else if (res.status === 429) {
        this.openModal('Se alcanzó el límite mensual de mensajes. Probá más tarde.', 'error');
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