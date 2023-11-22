import { useState }from 'react'
import { useCookies } from 'react-cookie'
export default function ExampleCookie() {
    const [food, setFood] = useState('');
    const [count, setCount] = useState(0)
    const [cookies, setCookies] = useCookies(['Fav']);

    function handleAddFav(food){
        setCookies(food, food, {path: '/'});
        setCount(count + 1);
    }

    console.log(cookies);

  return (
    <div>
        <p>Enter Favorite Food:</p><br />
        <input type="text" value={cookies.value} onChange={(e)=>setFood(e.target.value)}/>
        <button onClick={(e)=>handleAddFav(food)}>love</button><br />
        <h5>Favorite</h5>
        <p>myCookies: {cookies.Tim}</p>
    </div>
  )
}




