import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };
  a;

  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs != this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }
  componentWillUnmount() {}

  handleInputChange = e => {
    //console.log(e.target.value);
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };
  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            ></TechItem>
            // <li key={tech}>
            //   <button onClick={() => this.handleDelete(tech)} type="button">
            //     Remover
            //   </button>
            //   {tech}
            // </li>
          ))}
          <TechItem onDelete={() => console.log("Prop. oculta!")} />
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        ></input>
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default TechList;
