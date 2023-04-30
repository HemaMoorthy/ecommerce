import axios  from 'axios';
import React, { useEffect ,useState} from 'react'
import ProductDisplay from './ProductDisplay';




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
    <div className='container'>
        <div className='row'>
        {
            product.map((item) => {
                return(
                    <div className='col-4'>

                        <ProductDisplay data={item}></ProductDisplay>
                    </div>
                )
            })
        }

        </div>
        
    </div>
  )
}

export default DashBoard