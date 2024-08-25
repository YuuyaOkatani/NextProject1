import { serverSideFunction } from "../../../util/server-utils"

export default function ServerRoutePage(){
    const result = serverSideFunction(); 
    console.log("server route rendered")

    return (
        <div>
            <h1>
                Server Route Page 
            </h1>
            <p>
                {result}
            </p>
        </div>
    )
}