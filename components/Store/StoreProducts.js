export default function StoreProduct({ product }) {
    return (
        <div className="store-product">
            <div>
                <h3><span>icon</span>{product.title}</h3>
                <button>{product.tag}</button>
            </div>
            <p>{product.description}</p>
            <div>
                {product.price !== 0 ? <button>{product.price}</button> : <button>Launch</button>}
            </div>
        </div>

    )
}