import { Component, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainDBZComponent {


  public characters: Character[] = [
    {
      name: "Krillin",
      power: 500
    },
    {
      name: "Goku",
      power: 10000
    },
    {
      name: "Vegeta",
      power: 9500
    }
  ];

  onNewCharacter(character: Character):void {
    this.characters.push(character);
  }

 onDeleteCharacter(index: number){
    this.characters.splice(index, 1)
  }

}
