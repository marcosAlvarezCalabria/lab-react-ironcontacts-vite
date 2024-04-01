import "./App.css";
import contacts from "./contacts.json"
const fiveContacts = contacts.slice(0,5);

function Contacts({name, pictureUrl, popularity, wonOscar, wonEmmy}){
 
    
  return (
    <>
  <th scope="row"></th>    
    <tr>
      <td><img src={pictureUrl} alt="" /></td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>{wonEmmy && <i className="fa fa-trophy"> </i>}</td>
      <td>{wonOscar && <i className="fa fa-trophy"></i> }</td>
    </tr>

    </>
     )
}

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      

      
        <div>
      <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Popularity</th>
      <th scope="col">Won oscar</th>
      <th scope="col">Won Emmy</th>
    </tr>
  </thead>
  <tbody>
    
   

      {fiveContacts.map((actor) => {
        return (
          <Contacts key={actor.id} name= {actor.name} pictureUrl={actor.pictureUrl} popularity={actor.popularity} wonEmmy={actor.wonEmmy} wonOscar={actor.wonOscar}/>
        )
      })}
    
  </tbody>
</table>
      
    </div> 
      
      
      
    </div>
  );
}













export default App;
