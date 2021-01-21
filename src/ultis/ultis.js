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
          throw new Error('existed');
        }
      })
      .then(() => {
        //sign up
        db.collection('users') //.doc(id moi).set({}) *thay cho add*
          .add({
            username: username,
            password: password,
          })
          .then((data) => {
            console.log('success');
            console.log(data.id);
          });
      })
      .catch((e) => {
        reject(e);
      });
  });
}

// export async function signUp(data) {
//   try {
//     const { username, password } = data;
//     const flag = await db
//       .collection('users')
//       .where('username', '==', username)
//       .get()
//       .then((querySnapshot) => {
//         return querySnapshot.empty;
//       });
//     if (!flag) {
//       throw new Error('existed');
//     }
//     const newuser = await db
//       .collection('users') //.doc(id moi).set({}) *thay cho add*
//       .add({
//         username: username,
//         password: password,
//       })
//       .then((data) => {
//         console.log('success');
//         console.log(data.id);
//       });
//     console.log(newuser);
//     return newuser;
//   } catch (e) {
//     console.log(e);
//   }
// }

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
