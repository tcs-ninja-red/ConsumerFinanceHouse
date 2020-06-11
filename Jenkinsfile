pipeline {
    agent any
      stages {
        stage('Checkout') {
            steps {
                step([$class: 'WsCleanup'])
                checkout scm
            }
        }
        stage('Environment') {
            steps {
                sh 'git --version'
                echo "Branch: ${env.BRANCH_NAME}"
                sh 'docker -v'
                sh 'printenv'
            }
        }
        stage('Build') {
            steps {
               sh "docker images"
               sh "docker build -t consumer-finance-house-cwa:v${BUILD_NUMBER} ."
               sh "docker images"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                sh "docker ps -a"
                sh 'docker stop cwa-container || exit 0'
                sh 'docker kill cwa-container || exit 0'
                sh 'docker rm cwa-container || exit 0'
                sh "docker run --name cwa-container -p 80:80 consumer-finance-house-cwa:v${BUILD_NUMBER} &"
                sh "docker restart cwa-container"
                sh "docker ps -a"
            }
        }
    }
}
