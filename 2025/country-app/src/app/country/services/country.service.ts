import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapFromRESTCountries(restCountries)),
        catchError(error => {
          return throwError(() => new Error('No se encontraron resultados'));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(restCountries => CountryMapper.mapFromRESTCountries(restCountries)),
        delay(1500),
        catchError(error => {
          return throwError(() => new Error('No se encontraron resultados'));
        })
      );
  }

  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;
    code = code.toLowerCase().trim();

    return this.http.get<RESTCountry[]>(url).pipe(
      map(resp => CountryMapper.mapFromRESTCountries(resp)),
      map(countries => countries.at(0)),
      catchError(error => {
        return throwError(() => new Error('No se encontraron resultados'));
      })
    );
  }
}
