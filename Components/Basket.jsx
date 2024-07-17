

function Basket ({BasketCount,BasketNo}){
    console.log(BasketCount)
    return <div id="Basket">
        <h3>{BasketCount} Apples</h3>
        <h4>Basket{BasketNo}</h4>
    </div>
}

export default Basket