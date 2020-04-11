import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1 style="text-align:center;">{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `,
})

export class AppComponent {
  pageTitle = 'Angventory'; // property/data followed by :datatype
}
