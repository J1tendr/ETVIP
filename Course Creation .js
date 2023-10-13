const courses = [];

app.post('/api/courses', (req, res) => {
  const newCourse = req.body;
  courses.push(newCourse);
  res.json(newCourse);
});

// Implement routes for updating and deleting courses
