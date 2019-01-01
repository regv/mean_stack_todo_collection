import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from "Ng-Flash-Messages";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  title: string;
  id: any;
  post: NewPost;
  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private ngFlashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.title = "Edit Post";
    let id = this.router.url.split('/')[2];
    this.id = id;
    this.fetchPost();
  }

  fetchPost() {
    this.authService.viewPost(this.id).subscribe((post: NewPost) => {
      this.post = post;
    })
  }

  onHandleDiscard() {
    this.router.navigate([`/post/${this.id}`]);
  }

  onHandleSubmit(value) {
    const post = {
      first_name: this.post.first_name,
      last_name: this.post.last_name,
      email: this.post.email,
      username: this.post.username,
      country: this.post.country,
      experience_level: value
    };
    if (!this.validateService.validatePost(this.post)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid fields found...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate([`/edit/${this.id}`]);
      return false;
    }

    if (!this.validateService.validateEmail(this.post.email)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid email id found...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate([`/edit/${this.id}`]);
      return false;
    }

    if (!this.validateService.validateUsername(this.post.username)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid username found...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate([`/edit/${this.id}`]);
      return false;
    }

    if (!this.validateService.validateName(this.post.first_name)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid first name...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate([`/edit/${this.id}`]);
      return false;
    }

    if (!this.validateService.validateName(this.post.last_name)) {
      this.ngFlashMessage.showFlashMessage({
        messages: ['Invalid last name...!'],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
      this.router.navigate([`/edit/${this.id}`]);
      return false;
    }

    //If there is no any errors then patch post
    this.authService.patchPost(this.id, post).subscribe((data: PatchedPost) => {
      console.log(data);
      if (data.success) {
        this.ngFlashMessage.showFlashMessage({
          messages: ['Your post updated successfully...!'],
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
        this.router.navigate([`/edit/${this.id}`]);
      }
    });
  }
}

interface NewPost {
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  country: string,
  experience_level: string
}

interface PatchedPost {
  success: boolean,
  post: any
}
