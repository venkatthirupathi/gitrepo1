function getData()
{
    fetch(`http://localhost:3000/users`)
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
}