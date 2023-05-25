import "./App.css"
import Function from "./Function.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
<h1>
  search
</h1>
<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for state.." title="Type in a state"/>


<table id="myTable">
  <tr class="header">
    <th>State</th>
    <th>State Epi</th>
    <th>Title</th>
  </tr>
  <tr>
    <td>Ak</td>
    <td></td>
  </tr>
  <tr>
    <td>AL</td>
    <td>AL</td>
  </tr>
  <tr>
    <td>AR</td>
    <td>AR</td>
  </tr>
  <tr>
    <td>AZ</td>
    <td>AZ</td>
  </tr>
  <tr>
    <td>CA</td>
    <td>CA</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>CO</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>CO</td>
  </tr>
  <tr>
    <td>DC</td>
    <td>DC</td>
  </tr>
</table>
      </header>
 
 
    </div>
  );
}

export default App;
