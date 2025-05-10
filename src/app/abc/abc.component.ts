import { Component } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent {

  userName = "bdhjb"


  // onKeyUp(event: KeyboardEvent) {
  //   console.log((event.target as HTMLInputElement).value);
how(){
  console.log(this.userName);
};

imageurl = 'https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-13.png'

imgurl = '/assets/abc.jpg'

msg: string= "";
msgo: string="";

showmsg(){
  this.msg = "button clicked"

}

mover(){
  this.msgo = "mouseovered"
}

 name:string ="shivam"

isActive = true;

isCondition = true;

arr:number[]  = [1,2,3,4,5];

                                                     
 
}