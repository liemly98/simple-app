pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        
        stage ('Deploy') {
            steps{
                sshagent(credentials : ['f1affbd0-fea9-412f-93ce-a09f05ab3960']) {
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@4app.me "cd instances/simple-app && git pull && sudo docker-compose up --build -d"'
                    sh 'ssh -v ubuntu@4app.me'
                }
            }
        }
    }
}