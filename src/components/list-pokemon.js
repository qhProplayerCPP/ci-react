import '../assets/css/list-pokemon.css';

export function Pokemon(props) {
  let i = 0;
  return (
    <div
      className="container-list"
      id="container-list-id"
      onDrop={(event) => {
        event.preventDefault();
        var data = event.dataTransfer.getData('Image');
        if (event.target.className === 'filter-box' || event.target.className === 'container-list') {
        } else if (event.target.id >= 0 && event.target.id <= 14) {
          document.getElementById(event.target.id).insertAdjacentElement('afterend', document.getElementById(data));
        } else {
          document.getElementById('container-list-id').appendChild(document.getElementById(data));
        }
      }}
      onDragOver={(event) => event.preventDefault()}
    >
      {props.data.map(function (params) {
        return (
          <img
            src={params.avatar}
            alt=""
            onDragStart={(event) => event.dataTransfer.setData('Image', event.target.id)}
            draggable="true"
            id={i++}
          />
        );
      })}
    </div>
  );
}
