const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
}

const App = () => {
    return React.createElement(
        "div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: "Harley", animal: "Dog", breed: "Goldendoodle"}),
            React.createElement(Pet, {name: "Chabela", animal: "Dog", breed: "Terrier"}),
            React.createElement(Pet, {name: "Sally", animal: "Turtle", breed: "Red Eared Slider"}),
            React.createElement(Pet, {name: "Fluffy", animal: "Rabbit", breed: "Fuzzy"})
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));