//async await is just a syntactical sugar for .then
async function getRecentPost() {
    console.log("Before sending request");
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        method: "GET"
    });
    const data = await response.json();
    console.log(data);
    console.log("request has been processed");
    document.getElementById("root").innerHTML = data.body; 
}

//Promisfied version for the above code
function getRecentPost(){
    console.log("before sending request");
    fetch("https://sum-server.100xdevs.com/todos").then(
        function(response){
            response.json().then(function(data){
                console.log(data);
                console.log("request has been processed");
                document.getElementById("root").innerHTML = data.body;                          
            })
        }
    )
}