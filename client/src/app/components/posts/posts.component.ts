import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from "Ng-Flash-Messages";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string;
  posts: NewPosts[];
  deletedPost: DeletedPost;
  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private ngFlashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.title = "Posts";
    this.fetchPosts();
  }

  fetchPosts() {
    this.authService.getPosts().subscribe((posts: NewPosts[]) => {
      this.posts = posts;
    })
  }

  onHandleView(id) {
    this.router.navigate([`/post/${id}`]);
    console.log(id);
  }

  onHandleDelete(id) {
    let isConfirm = confirm(`Are you sure you want to delete this post?`);
    if (isConfirm) {
      this.authService.deletePost(id).subscribe((data: DeletedPost) => {
        if (data.success) {
          this.ngFlashMessage.showFlashMessage({
            messages: ["Post deleted successfully, Let's create one...!"],
            dismissible: true,
            timeout: 5000,
            type: 'success'
          });
          this.router.navigate(['/create']);
        } else {
          this.ngFlashMessage.showFlashMessage({
            messages: ["Something went wrong..."],
            dismissible: true,
            timeout: 5000,
            type: 'danger'
          });
          this.router.navigate(['/posts']);
        }
      });
    } else {
      this.router.navigate(['/posts']);
    }
  }

}

interface NewPosts {
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  country: string,
  date: any,
  _id: any
}

interface DeletedPost {
  success: boolean,
  post: any
}
