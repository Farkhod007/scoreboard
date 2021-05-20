const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                { props.name }
            </span>

            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => ({
            score: this.state.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( (prevState) => ({
            score: this.state.score - 1
        }));
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
            </div>
        );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Farhod",
                id: 1
            },
            {
                name: "Bahrom",
                id: 2
            },
            {
                name: "Eldor",
                id: 3
            },
            {
                name: "Odil",
                id: 4
            },
            {
                name: "Bekzod",
                id: 5
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( (prevState) => ({
            players: prevState.players.filter( (player) => player.id !== id)
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length} />
    
                {/* Player list */}
                {this.state.players.map(player => 
                    <Player 
                        name={player.name} 
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={ this.handleRemovePlayer }
                    />    
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);































// const desc = 'I just learned how to create a React node and render it into the DOM.';
// const myTitleID = 'main-title';
// const name = 'Farhod';

// const header = (
//     <header>
//         <h1 id={myTitleID}>{ name }'s First React Element!</h1>
//         <p>{ desc }</p>
//     </header>
// );
 

// ReactDOM.render(
//     header,
//     document.getElementById('root')
// );

// https://babeljs.io/repl