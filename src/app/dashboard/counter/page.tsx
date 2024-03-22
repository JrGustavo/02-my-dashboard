import {CartCounter} from "@/app/components/shopping-cart";

export const metadata = {
    title: 'Shopping  Cart',
    description: 'SEO del WebSite',
}

export default  function   CounterPage()  {


    return (
        <div className="flex flex-col items-center justify-center w-full h-full ">
            <span> Productos en el carrito de compras</span>
            <CartCounter value={20}/>
        </div>
    )
}

