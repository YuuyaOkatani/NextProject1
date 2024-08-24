import React from "react";
import Link from "next/link";

export default function f1() {
    return (
        <div>
            <h1>
                F1 page
            </h1>
            <div>
                <Link href="/f1/f2">F2</Link>
            </div>
        </div>
    )
}