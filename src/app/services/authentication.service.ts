import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

import 'firebase/auth';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData: any;
  userId: any;
  allUsers: any[];

  constructor(
  ) { }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  registerUser(user) {
    return new Promise((resolve, reject) => {
      firebase.default.auth().createUserWithEmailAndPassword(String(user.email), String(user.password)).then((newUser) => {
        firebase.default.database().ref('/users/').child(newUser.user.uid).set({
          email: user.email,
          createdAt: moment().format(),
          profileurl: 'assets/imgPlaceholder.png',
          uId: newUser.user.uid,
        }).then(() => {
          this.loggedIn.next(true);
          resolve();
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      });
    });
  }

  checkLogin() {
    return new Promise((resolve) => {
      const unsubscribe = firebase.default.auth().onAuthStateChanged(
        user => {
          if (!user) {
            this.loggedIn.next(false);
            resolve(false);
            unsubscribe();
          } else {
            this.userId = user.uid;
            this.loggedIn.next(true);
            this.getUserData(user.uid).then(() => {
              resolve(true);
            });
          }
        });
    });
  }

  loginUser(user) {
    return new Promise((resolve, reject) => {
      firebase.default.auth().signInWithEmailAndPassword(user.email, user.password).then((newUser) => {
        this.loggedIn.next(true);
        console.log('user', newUser);
        this.userId = newUser.user.uid;
        resolve();
        // this.getUserData().then((data) => {
        //   resolve();
        // });
      }).catch((error) => {
        reject(error);
      });
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      firebase.default.auth().signOut().then(() => {
        this.loggedIn.next(false);
      resolve();
      }).catch((error) => {
        reject(error);
      })
    })
  }

  getUserData(userId) {
    return new Promise((resolve, reject) => {
      const dbRef = firebase.default.database().ref('/users/' + userId);
      let userArr = [];
      dbRef.once('value', (data) => {

        if (data.val() !== '') {
          userArr = data.val();
          this.userData = userArr;
          console.log('userData', this.userData);
          resolve(userArr);
        } else {
          reject({ msg: 'No Users Found' });
        }
      });
    });
  }
}
