import { Component, OnInit } from '@angular/core';
import { TableCompose } from './provider/table/table-compose';
import { DataType } from './provider/table/data-type.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  tableData:any;
  mockData=[
    {
      name:"ropa",
      surname:"muridzi",
      age:23,
      status:false
    },
    {
      name:"pride",
      surname:"jena",
      age:29,
      status:true
    
    },
    {
      name:"chipo",
      surname:"masamah",
      age:56,
      status:false
    },
    {
      name:"tafadzwa",
      surname:"mazorodze",
      age:35,
      status:true
    },
    {
      name:"rodrick",
      surname:"chinongwa",
      age:60,
      status:false
    }
  ];

mockData2 = [
  { title: "Animals",
    subTitle: [
      {title: "Dogs",
        subSubTitle: [
          { dogTitles: "Coton de Tulear"},
          { dogTitles: "German Shepherd"},
          { dogTitles: "Poodle"},
        ]      
      },
      {title: "Birds"},
      {title: "Cats"}
    ]
  },
  { title: "Cars",
  subTitle: [
    {title: "Tessla"},
    {title: "Toyota"}
  ]
  },
  { title: "Phones",
    subTitle: [
      {title: "Google"},
      {title: "Samsung"},
      {title: "OnePlus",
        subSubTitle: [
          { onePlusTitles: "1"},
          { onePlusTitles: "2"},
          { onePlusTitles: "3"},
          { onePlusTitles: "4"},
          { onePlusTitles: "5"},
          { onePlusTitles: "6"},
        ]      
      }
    ]
  }
];

  constructor(private router: Router){}

  ngOnInit() {
    this.tableData = new TableCompose()
    .composeHeader('name', 'Name', DataType.Plain)
    .composeHeader('surname', 'Surname', DataType.Plain)
    .composeHeader('age', 'Age', DataType.Plain)
    .composeHeader('status', 'Attendance',DataType.Check)
     .setBody(this.mockData);

    //  let currentUser = JSON.parse(localStorage.getItem('currentCustomer'));
    //  if (currentUser && currentUser.token) {
    //    return;
    //  }
    //  else this.router.navigate(['login']);

    console.log(this.mockData2);
    

  }
}

