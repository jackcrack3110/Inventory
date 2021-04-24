import React,{useState} from 'react'
import { AddProductAction } from '../store/actions/AddProductAction';
import { connect } from 'react-redux';

const AddProductForm = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState('');

    const product = (name, description,quantity,price,image) => {
        setIsLoading(true);
        let payload = { 
             name: name, 
             description: description,
             quantity:quantity,
             price:price,
             image:image
            }
        props.productAction(payload).then(result => {
            if (result.success) {
                setIsLoading(false);
                props.history.push('/product');
            }
        })

    }
    const handleChange = (e) => {
        return (
            e.target.name === 'uname' ? setName(e.target.value) :
            e.target.name == 'desc' ? setDescription(e.target.value) :
            e.target.name =='quant' ? setPrice(e.target.value) :
            e.target.name =='price' ? setQuantity(e.target.value) :
            e.target.name ==='image' ? setImage(e.target.value) :
                    () => { }
        )
    }
    const handleClick = (e) => {
        e.preventDefault();
        name.length && quantity && price && product(name,description,quantity,price,image);
    }
    
    return (
        <form action="/" method="post">
                    <div className="container">
                        <label htmlFor="uname"><b>Name</b></label>
                        <input 
                            type="text"
                            value={name}
                            name="uname" 
                            placeholder="Enter Name"
                            onChange={handleChange} required
                        />
                        <label htmlFor="desc"><b>Description</b></label>
                        <input 
                           type="text" 
                           value={description}
                           name="desc" 
                           placeholder="Enter Description" 
                           onChange={handleChange} 
                        />
                        <label htmlFor="quant"><b>Quantity</b></label>
                        <input 
                           type="number" 
                           value={quantity}
                           name="quant" 
                           placeholder="Enter Quantity"
                           onChange={handleChange} required
                        />    
                         <label htmlFor="price"><b>Price</b></label>
                        <input 
                           type="number" 
                           value={price}
                           name="price" 
                           placeholder="Enter Price"
                           onChange={handleChange} required
                        />    
                         <label htmlFor="image"><b>Image</b></label>
                        <input 
                           type="text" 
                           value={image}
                           name="image" 
                           placeholder="Enter Image"
                           onChange={handleChange} 
                        />    
                        <button type="submit" onClick={handleClick}>
                            {!isLoading ? "Save" : 'Loading...'}
                        </button>
                    </div>

                </form>
            )
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        productDetails: state.product.productDetails,
    }
}
const mapDispatchToProps = {
    productAction: AddProductAction 
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);


