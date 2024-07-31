<script>
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Button,
		P,
		Heading,
		Hr,
		Progressbar,
		Search,
		Popover
	} from 'flowbite-svelte';
	import { page } from '$app/stores';

	import { browser } from '$app/environment';

	//valid reasons for cancellations
	let uncontrollableCancellationReasons = [
		'Aircraft/Sim Unavailable',

		'Client - sick',
		'Client - family emergency',
		'Client - uncontrollable fatigue',
		'Client - injury',
		'Client - technical issue (remote session)',
		'Client - transportation issue',

		'Instructor - instructor is sick',
		'Instructor - personal scheduling conflict',

		'Maintenance issue - before start',
		'Maintenance issue - after start',
		'Crew - unavailable',
		'Flight Training Professionals',
		'Other',
		'Reschedule - booking is not needed',
		'Reschedule - changing booking',
		'Reschedule - client has completed the course',
		'Reschedule - client is scheduled for progress check',
		'Reschedule - scheduling error',
		'Test booking - system operations check',
		'Test booking - training',
		'Weather - excessive crosswinds',
		'Weather - excessive total winds',
		'Weather - low cloud layers/ceilings',
		'Weather - low visibilities',
		'Weather - thunderstorms'
	];
	let controllableCancellationReasons = [
		'Client - client discontinued training',
		'Client - forgot booking',
		'Client - overslept',
		'Client - personal scheduling conflict',
		'Client - short notice cancellation',
		'Client - unprepared for lesson',
		'Client - no show/no-call',
		'Client - controllable fatigue'
	];

	function calculatePrivateProgressCheckDates(daysPerWeek, progressCheck, startDate) {
		let numDays = 0.0;
		if (progressCheck == 1) {
			if (daysPerWeek < 1) {
				numDays = -180 * daysPerWeek + 340;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 2) {
				numDays = -76 * daysPerWeek + 236;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 3) {
				numDays = -34 * daysPerWeek + 152;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 4) {
				numDays = -22 * daysPerWeek + 116;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else {
				numDays = -7 * daysPerWeek + 56;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			}
		} else if (progressCheck == 2) {
			if (daysPerWeek < 1) {
				numDays = -370 * daysPerWeek + 685;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 2) {
				numDays = -155 * daysPerWeek + 470;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 3) {
				numDays = -60 * daysPerWeek + 280;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 4) {
				numDays = -35 * daysPerWeek + 205;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else {
				numDays = -15 * daysPerWeek + 125;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			}
		} else if (progressCheck == 3) {
			if (daysPerWeek < 1) {
				numDays = -610 * daysPerWeek + 1080;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 2) {
				numDays = -220 * daysPerWeek + 690;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 3) {
				numDays = -105 * daysPerWeek + 460;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 4) {
				numDays = -45 * daysPerWeek + 280;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else {
				numDays = -22 * daysPerWeek + 188;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			}
		} else if (progressCheck == 4) {
			if (daysPerWeek < 1) {
				numDays = -780 * daysPerWeek + 1340;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 2) {
				numDays = -260 * daysPerWeek + 820;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 3) {
				numDays = -120 * daysPerWeek + 540;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else if (daysPerWeek < 4) {
				numDays = -50 * daysPerWeek + 330;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			} else {
				numDays = -30 * daysPerWeek + 250;
				startDate = new Date(startDate.getTime() + numDays * 1000 * 60 * 60 * 24);
				return startDate;
			}
		} else {
			return 'error';
		}
	}

	function calculatePrivateExpectedCoursePercentageCompleted(
		daysPerWeek,
		startDate,
		progressCheck
	) {
		let expectedEndDate = new Date(
			calculatePrivateProgressCheckDates(daysPerWeek, progressCheck, startDate)
		);
		let today = new Date();

		let q = Math.abs(today - startDate);
		let d = Math.abs(expectedEndDate - startDate);
		if (Math.round((q / d) * 100) > 100) {
			return 100;
		} else {
			return Math.round((q / d) * 100);
		}
	}

	let courseList = [
		{
			name: 'Private Pilot',
			lessons: [
				'SCENARIO 1: YOUR FIRST FLIGHT (AATD)',
				'SCENARIO 1: YOUR FIRST FLIGHT',
				'SCENARIO 2: CONTROLLING THE AIRPLANE (AATD)',
				'SCENARIO 2: CONTROLLING THE AIRPLANE',
				'SCENARIO 3: INCREASING AWARENESS (Ground Trainer)',
				'SCENARIO 3: INCREASING AWARENESS',
				'SCENARIO 1: RECOGNIZING AND RECOVERING FROM STALLS (AATD)',
				'SCENARIO 1: RECOGNIZING AND RECOVERING FROM STALLS',
				'SCENARIO 2: CORRECTING FOR THE WIND IN FLIGHT (VR Ground Trainer)',
				'SCENARIO 2: CORRECTING FOR THE WIND IN FLIGHT',
				'SCENARIO 3: MAKING STEEP TURNS (Ground Trainer)',
				'SCENARIO 3: MAKING STEEP TURNS',
				'SCENARIO 4: PROGRESS CHECK REVIEW',
				'SCENARIO 5: PROGRESS CHECK (GROUND)',
				'SCENARIO 5: PROGRESS CHECK (AATD)',
				'SCENARIO 1: TAKEOFFS AND LANDINGS (Ground Trainer)',
				'SCENARIO 1: TAKEOFFS AND LANDINGS',
				'SCENARIO 2: CROSSWIND TAKEOFFS AND LANDINGS (Ground Trainer)',
				'SCENARIO 2: CROSSWIND TAKEOFFS AND LANDINGS',
				'SCENARIO 3: EMERGENCY OPERATIONS AND LANDING PRACTICE (AATD)',
				'SCENARIO 3: EMERGENCY OPERATIONS AND LANDING PRACTICE',
				'SCENARIO 1: USING YOUR FLIGHT DISPLAY/ INSTRUMENTS TO CONTROL THE AIRPLANE (VR Ground Trainer)',
				'SCENARIO 2: HANDLING THE UNEXPECTED (AATD)',
				'SCENARIO 2: HANDLING THE UNEXPECTED',
				'SCENARIO 3: GETTING READY FOR SOLO FLIGHT',
				'PRE-SOLO BRIEFING AND PRE-SOLO KNOWLEDGE TEST',
				'SCENARIO 1: PROGRESS CHECK (GROUND)',
				'SCENARIO 1: PROGRESS CHECK (FLIGHT)',
				'SCENARIO 2: YOUR FIRST SOLO FLIGHT',
				'SCENARIO 3: YOUR SECOND SOLO FLIGHT',
				'SCENARIO 1: USING SHORT- OR SOFT-FIELD TECHNIQUES (Ground Trainer)',
				'SCENARIO 1a: USING SHORT- OR SOFT-FIELD TECHNIQUES',
				'SCENARIO 1b: USING SHORT- OR SOFT-FIELD TECHNIQUES',
				'SCENARIO 2a: USING ELECTRONIC NAVIGATION / INSTRUMENT FLIGHT (AATD)',
				'SCENARIO 2b: USING ELECTRONIC NAVIGATION / INSTRUMENT FLIGHT (AATD)',
				'SCENARIO 2: USING ELECTRONIC NAVIGATION / INSTRUMENT (FLIGHT)',
				'SCENARIO 3: SOLO FLIGHT BEYOND THE PATTERN',
				'SCENARIO 4: SOLO PRACTICE',
				'SCENARIO 1: GOING CROSS-COUNTRY (AATD or Ground Trainer)',
				'SCENARIO 1: GOING CROSS-COUNTRY',
				'SCENARIO 2: POLISHING YOUR CROSS-COUNTRY SKILLS (Ground Trainer)',
				'SCENARIO 2: POLISHING YOUR CROSS-COUNTRY SKILLS',
				'SCENARIO 3: FLYING CROSS-COUNTRY AT NIGHT',
				'PRE-SOLO CROSS COUNTRY BRIEFING (GROUND)',
				'SCENARIO 4: PROGRESS CHECK (GROUND)',
				'SCENARIO 4: PROGRESS CHECK (FLIGHT)',
				'SCENARIO 5: YOUR FIRST SOLO CROSS-COUNTRY',
				'SCENARIO 1: FLYING AT NIGHT',
				'SCENARIO 1: POLISHING EMERGENCY INSTRUMENT SKILLS',
				'SCENARIO 2: OPTIONAL SOLO CROSS COUNTRY AND/OR YOUR SKILLS AND THE PRIVATE PILOT ACS',
				'SCENARIO 3: LONG SOLO CROSS-COUNTRY',
				'SCENARIO 4: MORE SOLO PRACTICE',
				'Private Pilot ASEL Course Completion Preparation',
				'SCENARIO 1a: MOCK FAA PRACTICAL TEST (GROUND)',
				'SCENARIO 1b: MOCK FAA PRACTICAL TEST (AIRPLANE)',
				'SCENARIO 1c: MOCK FAA PRACTICAL TEST (GROUND)',
				'SCENARIO 1d: MOCK FAA PRACTICAL TEST (AIRPLANE)',
				'SCENARIO 2: FINAL PROGRESS CHECK (GROUND)',
				'SCENARIO 2: FINAL PROGRESS CHECK (FLIGHT)',
				'FAA Practical Test'
			]
		}
	];

	//cancellation rates
	let controllableCancellationRate = 0;
	let uncontrollableCancellationRate = 0;
	let overallCancellationRate = 0;

	//how often a lesson is marked as passed or failed
	let failureCount = 0;
	let passCount = 0;
	let failureRate = 0;

	//course progress
	let courseProgress = [];
	let programArray = [];

	//import data files
	import data from '../lib/data.json';
	import dataInformation from '../lib/dataInformation.json';
	import nameIdList from '../lib/nameIdList.json';

	//sort the name list so that it goes in the table in order
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

	//variable that is actually displayed, allows for us to delete items without acutally deleting them from the real list
	let displayIdList = nameIdList.slice();
	let searchParam = '';

	function calculateSearchResults() {
		displayIdList.length = 0;
		for (let i = 0; i < nameIdList.length; i++) {
			if (nameIdList[i].name.toLowerCase().includes(searchParam.toLowerCase())) {
				displayIdList.push(nameIdList[i]);
			}
		}
	}

	//logic to select a student which will be saved in the currentStudent object
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
			console.log('not found');
			return;
		}

		currentStudent = data[studentIndex];
		selected = true;

		calculateCancellationRate();
		calculateFailures();
		calcualteCourseProgress();

		//console.log(currentStudent);
	}

	//get URL parameters to see if a student has been selected based on URL
	// append URL like this: /?id=97651
	const url = $page.url;
	if (url.searchParams.get('id') != null) {
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
			if (currentStudent.reservations[i].status == 'FAILED') {
				failureCount++;
			} else if (currentStudent.reservations[i].status == 'PASSED') {
				passCount++;
			}
		}

		failureRate = failureCount / (failureCount + passCount);
		failureRate *= 100;
	}

	function calcualteCourseProgress() {
		//make a programarray and courseprogress array that tracks all of the user programs so that each reservation can be tied to a specific program
		courseProgress.length = 0;
		for (let i = 0; i < currentStudent.reservations.length; i++) {
			if (programArray.includes(currentStudent.reservations[i].userProgram.name)) {
				for (let j = 0; j < courseProgress.length; j++) {
					if (courseProgress[j].name == currentStudent.reservations[i].userProgram.name) {
						courseProgress[j].reservations.push(currentStudent.reservations[i]);
					}
				}
			} else {
				courseProgress.push({
					name: currentStudent.reservations[i].userProgram.name,
					reservations: [currentStudent.reservations[i]],
					startDate: null,
					endDate: null,
					reservationsPerWeek: null,
					reservationCount: 0,
					passFailTracker: null,
					expectedPercentage: 0
				});
				programArray.push(currentStudent.reservations[i].userProgram.name);
			}
		}

		//calculate the start and end dates for each individual program and count the cancellations into the reservation count
		for (let i = 0; i < courseProgress.length; i++) {
			let start, end;
			for (let j = 0; j < courseProgress[i].reservations.length; j++) {
				courseProgress[i].reservationCount++;
				if (start == null) {
					start = new Date(courseProgress[i].reservations[j].startsAt);
				} else {
					if (new Date(courseProgress[i].reservations[j].startsAt) < start) {
						start = new Date(courseProgress[i].reservations[j].startsAt);
					}
				}

				if (end == null) {
					end = new Date(courseProgress[i].reservations[j].startsAt);
				} else {
					if (new Date(courseProgress[i].reservations[j].startsAt) > end) {
						end = new Date(courseProgress[i].reservations[j].startsAt);
					}
				}
			}

			courseProgress[i].startDate = start;
			courseProgress[i].endDate = end;
			//add the cancellations to the array
			for (let j = 0; j < currentStudent.cancellations.length; j++) {
				let tempDate = new Date(currentStudent.cancellations[j].startsAt);
				if (tempDate >= start && tempDate <= end) {
					courseProgress[i].reservationCount++;
				}
			}
		}

		//calculate the number of reservations per week
		for (let i = 0; i < courseProgress.length; i++) {
			let diff = Math.abs(courseProgress[i].endDate - courseProgress[i].startDate);
			let days = diff / 1000 / 60 / 60 / 24;
			courseProgress[i].reservationsPerWeek = courseProgress[i].reservationCount / (days / 7);
		}

		//make an array that tracks whether or not each lesson has a pass or fail if available from the lesson List
		for (let i = 0; i < courseProgress.length; i++) {
			courseProgress[i].passFailTracker = [];
			for (let j = 0; j < courseList.length; j++) {
				if (courseProgress[i].name === courseList[j].name) {
					for (let k = 0; k < courseList[j].lessons.length; k++) {
						courseProgress[i].passFailTracker.push({
							name: courseList[j].lessons[k],
							passed: false
						});
					}
				}
			}

			for (let j = 0; j < courseProgress[i].reservations.length; j++) {
				for (let k = 0; k < courseProgress[i].passFailTracker.length; k++) {
					if (
						courseProgress[i].reservations[j].status == 'PASSED' &&
						(courseProgress[i].reservations[j].name.toLowerCase() ==
							courseProgress[i].passFailTracker[k].name.toLowerCase() ||
							courseProgress[i].reservations[j].name.toLowerCase() ==
								courseProgress[i].passFailTracker[k].name.toLowerCase() + ' - repetition')
					) {
						courseProgress[i].passFailTracker[k].passed = true;
					}
				}
			}

			let total = 0;
			let passed = 0;
			for (let j = 0; j < courseProgress[i].passFailTracker.length; j++) {
				if (courseProgress[i].passFailTracker[j].passed == true) {
					passed++;
					total++;
				} else {
					total++;
				}
			}

			courseProgress[i].passedPercentage = (passed / total) * 100;

			courseProgress[i].expectedPercentage =
				((courseProgress[i].reservationCount * 0.6) / total) * 100;
		}

		//courseProgress = courseProgress
	}
</script>

<head>
	<title>Student Reports</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
</head>

<div class="container">
	<!--
<div class="padding"></div>
<Button on:click={ calculate }>Submit</Button>
-->

	{#if selected == false}
		<Heading tag="h2">Select Student</Heading>
		<P
			>Data Last Updated: {new Date(dataInformation.dateCreated).toLocaleDateString('en-US')}
			{new Date(dataInformation.dateCreated).toLocaleTimeString('en-US')}</P
		>
		<Hr />

		<Search
			on:input={() => {
				calculateSearchResults();
			}}
			bind:value={searchParam}
		></Search>
		<div class="padding"></div>
		<Table hoverable={true} shadow>
			<TableHead>
				<TableHeadCell>Name / ID</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each displayIdList as student}
					<TableBodyRow>
						<TableBodyCell
							><div class="cell">
								<div>{student.name} / {student.id}</div>
								<Button rel="external" href={'/?id=' + student.id}>Go To</Button>
							</div></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	{/if}

	{#if selected == true}
		<Heading tag="h2">{currentStudent.name}</Heading>
		<Hr />

		<div class="studentContainer">
			{#if courseProgress[0].name == 'Private Pilot'}
				<Heading tag="h3">Course Progress - {courseProgress[0].name}</Heading>

				<P>Start Date: {courseProgress[0].startDate.toLocaleDateString('en-Us')}</P>

				<Heading tag="h4">Expected Progress Check Dates</Heading>
				<Table hoverable={true} shadow>
					<TableHead>
						<TableHeadCell>Progress Check</TableHeadCell>
						<TableHeadCell>Expected Progress</TableHeadCell>
					</TableHead>
					<TableBody>
						<TableBodyRow>
							<TableBodyCell
								>Progress Check 1 - {calculatePrivateProgressCheckDates(
									courseProgress[0].reservationsPerWeek,
									1,
									courseProgress[0].startDate
								).toLocaleDateString('en-US')}</TableBodyCell
							>

							<TableBodyCell
								><Progressbar
									size="h-4"
									labelInside
									progress={calculatePrivateExpectedCoursePercentageCompleted(
										courseProgress[0].reservationsPerWeek,
										courseProgress[0].startDate,
										1
									)}
								/></TableBodyCell
							>
						</TableBodyRow><TableBodyRow>
							<TableBodyCell
								>Progress Check 2 - {calculatePrivateProgressCheckDates(
									courseProgress[0].reservationsPerWeek,
									2,
									courseProgress[0].startDate
								).toLocaleDateString('en-US')}</TableBodyCell
							>

							<TableBodyCell
								><Progressbar
									size="h-4"
									labelInside
									progress={calculatePrivateExpectedCoursePercentageCompleted(
										courseProgress[0].reservationsPerWeek,
										courseProgress[0].startDate,
										2
									)}
								/></TableBodyCell
							>
						</TableBodyRow><TableBodyRow>
							<TableBodyCell
								>Progress Check 3 - {calculatePrivateProgressCheckDates(
									courseProgress[0].reservationsPerWeek,
									3,
									courseProgress[0].startDate
								).toLocaleDateString('en-US')}</TableBodyCell
							>

							<TableBodyCell
								><Progressbar
									size="h-4"
									labelInside
									progress={calculatePrivateExpectedCoursePercentageCompleted(
										courseProgress[0].reservationsPerWeek,
										courseProgress[0].startDate,
										3
									)}
								/></TableBodyCell
							>
						</TableBodyRow><TableBodyRow>
							<TableBodyCell
								>Progress Check 4 - {calculatePrivateProgressCheckDates(
									courseProgress[0].reservationsPerWeek,
									4,
									courseProgress[0].startDate
								).toLocaleDateString('en-US')}</TableBodyCell
							>

							<TableBodyCell
								><Progressbar
									size="h-4"
									labelInside
									progress={calculatePrivateExpectedCoursePercentageCompleted(
										courseProgress[0].reservationsPerWeek,
										courseProgress[0].startDate,
										4
									)}
								/></TableBodyCell
							>
						</TableBodyRow>
					</TableBody>
				</Table>

				<div class="my-4">
					<div class="mb-1 text-lg font-medium dark:text-white">Course Percentage Completed</div>
					<Progressbar size="h-4" labelInside progress={courseProgress[0].passedPercentage} />
				</div>
				<div class="my-4">
					<div class="mb-1 text-lg font-medium dark:text-white">Expected Course Progress</div>
					<Progressbar
						size="h-4"
						labelInside
						progress={calculatePrivateExpectedCoursePercentageCompleted(
							courseProgress[0].reservationsPerWeek,
							courseProgress[0].startDate,
							4
						)}
					/>
				</div>
				<div class="center">
					<div class="progressContainer">
						{#each courseProgress[0].passFailTracker as lessonItem}
							<div
								class="progressSquare"
								class:passed={lessonItem.passed}
								id={lessonItem.name.replace(/[^a-zA-Z1-9]/g, '').toLowerCase()}
							>
								<Popover
									class="w-64 text-sm font-light"
									title=""
									triggeredBy={'#' + lessonItem.name.replace(/[^a-zA-Z1-9]/g, '').toLowerCase()}
								>
									<div class="lessonInfo">
										<span>{lessonItem.name}</span>
										{#if lessonItem.passed}
											<span class="statusIndicator passed">Passed</span>
										{:else}
											<span class="statusIndicator failed">Not Passed</span>
										{/if}
									</div>
								</Popover>
							</div>
						{/each}
					</div>
				</div>

				<Hr></Hr>
			{/if}
			<Heading tag="h3">Attendance Rate</Heading>

			<P
				>Total Reservations: {currentStudent.reservations.length +
					currentStudent.cancellations.length}</P
			>
			<P>Total Cancellations: {currentStudent.cancellations.length}</P>

			<div class="my-4">
				<div class="mb-1 text-lg font-medium dark:text-white">Overall Cancellation Rate</div>
				<Progressbar size="h-4" labelInside progress={overallCancellationRate} />
			</div>
			<div class="my-4">
				<div class="mb-1 text-lg font-medium dark:text-white">Controllable Cancellation Rate</div>
				<Progressbar size="h-4" labelInside progress={controllableCancellationRate} />
			</div>
			<div class="my-4">
				<div class="mb-1 text-lg font-medium dark:text-white">Uncontrollable Cancellation Rate</div>
				<Progressbar size="h-4" labelInside progress={uncontrollableCancellationRate} />
			</div>

			<Heading tag="h4">Cancellation List:</Heading>
			<Table hoverable={true} shadow>
				<TableHead>
					<TableHeadCell>Date</TableHeadCell>
					<TableHeadCell>Title</TableHeadCell>
					<TableHeadCell>Comment</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each currentStudent.cancellations as cancellation}
						<TableBodyRow>
							<TableBodyCell
								>{new Date(cancellation.startsAt).toLocaleDateString('en-US')}</TableBodyCell
							>
							<TableBodyCell>{cancellation.title}</TableBodyCell>
							<TableBodyCell>{cancellation.comment}</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>

			<Hr></Hr>

			<Heading tag="h3">Lesson Pass Rate</Heading>
			<P
				>The percentage of the time that a lesson is marked as satisfactory. This does not include
				cancellations.</P
			>
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
				<div class="mb-1 text-lg font-medium dark:text-white">Pass Rate</div>
				<Progressbar size="h-4" labelInside progress={100 - failureRate} />
			</div>

			<Hr></Hr>
		</div>
	{/if}
</div>

<style>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.progressSquare {
		width: 20px;
		height: 20px;
	}

	.progressSquare {
		width: 50px; /* Adjust as needed */
		height: 50px; /* Adjust as needed */
		border: 1px solid #ccc;
		margin: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.progressSquare:hover {
		background-color: #f0f0f0;
	}

	.passed {
		background-color: rgb(
			239 86 47 / var(--tw-bg-opacity)
		); /* Green background for passed lessons */
	}

	.failed {
		background-color: #ff0000; /* Red background for failed lessons */
	}

	.lessonInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.statusIndicator {
		margin-top: 5px;
		padding: 3px 5px;
		border-radius: 5px;
		color: #fff;
		font-weight: bold;
	}

	.progressContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

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
