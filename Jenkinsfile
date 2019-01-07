#!/usr/bin/env groovy

pipeline {
    agent {
        docker { image 'vuejs/ci' }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'yarn'
            }
        }
        stage('Lint') {
            steps {
                sh 'yarn lint'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'yarn test:unit'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'yarn test:e2e'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
    }
}
