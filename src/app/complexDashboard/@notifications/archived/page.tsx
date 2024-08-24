import CardComponent from "../../../../../components/card";
import Link from "next/link";

export default function ArchivedNotification() {
    return (
        <CardComponent>
            <div style={{flex: 'row'}}>
                <div>
                    archived notifications
                </div>
                <div>
                    <Link href="/complexDashboard" style={{color: 'cyan'}}>
                        Review all notifications
                    </Link>
                </div>
            </div>
        </CardComponent>
    )
}