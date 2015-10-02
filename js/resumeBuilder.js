'use strict';

/****HEADER ****/

var bio = {
	'name' : 'Sasha Ewan',
	'role' : 'Web Ninja',
	'contacts' : 
		{
		'github' : 'ewans05',
		'mobile' : '555-5500',
		'email' : 'ewans05@gmail.com',
		'location' : 'Bronx, NY'
		},
	'picture' : 'images/photo-sasha1.jpg',
	'welcomeMessage' : 'I do solemnly swear that I am up to no good',
	'skills' : ['laughing at my own jokes', 'napping', 'enthusiasm for Harry Potter']
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var mobileNum = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var githubName = HTMLgithub.replace("%data%", bio.contacts.github);
	var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var bioPic = HTMLbioPic.replace("%data%", bio.picture);
	var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(mobileNum);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(githubName);
	$("#topContacts").append(myLocation);
	$("#footerContacts").append(mobileNum);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(githubName);
	$("#footerContacts").append(myLocation);
	$("#header").append(bioPic);
	$("#header").append(message);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var skillSet = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(skillSet);
		}
	}	
};

bio.display();

/*****LAST NAME CAPS BUTTON*****/

/*$("#main").append(internationalizeButton);
function inName(name) {
	var name = bio.name.split(" ");
	var lastNameCap = name[1].toUpperCase();
	var firstName = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	fullName = firstName + " " + lastNameCap;
	return fullName;
};*/

/******BODY******/

/****WORK HISTORY*****/

var work = {
	'jobs' : [
		{
			'company' : '<a href="http://www.lcamllc.com/" target="_blank">Lion Cao Asset Management LLC</a>',
			'city' : 'New York, NY',
			'title' : 'Assistant, Operations & Administration',
			'dates' : '2005 - present',
			'description' : 'Coordinating with investors to streamline the due diligence process, ensure all documentation is executed, and deals are finalized. Processing payments of bills and invoices, tracking expenditures and constructing expense reports for reimbursement.'
		},
		{
			'company' : '<a href="https://tfc.com/" target="_blank">TF Cornerstone</a>',
			'city' : 'Long Island City, NY',
			'title' : 'Leasing Office Agent',
			'dates' : '2009 - 2010',
			'description' : 'Greeted and ascertained needs of prospective clients, determining if they would be good occupants, followed up upon completion of application. Knowledgeable on all aspects of each property available, from physical dimensions to amenities and nearby services.'
		},
		{
			'company' : '<a href="http://mcneilgrayandrice.com/" target="_blank">McNeil, Gray & Rice Public Relations</a>',
			'city' : 'Boston, MA',
			'title' : 'Intern',
			'dates' : '2009',
			'description' : 'Researched technology organizations for business-to-business media campaigns. Compiled lists of potential clients in targeted field.'
		}
	]
};

work.display = function () {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var workCompany = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
		var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var workPosition = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var workDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var workDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedTitle  = workCompany + workPosition;
		$(".work-entry:last").append(formattedTitle);
		$(".work-entry:last").append(workLocation);
		$(".work-entry:last").append(workDatesWorked);
		$(".work-entry:last").append(workDescrip);
	}
};

work.display();

/*******CLICK PAGE FUNCTION*******/

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});



/****EDUCATION*****/

var education = {
	'schools' : [
		{
		'name' : 'Boston College',
		'schoolCity' : 'Chestnut Hill, MA',
		'degree' : 'Bachelor Arts',
		'major' : 'Communication',
		'minor' : 'General Education',
		'gradYear' : '2009'
		},
	],
	'onlineCourses' : [
		{
		'title' : 'Front-End Development Nanodegree',
		'programName' : 'Udacity',
		'dates' : 'July 2015 - present',
		'url' : 'https://www.udacity.com'
		},
	]
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var myCollege = HTMLschoolName.replace("%data%", education.schools[school].name);
		var collegeTown = HTMLschoolLocation.replace("%data%", education.schools[school].schoolCity);
		var degreeType = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var myMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var myMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
		var gradYr = HTMLschoolDates.replace("%data%", education.schools[school].gradYear);
		$(".education-entry").append(myCollege);
		$(".education-entry").append(collegeTown);
		$(".education-entry").append(degreeType);
		$(".education-entry").append(myMajor);
		$(".education-entry").append(myMinor);
		$(".education-entry").append(gradYr);
	}
	for (var school in education.onlineCourses) {
		$(".education-entry").append(HTMLonlineClasses);
		var onlineProgram = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var classTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].programName);
		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		var classURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry").append(onlineProgram);
		$(".education-entry").append(classTitle);
		$(".education-entry").append(onlineDates);
		$(".education-entry").append(classURL);
	}
};

education.display();

/*******PROJECTS*********/

var projects = {
	'udacityWork': [
		{
		'title' : '<a href="http://htmlpreview.github.io/?https://github.com/ewans05/Project-P1/blob/master/index.html" target="_blank">P1</a>',
		'dates' : 'Aug 2015',
		'description' : 'You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.',
		'image' : ['https://d2q0qd5iz04n9u.cloudfront.net/_ssl/proxy.php/http/gallery.mailchimp.com/0c10b5b87df9a80d37817b056/images/udacity_logo_thumb553593.jpg']
		},
		{
		'title' : 'P2',
		'dates' : 'Sept 2015',
		'description' : 'You will demonstrate your mastery of the language\'s syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. You\'ll be required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.',
		'image' : ['http://www.technapex.com/wp-content/uploads/2012/10/Udacity560.jpg']
		}
	]
};

projects.display = function() {
	for (var project in projects.udacityWork) {
		$("#projects").append(HTMLprojectStart);
		var myProjectTitle = HTMLprojectTitle.replace("%data%", projects.udacityWork[project].title);
		var myProjectDates = HTMLprojectDates.replace("%data%", projects.udacityWork[project].dates);
		var myProjectDescrip = HTMLprojectDescription.replace("%data%", projects.udacityWork[project].description);
		$(".project-entry:last").append(myProjectTitle);
		$(".project-entry:last").append(myProjectDates);
		$(".project-entry:last").append(myProjectDescrip);
		if (projects.udacityWork[project].image.length > 0) {		
			for (var pic in projects.udacityWork[project].image) {
				var myProjectImg = HTMLprojectImage.replace("%data%", projects.udacityWork[project].image[pic]);
				$(".project-entry:last").append(myProjectImg);
			}
		}
	}
};

projects.display();

/*******MAP*******/

$("#mapDiv").append(googleMap);