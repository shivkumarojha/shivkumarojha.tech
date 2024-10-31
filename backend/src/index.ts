import "dotenv/config"
import express from "express"

const app = express()

app.get("/me", (req, res) => {
    res.status(200).json({
        message: "Yes we are live"
    })
})
app.listen(process.env.PORT, () => {
    console.log("Server is running at port ", process.env.PORT)
})