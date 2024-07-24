import Database from "../Database/index.js";
export default function AssignmentRoutes(app) {
    app.post("/api/assignment/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const newAssignment = {
          ...req.body,
          assignment: assignmentId,
          _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
      });
    
  app.get("/api/assignment/assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const ass = db.modules.filter((m) => m.course === cid);
    res.json(assignment);
  });
  app.delete("/api/courses/:cid/", (req, res) => {
    const { mid } = req.params;
    db.modules = db.modules.filter((m) => m._id !== mid);
    res.sendStatus(200);
  });
  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = db.modules.findIndex(
      (m) => m._id === mid);
    db.modules[moduleIndex] = {
      ...db.modules[moduleIndex],
      ...req.body
    };
    res.sendStatus(204);
  });
}