const express = require("express");
const morgan = require("morgan");
const jobRoutes = require("./routes/jobRoutes")
const resumeRoutes = require("./routes/resumeRoutes")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Routes

app.use("/api/resume", resumeRoutes)
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
    res.json({ "messege": "welcome to server" })
})

app.get("/info", (req, res) => {
    res.json({
        "messege": "This project is about finding the perfect jobs for you using the AI search, ",
        "Problem": "Navigating countless tech careers is confusing. It's difficult to know which skills are required for a specific role and manually tailoring a resume for each application is tedious. This uncertainty creates a major challenge for job seekers",

        "The Solution": "This system acts as a personal career assistant. It provides personalized career suggestions based on your skills, analyzes your resume to highlight your strengths, and empowers you to make data-driven decisions for your future.",
        "Main motto": "To get the job by entring you skills and related analysis",
        "Process": "To get started with this:- 1)The user will be posting its resume , 2) Resume gets parsed here . 3) THen the details of resume text are sent to the backend for AI skills filtering. 3) "
    })
})

module.exports = app;
