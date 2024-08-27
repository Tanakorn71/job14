import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  items=[
    {
      id:1,
      name:'Product A',
      price: 200,
      detail:'this is a Product A',
      imageURL: 'https://images.droidsans.com/wp-content/uploads/2023/01/rog-zephyrus-m16-2023-600x400.png',
    },

    {
      id:2,
      name:'Product B',
      price: 250,
      detail:'this is a Product B',
      imageURL: 'https://images.droidsans.com/wp-content/uploads/2023/01/rog-zephyrus-m16-2023-600x400.png',
    },

    {
      id:3,
      name:'Product C',
      price: 300,
      detail:'this is a Product C',
      imageURL: 'https://images.droidsans.com/wp-content/uploads/2023/01/rog-zephyrus-m16-2023-600x400.png',
    },

    {
      id:4,
      name:'Product D',
      price: 350,
      detail:'this is a Product D',
      imageURL: 'https://images.droidsans.com/wp-content/uploads/2023/01/rog-zephyrus-m16-2023-600x400.png',
    },
  ]

}
