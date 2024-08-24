"use client";


export default function ErrorBoundary(
    { error, reset }: {
        error: Error,
        reset: () => void;
    }
) {
    return (
        <div>
            <h1>Error in reviewId</h1>


            <button type="button" onClick={reset}>reset</button>
        </div>

    )
}