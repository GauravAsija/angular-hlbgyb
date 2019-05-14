import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private getURL(url){
    return "http://localhost:3000/" + url;
  }


  getTodoRecords(){
     return this.http.get(this.getURL('todos'));
  }

  addTodoRecord(newRecord){
    console.log(newRecord);
    return this.http.post(this.getURL('todos'), JSON.stringify(newRecord));
  }


}
