import { useState } from "react";
import { Box } from "./Box";
import "./styles.css";

export default function App() {
  
  return (
    <div className="App">
     <Link to="/">Home</Link>
     <Link to="/box">Box</Link>
     <switch>
       <Route path = "/">
         <Home/>
         </Route>
         <Route path = "/box">
         <Box/>
         </Route>
       </switch>
    </div>
    
  );
}

function Home(){
  return(
    <div> Welcome to home!!!</div>
  )
}

function Box() {
  const [color, setColor] = useState("");
  const [colors, setcolor] = useState([]);

  return (
    <div className="App">
      <input
        placeholder="username"
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => setcolor([...colors, color])}>Add</button>

      {colors.map((colorbox, index) => (
        <div
      style={{ background: colorbox, height: "100px", width: "100px" }}
      ></div>
      ))}
    </div>
  );
}

// function Box({ colorbox }) {
//   return (
//     <div
//       style={{ background: colorbox, height: "100px", width: "100px" }}
//     ></div>
//   );
// }