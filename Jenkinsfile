#!/usr/bin/env groovy

browserstack(credentialsId: "<2b2a07ed-8715-4956-b1b4-1c5815b1500d>") {
    // code for executing test cases
}

node {
	stage ("SCM checkout"){
		git "https://github.com/v-campbell/Selenium_Test"
		}
	stage ("Build"){
    	dir("comtest") {
	   sh "mvn clean install"
       }
       	dir("comtest/target") {
	   sh "java -jar com.test-1.0-SNAPSHOT.jar"
       }
		}
}