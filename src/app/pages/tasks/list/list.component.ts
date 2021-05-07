import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mockData = [
    {
      name: 'Recolección en Lomas Verdes',
      description: 'Recolecta paquete con dimensiones 50x50, 1kg a nombre de Luis V.',
      duration: '60:00',
    },
    {
      name: 'Entrega en Condesa',
      description: 'Entregar paquete a nombre de Sara J. Querétaro #201-1',
      duration: '30:00',
    },
    {
      name: 'Recolección en YEMA',
      description: 'Recolecta paquetería 15pzas ch, 2pzas md antes de las 14:30',
      duration: '90:00',
    },
    {
      name: 'Recolección y entrega Canasta Rosa',
      description: 'Recolecta paquete con dimensiones 50x50, a nombre de Tomás M. Entrega en Zacatecas 123-A3',
      duration: '60:00',
    },
  ]

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }
  onGoToDetails(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras)
  }
  onDelete(item: any): void{
    alert('Deleted')
  }

}
