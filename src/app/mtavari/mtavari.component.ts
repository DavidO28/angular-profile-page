import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtavari',
  templateUrl: './mtavari.component.html',
  styleUrls: ['./mtavari.component.css']
})
export class MtavariComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  persons: Array<{ id: number, name: string, surname: string, age: number, weight: number }> = [
    { id: 1, name: 'Naniko', surname: "Ilette", age: 28, weight: 60 },
    { id: 2, name: 'Bill', surname: "George", age: 26, weight: 70 },
    { id: 3, name: 'Daryl', surname: "Therine", age: 23, weight: 59 },
    { id: 4, name: 'Carolina', surname: "Thair", age: 35, weight: 64 },
    { id: 5, name: 'Ayn', surname: "Rebecka", age: 32, weight: 74 },
  ];
}
