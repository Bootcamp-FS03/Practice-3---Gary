import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/Post';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  user : number | null | undefined;

  id : number | null | undefined;

  constructor(private authService : AuthService,private service : PostService, private activatedRoute : ActivatedRoute, private router : Router){

    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id'];
        if(this.id){
          this.fetchPost();
        }
      }
    );



    this.user = this.authService.getUserId();
    this.post.user_id = this.user!;
  }

  fetchPost(){
    this.service.getPostsByID(this.id!).subscribe(
      (data: Post) => {
        console.log('Obteniendo posts...');
        console.log(data);
        this.post = data;
      },
      (error) => {
        console.error('Error al obtener los posts:', error);
      }
    );
  }
  

  post : Post = {
    user_id: 0,
    text: '',
    image_url: ''
  }

  actualizarPost(){
    this.service.updatePost(this.id!, this.post).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    );
  }

  createPost(){
    let newPost : Post = {
      user_id: this.user!,
      text: this.post.text,
      image_url: this.post.image_url
    }
    this.service.createPost(newPost).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
