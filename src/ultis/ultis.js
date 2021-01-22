import { firebaseConfig } from '../config/config.firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router, Route, Link } from 'react-router-dom';
import { User } from '../components/User';

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('Installed');
}
const db = firebase.firestore();

export function signIn(data) {
  return new Promise((resolve, reject) => {
    const { username, password } = data;
    db.collection('users')
      .where('username', '==', username)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
  });
}

export function signUp(data) {
  return new Promise((resolve, reject) => {
    const { username, password } = data;
    db.collection('users')
      .where('username', '==', username)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          throw new Error('Existed');
        }
      })
      .then(() => {
        db.collection('users') //.doc(id moi).set({}) *thay cho add*
          .add({
            username: username,
            password: password,
          })
          .then(() => {
            alert('Sign up successful! You can sign in now');
          });
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export async function addToDo(data) {
  try {
    const { owner, title, content } = data;
    await db.collection('todo').doc(owner).set({
      title: title,
      content: content,
    });
  } catch (e) {
    throw e;
  }
}
