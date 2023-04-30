import axios  from 'axios';
import React, { useEffect ,useState} from 'react'




const DashBoard = () => {
    const [product,setProducts] = useState([]);

    useEffect(() => {
        togetAllProducts();
    }, [])

const togetAllProducts = async()=>{
    let res = await axios.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
    console.log(res);
    setProducts(res.data.data);
}
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard