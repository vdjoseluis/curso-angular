import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = 'jose luis';
  public nameUpper: string = 'JOSE LUIS';
  public fullName: string = 'jOSe LuIs';

  public customDate: Date = new Date();
}
