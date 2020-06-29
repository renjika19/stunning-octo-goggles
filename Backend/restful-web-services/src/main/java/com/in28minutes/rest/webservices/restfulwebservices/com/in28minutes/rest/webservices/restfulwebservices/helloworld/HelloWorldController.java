package com.in28minutes.rest.webservices.restfulwebservices.com.in28minutes.rest.webservices.restfulwebservices.helloworld;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller handling http request
@CrossOrigin(origins="http://localhost:4200")
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
//		throw new RuntimeException("Some Error has Happened! Contact Support at ***-****");
		return new HelloWorldBean ("Hello World -  Changed");
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
