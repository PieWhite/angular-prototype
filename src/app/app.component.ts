// Suggested code may be subject to a license. Learn more: ~LicenseLog:1257439722.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1138794751.

import { Component } from '@angular/core';
     import { RouterModule } from '@angular/router'; // Import RouterModule
     import { CounterButtonComponent } from './components/counter-button.component';

     @Component({
       selector: 'app-root',
       templateUrl: './app.component.html',
       styleUrls: ['./app.component.css'],
       standalone: true,
       imports: [CounterButtonComponent, RouterModule] // Add RouterModule to imports
     })
     export class AppComponent {
       title = 'my-app';
       count = 0;

       onCountChange(newCount: number) {
         this.count = newCount;
       }
     }
