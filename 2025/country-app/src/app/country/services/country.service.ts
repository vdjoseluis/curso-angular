import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { RESTCountry } from '../interfaces/rest-countries.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import type { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapFromRESTCountries(restCountries)),
        tap(countries => this.queryCacheCapital.set(query, countries)),

        catchError(error => {
          return throwError(() => new Error('No se encontraron resultados'));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    query = query.toLowerCase().trim();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(restCountries => CountryMapper.mapFromRESTCountries(restCountries)),
        tap(countries => this.queryCacheCountry.set(query, countries)),
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

  searchByRegion(region: Region) {
    const url = `${API_URL}/region/${region}`;

    if (this.queryCacheRegion.has(region)) {
      return of(this.queryCacheRegion.get(region) ?? []);
    }

    return this.http.get<RESTCountry[]>(url)
      .pipe(
        map(restCountries => CountryMapper.mapFromRESTCountries(restCountries)),
        tap(countries => this.queryCacheRegion.set(region, countries)),
        catchError(error => {
          return throwError(() => new Error('No se encontraron resultados'));
        })
      );
  }
}
