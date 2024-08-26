type User = {
    id: number, 
    name: string,
    username: string,
    email: string,
    phone: string
}


export default async function UsersPage() {
    await new Promise((resolve) => setTimeout(resolve,2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    
    return (
        <div>
            <h1>Users Page</h1>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}