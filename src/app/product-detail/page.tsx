import Product from "../../../components/product";
import Reviews from "../../../components/reviews";
import { Suspense } from "react";

export default function ProductDataPage() {
    return (
        <div>
            <h1>Product detail page</h1>
            <Suspense fallback={<p>Loading product</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Reviews</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}