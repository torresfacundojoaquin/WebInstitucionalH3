import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

   constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('H3 Logística de Campo | Coadyuvantes agrícolas');

    this.meta.updateTag({
      name: 'description',
      content: 'H3 Logística de Campo ofrece coadyuvantes y soluciones para fumigaciones y aplicaciones agrícolas más eficientes.'
    });
  }

  images = [
    '/institutional/banner1.jpeg',
    '/institutional/banner2.jpeg',
    '/institutional/banner1.jpeg',
    '/institutional/banner2.jpeg'
  ];

  images1 = [
    '/institutional/banner1.jpeg',
    '/institutional/banner2.jpeg'
  ];

  images2 = [
    '/institutional/marca1.jpeg',
    '/institutional/marca2.jpeg',
    '/institutional/marca3.jpeg',
  ];

  images3 = [
    '/institutional/campo1.jpeg',
    '/institutional/campo2.jpeg',
    '/institutional/campo3.jpeg',
  ];

}
