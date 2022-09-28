class HeaderComponent extends React.Component {

    render() {
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi!'}, 'Header!');
        const article = React.createElement('article', {}, h2, p);
        return article
    }
}

const component = React.createElement(HeaderComponent);

const root = document.querySelector('#root');
ReactDOM.render(component, root);