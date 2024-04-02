import "./App.css";
import contacts from "./contacts.json"
import { useState } from "react";


function App() {
  const [numActors, setNumActors] = useState(5)
  const [listContacts, setListContacts] = useState(contacts.slice(0, numActors));

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <ButtonAdd setNumActors={setNumActors} setListContacts={setListContacts} listContacts={listContacts} />

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



            {listContacts.map((actor) => {
              return (
                <Contacts key={actor.id} name={actor.name} pictureUrl={actor.pictureUrl} popularity={actor.popularity} wonEmmy={actor.wonEmmy} wonOscar={actor.wonOscar} />
              )
            })}

          </tbody>
        </table>

      </div>



    </div>
  );
}
function Contacts({ name, pictureUrl, popularity, wonOscar, wonEmmy }) {


  return (
    <>
      <th scope="row"></th>
      <tr>
        <td><img src={pictureUrl} alt="" /></td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td>{wonEmmy && <i className="fa fa-trophy"> </i>}</td>
        <td>{wonOscar && <i className="fa fa-trophy"></i>}</td>
      </tr>

    </>
  )
}


function ButtonAdd({ setNumActors, listContacts }) {

  return (
    <div>
      <button onClick={() => {

        setNumActors(prevNumActors => prevNumActors + 1);
        let randomNum = Math.floor(Math.random() * (contacts.length - 5) + 5);
        let newActor = contacts[randomNum];
        console.log(listContacts)

        listContacts.push(newActor)



      }}>Add Random Contacts</button>
    </div>
  )
}










export default App;
