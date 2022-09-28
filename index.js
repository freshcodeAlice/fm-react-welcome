class HeaderComponent extends React.Component {

    render() {
        const {children} = this.props;
        const childrenArray = Array.isArray(children) ? children : [children];
        console.log(childrenArray);
        const p = React.createElement('p', {}, 'Super paragraph', ...childrenArray);
        const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello, ${this.props.text}`);
        const article = React.createElement('article', {}, h2, p);
        return article
    }
}

const component = React.createElement(HeaderComponent, {text: 'React'}, 'Text', 'Another Text', 'Other text');
const component2 = React.createElement(HeaderComponent, {text: 'JavaScript'});
const parentElement = React.createElement('section', {}, component, component2);

const root = document.querySelector('#root');
ReactDOM.render(parentElement, root);



/*
Зробити класову компоненту, яка приймає через props ім'я і повертає h1 з текстом "Привіт, <ім'я>"

*/