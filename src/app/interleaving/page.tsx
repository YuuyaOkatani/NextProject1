import { ClientComponentOne } from "../../../components/client-component-one";
import { ServerComponentOne } from "../../../components/server-component-one";

export default function interleavingPage(){
    return (
        <div>
            <h1>
                Interleaving page
            </h1>
            {/* <ServerComponentOne/> */}
            <ClientComponentOne>
                <ServerComponentOne/>
            </ClientComponentOne>
        </div>
    )
}