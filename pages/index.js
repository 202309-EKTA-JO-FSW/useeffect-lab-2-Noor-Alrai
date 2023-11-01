import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'
import React , {useEffect ,useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [username, setUserName] =useState("");
  const [response,setResponse] = useState("")



  useEffect(()=>{
    if (username){
      fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((data) => setResponse(data))
      .catch((error) => console.error('Error fetching data:', error));
    }
  
  } , [username])
  
  function handleUserName(newInput){
    setUserName(newInput)
  }
  return (
    <div className="card">
      <Form setUserName={handleUserName} />
      <UserCard userData={response}/>
    </div>
  );
}
