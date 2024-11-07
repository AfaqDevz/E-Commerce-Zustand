import Storeproducts from "./storeproducts";

export default async function Products() {

    const response = await fetch("https://fakestoreapi.com/products");
    const fetchedData = await response.json();
    // console.log('fetched Data', fetchedData);


    return (
        <>
            {fetchedData && (
                <Storeproducts storeData={fetchedData} />
            )
            }
        </>

    )
}

