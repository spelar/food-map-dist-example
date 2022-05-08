module.exports = function (app) {
  const index = require("../controllers/indexController");
  const jwtMiddleware = require("../../config/jwtMiddleware");

  // 라우터 정의
  // app.HTTP메서드(uri, 컨트롤러 콜백함수)
  // app.get("/dummy", index.example);

	// app.get("/students/:studentIdx", index.readStudents);
	// app.post("/students", index.createStudent);
	// app.patch("/students/:studentIdx", index.updateStudent);
	// app.delete("/students/:studentIdx", index.deleteStudent);


	app.get("/restaurants", index.readRestaurants);
};
