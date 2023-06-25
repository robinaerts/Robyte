export default function StoreProduct({ product }) {
    const tagColors = {
        "Hardware": "#BF5858",
    }
    return (
        <div className="store-product">
            <div className="product-header">
                <h3 className="product-title">
                    {product.title}</h3>
                <button className="product-tag" style={{background: tagColors[product.tag]}}>{product.tag}</button>
            </div>
            <p className="product-description">{product.description}</p>
            <div>
                {product.price !== 0 ? <button className="store-product-cta">€{product.price}</button> : <button className="store-product-cta">Launch</button>}
                <button className="store-product-more">More Info</button>
            </div>
        </div>

    )
}