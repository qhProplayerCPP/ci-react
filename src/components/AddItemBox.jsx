import React from 'react';
import '../assets/css/User.css';
import { addToDo } from '../ultis/ultis';

export class AddItemBox extends React.Component {
  add = () => {
    let title = document.getElementById('title_box').value;
    let content = document.getElementById('content_box').value;
    addToDo({ owner: 'ODiVifpKZkKvtzYhpKmd', title: 'title', content: 'content' });
    document.getElementById('add-items').insertAdjacentHTML(
      'afterend',
      `<div class='todo-items'>
        <h3>Title</h3>
        <p>Content</p>
        <div>
          <button>View</button>
          <button>Edit</button>
          <button>Complete</button>
          <button>Remove</button>
        </div>
      </div>`
    );
  };
  render() {
    return (
      <div id="add-items">
        <h2>Add work</h2>
        <input placeholder="Title" id="title_box" />
        <input placeholder="Content" id="content_box" />
        <button onClick={this.add}>ADD</button>
      </div>
    );
  }
}
