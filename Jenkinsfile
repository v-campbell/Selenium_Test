#!/usr/bin/env groovy
import hudson.model.*

browserstack(credentialsId: "2b2a07ed-8715-4956-b1b4-1c5815b1500d") {
    // code for executing test cases
}

pipeline {
    agent any
    stages {
        stage('Invoking some other Jenkins job') {
            steps {
                echo "Building my-other-job-name"
                build job: 'my-other-job-name', parameters: [string(name: 'OTHER_JOB_PARAM_KEY', value: "OTHER_JOB_PARAM_VALUE")]
            }
        }
    }
}

// node('master') {
//     sh("your shell script")   
// }

// node {
// 	stage ("SCM checkout"){
// 		git "https://github.com/v-campbell/Selenium_Test"
// 		}
	// stage ("Build"){
    // 	dir("comtest") {
	//    sh "mvn clean install"
    //    }
    //    	dir("comtest/target") {
	//    sh "java -jar com.test-1.0-SNAPSHOT.jar"
    //    }
	// 	}
// }