import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen = false; // starts closed

  menuItems = [
    { path: '/home', icon: 'fas fa-home', title: 'Home' },
    { path: '/flights', icon: 'fas fa-plane', title: 'My Flights' },
    { path: '/bookings', icon: 'fas fa-calendar-check', title: 'Bookings' },
    { path: '/destinations', icon: 'fas fa-map-marked-alt', title: 'Destinations' },
    { path: '/settings', icon: 'fas fa-cog', title: 'Settings' },
    { path: '/support', icon: 'fas fa-headset', title: 'Support' }
  ];

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  closeMobileMenu(): void {
    if (window.innerWidth <= 768) {
      this.isOpen = false;
    }
  }
}