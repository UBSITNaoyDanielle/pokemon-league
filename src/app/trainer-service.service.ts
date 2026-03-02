import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
  // define 5 trainers with teams and items
  private registry = signal([
    {
      name: 'Ash Ketchum',
      team: ['Pikachu', 'Charizard'],
      items: ['Light ball', 'Charizardite Y']
    },
    {
      name: 'Misty',
      team: ['Staremie', 'Payduck', 'Gyarados'],
      items: ['Mystic waters', 'None', 'Gyaradosite']
    },
    {
      name: 'Brock',
      team: ['Onix', 'Golem', 'Vulpix'],
      items: ['Hard Stone', 'Eviolite', 'Fire']
    },
    {
      name: 'Erika',
      team: ['Vileplume', 'Tangela'],
      items: ['Miracle seed', 'Big Root']
    },
    {
      name: 'Lt. Surge',
      team: ['Raichu', 'Electabuzz'],
      items: ['Magnet', 'Expert Belt']
    },
    
    //add 3 more trainers
  ]);

  //expose signal as read-only
  trainers = this.registry.asReadonly();

//  constructor() { }
}
