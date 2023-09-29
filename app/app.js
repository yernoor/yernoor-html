const http = require('http');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    const tokenResponse = await fetch(
            "http://169.254.169.254/latest/api/token",
            {
                headers: {
                    "X-aws-ec2-metadata-token-ttl-seconds": 21600
                },
                method: "PUT",
            }
        );
    const token = await tokenResponse.text();
    
    const idResponse = await fetch(
            "http://169.254.169.254/latest/meta-data/instance-id",
            {
                headers: {
                    "X-aws-ec2-metadata-token": token
                }
            }
        );
    const idResult = await idResponse.text();
       
    const ipResponse = await fetch(
        "http://169.254.169.254/latest/meta-data/public-ipv4",
        {
            headers: {
                "X-aws-ec2-metadata-token": token
            }
        }
    );
    const ipResult = await idResponse.text();
       
    

    const responseObject = {
        "instance-name": idResult,
        "ipv4": ipResult,
    }

    res.end(JSON.stringify(responseObject));
})

server.listen(PORT, () => console.log(`Server listening at port ${PORT}`))