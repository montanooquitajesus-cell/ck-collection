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
  readonly notes = ['how.note.1', 'how.note.2', 'how.note.3', 'how.note.4'];
}
