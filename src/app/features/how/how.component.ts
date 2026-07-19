import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-how',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './how.component.html',
  standalone: true,
})
export class HowComponent {
  readonly steps = [
    {
      titleKey: 'how.step1.title',
      descKey: 'how.step1.desc',
      icon: 'bi-bag-heart',
      image: 'assets/dresses/ck-1.jpg',
    },
    {
      titleKey: 'how.step2.title',
      descKey: 'how.step2.desc',
      icon: 'bi-calendar2-check',
      image: 'assets/dresses/ck-7.jpg',
    },
    {
      titleKey: 'how.step3.title',
      descKey: 'how.step3.desc',
      icon: 'bi-stars',
      image: 'assets/dresses/ck-6.jpg',
    },
  ];

  readonly notes = [
    { key: 'how.note.1', icon: 'bi-calendar3' },
    { key: 'how.note.2', icon: 'bi-person-check' },
    { key: 'how.note.3', icon: 'bi-journal-check' },
    { key: 'how.note.4', icon: 'bi-chat-heart' },
  ];
}
