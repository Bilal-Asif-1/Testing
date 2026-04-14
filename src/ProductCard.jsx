import Product from "./product";
import Title from "./Title";
import Description from "./description";
import "./ProductCard.css";

function ProductCard(){
    return (
        <div className="ProductCard">
            <Product/>
            <Title/>
            <Description/>  
        </div>
    )
}

export default ProductCard;

