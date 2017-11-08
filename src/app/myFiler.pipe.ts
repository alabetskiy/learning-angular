import { element } from 'protractor';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myFilter'
    
    })
    export class MyFilterPipe implements PipeTransform{
        transform(value: string, limit?: string) {
       
           if (value) {
            let splitted = value.split(" ");
            let element:string;
            let result:string;
            console.log(splitted.length);
            
                    for (let index = 0; index < splitted.length; index++) {
                       
                            if (splitted[index]) {
                                if (index==0) {
                                    result = this.GetWordToCapitalLetter(splitted[0], true);
                                    } else {
                                    element = this.GetWordToCapitalLetter(splitted[index]);
                                    result += " " + element;
            
                                         }
                            }
                        
                
                        
                    }
                   return result;
           }
           
        }

       private GetWordToCapitalLetter(word:string, firstWord?:boolean){
            let response:string;
            
            if (firstWord == false && word=="to"|| word =="the") {
                response=word;
                } else{

                    let arrayOfChar = word.split('');
                    for (let index = 0; index < arrayOfChar.length; index++) {
                        if(index==0) {
                            response = arrayOfChar[0].toUpperCase();
                        } else{
                            response +=arrayOfChar[index].toLowerCase();
                        }   
                        
                    }
                }

        
            return response;
        }
    
    }