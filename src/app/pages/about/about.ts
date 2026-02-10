import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true
})
export class About {
   constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nosotros | H3 Logística de Campo');

    this.meta.updateTag({
      name: 'description',
      content: 'H3 Logística de Campo es una empresa dedicada al desarrollo de coadyuvantes y agroquímicos para fumigaciones y aplicaciones agrícolas.'
    });
  }
}
