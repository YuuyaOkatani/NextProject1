export default function page({params,}:{params : {productId: String}}) {

    return (
        <>
        <h1>Product details {params.productId}</h1>
        </>
    )
}