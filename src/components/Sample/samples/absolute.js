export default `
const parent = document.createElement('div');
parent.id = 'root';
document.body.prepend(parent);

for (let i = 0; i < layout.items.length; i++) {
  const item = layout.items[i];
  const iDom = document.createElement('div');
  iDom.innerHTML = i;
  iDom.style.width = item.width + 'px';
  iDom.style.height = item.height + 'px';
  iDom.style.position = 'absolute';
  iDom.style.top = item.offset.top + 'px';
  iDom.style.left = item.offset.left + 'px';
  iDom.style.backgroundColor = items[i].bgColor;
  parent.prepend(iDom);
}
`;
