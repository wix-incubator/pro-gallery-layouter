export default `

const getImageStyle = item => ({
  position: absolute,
  backgroundSize: cover,
  backgroundPosition: center,
  top: item.offset.top,
  left: item.offset.left,
  width: item.width,
  height: item.height,
  backgroundImage: "url(" + item.dto.url + ")"
});

const Gallery = ({ layout }) => (
  <div style={{ height: layout.height }}>
    {layout.items.map(item => (
      <div style={getImageStyle(item)} alt={item.idx}/>
    ))}
  </div>
);

const parent = document.createElement('div');
parent.id = 'root';
document.body.prepend(parent);

ReactDOM.render(
  <Gallery layout={layout}/>,
  document.getElementById('root')
);
`;
