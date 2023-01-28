import React, {Component} from "react";
import "./App.css";

export default class App extends Component {

  state = {
    // Map 메소드를 사용한 할 일 목록 나열 
    todoData : [
      // key: 객체의 unique한 값 (id)
    ],
    value: "",
  };
  
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none", // 삼항연산자
    };
  };

  handleClick = (id) => {
    let newToDoData = this.state.todoData.filter(data => data.id !== id)
    this.setState({todoData: newToDoData});
  };

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    // 1) form 안에 input을 전송할 때 페이지 리로드되는 것 방지 
    e.preventDefault();

    // 2) 새로운 할 일 데이터
    let newToDo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    // 3) 원래 있던 할 일에 새로운 할 일 더해주기 (전개연산자)
    // 입력란에 있던 글씨 지워주기 
    this.setState({todoData: [...this.state.todoData, newToDo], value: ""});
  };

  handleCompleteChange = (id) => {
    let newToDoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({todoData:newToDoData});
  }

  // 클래스형 컴포넌트 안에서는 render 안에 UI를 작성
  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
             <div style={this.getStyle(data.completed)} key={data.id}>
             <p>
               <input 
                type="checkbox" 
                onChange= {() => this.handleCompleteChange(data.id)}
                defaultChecked={false} />
               {" "}{data.title}
               <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
             </p>
           </div>
          ))}

          <form style={{display: "flex"}} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{flex:"10", padding:"5px"}}
              placeholder="해야할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
              />
            <input 
              type="submit"
              value="입력"
              className="btn"
              style={{flex:"1"}}
              />
          </form>
        </div>
      </div>
    )
  }
}