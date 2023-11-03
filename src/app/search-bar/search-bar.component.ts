import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  term: string = ''

  onInit(){
    console.log(this.term);
    
  }


  



  //  userInput(data:string){

  //   console.log(data)
  //  }

  onFormSubmitKuchBhi(event:any){
    event.preventDefault();
    console.log(this.term);
    
  }



}
