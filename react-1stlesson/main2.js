

const AddTodo = () => {
  return (
    <div className="flexRow">
      <input type={"text"} placeholder={"enter your next todo"} />
      <button>ADD</button>
    </div>
  );
};

const TodoTabs = () => {
  return (
    <div className="flexRow">
      <button className={"tabButton"}>TODO</button>
      <button className={"tabButton"}>DONE</button>
    </div>
  );
};

const TodosContainer = () => {
  return (
    <div className="flexColumn">
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

const Todo = () => {
  return (
    <div className="flexRow">
      <p>shalom</p>
      <div>
        <button>DONE</button>
        <button>REMOVE</button>
      </div>
    </div>
  );
};

const ColorSwitcher = () => {
  return (
    <div>
      <button>switch to dark mode</button>
    </div>
  );
};

const MainComponent = () => {
  return (
    <div className="flexColumn">
      <AddTodo />
      <TodoTabs />
      <TodosContainer />
      <ColorSwitcher />
    </div>
  );
};

console.log(MainComponent)

ReactDOM.render(<MainComponent />, document.getElementById("app"));
