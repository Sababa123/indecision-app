console.log('App is running!');

// JSX - Javascript XML
const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info.</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: 'Sababa',
    age: 3,
    location: 'Karachi'
};

const userName = 'Mike';
const userAge = 27;
const userLocation = 'New York'

function getLocation(location) {
    if(location) {
        return  <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age>18 && user.age) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const app = {
    title: 'Lion King',
    subtitle: 'This is pride land',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    console.log(option);
    // if (option) {
    //     app.options.push(option);
    //     e.target.elements.option.value = '';
    //     renderFormApp();
    // }
}

const onRemoveAll = () => {
    app.options = [];
    renderFormApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderFormApp = () => {
    const templateThree = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ? 'Here are you options!' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option" />
                <select>
                    <option name="text">Text</option>
                    <option name="boolean">Boolean</option>
                    <option name="number">Number</option>
                    <option name="date">Date</option>
                    <option name="structure">Structure</option>
                </select>
                {/* <button>Add</button>
                <button>Delete</button> */}
            </form>
        </div>
    );
    ReactDOM.render(templateThree,appRoot);

}

const appRoot = document.getElementById('app');

renderFormApp();

