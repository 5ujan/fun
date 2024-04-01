const http = require("http");
// win.document.body.innerHTML= "<h1>" + myArr[i]+ "</h1>"

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
    <html>
    <html>
    <body>
    <script>
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
              
        </script>
      </body>
      </html>
    `);
  } else {
    let name = req.url.split("/").pop();
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><h1>${name.split("_").join(" ")}</h1></body></html>`);
  }
});

server.listen(3000, () => {
  console.log("server running on ", 3000);
});
