#!/bin/bash

# Navigate to the directory where your project is located
cd \Users\DispatchFTPros\clientDashboard\static-dashboard\src\lib

while ($true) {
  # pull updates to git repository
  git pull

  # Run the Node.js script to generate the files
  node import.js

  # Add the generated files to the git staging area
  git add data.json dataInformation.json nameIdList.json

  # Commit the changes
  git commit -m "generated update information"

  # Push the changes to the remote repository
  git push

  # Wait for an hour before running again (28800 seconds / 8 hours)
  Start-Sleep -Seconds 28800
}
