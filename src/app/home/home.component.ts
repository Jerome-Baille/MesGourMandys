import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { Products } from '../core/models/products';
import { ProductsService } from '../core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faInstagram = faInstagram;
  highlight$!: Observable<Products[]>;
  popular$!: Observable<Products[]>;

  imageObject: Array<object> = [{
      image: '../../assets/thumbnail/finger-mulan.webp',
      thumbImage: '../../assets/thumbnail/finger-mulan.webp',
      title: `Finger Mulan\n3.20 €`,
      alt: 'Finger Mulan',
    }, 
    {
        image: '../../assets/thumbnail/finger-jasmine.webp',
        thumbImage: '../../assets/thumbnail/finger-jasmine.webp',
        title: `Finger Jasmine\n3.20 €`,
        alt: 'Finger Jasmine',
    },
    {
        image: '../../assets/thumbnail/finger-vaiana.webp',
        thumbImage: '../../assets/thumbnail/finger-vaiana.webp',
        title: `Finger Vaïana\n3.20 €`,
        alt: 'Finger Vaïana',
    },
    {
        image: '../../assets/thumbnail/peanut-butter-brownie.webp',
        thumbImage: '../../assets/thumbnail/peanut-butter-brownie.webp',
        title: `Peanut butter brownie - 1 part\n2.80 €`,
        alt: 'Peanut butter brownie - 1 part',
    },
    {
        image: '../../assets/thumbnail/finger-tic-and-tac.webp',
        thumbImage: '../../assets/thumbnail/finger-tic-and-tac.webp',
        title: `Finger Tic & Tac\n3.20 €`,
        alt: 'Finger Tic & Tac',
    },
    {
        image: '../../assets/thumbnail/cookies-au-chocolat.webp',
        thumbImage: '../../assets/thumbnail/cookies-au-chocolat.webp',
        title: `Cookies au chocolat - lot de 6\n5.00 €`,
        alt: 'Cookies au chocolat',
    },
    {
        image: '../../assets/thumbnail/cake-marbré.webp',
        thumbImage: '../../assets/thumbnail/cake-marbré.webp',
        title: `Cake marbré à partager\n6.00 €`,
        alt: 'Cake marbré à partager',
    },
    {
        image: '../../assets/thumbnail/napolitain.webp',
        thumbImage: '../../assets/thumbnail/napolitain.webp',
        title: `Napolitain - 1 part\n3.70 €`,
        alt: 'Napolitain - 1 part',
    },
    {
        image: '../../assets/thumbnail/brownie.webp',
        thumbImage: '../../assets/thumbnail/brownie.webp',
        title: `Brownie - 1 part\n2.40 €`,
        alt: 'Brownie - 1 part',
    },
    {
        image: '../../assets/thumbnail/ring-cake.webp',
        thumbImage: '../../assets/thumbnail/ring-cake.webp',
        title: `Ring Cake\n30.00 €`,
        alt: 'Ring Cake',
    },
    {
        image: '../../assets/thumbnail/gateau-personnalisable.webp',
        thumbImage: '../../assets/thumbnail/gateau-personnalisable.webp',
        title: `Gâteau personnalisable sur commande\n60.00 €`,
        alt: 'Gâteau personnalisable sur commande',
    }
  ];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.highlight$ = this.productsService.getProducts('highlight=true');
    this.popular$ = this.productsService.getProducts('popular=true');
  }

}
