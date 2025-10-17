const { fetchJobsFromJsearch } = require("../services/jsearchService")

const { mapJSearchArray } = require("../utils/responseMapper")

const searchJobs = async (req, res) => {
    try {
        const { skills, role, location } = req.body;

        const query = `${role || skills.join(" ")} in ${location}`

        const rawJobs = await fetchJobsFromJsearch(query)

        const jobs = mapJSearchArray(rawJobs)

        res.json({ status: "success", jobs })
    } catch (error) {
        console.error("Job search error :", error.message)
        res.status(500).json({ status: "error", message: "Job search failed" })
    }
}

module.exports = { searchJobs };