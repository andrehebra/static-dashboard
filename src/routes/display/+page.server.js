import { API_KEY } from '$env/static/private';

import gql from 'graphql-tag';
import { print } from 'graphql';

import { error } from '@sveltejs/kit';

const query = `query Query($all: Boolean) {
  bookings(all: $all) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
    }
    nodes {
      ... on SingleStudentBooking {
        registration {
          approvedByStudent
          approvedByStudentAt
          asymmetricSeconds
          
          briefingSeconds
          comment
          crossCountrySeconds
          debriefingSeconds
          
          id
          ifrDualSeconds
          ifrSimSeconds
          ifrSpicSeconds
          instructor {
            
            callSign
            
            firstName
            
            id
            lastName
            
          }
          instrumentSeconds
          multiSeconds
          name
          nightSeconds
          pilotFlyingSeconds
          pilotMonitoringSeconds
          singleSeconds
          status
          student {
            callSign
            firstName
            id
            lastName
          }
          submittedByInstructorAt
          totalSeconds
          userCategories {
            exercises {
              bestGrade
              carryForward
              comment
              flagged
              grade
              
              id
              name
              normGrade
            }
            extraExercises {
              bestGrade
              carryForward
              comment
              flagged
              grade
              id
              name
            }
            id
            name
          }
          userProgram {
            audit {
              createdAt
              createdById
              updatedAt
              updatedById
            }
            id
            name
            
            status
            
          }
          vfrDualSeconds
          vfrSimSeconds
          vfrSoloSeconds
          vfrSpicSeconds
        }
      }
    }
  }
}`;

let currentDate = new Date();

//console.log(currentDate);
//const pastDate = new Date(); 
//pastDate = pastDate.setDate(pastDate.getDate() - 45);
//console.log(pastDate);

const currentISODate = currentDate.toISOString().slice(0, -5);

export const load = async () => {
    console.log('Load function called in page.server.js');
    try {
        const variables = {
            to: currentISODate,
            all: true,
        };

        const response = await fetch('https://api.flightlogger.net/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });

        let data = await response.json();
        let dataArray = [...data.data.bookings.nodes];
        //console.log(dataArray);

        while (data.data.bookings.pageInfo.hasNextPage == true) {
            const variables = {
                all: true,
                to: currentISODate,
                after: data.data.bookings.pageInfo.endCursor,
            }

            const response = await fetch('https://api.flightlogger.net/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    variables
                })
            });

            console.log(data.data.bookings.pageInfo.hasNextPage);

            data = await response.json();
            try {
                for (let i = 0; i < data.data.bookings.nodes.length; i++) {
                    //console.log(data.data.bookings.nodes);
                    dataArray.push(data.data.bookings.nodes[i]);
                }
            } catch (e) {
                console.error("concatination error: " + e);

                return {  };
            }

        }

        return { dataArray };
    } catch (error) {
        console.error(`Error in load function :( ${error}`);
    }
}