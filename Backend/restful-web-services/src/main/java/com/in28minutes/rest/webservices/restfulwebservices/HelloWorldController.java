package com.in28minutes.rest.webservices.restfulwebservices;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller handling http request
@RestController
public class HelloWorldController {

	//GET
	//URI - /hello-world
	//method - "Hello World"
	@GetMapping(path = "hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path = "hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean ("Hello World");
	}
	
	//hello-world/path-variable/in28minutes(=name)
	@GetMapping(path = "hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		// %s will be replaced with name
		return new HelloWorldBean (String.format("Hello World, %s", name));
	}
	
	
	// Retrieve all users  -GET /users
	// Create a User       -POST /users
	//Retrieve one user    -GET /users/{id} -> /users/1
	// Delete a User       -DELETE /users/id/{id} -> /users/1
}
