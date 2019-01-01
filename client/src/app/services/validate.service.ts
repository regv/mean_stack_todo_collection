import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() {
    console.log(`validate service injected...`);
  }

  //Validate for empty fields................
  validatePost(post: any) {
    if ( post.first_name == undefined || post.last_name == undefined || post.email == undefined || post.username == undefined || post.country == undefined ) {
      return false;
    } else {
      return true;
    }
  }

  //Validate email id...............................
  validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  //Validate username.........................
  validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(String(username).toLowerCase());
  }

  //Validate name...............................
  validateName(name) {
    const nameregex = /^[a-zA-Z '.-]*$/;
    return nameregex.test(String(name));
  }
}
