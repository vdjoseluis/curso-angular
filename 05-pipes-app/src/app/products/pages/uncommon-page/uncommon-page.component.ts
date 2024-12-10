import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'José Luis';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Raquel';
    this.gender = 'female';
  }

  //i18n Plural Pipe
  public clients: string[] = ['Maria Cristina', 'José Luis', 'Sophie', 'Raquel', 'José'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // Key Value Pipe
  public person = {
    name: 'José Luis',
    age: 44,
    address: 'Colmenar, Málaga'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> =interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'GAME OVER';
    }, 3500);
  });
}
