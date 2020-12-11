import { useState  } from "react"; 

//192215e8-ca19-44db-b06e-eed68526d6ea 
const url = "https://api.thecatapi.com/v1/images/search";
function Rachel(){
  const [ catUrl, setCatUrl ] = useState('Testing');

const getCat = () => {
  console.log('Well I made a cat app!');

  fetch(url)
  .then((res)=> res.json())
  .then((cats)=> {
    console.log('Cats: ', cats);
    const catUrl = cats[0].url;

    setCatUrl(catUrl); 
  })
  .catch((error)=> {
    console.log('Error: ', error);
  });

}

  console.log('Cat Url:', catUrl);

  return(
    <div>
      <h1>Look at this Cat!</h1>
      <img src={catUrl} alt=""/>
      <button onClick={getCat}>View another cat!</button>
    </div>
  );
}



export default Rachel;