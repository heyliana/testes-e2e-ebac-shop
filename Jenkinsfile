pipeline {
    agent any

    stages {
        stage('Repositorio'){
            steps{
                git bash: 'main', url: 'https://github.com/heyliana/testes-e2e-ebac-shop.git'
            }
        }
        stage('Dependencias'){
            steps{
                sh 'npm install'
            }
        }
        stage('Teste'){
            steps{
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}