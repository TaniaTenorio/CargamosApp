import { Injectable } from '@angular/core';
import  { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email:string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }catch(err) {
      console.log(err);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch(err){
      console.log(err);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut()
    } catch(err){
      console.log(err);
    }
  }
}

