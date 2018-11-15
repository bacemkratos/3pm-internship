#!/bin/sh -x

sonar-scanner \
    -Dsonar.login="$SONAR_TOKEN" \
    -Dsonar.host.url="$SONAR_URL" \
    -Dsonar.projectKey="$CI_PROJECT_NAME-$(echo $CI_COMMIT_REF_NAME | tr / -)-$CI_PROJECT_ID" \
    -Dsonar.projectName="$CI_PROJECT_NAME [ $CI_COMMIT_REF_NAME ]" \
    -Dsonar.projectVersion="$CI_COMMIT_REF_NAME" \
    -Dsonar.analysis.projectId="$CI_PROJECT_ID" \
    -Dsonar.typescript.lcov.reportPaths="sonar-reports/coverage/lcov.info" \
    -Dsonar.surefire.reportsPath="sonar-reports/junit" \
    -Dsonar.sourceEncoding=UTF-8