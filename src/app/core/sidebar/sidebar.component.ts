import { Component, HostListener, ElementRef } from '@angular/core';
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

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Only run if sidebar is open
    if (!this.isOpen) return;

    const target = event.target as HTMLElement;
    const sidebarElement = this.elementRef.nativeElement.querySelector('.dynamic-sidebar');
    const toggleButton = this.elementRef.nativeElement.querySelector('.sidebar-toggle');

    // If the click is inside the sidebar OR on the toggle button, do nothing
    if (sidebarElement?.contains(target) || toggleButton?.contains(target)) {
      return;
    }

    // Otherwise, close the sidebar
    this.isOpen = false;
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  closeMobileMenu(): void {
    if (window.innerWidth <= 768) {
      this.isOpen = false;
    }
  }
}