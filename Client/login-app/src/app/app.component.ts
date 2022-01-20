import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import axios from 'axios';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user = {
    email: null,
    password: null
  };

  constructor(private toastr: ToastrService) {}

  onSubmit(user: any) {
   axios.post('http://localhost:8000/api/signin', user)
    .then(response => {
      if(response.status === 200){
        this.toastr.show(response.data.message);
      }
    }).catch(error => this.toastr.show("Email and password do not match"));
  }
}