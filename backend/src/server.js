import express from "express"
import { ENV } from "./lib/env.js"
import path from "path"
import cors from "cors"
import { connectDb } from "./lib/db.js"
import { serve } from "inngest/express"
import { inngest } from "./lib/inngest.js"

const app = express()

const __dirname = path.resolve()

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))

app.use("/api/inngest", serve({ client: inngest, functions }))

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "success from api" })
});



app.get("/books", (req, res) => {
    res.status(200).json({ msg: "this is books endpoint" })
});

//make our app ready for deployment 
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}



const startServer = async () => {
    try {
        await connectDb()
        app.listen(ENV.PORT, () => {
            console.log('Server is running on port', ENV.PORT);
        });
    } catch (error) {
        console.log("Error is coming in starting the server", error)
    }

}

startServer();