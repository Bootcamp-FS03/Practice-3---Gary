import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];

  post: Post = {
    user_id: 0,
    text: '',
    image_url: '',
  };

  constructor(private service: PostService, private authService : AuthService, private router : Router) {
    this.fetchPosts();
    this.user = this.authService.getUserId();
    if(!this.user){
     this.router.navigate(['/login']);
    }
    this.post.user_id = this.user!;
  }

  user : number| null | undefined;

  fetchPosts(){
    this.service.getPosts().subscribe(
      (data: Post[]) => {
        console.log('Obteniendo posts...');
        console.log(data);
        this.posts = data;
      },
      (error) => {
        console.error('Error al obtener los posts:', error);
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
        this.fetchPosts();
      },
      err => {
        console.log(err);
      }
    );
  }

  deletePost(id : number | undefined){
    this.service.deletePost(id!).subscribe(
      res => {
        console.log(res);
        if(res == 204){
          this.fetchPosts();
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
