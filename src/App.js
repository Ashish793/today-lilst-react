import "./App.css";
import { Component } from "react";
import Plan from "./components/Plan";

class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = (id) => {
    console.log("deleted data", id);
    const OldData = [...this.state.items];
    console.log(OldData);
    const item = OldData.filter((element, i) => {
      return i !== id;
    });

    console.log("me", item);
    this.setState({ items: item });
  };
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h2 className="text-center">Today list</h2>
            <div className="row">
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Create you today list"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-sm-2">
                <button
                  className="btn btn-warning w-100 font-weight-bold"
                  onClick={this.handleAdd}
                >
                  Save
                </button>
              </div>
              <div className="container-fluid mt-5">
                <h4>Today list</h4>
                <ul className="list-unstyled mt-1">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        kay={i}
                        id={i}
                        value={value}
                        sendData={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
