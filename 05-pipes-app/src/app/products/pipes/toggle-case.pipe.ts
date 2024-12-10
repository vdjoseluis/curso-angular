import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'toggleCase'})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean= false): string {  // podria ser:  transform(value: string, ...args: any[] ): string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}