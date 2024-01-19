import { Component } from '@angular/core';
import { User } from '../shared/models/User';
import { Post } from '../shared/models/Post';
import { PostService } from '../shared/services/post.service';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  user: User | null = null;
  posts: Post[] = [];

  editedUser : User = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    profile_picture: ''
  }

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router : Router
  ) {
    this.user = this.authService.getCurrentUser();
    if(!this.user){
      this.router.navigate(['/login']);
    }
    this.initUser();
    this.fetchPosts();
  }

  initUser(){
    this.editedUser.name = this.user!.name;
    this.editedUser.last_name = this.user!.last_name;
    this.editedUser.email = this.user!.email;
    this.editedUser.profile_picture = this.user!.profile_picture;
  }

  fetchPosts() {
    let userId = this.user!.id;
    this.postService.getPostsByUser(userId!).subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error al obtener los posts:', error);
      }
    );
  }

  updatePassword(){
    let repeatedPassword = (<HTMLInputElement>document.getElementById('repeatedPassword')).value;
    if(this.editedUser.password != repeatedPassword){
      alert('Las contraseñas no coinciden');
      return;
    }
    this.authService.updatePassword(this.user!.id!, this.editedUser.password).subscribe(
      res => {
        alert('Contraseña actualizada');
        window.location.reload();
      },
      err => {
      }
    );
  }


  deletePost(id: number | undefined) {
    const isUserSure = window.confirm('¿Estás seguro de que deseas eliminar este post?');
    if(!isUserSure){
      return;
    }
    this.postService.deletePost(id!).subscribe(
      (res) => {
          this.fetchPosts();
          window.location.reload();

      },
      (err) => {
      }
    );
  }

  actualizarDatos(){
    this.authService.updateUser(this.user!.id!, this.editedUser).subscribe(
      res => {
        alert('Datos actualizados');
        window.location.reload();
      },
      err => {
      }
    );
  }

  editPost(id: number | undefined) {
    this.router.navigate([`/editPost/${id}`]);
  }
}
