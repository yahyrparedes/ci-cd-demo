pipeline {
  agent any
  stages {
    stage('install') {
      parallel {
        stage('install') {
          steps {
            echo 'Hello Build'
          }
        }

        stage('build') {
          steps {
            echo 'build the build'
          }
        }

      }
    }

    stage('test') {
      steps {
        echo 'Test its ok!!'
      }
    }

  }
}