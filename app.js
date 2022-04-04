const cars = repuire("cars")
const express = repuire("express")
const bodyParser = repuire('body-parser')

const app = express()
const PORT = process.env.PORT || 3001

app.use('healthcheck', require('./routes/healthcheck.js')); 
app.use(express.urlencoded({ extended: true }));
app.use(cars())
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.set("http_status", 200)
    response.set("cache-control", "no-cache")
    response.set('Content-Type', 'application/json');
    body={"status": "available"}
    response.status(200).send(body)
})

app.get("/threads", (request, response) => {
    body={"threads":
    [
        {
            "id": "1", 
            "name": "Fjäril kär" ,
            "like": 1
        },
        {
            "id": "2",
            "name": "IceKit­ten" ,
            "replies": "Bakad potatis och skagenröra... Jag har dålig fantasi och ork i dag.",
            "like": 1
        },

    ]}
    response.status(200).send(body)
})

app.get("/threads", (request, response) => {
    console.log(request.body)
    
    body={"threads":
    [
        {
            "id": "1", 
            "name": "Fjäril kär" ,
            "replies": "Här blev det nyss pastagratäng med köttfärs" ,
            "like": 1
        },
        {
            "id": "2",
            "name": "IceKit­ten" ,
            "replies": "Bakad potatis och skagenröra... Jag har dålig fantasi och ork i dag.",
            "like": 1
        },

    ]}
    response.status(200).send(body)
})

app.get("/threads/:id", (request, response) => {
    console.log(request.params)
    body={"id":"1"}
    response.status(200).send(body)
})

app.get("/threads/:id/replies", (request, response) => {
    console.log(request.params)
    body={"id":request.params.id, "replies": [{"id":1, "reply": "Här blev det nyss pastagratäng med köttfärs"}, {"id":2, "reply": "Bakad potatis och skagenröra... Jag har dålig fantasi och ork i dag."}]}
    response.status(200).send(body)
})

app.post("/threads/:id/replies", (request, response) => {
    console.log(request.params)
    console.log(request.body)
    body={"id":request.params.id, "replies": [{"id":1, "reply": "Här blev det nyss pastagratäng med köttfärs"}, {"id":2, "reply": "Bakad potatis och skagenröra... Jag har dålig fantasi och ork i dag."}]}
    response.status(200).send(body)
})

app.post("/threads/:threadId/replies/:replyId/like", (request, response) => {
    console.log(request.params)
    body={"threadId":request.params.threadId, "replyId":request.params.replyId}
    response.status(200).send(body)
})

app.delete("/threads/:threadId/replies/:replyId/like", (request, response) => {
    console.log(request.params)
    body={"threadId":request.params.threadId, "replyId":request.params.replyId}
    response.status(200).send(body)
})


app.listen(PORT, ()=> {
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
})