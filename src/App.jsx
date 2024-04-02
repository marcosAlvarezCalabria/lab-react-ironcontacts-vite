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

      <ButtonSort listContacts={listContacts} setListContacts={setListContacts}></ButtonSort>

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




function ButtonAdd({ setNumActors, listContacts, setListContacts }) {
  const addRandomContact = () => {
    setNumActors(prevNumActors => prevNumActors + 1)//function toma el estado  anterior y le suma 1
    let randomNum = Math.floor(Math.random() * (contacts.length - 5 ) + 5);
    let newActor = contacts[randomNum];
    const isNewActorIsRep = listContacts.some((actor) => actor.id === newActor.id);//isNewAcorIsRep  true si se da la condicion actor.id === newActor.id 
    if (!isNewActorIsRep){ setListContacts( prevListContacts => [...prevListContacts,newActor])}
    //si isNewAcorIsRep is false set listContacts add the newActor (use spread ...)
    //spread te crea un nuevo array mas newAcor en esta caso 
  }
  return (
    <div>
      <button onClick={addRandomContact}>Add Random Contacts</button>
    </div>
  );
}





function ButtonSort({ listContacts, setListContacts }) {
  return (
    <>
      <button type="button" onClick={() => {

        const sortedContacts = listContacts.slice().sort((a, b) => a.name.localeCompare(b.name));
        setListContacts(sortedContacts);
      }}>Sort by name</button>

      <button type="button" onClick={() => {
        const sortedContacts = listContacts.slice().sort((a, b) => b.popularity - a.popularity);
        setListContacts(sortedContacts);
      }}>Sort by popularity</button>
    </>
  );
}








export default App;
