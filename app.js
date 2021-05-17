const players = [             
    {
        name: "Farhod",
        score: 50
    },
    {
        name: "Bahrom",
        score: 85
    },
    {
        name: "Eldor",
        score: 95
    },
    {
        name: "Odil",
        score: 80
    },
    {
        name: "Bekzod",
        score: 45
    }
];

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
                { props.name }
            </span>

            <Counter score={props.score} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

            {/* Player list */}
            {props.initialPlayers.map(player => 
                <Player 
                    name={player.name} 
                    score={player.score} 
                />    
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} />,
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