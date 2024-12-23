'use client';

export default function Error({error}) {
    return <main className="error">
        <h1>An error has occured.</h1>
        <p>Failed to fetch from DB.</p>
    </main>
}