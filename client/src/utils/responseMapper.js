

export const mapJobCard = (job) => {
    return {
        title: job.title,
        company: job.company,
        location: job.location,
        description: job.description,
        applyLink: job.applyLink,
        salary: job.type,
        postedAt: job.posteAt
    };
}

export const mapJobArray = (response) => {
    return response.map(mapJobCard)
};