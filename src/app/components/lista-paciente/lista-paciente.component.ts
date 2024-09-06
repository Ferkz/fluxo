import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  nome: string;
  position: number;
  peso: number;
  leito: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Hydrogen',peso: 90, leito: 'UTI-1-LEITO-1'},
  {position: 2, nome: 'Helium',peso: 90, leito: 'UTI-1-LEITO-2'},
  {position: 3, nome: 'Lithium',peso: 90, leito: 'UTI-1-LEITO-3'},
  {position: 4, nome: 'Beryllium',peso: 90, leito: 'UTI-1-LEITO-4'},
  {position: 5, nome: 'Boron',peso: 100 , leito: 'UTI-1-LEITO-5'},
  {position: 6, nome: 'Carbon',peso: 90, leito: 'UTI-1-LEITO-6'},
  {position: 7, nome: 'Nitrogen',peso: 92, leito: 'UTI-1-LEITO-7'},
  {position: 8, nome: 'Oxygen',peso: 93, leito: 'UTI-1-LEITO-8'},
  {position: 9, nome: 'Fluorine',peso: 90, leito: 'UTI-1-LEITO-9'},
  {position: 10, nome: 'Neon',peso: 100, leito: 'UTI-1-LEITO-10'},
];
@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.scss']
})

export class ListaPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'nome', 'peso', 'leito'];
  dataSource = ELEMENT_DATA;

}
