import { Injectable } from '@angular/core';


export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
  email: string;
  password: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private heroesUrl = 'api/heroes';

  data: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', email: 'hydrogen@example.com', password: 'password1', phone: '123-456-7890'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', email: 'helium@example.com', password: 'password2', phone: '123-456-7891'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', email: 'lithium@example.com', password: 'password3', phone: '123-456-7892'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', email: 'beryllium@example.com', password: 'password4', phone: '123-456-7893'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', email: 'boron@example.com', password: 'password5', phone: '123-456-7894'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', email: 'carbon@example.com', password: 'password6', phone: '123-456-7895'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', email: 'nitrogen@example.com', password: 'password7', phone: '123-456-7896'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', email: 'oxygen@example.com', password: 'password8', phone: '123-456-7897'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', email: 'fluorine@example.com', password: 'password9', phone: '123-456-7898'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', email: 'neon@example.com', password: 'password10', phone: '123-456-7899'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', email: 'sodium@example.com', password: 'password11', phone: '123-456-7900'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', email: 'magnesium@example.com', password: 'password12', phone: '123-456-7901'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', email: 'aluminum@example.com', password: 'password13', phone: '123-456-7902'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', email: 'silicon@example.com', password: 'password14', phone: '123-456-7903'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', email: 'phosphorus@example.com', password: 'password15', phone: '123-456-7904'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', email: 'sulfur@example.com', password: 'password16', phone: '123-456-7905'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', email: 'chlorine@example.com', password: 'password17', phone: '123-456-7906'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', email: 'argon@example.com', password: 'password18', phone: '123-456-7907'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', email: 'potassium@example.com', password: 'password19', phone: '123-456-7908'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', email: 'calcium@example.com', password: 'password20', phone: '123-456-7909'},
  ];
  constructor() { }

  getData(){
    return this.data;
  }
  addData(user:PeriodicElement){
    this.data.push(user);
  }
}
