import http, { IncomingMessage, ServerResponse} from "http";

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    if(req.method === "GET" && req.url === "/") {
        res.write("getting data...\n")
        res.end("data recieved")
    } else if(req.method === "POST" && req.url === "/") {
        res.write("adding data...\n")
        res.end("data added")
    } else if(req.method === "GET" && req.url === "/users") {
        res.write("getting users...\n")
        res.end("users recieved");
    } else if(req.method === "POST" && req.url === "/users") {
        res.write("adding user...\n")
        res.end("user added")
    } else if(req.method === "PUT" && req.url === "/users") {
        res.write("updating user... \n")
        res.end("user updated")

    } else if(req.method === "DELETE" && req.url === "/users") {
        res.write("deleting user...\n")
        res.end("user deleted")
    } else if(req.method === "PATCH" && req.url === "/users") {
        res.write("partially updating user...\n")
        res.end("user partially updated")
    }
    else res.end("GET request ended")

};

const server = http.createServer(requestListener);
const port = " 5001";

server.listen(port, () => {
    console.log("server listening on port" + port)
})

