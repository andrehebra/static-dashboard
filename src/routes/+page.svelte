<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Label, Input, Button } from 'flowbite-svelte';
    import { Heading , Hr} from 'flowbite-svelte';
    import { Progressbar } from 'flowbite-svelte';
    import { sineOut } from 'svelte/easing';
    import { DarkMode } from 'flowbite-svelte';
    import { Select } from 'flowbite-svelte';
    import { Spinner } from 'flowbite-svelte';

    import { browser } from '$app/environment';

    //export let data;

    let firstName = "";
    let lastName = "";

    $: firstName;
    $: lastName;

    // function to calculate the attendance rate of a student
    function calculateAttendanceRate() {

    }

    
    

    
    
    
    // array of all bookings, these will need to be updated manually for the time being
    let dataArray = [
        {},
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "<p>Nick will require a recheck on landings, specifically relating to touching down at the proper pitch attitude, and maintaining that attitude with elevator back pressure until control effectiveness is lost. Before the recheck, Nick and Andre should plan to accomplish the following:</p><ul><li>Ensure the correct seat position is set. Nick was seated about an inch too low today. Check that eyes are in line with the top of the door frame, and this corresponds with normal seated posture (not sitting too upright to assess seat position).</li><li>Use the trim! Ensure you have a relaxed grip on the control wheel, and anticipate the need for a trim change anytime the speed, power, or configuration is changed. Trim to relieve control pressures during ALL phases of the traffic pattern. In addition, no additional wheels of nose-up trim were used before landing. This will require forward pressure on short-final but is well worth it during the final phases of landing. Implement this, and you will notice immediate results with the finesse you can achieve during the roundout and flare.</li><li>Follow through with back pressure during the rollout - you aren't done flying until the airplane is completely stopped! (and even then, you're STILL correcting for the wind while taxiing). Maintain the touchdown attitude until control effectiveness is lost (this will be substantially easier with the trim discussed above), and gently lower the nose while maintaining FULL elevator back pressure. If the nosewheel is shimmying, you probably aren't doing this.</li></ul><p><br></p><p>NOTES:</p><ul><li>ground operations - good. when testing autopilot, use the A/P disc or MEPT switches to disconnect rather than the AP button. You want to test the methods you would use inflight, and you should never use the AP button to disconnect the autopilot unless the other methods have failed.</li><li>traffic patterns - overall, very good job correcting for the wind. when a controller instructs you to \"turn crosswind\", resuming the traffic pattern (ie turning downwind) is implied. If there is any confusion, it is your responsibility to clarify with the controller.</li><li>landing 1: crosswind corrections ok, touchdown attitude ok, but immediately released elevator backpressure upon touchdown.</li><li>landing 2: crosswind corrections ok, but very flat touchdown, with no elevator back pressure maintained through rollout.</li><li>landing 3: crosswind corrections ok, flattish touchdown, remembered to add elevator back pressure after a few seconds of shimmy during rollout. All 3 landings were a few hundred feet short of the declared touchdown point. Overall crosswind technique was good, but a review of student solo crosswind component limitations.</li></ul><p><br></p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5911220",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Kevin Sakson",
              "firstName": "Kevin",
              "id": "97558",
              "lastName": "Sakson"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: PROGRESS CHECK ( FLIGHT)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 4320,
            "status": "FAILED",
            "student": {
              "callSign": "Nickolas Almodovar",
              "firstName": "Nickolas",
              "id": "97571",
              "lastName": "Almodovar"
            },
            "submittedByInstructorAt": "2024-02-21T21:55:33Z",
            "totalSeconds": 4320,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295243",
                    "name": "Single-pilot resource management (SRM) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295232",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295228",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295223",
                    "name": "Situational awareness ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295249",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295234",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295196",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295208",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295176",
                    "name": "Passenger Briefing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295211",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295159",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295147",
                    "name": "Crosswind taxi",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295237",
                    "name": "Normal/crosswind takeoff and climb ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295139",
                    "name": "Use of trim",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295152",
                    "name": "Collision avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295130",
                    "name": "Turn coordination",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295240",
                    "name": "Maneuvering during slow flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295125",
                    "name": "Power Off Stall - Landing Configuration with a turn",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295120",
                    "name": "Power On Stall - Zero Flaps - Straight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295171",
                    "name": "Spin awareness and recovery procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295165",
                    "name": "Basic instrument maneuvers (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295143",
                    "name": "GPS direct to/nearest airport functions (IR) (if installed)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295190",
                    "name": "180° turn (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295135",
                    "name": "Emergency operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295155",
                    "name": "Ground reference maneuver ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103295184",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103295179",
                    "name": "Go-around/rejected landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103295201",
                    "name": "Normal/crosswind approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103295219",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97571_983791",
                "name": "Flight"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:32Z",
                "createdById": null,
                "updatedAt": "2024-04-10T12:40:03Z",
                "updatedById": null
              },
              "id": "187228",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 4320,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T14:52:20Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 360,
            "id": "5914974",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Karissa Niles",
              "firstName": "Karissa",
              "id": "97557",
              "lastName": "Niles"
            },
            "instrumentSeconds": 4680,
            "multiSeconds": 0,
            "name": "SCENARIO 2: USING ELECTRONIC NAVIGATION / INSTRUMENT FLIGHT",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 6840,
            "status": "PASSED",
            "student": {
              "callSign": "Celine Rivera",
              "firstName": "Celine",
              "id": "97634",
              "lastName": "Rivera"
            },
            "submittedByInstructorAt": "2024-02-21T14:37:44Z",
            "totalSeconds": 6840,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406580",
                    "name": "Maneuvering during slow flight (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406577",
                    "name": "Stall with a bank (not to exceed 20° of bank) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406574",
                    "name": "Lost procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406583",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406571",
                    "name": "Navigation systems/facilities, and radar services (IR)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97634_983806",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406564",
                    "name": "Situational awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406562",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406568",
                    "name": "Maneuvering during slow flight (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406558",
                    "name": "Stall with a bank (not to exceed 20°)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406546",
                    "name": "Roll control during high angles of attack",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406551",
                    "name": "Spin awareness and recovery procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406554",
                    "name": "Recovery from unusual attitudes (VR-IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406549",
                    "name": "Basic instrument maneuvers (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406544",
                    "name": "Navigation systems/facilities, and radar services (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406540",
                    "name": "GPS direct-to/nearest airport function (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406556",
                    "name": "Lost procedures",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97634_983807",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:53Z",
                "createdById": null,
                "updatedAt": "2024-04-11T17:17:49Z",
                "updatedById": null
              },
              "id": "187291",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 6840,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T02:23:45Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "<p>Didn’t fly, waiting on fuel/ water in fuel, ground session on systems for phase 2 Prog check review</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5916146",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Austin Rigler",
              "firstName": "Austin",
              "id": "97565",
              "lastName": "Rigler"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: TAKEOFFS AND LANDINGS",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Sam Trawick",
              "firstName": "Sam",
              "id": "97652",
              "lastName": "Trawick"
            },
            "submittedByInstructorAt": "2024-02-21T14:21:49Z",
            "totalSeconds": 3600,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441176",
                    "name": "Situational awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441179",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441172",
                    "name": "Performance charts",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441168",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441164",
                    "name": "Go-around/rejected landings",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97652_983774",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441155",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441143",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441140",
                    "name": "Situational awareness ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441160",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441146",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441126",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441132",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441135",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441150",
                    "name": "Normal and crosswind takeoff and climb ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441114",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441122",
                    "name": "Traffic patterns ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441109",
                    "name": "Crabbing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441106",
                    "name": "Sideslip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441118",
                    "name": "Go-around/rejected landings",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441129",
                    "name": "Normal/crosswind approach and landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103441138",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97652_983775",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:59Z",
                "createdById": null,
                "updatedAt": "2024-04-11T15:20:36Z",
                "updatedById": null
              },
              "id": "187309",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 3600,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-21T14:51:06Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5912055",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Dispatch",
              "firstName": "Dispatch",
              "id": "97739",
              "lastName": "Dispatch"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 4: SOLO PRACTICE",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 5400,
            "status": "PASSED",
            "student": {
              "callSign": "Michael Di Pasqua",
              "firstName": "Michael",
              "id": "97585",
              "lastName": "Di Pasqua"
            },
            "submittedByInstructorAt": "2024-02-21T14:16:36Z",
            "totalSeconds": 5400,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103320612",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103320597",
                    "name": "Appropriate logbook and certificate endorsements",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103320601",
                    "name": "Steep turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103320609",
                    "name": "Rectangular course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103320587",
                    "name": "Turns around a point",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103320591",
                    "name": "S-turns",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97585_983809",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:37Z",
                "createdById": null,
                "updatedAt": "2024-04-09T22:26:14Z",
                "updatedById": null
              },
              "id": "187242",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 5400,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-03-14T17:35:40Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 720,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5916647",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Oscar Camacho",
              "firstName": "Oscar",
              "id": "97560",
              "lastName": "Camacho"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 3: INCREASING AWARENESS",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 6120,
            "status": "PASSED",
            "student": {
              "callSign": "Mason Young",
              "firstName": "Mason",
              "id": "97660",
              "lastName": "Young"
            },
            "submittedByInstructorAt": "2024-02-21T14:32:47Z",
            "totalSeconds": 6120,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456154",
                    "name": "Flight Training Professional's safety practices and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456152",
                    "name": "Study material and habits",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456170",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456149",
                    "name": "Checklist use ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456146",
                    "name": "Operation of systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456167",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456157",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456160",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456143",
                    "name": "Runway incursion avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456140",
                    "name": "Normal takeoff and climb – The instructor will demonstrate in-flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456164",
                    "name": "Maneuvering during slow flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456134",
                    "name": "Power-off stalls (imminent)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456137",
                    "name": "Normal approach and landing – The instructor will demonstrate in-flight",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97660_983754",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456128",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456119",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456116",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456131",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456106",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456110",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456103",
                    "name": "Positive exchange of flight controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456087",
                    "name": "Engine starting and warm-up ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456096",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456094",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456077",
                    "name": "Engine run-up",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456090",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456100",
                    "name": "Left turning tendencies",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456071",
                    "name": "Constant airspeed climbs and descents ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456069",
                    "name": "Climbing and descending turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456068",
                    "name": "Level off ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456080",
                    "name": "Use of trim",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456125",
                    "name": "Straight-and-level flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456064",
                    "name": "Area familiarization ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456083",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456072",
                    "name": "Aileron/Rudder coordination exercise ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456059",
                    "name": "Medium banked turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456070",
                    "name": "Turn coordination",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456056",
                    "name": "Back pressure in a turn ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456053",
                    "name": "Turn entry and roll-out",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456122",
                    "name": "Maneuvering during slow flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456075",
                    "name": "Power-off stalls (imminent) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456050",
                    "name": "Descents with/without flaps",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456047",
                    "name": "Power-off descent at best glide airspeed",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456062",
                    "name": "Descent at approach airspeed in landing configuration ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103456113",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97660_983755",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:28:02Z",
                "createdById": null,
                "updatedAt": "2024-04-11T15:55:43Z",
                "updatedById": null
              },
              "id": "187317",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 6120,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {},
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-26T00:53:16Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5912022",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Austin Rigler",
              "firstName": "Austin",
              "id": "97565",
              "lastName": "Rigler"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "PRE- SOLO CROSS COUNTRY BRIEFING ( GROUND)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Michael Di Pasqua",
              "firstName": "Michael",
              "id": "97585",
              "lastName": "Di Pasqua"
            },
            "submittedByInstructorAt": "2024-02-23T20:53:16Z",
            "totalSeconds": 4320,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319525",
                    "name": "Appropriate logbook and certificate endorsements ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319521",
                    "name": "Preflight preparation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319502",
                    "name": "Obtaining a weather briefing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319497",
                    "name": "Obtaining weather information",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319530",
                    "name": "Route planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319492",
                    "name": "Airplane performance and limitations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319517",
                    "name": "Cross-country navigation log",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319472",
                    "name": "ICAO flight plan",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319468",
                    "name": "Radio frequencies and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "Cloud clearance requirements in class G at night",
                    "flagged": false,
                    "grade": "US",
                    "id": "103319487",
                    "name": "National airspace system",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319482",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319501",
                    "name": "Alternate plans of action",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319463",
                    "name": "In-flight weather resources",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319456",
                    "name": "Basic VFR weather minimums ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319459",
                    "name": "Emergency operations ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319453",
                    "name": "Locating ATC frequencies ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319536",
                    "name": "Diversion to an alternate ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319512",
                    "name": "Lost procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319444",
                    "name": "Traffic pattern entry and departure procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319507",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319477",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103319449",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97585_983820",
                "name": "Ground Training"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:37Z",
                "createdById": null,
                "updatedAt": "2024-04-09T22:26:14Z",
                "updatedById": null
              },
              "id": "187242",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 4320,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-03-21T18:35:39Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "<p>Oral:</p><p><br></p><p>VOR service vols- L vs VL, H vs VH</p><p>How to locate VOR test sites in chart supplement</p><p>Download chart legend</p><p>MOCA obstacle clearance &amp; signal coverage&nbsp;</p><p><br></p><p>General chart icon identification&nbsp;</p><p><br></p><p>Identifying GPS things in blue</p><p>G altitudes</p><p>Just gps- stated can’t fly victor airways using gps as main nav source</p><p><br></p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5923046",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Maggie Broman",
              "firstName": "Maggie",
              "id": "97559",
              "lastName": "Broman"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 3: Progress Stage 2 Check",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Jordan Sorvillo",
              "firstName": "Jordan",
              "id": "97775",
              "lastName": "Sorvillo"
            },
            "submittedByInstructorAt": "2024-02-21T15:55:41Z",
            "totalSeconds": 6840,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103574014",
                    "name": "Required ATC reports when holding",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103574015",
                    "name": "Single-pilot resource management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103574013",
                    "name": "Procedures for loss of communication in the hold",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97775_984089",
                "name": "Oral"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574012",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97775_984090",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574011",
                    "name": "Preflight preparation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103574010",
                    "name": "Instrument flight deck check",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97775_984091",
                "name": "Preflight procedures"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574009",
                    "name": "Basic instrument flight maneuvers",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574008",
                    "name": "Intercepting and tracking navigational systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574005",
                    "name": "Intercepting and tracking DME arcs",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574007",
                    "name": "Holding procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574004",
                    "name": "Compliance with departure procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574006",
                    "name": "Recovery from unusual flight attitudes",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103574003",
                    "name": "Loss of primary flight instrument",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97775_984092",
                "name": "In-flight"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:12:55Z",
                "createdById": null,
                "updatedAt": "2024-04-10T02:59:06Z",
                "updatedById": null
              },
              "id": "187586",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 6840,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-27T13:39:30Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5938961",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Oscar Camacho",
              "firstName": "Oscar",
              "id": "97560",
              "lastName": "Camacho"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Custom lesson - ACS PREFLIGHT TASKS",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Alan Nguyen",
              "firstName": "Alan",
              "id": "97629",
              "lastName": "Nguyen"
            },
            "submittedByInstructorAt": "2024-02-21T17:21:03Z",
            "totalSeconds": 5760,
            "userCategories": [],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:51Z",
                "createdById": null,
                "updatedAt": "2024-04-10T18:04:32Z",
                "updatedById": null
              },
              "id": "187286",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 5760,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T20:14:17Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "<ul><li>Remember to aviate before navigate</li><li>Create a cue/reminder of sorts to recall to complete the descent (Im headed to an airport so I should think about this checklist as part of that preparation) and before landing (I'm approaching the airspace/pattern of the airport I should complete this) flows/checklist</li></ul>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5916406",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Christopher Colon",
              "firstName": "Christopher",
              "id": "97552",
              "lastName": "Colon"
            },
            "instrumentSeconds": 1080,
            "multiSeconds": 0,
            "name": "SCENARIO 3: GETTING READY FOR SOLO FLIGHT",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 6840,
            "status": "FAILED",
            "student": {
              "callSign": "David Wells",
              "firstName": "David",
              "id": "97658",
              "lastName": "Wells"
            },
            "submittedByInstructorAt": "2024-02-21T22:11:15Z",
            "totalSeconds": 6840,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449071",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449020",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Remember avite before navigate ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449050",
                    "name": "Task management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449046",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449076",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449054",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449025",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Forgot descent and before landing",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449036",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448994",
                    "name": "Positive exchange of flight controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448970",
                    "name": "Crosswind taxi",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449057",
                    "name": "Normal/crosswind takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448955",
                    "name": "Use of trim",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448973",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449064",
                    "name": "Maneuvering during slow flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448977",
                    "name": "Spin awareness and recovery procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449016",
                    "name": "Power-off stall (landing configuration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448945",
                    "name": "Power-on stall (takeoff /climb configuration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448990",
                    "name": "Emergency communications and ATC resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449009",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448961",
                    "name": "Engine failure during takeoff roll (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448998",
                    "name": "System and equipment malfunctions",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449040",
                    "name": "Emergency descent",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448950",
                    "name": "Failed radio communications and ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449001",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103448981",
                    "name": "Go-around/rejected landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103449032",
                    "name": "Normal/crosswind approach and landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103449044",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97658_983788",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:28:01Z",
                "createdById": null,
                "updatedAt": "2024-04-01T17:50:19Z",
                "updatedById": null
              },
              "id": "187315",
              "name": "Private Pilot",
              "status": "standby"
            },
            "vfrDualSeconds": 6840,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 15120,
            "comment": "<p>https://library.cfi.fyi/Students/Joshua/Notes#2%2F21%2F2024\t</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5913454",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Andre Hebra",
              "firstName": "Andre",
              "id": "97550",
              "lastName": "Hebra"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1a: MOCK FAA PRACTICAL TEST (GROUND)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Joshua Kirdy",
              "firstName": "Joshua",
              "id": "97610",
              "lastName": "Kirdy"
            },
            "submittedByInstructorAt": "2024-02-21T19:58:56Z",
            "totalSeconds": 0,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361742",
                    "name": "Preparation for the practical test",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983835",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361738",
                    "name": "Single-pilot resource management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361734",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361731",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361728",
                    "name": "situational awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361725",
                    "name": "Aeronautical decision making",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361721",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361719",
                    "name": "Automation management",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983836",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361716",
                    "name": "Pilot qualifications ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361712",
                    "name": "Airworthiness requirements",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103361704",
                    "name": "Weather information",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361696",
                    "name": "Cross-country flight planning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103361687",
                    "name": "National airspace system ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103361682",
                    "name": "Performance and limitations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103361709",
                    "name": "Operation of systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103361700",
                    "name": "Aeromedical factors ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103361691",
                    "name": "Principles of flight",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983837",
                "name": "Preflight preparation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361678",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361669",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361664",
                    "name": "Engine starting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361652",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361649",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361646",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361643",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361675",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361656",
                    "name": "ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361660",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103361673",
                    "name": "Runway & and taxiway signs, markings, and lighting",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983838",
                "name": "Preflight procedures"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361638",
                    "name": "Normal and crosswind takeoff and climb ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361628",
                    "name": "Normal and crosswind approach and landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361631",
                    "name": "Soft-field takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361620",
                    "name": "Soft-field approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361634",
                    "name": "Short-field takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361623",
                    "name": "Short-field approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361614",
                    "name": "Forward slip to a landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361617",
                    "name": "Go-around/rejected landing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983839",
                "name": "Takeoffs, landings, and go-around/rejected landings"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361611",
                    "name": "Steep turns",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983840",
                "name": "Performance maneuvers"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361607",
                    "name": "Rectangular course ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361603",
                    "name": "S-turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361599",
                    "name": "Turns around a point",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983841",
                "name": "Ground reference maneuver"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361594",
                    "name": "Pilotage and dead reckoning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361590",
                    "name": "Navigation systems and radar services ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361581",
                    "name": "Diversion",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361585",
                    "name": "Lost procedures",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983842",
                "name": "Navigation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361577",
                    "name": "Maneuvering during slow flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361573",
                    "name": "Power-off stalls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361569",
                    "name": "Power-on stalls ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361565",
                    "name": "Spin Awareness",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983843",
                "name": "Slow flight and stalls"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361560",
                    "name": "Straight-and-level flight (IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361555",
                    "name": "Constant airspeed climbs (IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361553",
                    "name": "Constant airspeed descents (IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361550",
                    "name": "Turns to headings (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361547",
                    "name": "Recovery from unusual flight attitudes (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361543",
                    "name": "Radio communications, navigation systems/facilities, and radar services (IR)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983844",
                "name": "Basic instrument maneuvers"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361540",
                    "name": "Emergency descent",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361536",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361532",
                    "name": "Aeromedical factors ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361523",
                    "name": "Principles of flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361528",
                    "name": "Systems and equipment malfunctions",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361520",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983845",
                "name": "Emergency operations"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361515",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361500",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361495",
                    "name": "Engine starting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361488",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361485",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361481",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361477",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361511",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361490",
                    "name": "ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361492",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361505",
                    "name": "Runway & and taxiway signs, markings, and lighting",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983846",
                "name": "Preflight procedures "
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361470",
                    "name": "Night preparation",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983847",
                "name": "Night operation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103361465",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97610_983848",
                "name": "Postflight procedures"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:45Z",
                "createdById": null,
                "updatedAt": "2024-03-16T20:13:37Z",
                "updatedById": null
              },
              "id": "187267",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-21T17:00:21Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 1440,
            "comment": "<p>please continue with your studying using your Cessna ground training course. I also encourage you to learn your sops, and checklist flows using your amplified checklist. If you have any questions please feel free to contact me.</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5916177",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Gabriel Montes",
              "firstName": "Gabriel",
              "id": "97554",
              "lastName": "Montes"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: YOUR FIRST FLIGHT (AATD)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "William Sweeney",
              "firstName": "William",
              "id": "97651",
              "lastName": "Sweeney"
            },
            "submittedByInstructorAt": "2024-02-21T16:59:27Z",
            "totalSeconds": 5040,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442152",
                    "name": "Study material and habits",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442156",
                    "name": "Flight Training Professional's safety practices and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442140",
                    "name": "Four fundamentals of flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442136",
                    "name": "Three axes of an airplane ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442132",
                    "name": "Four forces of flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442148",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442162",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442144",
                    "name": "Operation of systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442128",
                    "name": "Runway incursion avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442124",
                    "name": "Normal takeoff and climb – The instructor will demonstrate in-flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442120",
                    "name": "Normal approach and landing – The instructor will demonstrate in-flight",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97651_983744",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442117",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442096",
                    "name": "Checklist usage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442086",
                    "name": "Location of fire extinguisher ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442077",
                    "name": "Seat Height and Position ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442067",
                    "name": "Doors and safety belts",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442091",
                    "name": "Positive exchange of flight controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442056",
                    "name": "Engine starting and warm-up ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442081",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442072",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442040",
                    "name": "Engine run-up",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442060",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442035",
                    "name": "Climbs and descents",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442045",
                    "name": "Use of trim ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442024",
                    "name": "Level off",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442111",
                    "name": "Straight-and-level flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442018",
                    "name": "Area familiarization ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442050",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442014",
                    "name": "Stability demo (yaw-pitch-roll) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442010",
                    "name": "Medium banked turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442028",
                    "name": "Turn coordination",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442005",
                    "name": "Back pressure in a turn ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442001",
                    "name": "Turn entry and roll-out",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103442105",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97651_983745",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:59Z",
                "createdById": null,
                "updatedAt": "2024-04-11T17:58:29Z",
                "updatedById": null
              },
              "id": "187308",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 5040,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-24T13:10:11Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 720,
            "comment": "<p>Ended flight early due to air sickness</p><p>keep practicing flows</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5916162",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Karissa Niles",
              "firstName": "Karissa",
              "id": "97557",
              "lastName": "Niles"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 2: HANDLING THE UNEXPECTED",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 3240,
            "status": "PASSED",
            "student": {
              "callSign": "Pim Van Usen",
              "firstName": "Pim",
              "id": "97654",
              "lastName": "Van Usen"
            },
            "submittedByInstructorAt": "2024-02-22T18:56:58Z",
            "totalSeconds": 3240,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441612",
                    "name": "Airspace",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441603",
                    "name": "VFR Weather Minimums ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441598",
                    "name": "Emergency procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441594",
                    "name": "Emergency communications and ATC resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441590",
                    "name": "Wind shear awareness and recovery procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441585",
                    "name": "Wake turbulence avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441608",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441581",
                    "name": "Engine failure during takeoff roll (simulated)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97654_983786",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441575",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441531",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441559",
                    "name": "Task management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441555",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441578",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441564",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441538",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441544",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441505",
                    "name": "Positive exchange of flight controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441482",
                    "name": "Crosswind taxi",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441569",
                    "name": "Normal/crosswind takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441476",
                    "name": "Use of trim",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441486",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103441572",
                    "name": "Maneuvering during slow flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441490",
                    "name": "Spin awareness and recovery procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103441526",
                    "name": "Power-off stall (landing configuration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103441469",
                    "name": "Power-on stall (takeoff /climb configuration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441500",
                    "name": "Emergency communications and ATC resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103441521",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441480",
                    "name": "Engine failure during takeoff roll (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441509",
                    "name": "System and equipment malfunctions",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441547",
                    "name": "Emergency descent",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441472",
                    "name": "Failed radio communications and ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441514",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103441496",
                    "name": "Go-around/rejected landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103441541",
                    "name": "Normal/crosswind approach and landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103441550",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97654_983787",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:28:00Z",
                "createdById": null,
                "updatedAt": "2024-04-11T14:37:07Z",
                "updatedById": null
              },
              "id": "187311",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 3240,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": null
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-04-09T13:05:19Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5939128",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Maggie Broman",
              "firstName": "Maggie",
              "id": "97559",
              "lastName": "Broman"
            },
            "instrumentSeconds": 2880,
            "multiSeconds": 0,
            "name": "Custom lesson - IFR currency ",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 4320,
            "status": "PASSED",
            "student": {
              "callSign": "Mario Hernandez",
              "firstName": "Mario",
              "id": "97756",
              "lastName": "Hernandez"
            },
            "submittedByInstructorAt": "2024-02-21T18:00:47Z",
            "totalSeconds": 4320,
            "userCategories": [],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-15T18:53:02Z",
                "createdById": null,
                "updatedAt": "2024-04-10T17:55:02Z",
                "updatedById": null
              },
              "id": "187511",
              "name": "Commercial/CFI Course",
              "status": "active"
            },
            "vfrDualSeconds": 4320,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {},
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-21T22:00:43Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 1440,
            "comment": "<p>Please make sure to review the sops for crosswind takeoffs and landings as well as the sideslips, and forward slip. I encourage you to chairfly them. Today we were coming high on all approaches and although you told me we could so a forward slip we just reduced power and didn’t apply proper aileron and rudder correction for the sideslip. Pulling power to the idle position won’t give us the rate of decent we need all the time, that’s why the forward slip is a useful maneuver. Also, the landing never stops until we are off the runway, proper crosswind correction and longitudinal alignment is required even after we come to a full stop. Don’t let go of your rudders, if you want to use your brakes simply slide your feet to the upper portion of the pedals. We should also use aerodynamical breaking before we apply breaks.  </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 1080,
            "id": "5913413",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Gabriel Montes",
              "firstName": "Gabriel",
              "id": "97554",
              "lastName": "Montes"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 2: CROSSWIND TAKEOFFS AND LANDINGS (Ground Trainer)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Roy Jones",
              "firstName": "Roy",
              "id": "97608",
              "lastName": "Jones"
            },
            "submittedByInstructorAt": "2024-02-21T19:03:50Z",
            "totalSeconds": 4680,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360098",
                    "name": "Single-pilot resource management (SRM) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360090",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360103",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360067",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360094",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360075",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360080",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360057",
                    "name": "Collision avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360063",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360054",
                    "name": "Crabbing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103360050",
                    "name": "Sideslip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103360045",
                    "name": "Forward slip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360060",
                    "name": "Go-around/rejected landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103360071",
                    "name": "Normal/crosswind approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103360086",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97608_983776",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:45Z",
                "createdById": null,
                "updatedAt": "2024-04-11T22:05:59Z",
                "updatedById": null
              },
              "id": "187265",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 4680,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-25T05:30:12Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 1080,
            "comment": "<p>Need to practice radio call responses was told to hold short of runway 13 on taxi instructions simulated and proceeded to cross runway 13 </p><p>practice go around procedures </p><p>review emergency flows and sops </p><p>during ground trainer tends to balloon during round out to flare caused by a late round out </p><p>think about when you start the round out and looking at the back of the runway and being parallel with the surface then go into the flare </p><p>also tends to gain 100 feet in the downwind consistently because of division of attention elsewhere </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5911889",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Karissa Niles",
              "firstName": "Karissa",
              "id": "97557",
              "lastName": "Niles"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 2: CROSSWIND TAKEOFFS AND LANDINGS (Ground Trainer)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Angel Dehaney",
              "firstName": "Angel",
              "id": "97583",
              "lastName": "Dehaney"
            },
            "submittedByInstructorAt": "2024-02-21T18:43:51Z",
            "totalSeconds": 5400,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314853",
                    "name": "Single-pilot resource management (SRM) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314846",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314857",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314822",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314850",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314831",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103314836",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314811",
                    "name": "Collision avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314819",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314804",
                    "name": "Crabbing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103314800",
                    "name": "Sideslip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103314794",
                    "name": "Forward slip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103314815",
                    "name": "Go-around/rejected landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103314827",
                    "name": "Normal/crosswind approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103314841",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97583_983776",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:36Z",
                "createdById": null,
                "updatedAt": "2024-04-10T21:55:56Z",
                "updatedById": null
              },
              "id": "187240",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 5400,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 2160,
            "id": "5949598",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Oscar Camacho",
              "firstName": "Oscar",
              "id": "97560",
              "lastName": "Camacho"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Custom lesson",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 3960,
            "status": "PASSED",
            "student": {
              "callSign": "Awore Uriri",
              "firstName": "Awore",
              "id": "97750",
              "lastName": "Uriri"
            },
            "submittedByInstructorAt": "2024-02-23T13:26:38Z",
            "totalSeconds": 3960,
            "userCategories": [],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-15T18:53:00Z",
                "createdById": null,
                "updatedAt": "2024-04-10T15:41:54Z",
                "updatedById": null
              },
              "id": "187505",
              "name": "Commercial Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 3960,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5938919",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Maggie Broman",
              "firstName": "Maggie",
              "id": "97559",
              "lastName": "Broman"
            },
            "instrumentSeconds": 3240,
            "multiSeconds": 0,
            "name": "SCENARIO 3: Progress Stage 2 Check - Repetition",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 4680,
            "status": "PASSED",
            "student": {
              "callSign": "Jordan Sorvillo",
              "firstName": "Jordan",
              "id": "97775",
              "lastName": "Sorvillo"
            },
            "submittedByInstructorAt": "2024-02-21T20:48:40Z",
            "totalSeconds": 4680,
            "userCategories": [
              {
                "exercises": [],
                "extraExercises": [],
                "id": "97775_984089",
                "name": "Oral"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846187",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97775_984090",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846186",
                    "name": "Preflight preparation",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97775_984091",
                "name": "Preflight procedures"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846185",
                    "name": "Basic instrument flight maneuvers",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846184",
                    "name": "Intercepting and tracking navigational systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846183",
                    "name": "Intercepting and tracking DME arcs",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846182",
                    "name": "Holding procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846181",
                    "name": "Compliance with departure procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846180",
                    "name": "Recovery from unusual flight attitudes",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103846179",
                    "name": "Loss of primary flight instrument",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "1125661",
                    "name": "lost comm",
                    "normGrade": null
                  }
                ],
                "extraExercises": [
                  {
                    "bestGrade": null,
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "1125661",
                    "name": "lost comm"
                  }
                ],
                "id": "97775_984092",
                "name": "In-flight"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:12:55Z",
                "createdById": null,
                "updatedAt": "2024-04-10T02:59:06Z",
                "updatedById": null
              },
              "id": "187586",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 4680,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {},
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-03-09T18:49:12Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5912624",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Oscar Camacho",
              "firstName": "Oscar",
              "id": "97560",
              "lastName": "Camacho"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 3: FLYING CROSS-COUNTRY AT NIGHT",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Guy Fox",
              "firstName": "Guy",
              "id": "97595",
              "lastName": "Fox"
            },
            "submittedByInstructorAt": "2024-02-22T00:10:41Z",
            "totalSeconds": 6480,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337543",
                    "name": "Night preparation and planning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337536",
                    "name": "Required aircraft equipment ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337534",
                    "name": "Night illusions",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337524",
                    "name": "Route selection at night",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337530",
                    "name": "Airport navigation and lighting",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97595_983818",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337509",
                    "name": "Night preparation and planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337477",
                    "name": "Night preflight procedures and pilot equipment ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337463",
                    "name": "Airport navigation and lighting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337480",
                    "name": "Required aircraft equipment",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337519",
                    "name": "Single-pilot resource management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337490",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337433",
                    "name": "Route selection Flight publications and currency ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337467",
                    "name": "Obtaining a weather briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337503",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337496",
                    "name": "Cross-country navigation log",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337485",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337472",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337453",
                    "name": "Opening ICAO flight plans",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337444",
                    "name": "VFR flight following",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337430",
                    "name": "In-flight weather resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337514",
                    "name": "Pilotage and dead reckoning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337423",
                    "name": "Navigation systems ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337474",
                    "name": "Lost procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337448",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337458",
                    "name": "Emergency communications and ATC resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337413",
                    "name": "Recovery from unusual attitudes",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337439",
                    "name": "Night takeoffs and full-stop landings",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "US",
                    "id": "103337418",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97595_983819",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:40Z",
                "createdById": null,
                "updatedAt": "2024-04-11T20:07:46Z",
                "updatedById": null
              },
              "id": "187252",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 6480,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 1800,
            "comment": "<p>Systems overview </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5914646",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Austin Rigler",
              "firstName": "Austin",
              "id": "97565",
              "lastName": "Rigler"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 2: CONTROLLING THE AIRPLANE (AATD)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Sean Murphy",
              "firstName": "Sean",
              "id": "97625",
              "lastName": "Murphy"
            },
            "submittedByInstructorAt": "2024-02-21T20:00:32Z",
            "totalSeconds": 3600,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396855",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396830",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396825",
                    "name": "Left turning tendencies",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396851",
                    "name": "Flight Training Professional's safety practices and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396846",
                    "name": "Study material and habits",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396857",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396841",
                    "name": "Checklist use ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103396836",
                    "name": "Operation of systems",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97625_983748",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396814",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396822",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396803",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396806",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396798",
                    "name": "Positive exchange of flight controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396772",
                    "name": "Engine starting and warm-up ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396786",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396782",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396759",
                    "name": "Engine run-up",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396777",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396793",
                    "name": "Left turning tendencies",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396750",
                    "name": "Constant airspeed climbs and descents ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396738",
                    "name": "Climbing and descending turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396733",
                    "name": "Level off ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396763",
                    "name": "Use of trim",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396819",
                    "name": "Straight-and-level flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396730",
                    "name": "Area familiarization ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396767",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396755",
                    "name": "Aileron/Rudder coordination exercise ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396721",
                    "name": "Medium banked turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396745",
                    "name": "Turn coordination",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396714",
                    "name": "Back pressure in a turn",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396709",
                    "name": "Turn entry and roll-out ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396705",
                    "name": "Descents with/without flaps",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396701",
                    "name": "Power-off descent at best glide airspeed",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396724",
                    "name": "Descent at approach airspeed in landing configuration ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103396809",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97625_983749",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:50Z",
                "createdById": null,
                "updatedAt": "2024-04-07T16:46:46Z",
                "updatedById": null
              },
              "id": "187282",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 3600,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-21T21:48:47Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "<p>Lesson on the tasks above on ground trainer one. Please go over the ground portion of things, tomorrow we will be going over the oral portion, along with the quizzes and we’ll also submit you for your progress check. </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5923026",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Gabriel Montes",
              "firstName": "Gabriel",
              "id": "97554",
              "lastName": "Montes"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 5/6: Increasing Proficiency (G1000/ANALOG)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Christopher Siles",
              "firstName": "Christopher",
              "id": "97774",
              "lastName": "Siles"
            },
            "submittedByInstructorAt": "2024-02-21T20:59:44Z",
            "totalSeconds": 7200,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573476",
                    "name": "Shorthand to write down the clearance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573475",
                    "name": "System and instrument failures affecting IFR flights",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573474",
                    "name": "Recovery from unusual flight attitudes",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97774_984061",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573473",
                    "name": "Risk management",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97774_984062",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573472",
                    "name": "Preflight preparation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573469",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573468",
                    "name": "Filing an IFR flight plan",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573467",
                    "name": "Alternate planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573466",
                    "name": "How to receive your clearance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573465",
                    "name": "Copying your clearance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573464",
                    "name": "Runway incursion avoidance procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573470",
                    "name": "Checklist usage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103573471",
                    "name": "Cockpit management",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97774_984063",
                "name": "Preflight procedures"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573463",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573462",
                    "name": "Basic instrument flight maneuvers",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573460",
                    "name": "Timed turns to magnetic headings",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573458",
                    "name": "Compass turns to magnetic headings",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573461",
                    "name": "Compliance with ATC clearances",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573457",
                    "name": "Loss of primary flight instruments",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103573459",
                    "name": "Recovery from unusual flight attitudes",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97774_984064",
                "name": "In-flight"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:12:35Z",
                "createdById": null,
                "updatedAt": "2024-04-11T19:13:22Z",
                "updatedById": null
              },
              "id": "187585",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 7200,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 360,
            "comment": "<p>Maneuvers are getting a lot better. You know the SOPs, it’s just getting back into the rhythm of maneuvers since it has been a while.</p><p><br></p><p>Emergency Descent:</p><p>Good Job!</p><p><br></p><p>Emergency approach and landing:</p><p>Hold off on flaps until runway is made. Remember if you are high you can always use a forward slip or some s-turns to lose altitude.</p><p><br></p><p>S-Turns:</p><p>Remember with a tailwind we have the steepest bank angle, and we are slowly transitioning to a shallower bank angle as the wind transitions to a headwind.</p><p><br></p><p>Turns around a point:</p><p>Careful with your selection of a point!</p><p><br></p><p>Slow flight clean:</p><p>Take your time. Don’t rush. Once you are at your assigned altitude then proceed with the maneuver.</p><p><br></p><p>Slow flight in landing configuration:</p><p>Take your time. Don’t rush. Once you are at your assigned altitude then proceed with the maneuver.</p><p><br></p><p>Steep Turns:</p><p>Last full turn was beautiful. Altitude never changed. Just watch your rollout.</p><p><br></p><p>Power on stalls:</p><p>Good job!</p><p><br></p><p>Power off Stalls:</p><p>Good job!</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5921336",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Cory Bauer",
              "firstName": "Cory",
              "id": "97553",
              "lastName": "Bauer"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Continued Experience from the Right Seat and Emergency Procedures (Ground Trainer)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Brahim Sjauw-En-Wa",
              "firstName": "Brahim",
              "id": "97761",
              "lastName": "Sjauw-En-Wa"
            },
            "submittedByInstructorAt": "2024-02-21T21:54:35Z",
            "totalSeconds": 6120,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537571",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537565",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537620",
                    "name": "Situational Awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537616",
                    "name": "Preflight Assessment",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537612",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537609",
                    "name": "Engine Starting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537605",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537601",
                    "name": "Airport, Runway and Taxiway Signs, Markings, and Lighting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537599",
                    "name": "Before Takeoff Check",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537593",
                    "name": "Radio Communications and ATC Light Signals",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537597",
                    "name": "Soft-Field Takeoff and Climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537575",
                    "name": "Level-offs",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537580",
                    "name": "Straight-and-Level Flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537506",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537511",
                    "name": "Level Turns (Shallow/Medium)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537521",
                    "name": "Straight Climbs and Climbing Turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537516",
                    "name": "Straight Descents and Descending Turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537525",
                    "name": "Accelerated Maneuver Stalls (Demonstration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537543",
                    "name": "Secondary Stalls (Demonstration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537533",
                    "name": "Emergency Descent",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537528",
                    "name": "Emergency Approach and Landing (Simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537539",
                    "name": "Emergency Equipment and Survival Gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537562",
                    "name": "Turns Around a Point",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537585",
                    "name": "Traffic Patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537551",
                    "name": "Go-Around/Rejected Landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537556",
                    "name": "Forward Slip to a Landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537554",
                    "name": "Soft-Field Approach and Landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537547",
                    "name": "Post-landing taxi and parking",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103537549",
                    "name": "Postflight Procedures",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97761_1033510",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-15T18:53:03Z",
                "createdById": null,
                "updatedAt": "2024-04-09T21:25:14Z",
                "updatedById": null
              },
              "id": "187516",
              "name": "Commercial/CFI Course",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 6120,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": null
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-21T23:47:22Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 21600,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5914241",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Maggie Broman",
              "firstName": "Maggie",
              "id": "97559",
              "lastName": "Broman"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: GOING CROSS- COUNTRY (AATD or Ground Trainer)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Cindy Morgan",
              "firstName": "Cindy",
              "id": "97623",
              "lastName": "Morgan"
            },
            "submittedByInstructorAt": "2024-02-21T21:49:23Z",
            "totalSeconds": 5400,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103385089",
                    "name": "Route planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103385068",
                    "name": "Flight publications and currency (A/FD, sectional and terminal area charts, NOTAMs) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103385049",
                    "name": "Obtaining weather information",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103385078",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103385093",
                    "name": "Weight and balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103385041",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103385033",
                    "name": "Navigation log",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385073",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385059",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103385024",
                    "name": "ICAO flight plan",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385045",
                    "name": "Opening ICAO flight plans ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385013",
                    "name": "In-flight advisories",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385084",
                    "name": "Airspace",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385099",
                    "name": "Pilotage and dead reckoning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385004",
                    "name": "Locating ATC frequencies",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385019",
                    "name": "Radio frequencies and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385008",
                    "name": "Navigation systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385000",
                    "name": "Using the federal airway system (as applicable)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384989",
                    "name": "In-flight weather resources (Flight Service, ATIS, AWOS/ASOS, Unicom)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385063",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385036",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385028",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103385053",
                    "name": "Alternate plans of action ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384994",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97623_983810",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384984",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384970",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384964",
                    "name": "Situational awareness ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384917",
                    "name": "Automation management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384949",
                    "name": "Aeronautical decision making",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384947",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384936",
                    "name": "Route selection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384938",
                    "name": "Flight publications and currency (A/FD, sectional and terminal area charts, NOTAMs) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384925",
                    "name": "Obtaining a weather briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384957",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384907",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384977",
                    "name": "Weight and balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384898",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384953",
                    "name": "Cross-country navigation log ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384942",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384930",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384912",
                    "name": "Opening ICAO flight plans",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384902",
                    "name": "VFR flight following ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384895",
                    "name": "Pilotage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384888",
                    "name": "Dead reckoning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384887",
                    "name": "Navigation systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384882",
                    "name": "Using the federal airway system (as applicable)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384870",
                    "name": "In-flight weather resources (Flight Service, ATIS, AWOS/ASOS, Unicom)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103384875",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97623_983811",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:50Z",
                "createdById": null,
                "updatedAt": "2024-04-11T14:04:01Z",
                "updatedById": null
              },
              "id": "187280",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 5400,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-21T22:30:30Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 360,
            "comment": "<p>Good job today. Keep studying Checklist and practice the Flows. </p><p>Next lesson will be in the redbird. </p><p>Review the comment box on the line items for comments. </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 1800,
            "id": "5921408",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Andre Mitchell",
              "firstName": "Andre",
              "id": "97551",
              "lastName": "Mitchell"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Learning Control from the Other Seat (Airplane)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 6120,
            "status": "PASSED",
            "student": {
              "callSign": "Jack Waddell",
              "firstName": "Jack",
              "id": "97764",
              "lastName": "Waddell"
            },
            "submittedByInstructorAt": "2024-02-21T22:28:42Z",
            "totalSeconds": 6120,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539046",
                    "name": "Flight Training Professionals standard operating procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Much better on Flows and checklist. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539045",
                    "name": "Checklist usage (Do/Verify and Flows)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97764_1033506",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539044",
                    "name": "Risk Management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539043",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539042",
                    "name": "Situational Awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539041",
                    "name": "Preflight Assessment",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539040",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539039",
                    "name": "Engine Starting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Rember to write down taxi instructions, brief it with A/P diagram. Remember to brief all hot spot, any complex intersections and Rwy Crossings. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539038",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539037",
                    "name": "Before Takeoff Check",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539036",
                    "name": "Airport, Runway and Taxiway Signs, Markings, and Lighting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539035",
                    "name": "Radio Communications and ATC Light Signals",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539033",
                    "name": "Normal and Crosswind Takeoff and Climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Rember the 10 percent of climb rate. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539032",
                    "name": "Level-offs",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539031",
                    "name": "Straight-and-Level Flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539019",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539020",
                    "name": "Level Turns (Shallow/Medium)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539021",
                    "name": "Straight Climbs and Climbing Turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539022",
                    "name": "Straight Descents and Descending Turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539023",
                    "name": "Maneuvering During Slow Flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Remember to add power while rolling through 30 degrees of bank. You are going to need more back pressure to maintain alt. \nDon't forgot to use the trim. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539024",
                    "name": "Steep Turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539025",
                    "name": "Airplane stability demonstration",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Wait until you are abeam your point before starting to turn. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539026",
                    "name": "Rectangular Course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539034",
                    "name": "Traffic Patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539027",
                    "name": "Go-Around/Rejected Landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539028",
                    "name": "Normal and Crosswind Approach and Landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539029",
                    "name": "Post-landing taxi and parking",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103539030",
                    "name": "Postflight Procedures",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97764_1033507",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-15T18:53:04Z",
                "createdById": null,
                "updatedAt": "2024-04-09T21:12:23Z",
                "updatedById": null
              },
              "id": "187519",
              "name": "Commercial/CFI Course",
              "status": "active"
            },
            "vfrDualSeconds": 6120,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-26T21:00:17Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 6840,
            "comment": "<ul><li>Utilize references including the FAASafety publication on when a student can solo.</li><li>What can 61-98D do in helping me create a custom approach to a flight review beyond the legal minimums.</li><li>Don’t read the requirements to the “potential client.” Compare and contrast the differences as it relates to requirements vs. privileges.</li></ul>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5920541",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Evan Pickle",
              "firstName": "Evan",
              "id": "96307",
              "lastName": "Pickle"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Flight Instructor End of Course Progress Check (Ground)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Mitchell Baumgardner",
              "firstName": "Mitchell",
              "id": "97752",
              "lastName": "Baumgardner"
            },
            "submittedByInstructorAt": "2024-02-23T20:50:07Z",
            "totalSeconds": 0,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519232",
                    "name": "Instructor responsibilities and professionalism",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519217",
                    "name": "The learning process",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519228",
                    "name": "Human behavior",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519203",
                    "name": "Effective communication",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519198",
                    "name": "Assessment and critique",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519212",
                    "name": "The teaching process",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519209",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519222",
                    "name": "Techniques of flight instruction",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97752_988971",
                "name": "Fundamentals of Instructing"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519193",
                    "name": "Principles of Flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519190",
                    "name": "Navigation and Flight Planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519183",
                    "name": "National Airspace System",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519169",
                    "name": "Night Operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519164",
                    "name": "Airplane Flight Controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Utilize references including the FAASafety publication on when a student can solo. What can 61-98D do in helping me create a custom approach to a flight review beyond the legal minimums.",
                    "flagged": false,
                    "grade": "S",
                    "id": "103519159",
                    "name": "Logbook Entries and Certificate Endorsements",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519155",
                    "name": "Aeromedical factors",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519151",
                    "name": "High Altitude Operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519174",
                    "name": "Runway Incursion Avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519147",
                    "name": "Airplane Weight and Balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519141",
                    "name": "14 CFR and Publications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519179",
                    "name": "Navigation Systems and Radar Services",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519136",
                    "name": "Visual Scanning and Collision Avoidance",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97752_988972",
                "name": "Technical Subject Areas"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519133",
                    "name": "Operation of Systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519132",
                    "name": "Airworthiness Requirements",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519130",
                    "name": "Performance and Limitations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "- Don’t read the requirements to the “potential client.” Compare and contrast the differences as it relates to requirements vs. privileges.",
                    "flagged": false,
                    "grade": "S",
                    "id": "103519128",
                    "name": "Certificates and Documents",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519124",
                    "name": "Weather Information",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97752_988973",
                "name": "Preflight Preparation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103519121",
                    "name": "Maneuver Lesson",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97752_988974",
                "name": "Maneuver Lesson"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-15T18:53:01Z",
                "createdById": null,
                "updatedAt": "2024-03-21T16:18:55Z",
                "updatedById": null
              },
              "id": "187507",
              "name": "Commercial/CFI Course",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": null
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-26T18:31:43Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 1440,
            "comment": "<p>Good job today, the Sideslip was done very well. Round out and flare are still giving us a little bit of a hard time and maintaining the crosswind correction after touchdown but overall today I saw improvement. </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 1440,
            "id": "5913283",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Gabriel Montes",
              "firstName": "Gabriel",
              "id": "97554",
              "lastName": "Montes"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 2: CROSSWIND TAKEOFFS AND LANDINGS",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 4680,
            "status": "FAILED",
            "student": {
              "callSign": "James Hilston",
              "firstName": "James",
              "id": "97604",
              "lastName": "Hilston"
            },
            "submittedByInstructorAt": "2024-02-21T22:59:29Z",
            "totalSeconds": 4680,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356783",
                    "name": "Single-pilot resource management (SRM) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356775",
                    "name": "Risk management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356786",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356751",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356779",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356761",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356765",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356737",
                    "name": "Collision avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356745",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356733",
                    "name": "Crabbing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356730",
                    "name": "Sideslip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103356725",
                    "name": "Forward slip",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103356741",
                    "name": "Go-around/rejected landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356757",
                    "name": "Normal/crosswind approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103356770",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97604_983777",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:43Z",
                "createdById": null,
                "updatedAt": "2024-04-03T12:49:52Z",
                "updatedById": null
              },
              "id": "187261",
              "name": "Private Pilot",
              "status": "standby"
            },
            "vfrDualSeconds": 4680,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": null
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-27T02:12:58Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 720,
            "comment": "<p>Remember radio callouts when entering the hold remember wind correction </p><p>circling get to minimums </p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5922876",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Peter Forde Sanchez",
              "firstName": "Peter",
              "id": "97561",
              "lastName": "Forde Sanchez"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 3: More ILS and Nonprecision Approaches",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Colton Ellis",
              "firstName": "Colton",
              "id": "97769",
              "lastName": "Ellis"
            },
            "submittedByInstructorAt": "2024-02-21T23:09:27Z",
            "totalSeconds": 4320,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569725",
                    "name": "Using an automatic flight control system",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569724",
                    "name": "Determining circling approach minima",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569723",
                    "name": "Circling approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569721",
                    "name": "Required ATC communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569722",
                    "name": "Loss of communications",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97769_984109",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569719",
                    "name": "Single-pilot resource management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569718",
                    "name": "Preflight preparation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569717",
                    "name": "Checklist usage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569720",
                    "name": "Communication with ATC",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569716",
                    "name": "Compliance with ATC clearance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569711",
                    "name": "Departure procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569712",
                    "name": "Approach briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569708",
                    "name": "Terminal Arrival Area (TAA) procedure or course reversal",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569707",
                    "name": "VOR/NDB approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569706",
                    "name": "Descend to minimum descent altitude (MDA)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569705",
                    "name": "Identify the missed approach point (MAP)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569715",
                    "name": "Circling approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569704",
                    "name": "Determine circling minima",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569702",
                    "name": "Select and fly circling maneuver",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569701",
                    "name": "Execute missed approach during circling approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569700",
                    "name": "Transition to landing from a circling approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569713",
                    "name": "Holding procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569714",
                    "name": "Loss of communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569710",
                    "name": "Precision approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569709",
                    "name": "Nonprecision approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569703",
                    "name": "Execute missed approach procedure",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103569699",
                    "name": "Transition to landing from a straight-in approach",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97769_984110",
                "name": "Tasks"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:10:51Z",
                "createdById": null,
                "updatedAt": "2024-04-10T15:17:58Z",
                "updatedById": null
              },
              "id": "187580",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 4320,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": null
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 720,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5922991",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Peter Forde Sanchez",
              "firstName": "Peter",
              "id": "97561",
              "lastName": "Forde Sanchez"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: ILS Approaches",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Connor Manning",
              "firstName": "Connor",
              "id": "97773",
              "lastName": "Manning"
            },
            "submittedByInstructorAt": "2024-02-22T00:33:04Z",
            "totalSeconds": 3960,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Remember sops for call outs ",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572632",
                    "name": "Precision approach procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572631",
                    "name": "Nonprecision approach procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572630",
                    "name": "Approach briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572629",
                    "name": "Flying the approaches",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572628",
                    "name": "When a missed approach is required",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97773_984093",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572627",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97773_984094",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572625",
                    "name": "Checklist usage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572623",
                    "name": "Intercepting and tracking navigational systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572626",
                    "name": "Communication with ATC",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572624",
                    "name": "Compliance with ATC clearance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572622",
                    "name": "Approach briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572620",
                    "name": "Vectors to final approach course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572619",
                    "name": "Intercept and track localizer course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572617",
                    "name": "Intercept and track glideslope",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572621",
                    "name": "Precision approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572615",
                    "name": "Load and verify RNAV approach into navigation system",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572614",
                    "name": "RNAV approach with vertical guidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572611",
                    "name": "Intercept and track RNAV approach course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572610",
                    "name": "Intercept and track electronic vertical guidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572618",
                    "name": "Terminal arrival area (TAA) procedure or course reversal",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572613",
                    "name": "RNAV approach without vertical guidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572616",
                    "name": "Descent to the minimum descent altitude (MDA)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "US",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103572612",
                    "name": "Identify the missed approach point",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572607",
                    "name": "Localizer approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572606",
                    "name": "Identify missed approach point using time from final approach fix (FAF)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572605",
                    "name": "Descend from MDA at visual descent point (VDP)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": null,
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103572609",
                    "name": "Execute missed approach procedure",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103572608",
                    "name": "Transition to landing from an approach",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97773_984095",
                "name": "Tasks"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:12:13Z",
                "createdById": null,
                "updatedAt": "2024-04-05T23:09:33Z",
                "updatedById": null
              },
              "id": "187584",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 3960,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {},
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T16:06:23Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 1440,
            "id": "5922777",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Peter Forde Sanchez",
              "firstName": "Peter",
              "id": "97561",
              "lastName": "Forde Sanchez"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 3: Flying Published Departure Procedures",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Diego Alvarenga",
              "firstName": "Diego",
              "id": "97765",
              "lastName": "Alvarenga"
            },
            "submittedByInstructorAt": "2024-02-22T02:43:28Z",
            "totalSeconds": 3960,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567224",
                    "name": "GPS for IFR navigation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567222",
                    "name": "ADF/NDB navigation for IFR",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567223",
                    "name": "VOR for IFR navigation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567221",
                    "name": "How to receive an IFR clearance at a towered and non-towered airport",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567220",
                    "name": "Published Obstacle Departure Procedures",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97765_984077",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567218",
                    "name": "Aeronautical decision making",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567219",
                    "name": "Risk management",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97765_984078",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567217",
                    "name": "Preflight preparation",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567216",
                    "name": "Checklist usage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567215",
                    "name": "Determining suitability of GPS for IFR flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567214",
                    "name": "Familiarity with avionics",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567213",
                    "name": "Instrument flight deck check",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97765_984079",
                "name": "Preflight procedures"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567212",
                    "name": "Navigating to a waypoint or an off-airway fix at a safe altitude",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567209",
                    "name": "Navigation system orientation (GPS and/or NDB)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567208",
                    "name": "Navigation system course intercepting and tracking (GPS and/or NDB)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567204",
                    "name": "VOR accuracy check",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567203",
                    "name": "Navigation system orientation (VOR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567207",
                    "name": "Navigation system course intercepting and tracking (VOR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567202",
                    "name": "Victor airway intercepting and tracking",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567206",
                    "name": "Recovery from unusual flight attitudes",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567205",
                    "name": "Compliance with published departure procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567201",
                    "name": "Understanding required climb gradient",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567210",
                    "name": "Compliance with ATC clearances",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103567211",
                    "name": "Basic instrument flight maneuvers",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97765_984080",
                "name": "In-flight"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:09:05Z",
                "createdById": null,
                "updatedAt": "2024-04-10T15:08:57Z",
                "updatedById": null
              },
              "id": "187576",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 3960,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {},
        {},
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-26T17:08:25Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 4680,
            "comment": "<p>https://library.cfi.fyi/Students/Daniel/Notes#2%2F22%2F2024</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5914984",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Andre Hebra",
              "firstName": "Andre",
              "id": "97550",
              "lastName": "Hebra"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1a: MOCK FAA PRACTICAL TEST (GROUND)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Daniel Rodriguez",
              "firstName": "Daniel",
              "id": "97635",
              "lastName": "Rodriguez"
            },
            "submittedByInstructorAt": "2024-02-22T13:54:08Z",
            "totalSeconds": 0,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103407012",
                    "name": "Preparation for the practical test",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983835",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103407009",
                    "name": "Single-pilot resource management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103407006",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103407003",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406999",
                    "name": "situational awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406994",
                    "name": "Aeronautical decision making",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406990",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406987",
                    "name": "Automation management",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983836",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406984",
                    "name": "Pilot qualifications ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406981",
                    "name": "Airworthiness requirements",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "US",
                    "id": "103406972",
                    "name": "Weather information",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406965",
                    "name": "Cross-country flight planning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406957",
                    "name": "National airspace system ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406955",
                    "name": "Performance and limitations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406977",
                    "name": "Operation of systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406969",
                    "name": "Aeromedical factors ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406961",
                    "name": "Principles of flight",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983837",
                "name": "Preflight preparation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406951",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406942",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406939",
                    "name": "Engine starting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406931",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406929",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406927",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406925",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406949",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406933",
                    "name": "ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406936",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406945",
                    "name": "Runway & and taxiway signs, markings, and lighting",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983838",
                "name": "Preflight procedures"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406921",
                    "name": "Normal and crosswind takeoff and climb ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406909",
                    "name": "Normal and crosswind approach and landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406913",
                    "name": "Soft-field takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406904",
                    "name": "Soft-field approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406918",
                    "name": "Short-field takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406906",
                    "name": "Short-field approach and landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406898",
                    "name": "Forward slip to a landing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406901",
                    "name": "Go-around/rejected landing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983839",
                "name": "Takeoffs, landings, and go-around/rejected landings"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406894",
                    "name": "Steep turns",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983840",
                "name": "Performance maneuvers"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406890",
                    "name": "Rectangular course ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406886",
                    "name": "S-turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406882",
                    "name": "Turns around a point",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983841",
                "name": "Ground reference maneuver"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406878",
                    "name": "Pilotage and dead reckoning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406874",
                    "name": "Navigation systems and radar services ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406866",
                    "name": "Diversion",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406870",
                    "name": "Lost procedures",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983842",
                "name": "Navigation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406862",
                    "name": "Maneuvering during slow flight ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406860",
                    "name": "Power-off stalls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406854",
                    "name": "Power-on stalls ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406850",
                    "name": "Spin Awareness",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983843",
                "name": "Slow flight and stalls"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406846",
                    "name": "Straight-and-level flight (IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406842",
                    "name": "Constant airspeed climbs (IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406837",
                    "name": "Constant airspeed descents (IR) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406833",
                    "name": "Turns to headings (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406830",
                    "name": "Recovery from unusual flight attitudes (IR)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406827",
                    "name": "Radio communications, navigation systems/facilities, and radar services (IR)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983844",
                "name": "Basic instrument maneuvers"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406824",
                    "name": "Emergency descent",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406822",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406820",
                    "name": "Aeromedical factors ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406814",
                    "name": "Principles of flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406817",
                    "name": "Systems and equipment malfunctions",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406808",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983845",
                "name": "Emergency operations"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406805",
                    "name": "Preflight inspection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406794",
                    "name": "Flight deck management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406792",
                    "name": "Engine starting",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406784",
                    "name": "Taxiing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406781",
                    "name": "Before takeoff check ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406779",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406775",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406801",
                    "name": "Radio communications",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406787",
                    "name": "ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406790",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406797",
                    "name": "Runway & and taxiway signs, markings, and lighting",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983846",
                "name": "Preflight procedures "
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406771",
                    "name": "Night preparation",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983847",
                "name": "Night operation"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406769",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97635_983848",
                "name": "Postflight procedures"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:53Z",
                "createdById": null,
                "updatedAt": "2024-04-08T21:41:59Z",
                "updatedById": null
              },
              "id": "187292",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 360,
            "comment": "<p>Comments in grading notes. Nice flight!</p>",
            "crossCountrySeconds": 9000,
            "debriefingSeconds": 720,
            "id": "5914169",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Joshua Lawrence",
              "firstName": "Joshua",
              "id": "97556",
              "lastName": "Lawrence"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: GOING CROSS- COUNTRY",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 9000,
            "status": "PASSED",
            "student": {
              "callSign": "Delia Miller",
              "firstName": "Delia",
              "id": "97621",
              "lastName": "Miller"
            },
            "submittedByInstructorAt": "2024-02-22T15:46:57Z",
            "totalSeconds": 9000,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383355",
                    "name": "Route planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383334",
                    "name": "Flight publications and currency (A/FD, sectional and terminal area charts, NOTAMs) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383316",
                    "name": "Obtaining weather information",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383345",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383360",
                    "name": "Weight and balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383308",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Make sure to update winds night before or morning of flight. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383300",
                    "name": "Navigation log",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383339",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Lean for cruise based on planned GPH. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383324",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Add at least 15 min to enroute time per leg",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383292",
                    "name": "ICAO flight plan",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383312",
                    "name": "Opening ICAO flight plans ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Simulated",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383285",
                    "name": "In-flight advisories",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383350",
                    "name": "Airspace",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383364",
                    "name": "Pilotage and dead reckoning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383278",
                    "name": "Locating ATC frequencies",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383289",
                    "name": "Radio frequencies and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383281",
                    "name": "Navigation systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383274",
                    "name": "Using the federal airway system (as applicable)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383265",
                    "name": "In-flight weather resources (Flight Service, ATIS, AWOS/ASOS, Unicom)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383329",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383304",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Great job using taxi diagram prior to arrival!",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383296",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383320",
                    "name": "Alternate plans of action ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383270",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97621_983812",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383260",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383250",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383243",
                    "name": "Situational awareness ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383194",
                    "name": "Automation management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383225",
                    "name": "Aeronautical decision making",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383220",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383206",
                    "name": "Route selection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383211",
                    "name": "Flight publications and currency (A/FD, sectional and terminal area charts, NOTAMs) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383198",
                    "name": "Obtaining a weather briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383235",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383184",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383255",
                    "name": "Weight and balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383177",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383230",
                    "name": "Cross-country navigation log ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383216",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383202",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383190",
                    "name": "Opening ICAO flight plans",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383181",
                    "name": "VFR flight following ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383172",
                    "name": "Pilotage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383169",
                    "name": "Dead reckoning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383164",
                    "name": "Navigation systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383162",
                    "name": "Using the federal airway system (as applicable)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383151",
                    "name": "In-flight weather resources (Flight Service, ATIS, AWOS/ASOS, Unicom)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103383159",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97621_983813",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:49Z",
                "createdById": null,
                "updatedAt": "2024-04-07T12:08:37Z",
                "updatedById": null
              },
              "id": "187278",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 9000,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-23T22:22:12Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 1080,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5914966",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Karissa Niles",
              "firstName": "Karissa",
              "id": "97557",
              "lastName": "Niles"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: GOING CROSS- COUNTRY (AATD or Ground Trainer)",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 6120,
            "status": "PASSED",
            "student": {
              "callSign": "Celine Rivera",
              "firstName": "Celine",
              "id": "97634",
              "lastName": "Rivera"
            },
            "submittedByInstructorAt": "2024-02-22T14:57:36Z",
            "totalSeconds": 6120,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406489",
                    "name": "Route planning",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406476",
                    "name": "Flight publications and currency (A/FD, sectional and terminal area charts, NOTAMs) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406462",
                    "name": "Obtaining weather information",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406483",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406492",
                    "name": "Weight and balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406454",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406447",
                    "name": "Navigation log",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406479",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406470",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406440",
                    "name": "ICAO flight plan",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406458",
                    "name": "Opening ICAO flight plans ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406432",
                    "name": "In-flight advisories",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406486",
                    "name": "Airspace",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406494",
                    "name": "Pilotage and dead reckoning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406423",
                    "name": "Locating ATC frequencies",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406436",
                    "name": "Radio frequencies and procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406428",
                    "name": "Navigation systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406419",
                    "name": "Using the federal airway system (as applicable)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406413",
                    "name": "In-flight weather resources (Flight Service, ATIS, AWOS/ASOS, Unicom)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406473",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406450",
                    "name": "Airport operations",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406444",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406466",
                    "name": "Alternate plans of action ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406416",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97634_983810",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406410",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406404",
                    "name": "Task management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406399",
                    "name": "Situational awareness ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406368",
                    "name": "Automation management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406391",
                    "name": "Aeronautical decision making",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406389",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406380",
                    "name": "Route selection",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406384",
                    "name": "Flight publications and currency (A/FD, sectional and terminal area charts, NOTAMs) ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406372",
                    "name": "Obtaining a weather briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406395",
                    "name": "Cross-country flight planning and performance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406360",
                    "name": "Emergency equipment and survival gear",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406407",
                    "name": "Weight and balance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406354",
                    "name": "Runway incursion avoidance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406393",
                    "name": "Cross-country navigation log ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406387",
                    "name": "Flight deck management",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406376",
                    "name": "Power settings and mixture control",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406365",
                    "name": "Opening ICAO flight plans",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": false,
                    "grade": "I",
                    "id": "103406356",
                    "name": "VFR flight following ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406351",
                    "name": "Pilotage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406350",
                    "name": "Dead reckoning ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406347",
                    "name": "Navigation systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406345",
                    "name": "Using the federal airway system (as applicable)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406337",
                    "name": "In-flight weather resources (Flight Service, ATIS, AWOS/ASOS, Unicom)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103406341",
                    "name": "Closing flight plans",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97634_983811",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:53Z",
                "createdById": null,
                "updatedAt": "2024-04-11T17:17:49Z",
                "updatedById": null
              },
              "id": "187291",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 6120,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": false,
            "approvedByStudentAt": null,
            "asymmetricSeconds": 0,
            "briefingSeconds": 360,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5943812",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Oscar Camacho",
              "firstName": "Oscar",
              "id": "97560",
              "lastName": "Camacho"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Custom lesson - Landings ",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 4320,
            "status": "PASSED",
            "student": {
              "callSign": "John Nicholson",
              "firstName": "John",
              "id": "97630",
              "lastName": "Nicholson"
            },
            "submittedByInstructorAt": "2024-02-22T13:32:30Z",
            "totalSeconds": 4320,
            "userCategories": [],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:52Z",
                "createdById": null,
                "updatedAt": "2024-03-20T16:44:13Z",
                "updatedById": null
              },
              "id": "187287",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 4320,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T13:52:12Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 360,
            "comment": "<p>KMCO ILS 36R + Missed Approach (Hold at DNMOR)</p><p><br></p><p>KORL ILS 7 (Hold at ESRAQ)</p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 360,
            "id": "5922964",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 5040,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Taylor Fox",
              "firstName": "Taylor",
              "id": "97563",
              "lastName": "Fox"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 1: ILS Approaches",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "FAILED",
            "student": {
              "callSign": "Dylan Lanier",
              "firstName": "Dylan",
              "id": "97772",
              "lastName": "Lanier"
            },
            "submittedByInstructorAt": "2024-02-22T13:39:48Z",
            "totalSeconds": 5040,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Be cautious about selecting the correct holding entry for the approach. At ESRAQ, a teardrop entry made the most sense rather than a parallel entry.\n\nDifferentiate whether you will be simply flying a procedure turn to reverse course or holding at the initial approach fix. In the case that you are flying a procedure turn, suspending sequencing will not be required and you may continue on the final approach course.",
                    "flagged": false,
                    "grade": "S",
                    "id": "103571947",
                    "name": "Precision approach procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103571946",
                    "name": "Nonprecision approach procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Remember to load the approach from the IAF and only activate a specified leg or vectors to final if instructed.\n\nEvaluate where you believe you will begin the final approach segment based upon altitude and ATC instructions. In this case, being at 4000 ft for the MCO ILS 36R, it is safe to presume approach will vector us between TRAMP and FLOZY.\n\nDon’t forget to brief the FAF, minimums, and missed approach point. Where do you begin the descent? Where and how will we decide to continue the approach or go missed?",
                    "flagged": false,
                    "grade": "S",
                    "id": "103571945",
                    "name": "Approach briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "We still have a tendency to pitch the nose up slightly when looking away from the PFD. Whenever you are managing tasks, work the attitude indicator into your scan as it is the best instantaneous indication of pitch information.\n\nDon’t forget the “glide slope alive” and “glide slope checked” callouts as they indicate critical moments on the approach.\n\nRemember that while power will control your descent rate, if you are low, you will need to increase power and pitch up slightly to re-intercept the glide slope. Vertical speed can be used as a benchmark for descent performance.\n\nIn general, less is more when it comes to course corrections. Try to bracket your corrections within the heading bug on the CDI to avoid over correcting.",
                    "flagged": false,
                    "grade": "S",
                    "id": "103571944",
                    "name": "Flying the approaches",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103571943",
                    "name": "When a missed approach is required",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97772_984093",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103571942",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97772_984094",
                "name": "Single-pilot resource management"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "S",
                    "id": "103571940",
                    "name": "Checklist usage",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571938",
                    "name": "Intercepting and tracking navigational systems",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571941",
                    "name": "Communication with ATC",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571939",
                    "name": "Compliance with ATC clearance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571937",
                    "name": "Approach briefing",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571935",
                    "name": "Vectors to final approach course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571934",
                    "name": "Intercept and track localizer course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571932",
                    "name": "Intercept and track glideslope",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571936",
                    "name": "Precision approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571930",
                    "name": "Load and verify RNAV approach into navigation system",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571929",
                    "name": "RNAV approach with vertical guidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571926",
                    "name": "Intercept and track RNAV approach course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571925",
                    "name": "Intercept and track electronic vertical guidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571933",
                    "name": "Terminal arrival area (TAA) procedure or course reversal",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571928",
                    "name": "RNAV approach without vertical guidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571931",
                    "name": "Descent to the minimum descent altitude (MDA)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571927",
                    "name": "Identify the missed approach point",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571922",
                    "name": "Localizer approach",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571921",
                    "name": "Identify missed approach point using time from final approach fix (FAF)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571920",
                    "name": "Descend from MDA at visual descent point (VDP)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571924",
                    "name": "Execute missed approach procedure",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": true,
                    "comment": "",
                    "flagged": true,
                    "grade": "I",
                    "id": "103571923",
                    "name": "Transition to landing from an approach",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97772_984095",
                "name": "Tasks"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-16T12:11:52Z",
                "createdById": null,
                "updatedAt": "2024-04-11T12:36:25Z",
                "updatedById": null
              },
              "id": "187583",
              "name": "Instrument Rating Course ",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-03-20T18:19:50Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 0,
            "id": "5911474",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Dispatch",
              "firstName": "Dispatch",
              "id": "97739",
              "lastName": "Dispatch"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 4: SOLO PRACTICE",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 5760,
            "status": "PASSED",
            "student": {
              "callSign": "John Ballantyne",
              "firstName": "John",
              "id": "97575",
              "lastName": "Ballantyne"
            },
            "submittedByInstructorAt": "2024-02-22T14:47:00Z",
            "totalSeconds": 5760,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103303429",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103303418",
                    "name": "Appropriate logbook and certificate endorsements",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103303422",
                    "name": "Steep turns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103303426",
                    "name": "Rectangular course",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103303411",
                    "name": "Turns around a point",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103303415",
                    "name": "S-turns",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97575_983809",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:33Z",
                "createdById": null,
                "updatedAt": "2024-04-07T22:02:34Z",
                "updatedById": null
              },
              "id": "187232",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 5760,
            "vfrSpicSeconds": 0
          }
        },
        {},
        {
          "registration": null
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T16:13:31Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 1080,
            "comment": "",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 720,
            "id": "5913683",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Taylor Fox",
              "firstName": "Taylor",
              "id": "97563",
              "lastName": "Fox"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "SCENARIO 2: HANDLING THE UNEXPECTED",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 4320,
            "status": "FAILED",
            "student": {
              "callSign": "Christopher Lin",
              "firstName": "Christopher",
              "id": "97613",
              "lastName": "Lin"
            },
            "submittedByInstructorAt": "2024-02-22T15:57:09Z",
            "totalSeconds": 4320,
            "userCategories": [
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368193",
                    "name": "Airspace",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368187",
                    "name": "VFR Weather Minimums ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368183",
                    "name": "Emergency procedures",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368180",
                    "name": "Emergency communications and ATC resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368178",
                    "name": "Wind shear awareness and recovery procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368176",
                    "name": "Wake turbulence avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368189",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368173",
                    "name": "Engine failure during takeoff roll (simulated)",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97613_983786",
                "name": "Ground Training"
              },
              {
                "exercises": [
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368169",
                    "name": "Single-pilot resource management (SRM)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368126",
                    "name": "Controlled flight into terrain awareness",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368155",
                    "name": "Task management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368150",
                    "name": "Risk management ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Let’s set a goal to have the preflight completed by 25 past the hour so we have more time to work. ",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368172",
                    "name": "Preflight inspection ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368159",
                    "name": "Weight and balance ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368132",
                    "name": "Performance charts ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368140",
                    "name": "Checklist use",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368110",
                    "name": "Positive exchange of flight controls",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Try to minimize time between reading back instructions and taxiing. Have your iPad ready!",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368090",
                    "name": "Crosswind taxi",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368163",
                    "name": "Normal/crosswind takeoff and climb",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368084",
                    "name": "Use of trim",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368093",
                    "name": "Collision avoidance",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "Setup for slow flight should include slow, continuous pitch increase so as to maintain altitude. We are simply responding to the loss of energy since we reduced power. Stagnating in pitch will cause a descent, whereas rapid pitch will cause a momentary climb.",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368166",
                    "name": "Maneuvering during slow flight",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368098",
                    "name": "Spin awareness and recovery procedures ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368121",
                    "name": "Power-off stall (landing configuration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368077",
                    "name": "Power-on stall (takeoff /climb configuration)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368106",
                    "name": "Emergency communications and ATC resources ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368119",
                    "name": "Emergency approach and landing (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368086",
                    "name": "Engine failure during takeoff roll (simulated)",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368113",
                    "name": "System and equipment malfunctions",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368143",
                    "name": "Emergency descent",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368081",
                    "name": "Failed radio communications and ATC light signals ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368116",
                    "name": "Traffic patterns",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368102",
                    "name": "Go-around/rejected landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "We were a little bit impatient in the flare which resulted in a small balloon. Try to rectify the ballon before it results in an altitude gain by alleviating back pressure. Otherwise, an altitude gain caused by a balloon will require a go around.",
                    "flagged": true,
                    "grade": "US",
                    "id": "103368136",
                    "name": "Normal/crosswind approach and landing ",
                    "normGrade": null
                  },
                  {
                    "bestGrade": "S",
                    "carryForward": false,
                    "comment": "",
                    "flagged": false,
                    "grade": "S",
                    "id": "103368147",
                    "name": "After landing, parking, and securing",
                    "normGrade": null
                  }
                ],
                "extraExercises": [],
                "id": "97613_983787",
                "name": "Proficiency Checklist"
              }
            ],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:46Z",
                "createdById": null,
                "updatedAt": "2024-04-11T14:10:08Z",
                "updatedById": null
              },
              "id": "187270",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 4320,
            "vfrSimSeconds": 0,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        },
        {
          "registration": {
            "approvedByStudent": true,
            "approvedByStudentAt": "2024-02-22T15:52:38Z",
            "asymmetricSeconds": 0,
            "briefingSeconds": 0,
            "comment": "<p><br></p>",
            "crossCountrySeconds": 0,
            "debriefingSeconds": 6480,
            "id": "5944874",
            "ifrDualSeconds": 0,
            "ifrSimSeconds": 0,
            "ifrSpicSeconds": 0,
            "instructor": {
              "callSign": "Oscar Camacho",
              "firstName": "Oscar",
              "id": "97560",
              "lastName": "Camacho"
            },
            "instrumentSeconds": 0,
            "multiSeconds": 0,
            "name": "Custom lesson",
            "nightSeconds": 0,
            "pilotFlyingSeconds": 0,
            "pilotMonitoringSeconds": 0,
            "singleSeconds": 0,
            "status": "PASSED",
            "student": {
              "callSign": "Alan Nguyen",
              "firstName": "Alan",
              "id": "97629",
              "lastName": "Nguyen"
            },
            "submittedByInstructorAt": "2024-02-22T15:48:47Z",
            "totalSeconds": 3600,
            "userCategories": [],
            "userProgram": {
              "audit": {
                "createdAt": "2024-02-14T20:27:51Z",
                "createdById": null,
                "updatedAt": "2024-04-10T18:04:32Z",
                "updatedById": null
              },
              "id": "187286",
              "name": "Private Pilot",
              "status": "active"
            },
            "vfrDualSeconds": 0,
            "vfrSimSeconds": 3600,
            "vfrSoloSeconds": 0,
            "vfrSpicSeconds": 0
          }
        }
    ];

    // create the list of students that can be selected
    let studentList = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] != null && dataArray[i].registration != null && dataArray[i].registration.student != null && dataArray[i].registration.student.firstName != null && dataArray[i].registration.student.lastName != null && dataArray[i].registration.student.id != null) {
            let caught = false;
            for (let j = 0; j < studentList.length; j++) {
                if (studentList[j].id == dataArray[i].registration.student.id) {
                    caught = true;
                }
            }

            if (caught == false) {
                studentList.push({
                    firstName: dataArray[i].registration.student.firstName,
                    lastName: dataArray[i].registration.student.lastName,
                    id: dataArray[i].registration.student.id,
                });
            }
        }
    }

    // sort student list by first and last name
    function compareFirst(a,b) {
        if ( a.firstName < b.firstName ){
            return -1;
        }
        if ( a.firstName > b.firstName ){
            return 1;
        }
        return 0;
    }

    function compareLast(a,b) {
        if ( a.lastName < b.lastName ){
            return -1;
        }
        if ( a.lastName > b.lastName ){
            return 1;
        }
        return 0;
    }

    studentList.sort(compareLast);
    studentList.sort(compareFirst);


    // handle when user clicks on one of the students to view report
    // set selected tag to true
    // set id to the current student id
    let selected = false;
    let selectedId;
    let selectedName;
    let selectedIndex;
    let notFound = false;
    function selectStudent(id) {
        notFound = false;

        console.log(id);

        let first, last;
        let caught = false;

        for (let i = 0; i < studentList.length; i++) {
            if (studentList[i].id == id) {
                caught = true;

                first = studentList[i].firstName;
                last = studentList[i].lastName;
                selectedIndex = i;
            }
        }

        if (caught == true) {
            // set name and id
            selectedId = id;
            selectedName = first + " " + last;

            //set selected to true
            selected = true;

            //call functions required to calculate necessary values
            calculateAttendanceRate();
        } else {
            selectedName = "ID Number Not Found";
            selected = true;
            notFound = true;
        }
        
    }

    //get URL parameters to see if a student has been selected based on URL
    import { page } from "$app/stores";
    const url = $page.url;
    //console.log(url.searchParams.get('id'));

    if (url.searchParams.get('id') != null) {
        selectStudent(url.searchParams.get('id'));
    }

    

    const currentDate = new Date();
    const currentISODate = currentDate.toISOString().slice(0, -5);

    

    function calculate1() {

        instructorList.splice(0,instructorList.length);

        let currentSelectedPeriod = new Date(selectedPeriod);
        let endOfPeriod = new Date(currentSelectedPeriod.getTime() + (14*24*60*60*1000));
        

        for (let i = 0; i < dataArray.length; i++) {
            //console.log(dataArray[i]);
            let caught = 0;
            if (dataArray[i] != null && dataArray[i].instructor != null && dataArray[i].registration != null && dataArray[i].startsAt != null) {
                if (dataArray[i].instructor.firstName != "Dispatch" && dataArray[i].startsAt >= currentSelectedPeriod.toISOString().slice(0, -5) && dataArray[i].startsAt < endOfPeriod.toISOString().slice(0, -5)) {
                    for (let j = 0; j < instructorList.length; j++) {
                        if (dataArray[i].instructor.firstName == instructorList[j].firstName && dataArray[i].instructor.lastName == instructorList[j].lastName) {
                            caught = 1;
                        }
                    }

                    if (caught == 0) {
                        instructorList.push({
                            firstName: dataArray[i].instructor.firstName,
                            lastName: dataArray[i].instructor.lastName,
                            briefingSeconds: dataArray[i].registration.briefingSeconds,
                            totalSeconds: dataArray[i].registration.totalSeconds,
                            debriefingSeconds: dataArray[i].registration.debriefingSeconds,
                            reservationList: [dataArray[i]]
                        })
                    } else if (caught == 1) {
                        for (let j = 0; j < instructorList.length; j++) {
                            if (dataArray[i].instructor.firstName == instructorList[j].firstName && dataArray[i].instructor.lastName == instructorList[j].lastName) {
                                instructorList[j].briefingSeconds += dataArray[i].registration.briefingSeconds;
                                instructorList[j].totalSeconds += dataArray[i].registration.totalSeconds;
                                instructorList[j].debriefingSeconds += dataArray[i].registration.debriefingSeconds;
                                instructorList[j].reservationList.push(dataArray[i]);
                            }
                        }
                    } else {
                        console.log("This was not caught for some reason" + dataArray[i]);
                    }
                }
                
            } else if (dataArray[i] != null && dataArray[i].instructor != null && dataArray[i].registrations != null && dataArray[i].startsAt != null) {
                        if (dataArray[i].instructor.firstName != "Dispatch" && dataArray[i].startsAt >= currentSelectedPeriod.toISOString().slice(0, -5) && dataArray[i].startsAt < endOfPeriod.toISOString().slice(0, -5)) {
                            for (let j = 0; j < instructorList.length; j++) {
                                if (dataArray[i].instructor.firstName == instructorList[j].firstName && dataArray[i].instructor.lastName == instructorList[j].lastName) {
                                    caught = 1;
                                }
                            }

                            //console.log(dataArray[i]);

                            let max = {
                                brief: 0,
                                total: 0,
                                debrief: 0
                            }

                            for (let j = 0; j < dataArray[i].registrations.length; j++) {
                                if (dataArray[i].registrations[j].briefingSeconds > max.brief) {
                                    max.brief = dataArray[i].registrations[j].briefingSeconds;
                                }
                                if (dataArray[i].registrations[j].totalSeconds > max.total) {
                                    max.total = dataArray[i].registrations[j].totalSeconds;
                                }
                                if (dataArray[i].registrations[j].debriefingSeconds > max.debrief) {
                                    max.debrief = dataArray[i].registrations[j].debriefingSeconds;
                                }
                            }

                            if (caught == 0) {
                                instructorList.push({
                                    firstName: dataArray[i].instructor.firstName,
                                    lastName: dataArray[i].instructor.lastName,
                                    briefingSeconds: max.brief,
                                    totalSeconds: max.total,
                                    debriefingSeconds: max.debrief,
                                    reservationList: [dataArray[i]]
                                })
                            } else if (caught == 1) {
                                for (let j = 0; j < instructorList.length; j++) {
                                    if (dataArray[i].instructor.firstName == instructorList[j].firstName && dataArray[i].instructor.lastName == instructorList[j].lastName) {
                                        instructorList[j].briefingSeconds += max.brief;
                                        instructorList[j].totalSeconds += max.total;
                                        instructorList[j].debriefingSeconds += max.debrief;
                                        instructorList[j].reservationList.push(dataArray[i]);
                                    }
                                }
                            }
                        }
                    } else {
                //console.log(dataArray[i]);
            }
            
        }

        

        instructorList = instructorList;




        
        console.log(instructorList);
        //console.log(instructorList);
        //console.log(selectedPeriod);
    }

    function calculate() {
        for (let i = 0; i < dataArray.length; i++) {

        }
    }
    
</script>

<head>
    <title>Student Reports</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>

<div class="container">



<!--
<div class="padding"></div>
<Button on:click={ calculate }>Submit</Button>
-->

{#if selected == false}

<Heading tag='h2'>Select Student</Heading>
<Hr />
<div class="padding"></div>
<Table hoverable={true} shadow>
    <TableHead>
        <TableHeadCell>Instructor</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each studentList as student}
            <TableBodyRow on:click={() => selectStudent(student.id, student.firstName, student.lastName)}>
                <TableBodyCell>{student.firstName} {student.lastName}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
{/if}

{#if selected == true}
<Heading tag='h2'>{selectedName}</Heading>
<Hr />

<Heading tag='h3'>Attendance Rate</Heading>

{/if}




</div>

<style>
   .container {
    padding: 20px;
    margin: auto;
   }
   .padding {
        height: 15px;
   }
</style>