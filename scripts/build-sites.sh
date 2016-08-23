#!/bin/bash

sites=('erisindustries.com' 'docs.erisindustries.com' 'blog.erisindustries.com' 'eng.erisindustries.com' 'db.erisindustries.com' 'tao.erisindustries.com')

for repo in "${sites[@]}"
do
  _project="eris-ltd/${repo}"
  _branch="master"
  _token=$CIRCLE_API_TOKEN

  trigger_build_url=https://circleci.com/api/v1/project/${_project}/tree/${_branch}?circle-token=${_token}

  echo ""
  echo ""
  echo "Triggering rebuild for: " ${repo}
  echo "My URL is: " ${trigger_build_url}
  echo ""
  echo ""

  curl -i -H "Accept: application/json" -X POST ${trigger_build_url}
done

