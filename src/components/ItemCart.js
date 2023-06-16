import { useCart } from 'react-use-cart'
const ItemCart = (props) => {
    const { addItem } = useCart();
    return (

        <div className="">
            <div className=" md:p-2 h-80  w-72 bg-cover rounded-lg  overflow-hidden group "
                style={{ backgroundImage: `url(${props.img})` }}>
                <div className="content text-center -mt-80 transition-all  group-hover:mt-0 bg-[#000000b1] 
                            h-full flex items-center text-white flex-col justify-center px-6">
                    <h3 className="text-2xl font-medium">{props.title} </h3>
                    <p className='text-gray-300 '>{props.disc}</p>
                    <p className="py-2  text-3xl font-extralight ">$ {props.price}</p>
                    <button onClick={() => { alert("item is added to Cart"); addItem(props.item); }} className="bg-red-500 hover:bg-red-700 rounded-3xl px-5 py-2 uppercase ">add to Cart</button>
                </div>
            </div>
        </div >

    )
}
export default ItemCart;
