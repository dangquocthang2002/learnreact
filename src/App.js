import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(true);
  const [hideOrShow, setHideOrShow] = useState("Hide");

  const handleShow = () => {
    setShow((prev) => !prev);
    if (hideOrShow === "Hide") {
      setHideOrShow("Show");
    } else {
      setHideOrShow("Hide");
    }
  };
  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={handleShow}>{hideOrShow}</button>
      {show && <Content />}
    </div>
  );
}

export default App;

//demo
// const [inFor, setCounter] = useState({
//   name: "win",
//   age: 18,
// });
// console.log(inFor);
// const handleIncrease = () => {
//   setCounter((prev) => ({ ...prev, description: "bede" }));
// };
// <h1>{JSON.stringify(inFor)}</h1>
// <button onClick={handleIncrease}>Increase</button>

// const gifts = ["CPU 32", "ABC", "RGB keyboard"];
// const [gift, setGift] = useState();
// const handleRandomGift = () => {
//   const index = Math.floor(Math.random() * gifts.length);
//   setGift(gifts[index]);
// };
// <h1>{gift || "Chua co phan thuong"}</h1>
// <button onClick={handleRandomGift}>Lay thuong</button>

// const [name, setName] = useState();
// const [email, setEmail] = useState();
// const handleRegister = () => {
//   console.log({
//     named: name,
//     emaild: email,
//   });
// };
// <input
// value={name}
// onChange={(e) => {
//   setName(e.target.value);
// }}
// />
// <br />
// <input
// value={email}
// onChange={(e) => {
//   setEmail(e.target.value);
// }}
// />
// <button onClick={handleRegister}>Register</button>
// ];

// const [job, setJob] = useState("");
// const [jobs, setJobs] = useState(() => {
//   const storageJobs = localStorage.getItem("jobs");
//   return JSON.parse(storageJobs ?? []);
// });
// const handleClick = () => {
//   setJobs((jobs) => {
//     const newJobs = [...jobs, job];

//     localStorage.setItem("jobs", JSON.stringify(newJobs));
//     return newJobs;
//   });
//   setJob("");
// };
// <input value={job} onChange={(e) => setJob(e.target.value)} />
// <button onClick={handleClick}>Add</button>
// <ul>
//   {jobs.map((job, index) => (
//     <li key={index}>{job}</li>
//   ))}
// </ul>
