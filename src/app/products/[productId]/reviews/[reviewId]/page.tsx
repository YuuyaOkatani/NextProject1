import { notFound } from "next/navigation";




export default function page({params}:{params: {reviewId: string, productId: String}}) {
    if(parseInt(params.reviewId) > 1000){
        //notFound();
        throw new Error("Review id is too high");
    }
    return (
      <>
      <h2>home juice {params.reviewId}</h2>
      <h2>Product id: {params.productId}</h2>
      </>
    );
  }
  

