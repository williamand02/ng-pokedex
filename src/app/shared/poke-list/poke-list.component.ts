import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;
  public apiError = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
      error => {
        this.apiError = true
      }

    )
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    })

    this.getAllPokemons = filter;
  }

}
