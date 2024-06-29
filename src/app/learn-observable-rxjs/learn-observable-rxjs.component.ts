import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface JSP {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-learn-observable-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './learn-observable-rxjs.component.html',
  styleUrl: './learn-observable-rxjs.component.css'
})
export class LearnObservableRxjsComponent implements OnInit{
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos").subscribe(data =>{
      console.log(data);
    })
  }

}


