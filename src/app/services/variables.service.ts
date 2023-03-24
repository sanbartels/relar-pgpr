import { Injectable } from '@angular/core';
import { Trabajo } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  currentTema = 0;
  currentSearch = '';
  navegateTo = '/posterhall';
  
  constructor() {
  }

}
