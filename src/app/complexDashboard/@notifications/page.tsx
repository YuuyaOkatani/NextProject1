import CardComponent from "../../../../components/card"
import Link from "next/link"
export default function Notifications() {
    return (
        <CardComponent>
            <div style={{flex: 'row'}}>
                <div>
                    <h2>Notifications</h2>
                </div>
                <div style={{color: 'cyan'}}>
                    <Link href="/complexDashboard/archived">Archived notifications</Link>
                </div>
            </div>


        </CardComponent>
    )
}