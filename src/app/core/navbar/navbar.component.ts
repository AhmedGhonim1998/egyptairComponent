import { Component, HostListener, ElementRef } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  // الخطأ كان هنا: لازم تضيف كلمة private قبل eRef
  constructor(private eRef: ElementRef) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  @HostListener('window:scroll', [])
onWindowScroll() {
  const nav = document.querySelector('.custom-navbar');
  if (window.pageYOffset > 50) {
    nav?.classList.add('nav-scrolled');
  } else {
    nav?.classList.remove('nav-scrolled');
  }
}

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    // دلوقتي this.eRef بقت معروفة للكلاس كله
    if (this.isMenuOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 992) {
      this.isMenuOpen = false;
    }
  }
}
