<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Label, Input, Button , P} from 'flowbite-svelte';
    import { Heading , Hr} from 'flowbite-svelte';
    import { Progressbar } from 'flowbite-svelte';
    import { sineOut } from 'svelte/easing';
    import { DarkMode } from 'flowbite-svelte';
    import { Select } from 'flowbite-svelte';
    import { Spinner } from 'flowbite-svelte';
    import { Search } from 'flowbite-svelte';

    import { browser } from '$app/environment';

    //valid reasons for cancellations
    let uncontrollableCancellationReasons = [
        "Aircraft/Sim Unavailable",

        "Client - sick",
        "Client - family emergency",
        "Client - fatigue",
        "Client - injury",
        "Client - no show/no-call",
        "Client - technical issue (remote session)",
        "Client - transportation issue",

        "Instructor - instructor is sick",
        "Instructor - personal scheduling conflict",

        "Maintenance issue - before start",
        "Maintenance issue - after start",
        "Crew - unavailable",
        "Flight Training Professionals",
        "Other",
        "Reschedule - booking is not needed",
        "Reschedule - changing booking",
        "Reschedule - client has completed the course",
        "Reschedule - client is scheduled for progress check",
        "Reschedule - scheduling error",
        "Test booking - system operations check",
        "Test booking - training",
        "Weather - excessive crosswinds",
        "Weather - excessive total winds",
        "Weather - low cloud layers/ceilings",
        "Weather - low visibilities",
        "Weather - thunderstorms"
    ];
    let controllableCancellationReasons = [
        "Client - client discontinued training",
        "Client - forgot booking",
        "Client - overslept",
        "Client - personal scheduling conflict",
        "Client - short notice cancellation",
        "Client - unprepared for lesson",
    ];

    let controllableCancellationRate = 0;
    let uncontrollableCancellationRate = 0;
    let overallCancellationRate = 0;

    //how often a lesson is marked as passed or failed
    let failureCount = 0;
    let passCount = 0;
    let failureRate = 0;


    /*
    //export let data;

    let firstName = "";
    let lastName = "";

    $: firstName;
    $: lastName;

    // function to calculate the attendance rate of a student
    let totalReservations = 0;
    let cancellations;
    let controllableCancellations;
    let uncontrollableCancellations;
    let cancellationArray = [];
    let uncontrollableCancellationReasons = [
        "Aircraft/Sim Unavailable",

        "Client - sick",
        "Client - family emergency",
        "Client - fatigue",
        "Client - injury",
        "Client - no show/no-call",
        "Client - technical issue (remote session)",
        "Client - transportation issue",

        "Instructor - instructor is sick",
        "Instructor - personal scheduling conflict",

        "Maintenance issue - before start",
        "Maintenance issue - after start",
        "Crew - unavailable",
        "Flight Training Professionals",
        "Other",
        "Reschedule - booking is not needed",
        "Reschedule - changing booking",
        "Reschedule - client has completed the course",
        "Reschedule - client is scheduled for progress check",
        "Reschedule - scheduling error",
        "Test booking - system operations check",
        "Test booking - training",
        "Weather - excessive crosswinds",
        "Weather - excessive total winds",
        "Weather - low cloud layers/ceilings",
        "Weather - low visibilities",
        "Weather - thunderstorms"
    ];
    let controllableCancellationReasons = [
        "Client - client discontinued training",
        "Client - forgot booking",
        "Client - overslept",
        "Client - personal scheduling conflict",
        "Client - short notice cancellation",
        "Client - unprepared for lesson",
    ];
    function calculateAttendanceRate() {

        totalReservations = 0;
        cancellations = 0;
        controllableCancellations = 0;
        uncontrollableCancellations = 0;

        // empty the cancellation array
        cancellationArray.length = 0;

        if (notFound == false) {
            for (let i = 0; i < studentList[selectedIndex].registrationList.length; i++) {
                totalReservations++;
                
                if (studentList[selectedIndex].registrationList[i].cancellation != null) {
                    cancellations++;

                    cancellationArray.push({
                        title: studentList[selectedIndex].registrationList[i].cancellation.title,
                    });

                    if (uncontrollableCancellationReasons.contains(studentList[selectedIndex].registrationList[i].cancellation.title)) {
                        uncontrollableCancellations++;
                    } else {
                        controllableCancellations++;
                    }
                }
            }
        }
    }

    
    

    
    
    
    // array of all bookings, these will need to be updated manually for the time being
    let dataArray = [];

    // create the list of students that can be selected
    let studentList = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] != null && dataArray[i].registration != null && dataArray[i].registration.student != null && dataArray[i].registration.student.firstName != null && dataArray[i].registration.student.lastName != null && dataArray[i].registration.student.id != null) {
            let caught = false;
            for (let j = 0; j < studentList.length; j++) {
                if (studentList[j].id == dataArray[i].registration.student.id) {
                    caught = true;
                    studentList[j].registrationList.push(dataArray[i].registration);
                }
            }

            if (caught == false) {
                studentList.push({
                    firstName: dataArray[i].registration.student.firstName,
                    lastName: dataArray[i].registration.student.lastName,
                    id: dataArray[i].registration.student.id,
                    registrationList: [dataArray[i].registration]
                });
            }
        }
    }

    console.log(studentList);

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
    */

    //import data files
    import data from "./data.json";
    import dataInformation from "./dataInformation.json";
    import nameIdList from "./nameIdList.json";

    nameIdList.sort((a, b) => {
      // Convert names to lower case to ensure the sort is case-insensitive
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1; // a comes before b
      }
      if (nameA > nameB) {
        return 1; // a comes after b
      }
      return 0; // names are equal
    });

    let displayIdList = nameIdList.slice();
    let searchParam = "";

    function calculateSearchResults() {
      console.log("calcualte search results");
        displayIdList.length = 0;
        console.log(nameIdList)
        for (let i = 0; i < nameIdList.length; i++) {
            if (nameIdList[i].name.toLowerCase().includes(searchParam.toLowerCase())) {
                displayIdList.push(nameIdList[i]);
            }
        }
    }

    import { page } from "$app/stores";
	import { getOperationAST } from 'graphql';

    let selected = false;
    let studentIndex;
    let currentStudent = [];
    let notFound = false;
    function selectStudent(id) {
      notFound = false;
      studentIndex = -1;
      currentStudent = [];
      for (let i = 0; i < data.length; i++) {
        if (id == data[i].id) {
          studentIndex = i;
        }
      }

      if (studentIndex == -1) {
        notFound = true;
        console.log("not found");
        return;
      }

      currentStudent = data[studentIndex];
      selected = true;

      calculateCancellationRate();
      calculateFailures();
    }

    //get URL parameters to see if a student has been selected based on URL
    // append URL like this: /?id=97651
    const url = $page.url;
    if (url.searchParams.get('id') != null) {
      console.log(url.searchParams);
        selectStudent(url.searchParams.get('id'));
    }

    

    
    function calculateCancellationRate() {
      let total = currentStudent.cancellations.length + currentStudent.reservations.length;

      for (let i = 0; i < currentStudent.cancellations.length; i++) {
        if (uncontrollableCancellationReasons.includes(currentStudent.cancellations[i].title)) {
          uncontrollableCancellationRate++;
        } else if (controllableCancellationReasons.includes(currentStudent.cancellations[i].title)) {
          controllableCancellationRate++;
        }
      }
      
      overallCancellationRate = currentStudent.cancellations.length;
      overallCancellationRate = overallCancellationRate / total;

      controllableCancellationRate = controllableCancellationRate / total;
      uncontrollableCancellationRate = uncontrollableCancellationRate / total;

      controllableCancellationRate *= 100;
      uncontrollableCancellationRate *= 100;
      overallCancellationRate *= 100;
    }

    
    function calculateFailures() {
      failureCount = 0;
      passCount = 0;
      failureRate = 0;

      for (let i = 0; i < currentStudent.reservations.length; i++) {
        if (currentStudent.reservations[i].status == "FAILED") {
          failureCount++;
        } else if (currentStudent.reservations[i].status == "PASSED") {
          passCount++;
        }
      }

      failureRate = failureCount / (failureCount + passCount);
      failureRate *= 100;
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
<P>Data Last Updated: {dataInformation.dateCreated}</P>
<Hr />

<Search on:input={() => {calculateSearchResults()}} bind:value={searchParam}>
</Search>
<div class="padding"></div>
<Table hoverable={true} shadow>
    <TableHead>
      <TableHeadCell>Name / ID</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each displayIdList as student}
            <TableBodyRow>
                <TableBodyCell><div class="cell"><div>{student.name} / {student.id}</div><Button rel="external" href={"/?id=" + student.id}>Go To</Button></div></TableBodyCell>
                
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
{/if}

