import axios  from 'axios';
import React, { useEffect ,useState} from 'react'
import ProductDisplay from './ProductDisplay';




const DashBoard = () => {
    const [product,setProducts] = useState([]);
    const [cartCount,setCartcount] = useState(0);

    useEffect(() => {
        togetAllProducts();
    }, [])

const togetAllProducts = async()=>{
    let res = await axios.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
    console.log(res);
    setProducts(res.data.data);
    showTotalCart();
}


const showTotalCart = async()=>{
    let totalcartitems = await axios.get("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId");
    console.log(totalcartitems.data.data.length);
    setCartcount(totalcartitems.data.data.length)
}
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2 p-3'>
            <button type="button" class="btn btn-primary">
                Total Cart Item <span class="badge text-bg-secondary">{cartCount}</span>
              </button>
            </div>
           
              
        {
            product.map((item) => {
                return(
                    <div className='col-4'>

                        <ProductDisplay data={item} callParent={()=>showTotalCart()}></ProductDisplay>
                    </div>
                )
            })
        }

        </div>
        
    </div>
  )
}

export default DashBoard