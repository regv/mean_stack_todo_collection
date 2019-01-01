import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from "Ng-Flash-Messages";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: string;
  id: any;
  post: Post;
  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private ngFlashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.title = "Post";
    let id = this.router.url.split('/')[2];
    this.id = id;
    this.fetchPost();
  }

  fetchPost() {
    this.authService.viewPost(this.id).subscribe((post: Post) => {
      this.post = post;
    });
  }

  onHandleBack() {
    this.router.navigate(['/posts']);
  }

  onHandleEdit(id) {
    this.router.navigate([`/edit/${id}`]);
  }
}

interface Post {
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  country: string,
  experience_level: string,
  date: any,
  _id: any
}
