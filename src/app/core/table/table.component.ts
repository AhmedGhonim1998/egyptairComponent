import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-table',
  imports: [CommonModule, RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
flights = [
  { 
    no: 'MS 729', from: 'القاهرة (CAI)', to: 'موسكو (DME)', 
    date: '25 مايو 2024', time: '10:30 ص', class: 'رجال الأعمال',
    status: 'مؤكدة', statusClass: 'confirmed' 
  },
  { 
    no: 'MS 955', from: 'القاهرة (CAI)', to: 'نيويورك (JFK)', 
    date: '02 يونيو 2024', time: '01:15 م', class: 'السياحية',
    status: 'قيد الانتظار', statusClass: 'pending' 
  }
];
}
