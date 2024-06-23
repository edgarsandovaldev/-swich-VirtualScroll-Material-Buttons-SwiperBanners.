import { CUSTOM_ELEMENTS_SCHEMA, Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';



// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();



//Material
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [
    // Modulos de Angular Material necesarios.
    MatButtonModule, MatIconModule, MatTabsModule, MatDividerModule, ScrollingModule, MatChipsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // Este lo llamamos para integrar swiper JS para las Galerias y banners.
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

  // Se crean las colecciones a presentar para el @swich
  coleccion: any;
  lamys = [] = [];
  parkers = [] = [];
  pillots = [] = [];



}
