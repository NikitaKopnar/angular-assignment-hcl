import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AppHighlightDirectiveDirective } from '../app-highlight-directive.directive';

@Component({
  selector: 'user-profile-component',
  standalone: true,
  imports: [AppHighlightDirectiveDirective],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css',
})
export class UserProfileComponentComponent {
@Input() email: any;
@Input() name!: string;
Red: string = 'red';
}
