import Basket from "./basket";
import Button from "./Button";
import ButtonImg2 from "./C:/Users/rcb35/Desktop/react projectt/bascket/assets/images/p.jpg"
import ButtonImg1 from "./C:/Users/rcb35/Desktop/react projectt/bascket/assets/images/image.png"


let TotalApple = 10;
let AppleCountBasket2 = 0;
let AppleCountBasket1 = TotalApple - AppleCountBasket2;

function AppleCounter(){


function LeftAppleCount(){
    if(  AppleCountBasket2 != 0){   AppleCountBasket1++;
        AppleCountBasket2--;
        console.log(AppleCountBasket1)}
 
}

function rightAppleCount(){
    if (AppleCountBasket1 != 0) {
        AppleCountBasket2++
        AppleCountBasket1--
        console.log(AppleCountBasket2)
    }
   
}


    return <div id="AppleCounter">
<Basket BasketCount = {AppleCountBasket1} BasketNo ={1} />
<Button   ButtonImg= {ButtonImg1}  Title= "Left-Button" clickFun ={LeftAppleCount}/>
<Button   ButtonImg= {ButtonImg2}  Title= "right-Button" clickFun ={rightAppleCount}/>
<Basket BasketCount = {AppleCountBasket2} BasketNo ={2} />

    </div>
}


export default AppleCounter