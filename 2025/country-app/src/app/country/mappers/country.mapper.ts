import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interface';
export class CountryMapper {
  static mapFromRESTCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common || restCountry.name.common,
      capital: restCountry.capital?.join(', '),
      population: restCountry.population,
      region: restCountry.region,
      subRegion: restCountry.subregion,
    };
  }

  static mapFromRESTCountries(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(this.mapFromRESTCountry);
  }
}
