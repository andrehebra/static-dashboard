#!/bin/bash

# Navigate to the directory where your project is located

while ($true) {
  # Run the Node.js script to generate the files
  node import.js

  # Add the generated files to the git staging area
  git add data.json dataInformation.json nameIdList.json

  # Commit the changes
  git commit -m "generated update information"

  # Push the changes to the remote repository
  git push

  # Wait for an hour before running again (3600 seconds)
  Start-Sleep -Seconds 3600
}
