import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../shared/heroe.service';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  variable:number=0;

  checar():boolean{
    if(this.variable<5)
      return true;
    else
      return false;
    this.variable++;
  }

  misHeroes: Heroe[] = [];

  constructor(public miservicio: HeroeService) {

    console.log("constructor de heroes");

  }

  ngOnInit(): void {

    console.log("ngOnInit de Heroes");
    this.misHeroes = this.miservicio.getHeroes();
    console.log(this.misHeroes);

  }

}