{#if selected == true}
<Heading tag='h2'>{currentStudent.name}</Heading>
<Hr />

<div class="studentContainer">
  <Heading tag='h3'>Attendance Rate</Heading>

  <P>Total Reservations: {currentStudent.reservations.length + currentStudent.cancellations.length}</P>
  <P>Total Cancellations: {currentStudent.cancellations.length}</P>

  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Overall Cancellation Rate</div>
    <Progressbar size="h-4" labelInside progress={overallCancellationRate} />
  </div>
  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Controllable Cancellation Rate</div>
    <Progressbar size="h-4" labelInside progress={controllableCancellationRate} />
  </div>
  
  <Heading tag='h4'>Cancellation List:</Heading>
  <Table hoverable={true} shadow>
    <TableHead>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>Title</TableHeadCell>
      <TableHeadCell>Comment</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each currentStudent.cancellations as cancellation}
            <TableBodyRow>
                <TableBodyCell>{cancellation.startsAt}</TableBodyCell>
                <TableBodyCell>{cancellation.title}</TableBodyCell>
                <TableBodyCell>{cancellation.comment}</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
  </Table>

  <Hr></Hr>

  <Heading tag='h3'>Lesson Completion Rate</Heading>
  <P>The percentage of the time that a lesson is marked as satisfactory. This does not include cancellations.</P>
  <Table hoverable={true} shadow>
    <TableHead>
      <TableHeadCell>Total Reservations</TableHeadCell>
      <TableHeadCell>Total Passes</TableHeadCell>
      <TableHeadCell>Total Times Marked "Repition Needed"</TableHeadCell>
    </TableHead>
    <TableBody>
            <TableBodyRow>
                <TableBodyCell>{currentStudent.reservations.length}</TableBodyCell>
                <TableBodyCell>{passCount}</TableBodyCell>
                <TableBodyCell>{failureCount}</TableBodyCell>
            </TableBodyRow>
    </TableBody>
  </Table>

  <div class="my-4">
    <div class="mb-1 text-lg font-medium dark:text-white">Failure Rate</div>
    <Progressbar size="h-4" labelInside progress={failureRate} />
  </div>

  <Hr></Hr>
</div>


{/if}




</div>

<style>
  .cell {
    display: flex;
    justify-content: space-between;
  }

  .studentContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

   .container {
    padding: 20px;
    margin: auto;
   }
   .padding {
        height: 15px;
   }
</style>