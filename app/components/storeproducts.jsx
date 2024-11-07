'use client'

import { useEffect, useState } from "react";
import { useCartStore } from "../store/cart-store";

export default function Storeproducts(productsData) {



    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        setAllProducts(productsData?.storeData)
        console.log('All Products prps', productsData?.storeData, productsData);
    }, [productsData])


    // const products = useCartStore((store) => store.products);
    // const updateProducts = useCartStore((store) => store.updateProducts);
    // const cart = useCartStore((store) => store.cart);
    // const updateCart = useCartStore((store) => store.updateCart);

    // useEffect(() => {
    //     if (productsData) {
    //         updateProducts(productsData);
    //     }
    // }, [productsData, updateProducts]);

    return (
        <div key={123} className="flex flex-wrap gap-5 justify-center">
            {allProducts?.map(({ id, title, image, description, price }) => (
                <div key={id + title} className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={image}
                            alt={title}
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <h2>${price}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
