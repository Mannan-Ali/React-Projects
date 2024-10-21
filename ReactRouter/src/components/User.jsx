import { useParams } from "react-router-dom"

function User() {
    const {userId} = useParams();
  return (
    <>
    <h1>Users:{userId}</h1>
    </>
  )
}

export default User;
