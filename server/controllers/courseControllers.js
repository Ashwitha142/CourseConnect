function getCourses(req, res) {
    res.send("Get all courses")
}

function createCourses(req, res) {
    res.send("Create course")
}

function deleteCourses(req, res) {
    res.send("Delete course")
}

function updateCourses(req, res) {
    res.send("Update course")
}

function getCoursesById(req, res) {
    res.send("Get course by id")
}

module.exports = {
    getCourses,
    createCourses,
    deleteCourses,
    updateCourses,
    getCoursesById
}