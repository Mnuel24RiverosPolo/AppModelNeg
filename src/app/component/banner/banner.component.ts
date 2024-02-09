import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  imgUrls: string[] = [
    'https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1705/sergeypykhonin170500095/79248250-compras-banner-de-boutique-concepto-de-tienda-de-moda-ilustraci%C3%B3n-vectorial.jpg',
    'https://www.shutterstock.com/shutterstock/photos/2210391297/display_1500/stock-vector-website-banner-about-national-wardrobe-day-flat-style-vector-illustration-isolated-on-white-2210391297.jpg',

  ];
  currentImg: string = '';
  bannerText: string = "Bienvenidos a Pandoro";
  ngOnInit(): void {
    this.startImageSlider();
  }

  startImageSlider() {
    let index = 0;
    setInterval(() => {
      this.bannerText = "Lo último en modas de tu preferencia"
      this.currentImg = this.imgUrls[index];
      index = (index + 1) % this.imgUrls.length;
    }, 4000);
  }
}
