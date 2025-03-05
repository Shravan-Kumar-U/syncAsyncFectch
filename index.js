const axios = require("axios");

async function main() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data);
    
}

function mian(){
    fetch("https://sum-server.100xdevs.com/todos",{
        method : "PUT"
    }).then(async (res) =>{
        const json = await res.json();
        console.log(json);        
    })
}

async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    console.log(json) ;   
}

mian();