class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
//        this.increment = this.increment.bind(this);
    }

    increment() {
      this.setState({
       count: this.state.count+1
       });
    }

    decrement() {
        this.setState({
            count: this.state.count-1
            });
    }

    render() {

        const h2 = React.createElement('h2', {}, this.state.count);
        const buttonPlus = React.createElement('button', {onClick: ()=> {this.increment()}}, '+');
        const buttonMinus = React.createElement('button', {onClick: ()=> {this.decrement()}}, '-');
        return React.createElement(React.Fragment, null, h2, buttonMinus, buttonPlus); 
    }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');
ReactDOM.render(component, root);

/*
Лічильник не має опускатись нижче нуля

*/