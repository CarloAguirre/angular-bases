import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";


@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 500
    },
    {
      id: uuid(),
      name: "Goku",
      power: 10000
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 9500
    }
  ];

  onNewCharacter(character: Character):void {
    const newCharacter: Character = {...character, id: uuid()}
    console.log(newCharacter)
    this.characters.push(newCharacter);
  }

 onDeleteCharacter(id: string){
    const newList = this.characters.filter(character=> character.id != id)
    this.characters = newList
  }

}
