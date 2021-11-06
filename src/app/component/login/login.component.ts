import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  users = [];

  constructor(
    private authService: LoginService, private tokenStorage: TokenStorageService, public router: Router) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    //  this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        console.log("Los datos son: ",data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUserName(username);
        this.tokenStorage.saveRoleName(data.role);
        console.log(data);
        this.isLoggedIn=true;
        this.router.navigateByUrl('/component/card').then(()=>{
          window.location.reload();
        });
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // async getUserId(username): Promise<any> {

  //   this.users = await this.authService.getUsers().toPromise();

  //   console.log (this.users);

  //   var user = this.users.filter(function(){username === this.users.userName})

  //   console.log(user);

  // }


}

