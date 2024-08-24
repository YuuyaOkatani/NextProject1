import Link from "next/link";
import React from "react";

export default function f4() {
    return (
        <div>
            <h2>
                f4 page
            </h2>
            <div>
                <Link href="/f1/f3">
                    F3
                </Link>
                <Link href="/about">
                    about
                </Link>
            </div>
        </div>
    )
}