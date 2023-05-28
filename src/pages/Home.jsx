import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export default function App() {

const [data,Data] = useState([]);
const getData = async ()=>{
const data = await fetch('https://jsonplaceholder.typicode.com/posts');
const jsonData = await data.json();
Data(jsonData)
}
useEffect(()=>{
getData();
},[])

return (
<div>
<Container className='mt-5 pt-5'>
<Table striped bordered hover>
<thead>
<tr>
<th>ID</th>
  <th>Title</th>
</tr>
</thead>
<tbody>
{
data.map((item,index)=>{
return(
<tr key={index}>
<td>{item.id}</td>
<td>{item.title}</td>
</tr>
)
})
}
</tbody>
</Table>
</Container>
</div>
)
}