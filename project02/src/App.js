// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//      <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); // 할 일을 관리할 상태
  const [toDos, setToDos] = useState([]); // 할 일 목록을 저장할 상태
  const onChange = (event) => setToDo(event.taregt.value);  // 할 일을 입력할 때마다 상태를 업데이트
  const onSubmit = (event) => {     // 할 일을 제출할 때마다 상태를 업데이트
    event.preventDefault()    // 이벤트의 기본 동작을 막음
    if(toDo === "") return;     // 할 일이 없으면 아무것도 하지 않음
    setToDos(currentArray => [toDo, ...currentArray])    // 할 일을 추가하면 배열에 추가
    setToDo("");
  }; 

  return (
    <div>
      <h1>도영의 ToDo 웹 ({toDos.length})</h1>  {/* 할 일 목록의 길이를 표시 */}
      <form onSubmit={onSubmit}>  {/* 할 일을 제출하면 onSubmit 함수가 호출 */}
        <input 
          onChange={onChange}  // 할 일을 입력할 때마다 onChange 함수가 호출
          value={toDo}  // input 값은 toDo 상태
          type="text"  // imput 타입은 텍스트
          placeholder="할 일을 입력하세요..."  // input의 placeholder는 "할 일을 입력하세요..." 
        />
        <button>할 일 추가</button>   {/* 버튼을 클릭하면 onSubmit 함수가 호출 */}
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>  // 할 일 목록을 표시
        ))}
    </div>
  );
}

export default App;