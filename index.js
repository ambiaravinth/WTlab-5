var http=require("http");

var server = http.createServer(function(request,response)
{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(" <h1><h1 style=\"text-align: center;\">Here the Responce!!!</h1> <br> <p1>This is from localhost:8000 Responce...</p1><br><br> <img src=\"https://c.tenor.com/1IWU8bZl2bQAAAAC/welcome-back-back.gif\" alt=\"Not Available\" >   ");
    console.log("1 Request received");
});
server.listen(8000);
console.log("server running");