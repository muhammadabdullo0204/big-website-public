import { Component } from '@angular/core';




@Component({
  selector: 'app-biz-haqimizda',
  templateUrl: './biz-haqimizda.component.html',
  styleUrl: './biz-haqimizda.component.scss',
})
export class BizHaqimizdaComponent {


  minHeight: string = '300px'; 

  
  bilibolish(): void {
    if (this.minHeight === '650px') {
      this.minHeight = '300px'; 
    } else {
      this.minHeight = '650px'; 
    }
  }
}
