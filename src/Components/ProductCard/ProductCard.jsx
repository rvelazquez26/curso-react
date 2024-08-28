import "./ProductCard.css"

const ProductCard = ({title ,price, isRed}) => {

  return (
    <div>
      <h1 className={isRed ? "red":"blue"}>
        { title }
      </h1>
      <h3>
        { price }
      </h3>
    </div>
  )
}

export default ProductCard