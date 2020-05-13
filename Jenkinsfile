// browserstack(credentialsId: '1237f4df-fa54-4a8c-abb0-fa87032c9b19') {
//     // code for executing test cases
// }

junit testDataPublishers: [[$class: 'AutomateTestDataPublisher']], testResults: 'target/surefire-reports/TEST-*.xml'

// pipeline {
//     agent any
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'make build'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh 'make test'

//                 script {
//                     def testResults = findFiles(glob: 'build/reports/**/*.xml')
//                     for(xml in testResults) {
//                         touch xml.getPath()
//                     }
//                 }
//             }
//         }
//     }

//     post {
//         always {
//             archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
//             junit 'build/reports/**/*.xml'
//         }
//     }
// }