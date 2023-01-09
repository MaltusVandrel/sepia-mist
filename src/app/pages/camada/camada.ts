import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'page-camada',
  templateUrl: 'camada.html',
  styleUrls: ['camada.scss'],
})
export class CamadaPage {
  dataSource: any[] = [
    {
      concept: 'A',
      characteristic: 'B',
      property: 'B',
      aligment: 'B',
      aggresivity: 'B',
      risk: 'B',
      exit: 'B',
      peculiarity: 'B',
    },
  ];
  displayedColumns: string[] = [
    'concept',
    'characteristic',
    'property',
    'aligment',
    'aggresivity',
    'risk',
    'exit',
    'peculiarity',
  ];
  concepts = [
    { name: 'Residencial' },
    { name: 'Lazer' },
    { name: 'Urbano' },
    { name: 'Comercial' },
    { name: 'Industrial' },
    { name: 'Rural' },
    { name: 'Natural' },
    { name: 'Metafisico' },
    { name: 'Orgânico' },
    { name: 'Misto', multiple: true },
  ];
  getRandom(arr: any[]) {
    let length = arr.length;
    let runs = 1;
    let properties = [];
    while (runs > 0) {
      let i = Math.floor(Math.random() * length);
      let bean = arr[i];
      if (bean.multiple) {
        runs += 1;
      } else {
        runs--;
        properties.push(bean.name);
      }
    }
    return properties.join();
  }
}
