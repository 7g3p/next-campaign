export async function GET(request){
    // Handle GET requests for  /api/
    // Retrieve users frp, the database or another data source

    // The following is a simulated return for users
    // For actual data retrieval use a "fetch()" method
    const users = [
        {id: 1, name: "John Smith"},
        {id: 2, name: "Jane Doe"},
        {id: 3, name: "Bob Builder"}
    ];

    // Send the users as a response
    return new Response(JSON.stringify(users));
}