import setup from "./setup"



setup("redOrb").then(async ({app, db}) => {

  
  app.post("/echo", (req, res) => {
    res.send(req.body)
  })
})
