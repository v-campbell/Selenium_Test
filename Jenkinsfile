browserstack(credentialsId: '<2b2a07ed-8715-4956-b1b4-1c5815b1500d>') {
    // code for executing test cases
}

pipeline{
    agent none
    stages{
        stage ("Build"){
            milestone(1)
            sleep getTime()
            echo "finishing build"
        }
        stage ("Test"){
            milestone (10)
            sleep getTime()
            echo "finishing Test"
        }
        stage ("Deploy"){
            milestone (20)
            sleep getTime()
            echo "finishing Deploy"
        }
    }
}

// pipeline {
//     agent none
//     environment {
//         VERSION = sh(returnStdout: true, script: 'git describe --tags')
//     }
// }

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