const axios = require("axios");

const model = "gemini-2.0-flash"; // You can switch this to gemini-pro or others
const apiKey = process.env.GEMINI_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

// Extract role, skills, interests
const extractResumeInsights = async (resumeText) => {
    const prompt = `
You are an expert career assistant. Given the following resume text, extract three things:
1. The candidate's most relevant job role (e.g., Frontend Developer, Data Analyst)
2. A list of key technical skills (max 10)
3. A few interests or domains they seem passionate about

Respond in this JSON format:
{
  "role": "...",
  "skills": ["...", "..."],
  "interests": ["...", "..."]
}

Remember: no extra text, markdown, or symbols — only the JSON format above.

Resume:
${resumeText}
`;

    const response = await axios.post(
        url,
        { contents: [{ parts: [{ text: prompt }] }] },
        { headers: { "Content-Type": "application/json" } }
    );

    let raw = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) throw new Error("No response from Gemini");

    raw = raw.trim().replace(/^```json\s*|\s*```$/g, "");
    console.log("AI response (insights):", raw);

    try {
        return JSON.parse(raw);
    } catch (err) {
        console.error("Failed to parse Gemini response:", raw);
        throw new Error("Gemini returned invalid JSON");
    }
};

// Map domains to related skills
const mapResumeDomains = async (resumeText) => {
    const prompt = `
From the resume below, identify relevant domains (e.g., Web Development, Databases, Cloud, UI Design, etc.) and map each domain to the technical skills mentioned in the resume that belong to it.

Respond ONLY in this JSON format:
[
  {
    "domain": "Databases",
    "skills": ["MongoDB", "SQL", "PostgreSQL"],
    "count": 3
  },
  {
    "domain": "Cloud",
    "skills": ["AWS", "Firebase"],
    "count": 2
  }
]

No extra text, markdown, or symbols. Just the JSON array.

Resume:
${resumeText}
`;

    const response = await axios.post(
        url,
        { contents: [{ parts: [{ text: prompt }] }] },
        { headers: { "Content-Type": "application/json" } }
    );

    let raw = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) throw new Error("No response from Gemini");

    raw = raw.trim().replace(/^```json\s*|\s*```$/g, "");
    console.log("AI response (domain map):", raw);

    try {
        return JSON.parse(raw);
    } catch (err) {
        console.error("Failed to parse Gemini domain mapping:", raw);
        throw new Error("Gemini returned invalid JSON");
    }
};

module.exports = {
    extractResumeInsights,
    mapResumeDomains
};