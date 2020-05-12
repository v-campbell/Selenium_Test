browserstack(credentialsId: "<2b2a07ed-8715-4956-b1b4-1c5815b1500d>") {
    // code for executing test cases
}

// pipeline {
//     agent none
//     environment {
//         VERSION = sh(returnStdout: true, script: 'git describe --tags')
//     }
// }

node {
	stage ("SCM checkout"){
		git "https://gitlab.com/mbabilo/experitest"
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

    // pipeline {
    //     agent any
    //     stages {
    //         stage('Example') {
    //             steps {
    //                 echo 'Hello World'
    //             }
    //         }
    //     }
    //     post { 
    //         always { 
    //             echo 'I will always say Hello again!'
    //         }
    //     }
    // }