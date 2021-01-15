import '../assets/css/filter.css';
import '../assets/css/list-pokemon.css';

export function FILTER_LIST(params) {
  return (
    <div className="filter">
      <p className="pokemon-class" style={{ backgroundColor: params.color }}>
        {params.type}
      </p>
      <div
        className="filter-box"
        id={params.type}
        onDrop={(event) => {
          event.preventDefault();
          var data = event.dataTransfer.getData('Image');
          console.log(event.target);
          if (event.target.className === 'filter-box' || event.target.className === 'container-list') {
          } else document.getElementById(params.type).appendChild(document.getElementById(data));
        }}
        onDragOver={(event) => event.preventDefault()}
      ></div>
    </div>
  );
}
