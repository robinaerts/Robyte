import {BsKeyboard} from "react-icons/bs"

export default function StoreProduct({ product }) {
    return (
        <div className="store-product">
            <div className="product-header">
                <h3 className="product-title"><BsKeyboard className="product-icon"/>{product.title}</h3>
                <button className="product-tag">{product.tag}</button>
            </div>
            <p className="product-description">{product.description}</p>
            <div>
                {product.price !== 0 ? <button className="store-product-cta">€{product.price}</button> : <button className="store-product-cta">Launch</button>}
                <button className="store-product-more">More Info</button>
            </div>
        </div>

    )
}