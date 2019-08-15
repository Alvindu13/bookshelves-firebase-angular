import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves-firebase';

  constructor() {
    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: "AIzaSyCULOKoUdhOCxysQm9Xx2Mvtc7nN1UVf8k",
      authDomain: "bookshelves-dd9c1.firebaseapp.com",
      databaseURL: "https://bookshelves-dd9c1.firebaseio.com",
      projectId: "bookshelves-dd9c1",
      storageBucket: "bookshelves-dd9c1.appspot.com",
      messagingSenderId: "77511929551",
      appId: "1:77511929551:web:9cb2c549891ae6c7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
