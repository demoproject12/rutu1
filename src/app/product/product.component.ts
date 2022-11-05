import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardWidth=13
  shadow=   "5px 10px 8px #888888"
  cardtextstyle=
  {
    "font-size": "15px",
  "font-family": "Times New Roman', Times, serif"
}
  
private _searchBy:string=""


  products= [{
    id:1,
    name: "I PHONE 13",
    discription:" Super Retina XDR display with True Tone and an A15 Bionic chip",
    price: "30000 ₹",
    img: "assets/img/almond.jpg",
    bgcolor:true,
    bgcolorone:false,
    category:"mobile"
  },
  {
    id:2,
    name: "SAMSUNG G-22",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/berry.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },
  {
    id:3,
    name: "ONEPLUS TV",
    discription:"Display Size: 108cm (43 inch)sdcfvbaszdxcfvgb uytgfrdeswa ",
    price: "56800 ₹",
    img: "assets/img/bubble.jpg",
    bgcolor:true,
    bgcolorone:false,
    category:"tv"
  },
  {
    id:4,
    name: "LG TV",
    discription:" but Sony's LED options usually have VA panels, making for",
    price: "34800 ₹",
    img: "assets/img/butter.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"tv"
  },
  {
    id:5,
    name: "GODREJ FRIDGE",
    discription:"A refrigerator (fridge) is a commercial and home appliance consisting of ",
    price: "78000 ₹",
    img: "assets/img/candy.jpg",
    bgcolor:true,
    bgcolorone:false,
    category:"fridge"
  },
  {
    id:6,
    name: "BOAT HEADSET",
    discription:"qawertyuik jkhgfds azxcvbn uytgfrdeswa zxcvbn",
    price: "2000 ₹",
    img: "assets/img/cheery.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"headphone"
  },
  {
    id:7,
    name: "LENOVO 3",
    discription:" Super Retina XDR display with True Tone and an A15 Bionic chip",
    price: "30000 ₹",
    img: "assets/img/chip.jpg",
    bgcolor:true,
    bgcolorone:false,
    category:"mobile"
  },
  {
    id:9,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/chocolate.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:10,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/coco.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:11,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/moose.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:12,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/mango.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:13,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/nut.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:14,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/oreo.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:15,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/penut.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  
  {
    id:16,
    name: "VIVO-45",
    discription:"The Galaxy A22 combines Octa-core processing power with",
    price: "50003 ₹",
    img: "assets/img/pine.jpg",
    bgcolor:false,
    bgcolorone:true,
    category:"mobile"
  
  },  


  ]

  filterproductarray=this.products
  filterproduct(category:string):void
  {
     if(category==="all")
     {
       this.filterproductarray=this.products
     }
     else
     {
       this.filterproductarray=this.products.filter(product=>product.category===category)
     }
  }


//searchByfilter(event:any):void{
  //console.log(event.target.value);
  //this.searchBy = event.target.value;

//}
 get searchBy():string
 {
   return this._searchBy
 }

 set searchBy(sb:string)
 {
    this._searchBy=sb
    this.filterproductarray=this.products.filter(product=>product.name.toLowerCase().includes(sb.toLowerCase()))

 }

}

