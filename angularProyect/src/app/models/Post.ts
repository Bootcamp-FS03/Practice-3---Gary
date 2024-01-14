import { User } from "../auth/Models/User";

export interface Post {
    id?: number;
    user_id: number;
    text: string;
    image_url: string;
    created_at?: string;
    updated_at?: string;
    user?: User; 
  }