import { Component } from '@angular/core';
import { ApiService } from "./api.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {id:0, name:'', surname:''};

  members = [
      {name: 'Member 01', id: 1, surname: "Ciclano", photo: 'https://www.google.com.br'},
      {name: 'Member 02', id: 2, surname: "Ciclano", photo: 'https://www.google.com.br'},
      {name: 'Member 03', id: 3, surname: "Ciclano", photo: 'https://www.google.com.br'},
  ]
  constructor(private api: ApiService){
    this.getMembers();
  };
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log('Aconteceu um erro:', error.message);
      }
    );
  };

  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      data => {
        // this.members = data
        this.selected_member = data;

      },
      error => {
        console.log('erro', error.message);
      },
    );
  };
}
