const root = document.querySelector('#root');
const h1 = React.createElement('h1', {title: 'Hello'}, 'Hello, REact!');
console.log(h1);
const anotherH1 = document.createElement('h1');
console.dir(anotherH1);

console.log(ReactDOM);

ReactDOM.render(h1, root);