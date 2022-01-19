import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Imenu } from './models/imenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public nav: Imenu;

  constructor(public authService: AuthService) { 
    this.nav = {
      logo: {
        src: '',
        alt: '' ,
      },
      menu: [
        { name: "Home", url: '/'},
        { name: "Libros", url: '/books' },
        { name: "Librerías", url: '/bookshops' },
        { name: "Gestión", url: '/gestion' },
        { name: "Sign-up", url: '/register' },
        { name: "Sign-in", url: '/login' }
      ]
    }
  }

  ngOnInit(): void {/* Empty */
    this.authService.doLogout();}

  public logout() {
    this.authService.doLogout();
  }

}
