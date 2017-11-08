import { CoursesService } from './courses.servies';
import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `
   {{coursesArray.title | uppercase}} <br/>
   {{coursesArray.rating | number:'1.2-2'}} <br/>
   {{coursesArray.students | number}} <br/>
   {{coursesArray.price | currency:'AUD':true:'3.2-2'}} <br/>
   {{coursesArray.releaseDate | date:'medium'}} <br/>
   {{text | summary}}
    `
})

export class CoursesComponent{

    text="In the first major filings of his investigation into the Russian effort to influence the election, Mueller revealed how broadly he has taken his mandate, the kinds of records he has uncovered, and how he has leveraged at least one insider to cooperate.  "



   coursesArray = {
    title: "How to conquest Russia",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date()
   };
   
    title="List of coursesss";
    courses;  
    email = "asd@asd.com";  
    constructor(){
        let service = new CoursesService();
        this.courses = service.getCourses();

                }

    onDivClicked(){
        console.log("Div was clicked ");
    }

    onKeyUp(){
        console.log(this.email);
    }

    onSave($event){
        $event.stopPropagation();
        console.log('Button was clicked', $event );
    }
}