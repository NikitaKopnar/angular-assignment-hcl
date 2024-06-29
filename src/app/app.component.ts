import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';
import { AppHighlightDirectiveDirective } from './app-highlight-directive.directive';
import { HttpClientModule } from '@angular/common/http';
import { LearnObservableRxjsComponent } from './learn-observable-rxjs/learn-observable-rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponentComponent, AppHighlightDirectiveDirective, RouterModule, HttpClientModule,LearnObservableRxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
  email = "Nikita@gmail.com";
  name = "Nikita M. Kopnar";
}
