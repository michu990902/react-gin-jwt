package server

import (
	// "log"
	// "os"
	// env "github.com/joho/godotenv"
	"strings"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/contrib/static"
)

type Server struct {
	// DB     *gorm.DB
	Router *gin.Engine
	// Store  *gormstore.Store
}

var s = Server{}

func Run(){
	// var err error
	// err = env.Load()
	// if err != nil {
	// 	log.Fatalf("Error loading .env file: %v", err)
	// }

	s.Router = gin.Default()

	s.InitailizeRoutes()
	// s.Router.GET("/", )
	s.Router.Run(":8080")
}

func (s *Server) InitailizeRoutes() {
	s.Router.Use(static.Serve("/", static.LocalFile("./frontend/test/build", true)))
	s.Router.NoRoute(s.NotFoundController)
	
	api := s.Router.Group("/api")
	{
		api.POST("/singin", s.SingIn)

		api.Use(OnlyLoggedUsers())
		{
			api.GET("/singout", s.SingOut)
			api.GET("/authtest", s.AuthTest)
		}
	}
}

func (s *Server) NotFoundController(c *gin.Context) {
	path := c.Request.URL.Path
	if strings.HasPrefix(path, "/api") {
		c.JSON(http.StatusNotFound, gin.H{
			"status":  http.StatusNotFound,
			"message": "Not found",
		})
	} else {
		c.File("./frontend/test/build/index.html")
	}
}

func (s *Server) SingIn(c *gin.Context){

}

func (s *Server) SingOut(c *gin.Context){
	
}

func (s *Server) AuthTest(c *gin.Context){
	c.JSON(http.StatusOK, gin.H{
		"message": "auth test",
	})
}

//middleware
func OnlyLoggedUsers() gin.HandlerFunc{
	return func(c *gin.Context){
		c.Next()
	}
}