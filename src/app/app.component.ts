import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 password='';
 IncludeLetters=false;
 IncludeNumbers=false;
 IncludeSymbols=false;
 length=0;
  OnButtonClick(){
   const Numbers='0123456789';
   const Letters='abcdefghijklmnopqrstuvwxyz';
   const Symbols='!@#$%^&*()';
   let ValidChars='';
   if(this.IncludeLetters){
     ValidChars +=Letters;
   }
   if(this.IncludeNumbers){
     ValidChars+=Numbers;
   }
   if(this.IncludeSymbols){
     ValidChars+=Symbols;
   }
   let generatedPassword='';
   for(let i=0;i<this.length;i++){
     const index = Math.floor(Math.random()*ValidChars.length)
     generatedPassword+=ValidChars[index];
   }
   this.password=generatedPassword;
   
}
onChangeLetters(){
this.IncludeLetters=!this.IncludeLetters;
}
onChangeNumbers(){
  this.IncludeNumbers=!this.IncludeNumbers;
}
onChangeSymbols(){
  this.IncludeSymbols=!this.IncludeSymbols;
}
onChangeLength(value: string){
const parsedValue=parseInt(value);
if(!isNaN(parsedValue)){
  this.length=parsedValue;
}
else{
  this.length=0;
}
}

}
