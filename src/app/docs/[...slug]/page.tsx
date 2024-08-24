export default function Docs(


    {params}: 
    {
        params:{
            slug:String[]
        }
    }
) {
    if(params.slug.length > 0){
        return (
            <div>Documentation: {params.slug[0]} and {params.slug[1]}</div>
        )
    }
}