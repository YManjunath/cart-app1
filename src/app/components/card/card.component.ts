import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  filteredItems: any = [];
  selectedItem: any;
  finalItems: any = [];
  count:any = 0;
  total:any = [];

  constructor() {
  }

  imageList: any = ['../assets/download (5).jpg', '../assets/download (5).jpg'];
  cartList: any = [
    {
      "p_name": "Apple",
      "p_id": 1,
      "p_cost": 30,
      "p_availability": 1,
      "p_details": "Imported from Swiss",
      "p_category": "Premium",
      "p_quantity": 30,
      "p_image": '../assets/apple.jpg'
    },
    {
      "p_name": "Mango",
      "p_id": 2,
      "p_cost": 50,
      "p_availability": 1,
      "p_details": "Farmed at Selam",
      "p_category": "Tamilnadu",
      "p_quantity": 15,
      "p_image": '../assets/mango.jpg'
    },
    {
      "p_name": "Bananna",
      "p_id": 3,
      "p_cost": 5,
      "p_availability": 0,
      "p_details": "Farmed at Nepal",
      "p_quantity": 25,
      "p_image": '../assets/banana.jpg'
    },
    {
      "p_name": "Orange",
      "p_id": 4,
      "p_cost": 25,
      "p_availability": 1,
      "p_details": "from Nagpur",
      "p_category": "Premium",
      "p_quantity": 20,
      "p_image": '../assets/orange.jpg'
    },
    {
      "p_name": "guava ",
      "p_id": 5,
      "p_cost": 35,
      "p_availability": 1,
      "p_details": "from Bangalore",
      "p_category": "Premium",
      "p_quantity": 10,
      "p_image": '../assets/Guava.jpg'
    }
  ]

  ngOnInit(): void {
    this.filteredItems = this.cartList;
    console.log("allList", this.filteredItems);
  }

  // Filter an item for search
  filterItems() {
    this.filteredItems = this.cartList.filter((item: any) => item.p_name.toLowerCase().includes(this.selectedItem.toLowerCase()))
    console.log(this.filteredItems);
  }

  increment(){
    this.count++
  }

  decrement(){
    this.count -= 1;
    if(this.count < 0){
      this.count = 0
    }
  }

  addItem(id?: any) {
    console.log("id@@@", id)
    this.count += 1
    let itemName = this.cartList.find((x: any) => x.p_id === id).p_name;
    let quantity = this.cartList.find((x: any) => x.p_id === id).p_quantity;
    let amount = this.cartList.find((x: any) => x.p_id === id).p_cost;
    console.log("item name", itemName)
    this.total.push(amount)
    console.log(this.total)
    this.finalItems.push({selectedItem:itemName,amount:amount})
    console.log(this.finalItems)
  }

}
