const http = require("http");
// win.document.body.innerHTML= "<h1>" + myArr[i]+ "</h1>"

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
    <html>
    <html>
    <body style= "font-family: sans-serif">
    <div style="width:90vw;  height: 50vh; display: flex; flex-direction: column; align-items: center; justify-content: center">
    <h1 style="width:50rem; text-align: center; color:#2196F3;">Would you like to see something cool?</h1>
    <h1 style="width:50rem; text-align: center; color:#2196F3;">Enable popups and click the button</h1>
    <iframe id="youtube-player" width="0" height="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    <button style="width: 10vw; border-radius: 2rem; height:10vh; color:white;  background-color: #2196F3;" id="btn"><h2>Yes !</h2></button>
    </div>
    <script>
            window.open("", "_blank", "width=300,height=300,noopener");
            function myFunction(){
              var player = document.getElementById('youtube-player');
              player.src += '?autoplay=1'; 
              let myArr = "Never gonna, give you up, never gonna, let you down, never gonna, run around, and desert you, never gonna, make you cry, never gonna, say goodbye, never gonna, tell a lie, and hurt you".split(",");
              let i =0 
              let intervalId= setInterval(()=>{
                let url = window.location.href+ "/"+myArr[i].split(" ").join("_")
                window.open(url, "_blank", "width=800,height=800,noopener");
                i++
                if(i===myArr.length){
                  clearInterval(intervalId)
                }
              }, 500)
            }
            let button = document.getElementById("btn").addEventListener("click", myFunction)
              
              </script>
              </body>
      </html>
    `);
  } else {
    let name = req.url.split("/").pop();
    res.setHeader("Content-Type", "text/html");
    res.end(
      `<html><body> <h1 style="width:50rem; text-align: center; color:#2196F3;">${name
        .split("_")
        .join(" ")}</h1></body></html>`
    );
  }
});

server.listen(2222, () => {
  console.log("server running on ", 2222);
});
