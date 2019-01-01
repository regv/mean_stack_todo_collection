import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from "Ng-Flash-Messages";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  country: string;
  experience_level: string;
  post: Post;
  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private ngFlashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.title = "Add Post";
  }

  onHandleSubmit(value) {
    const post = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      username: this.username,
      country: this.country,
      experience_level: value
    };
    if (!this.validateService.validatePost(post)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid fields found...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate(['/create']);
      return false;
    }

    if (!this.validateService.validateEmail(post.email)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid email id found...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate(['/create']);
      return false;
    }

    if (!this.validateService.validateUsername(post.username)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid username found...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate(['/create']);
      return false;
    }

    if (!this.validateService.validateName(post.first_name)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid first name...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate(['/create']);
      return false;
    }

    if (!this.validateService.validateName(post.last_name)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid last name...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate(['/create']);
      return false;
    }

    //If there is no any errors then add post
    this.authService.addPost(post).subscribe((data: Post) => {
      if (data.success) {
        this.ngFlashMessage.showFlashMessage({
          messages: ['Your post added successfully...!'],
          dismissible: true,
          timeout: 5000,
          type: 'success'
        });
        this.router.navigate(['/posts']);
      } else {
        this.ngFlashMessage.showFlashMessage({
          messages: ['Something went wrong....'],
          dismissible: true,
          timeout: 5000,
          type: 'danger'
        });
        this.router.navigate(['/create']);
      }
    });
  }

}

interface Post {
  success: boolean,
  post: any
}
