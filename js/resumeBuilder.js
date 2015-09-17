/****HEADER ****/

var bio = {
	"name" : "Sasha Ewan",
	"role" : "Web Developer",
	contacts : 
		{
		"github" : "ewans05",
		"mobile" : "555-5500",
		"email" : "ewans05@gmail.com"
		},
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "I do solemnly swear that I am up to no good",
	"skills" : ["laughing at my own jokes", "napping", "nunchucks"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var mobileNum = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var githubName = HTMLgithub.replace("%data%", bio.contacts.github);
var bioPic = HTMLbioPic.replace("%data%", bio.picture);
var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var skillSet0 = HTMLskills.replace("%data%", bio.skills[0]);
var skillSet1 = HTMLskills.replace("%data%", bio.skills[1]);
var skillSet2 = HTMLskills.replace("%data%", bio.skills[2]);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(mobileNum);
$("#header").append(formattedEmail);
$("#header").append(githubName);
$("#header").append(bioPic);
$("#header").append(message);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	$("#header").append(skillSet0);
	$("#header").append(skillSet1);
	$("#header").append(skillSet2);	
};

$("#main").append(internationalizeButton);
function inName(name) {
	var name = bio.name.split(" ");
	var lastNameCap = name[1].toUpperCase();
	var firstName = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	fullName = firstName + " " + lastNameCap;
	return fullName;
};

/******BODY******/

/****WORK HISTORY*****/

var work = {
	"jobs" : [
		{
			"company" : "LCAM LLC",
			"city" : "New York, NY",
			"title" : "El Jefe",
			"dates" : "2005 - present",
			"description" : "coordinating and facilitating"
		},
		{
			"company" : "TF Corner",
			"city" : "New York, NY",
			"title" : "Liason",
			"dates" : "2004 - 2005",
			"description" : "real-estating type things"
		},
		{
			"company" : "Productions LLC",
			"city" : "Boston, MA",
			"title" : "Minion",
			"dates" : "2003 - 2004",
			"description" : "picking things up and then putting them down"
		}
	]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var workCompany = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
		var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var workPosition = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var workDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var workDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedTitle  = workCompany + workPosition;
		$(".work-entry:last").append(formattedTitle);
		$("#workExperience").append(workLocation);
		$("#workExperience").append(workDatesWorked);
		$("#workExperience").append(workDescrip);
	}
};

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});



/****EDUCATION*****/

var education = {
	"schools" : [
		{
		"name" : "Boston College",
		"schoolCity" : "Chestnut Hill, MA",
		"degree" : "Bachelor Arts",
		"major" : "Communication",
		"minor" : "General Education",
		"gradYear" : "2009"
		},
	],
	"onlineCourses" : [
		{
		"title" : "Front-End Development Nanodegree",
		"programName" : "Udacity",
		"dates" : "July 2015 - present",
		"url" : "https://www.udacity.com"
		},
	]
};

var myCollege = HTMLschoolName.replace("%data%", education.schools.name);
var collegeTown = HTMLschoolLocation.replace("%data%", education.schools.schoolCity);
var degreeType = HTMLschoolDegree.replace("%data%", education.schools.degree);
var myMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
var myMinor = HTMLschoolMinor.replace("%data%", education.schools.minor);
var gradYr = HTMLschoolDates.replace("%data%", education.schools.gradYear);

$("#education").append(HTMLschoolStart);
$("#education").append(myCollege);
$("#education").append(collegeTown);
$("#education").append(degreeType);
$("#education").append(myMajor);
$("#education").append(myMinor);
$("#education").append(gradYr);

var onlineProgram = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
var classTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.programName);
var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
var classURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);

$("#education").append(HTMLonlineClasses);
$("#education").append(onlineProgram);
$("#education").append(classTitle);
$("#education").append(onlineDates);
$("#education").append(classURL);

/*******PROJECTS*********/

var projects = {
	"udacityWork": [
		{
		"title" : "P0",
		"dates" : "July 2015",
		"description" : "Simple profile page",
		"image" : "http://blog.udacity.com/wp-content/uploads/2013/07/Udacity_Logo.png"
		},
		{
		"title" : "P1",
		"dates" : "Aug 2015",
		"description" : "HTML/CSS rofile page",
		"image" : "http://s3.amazonaws.com/s3.userdata.www.universalsubtitles.org/teams/logo/cd2825021f6c59ca5d4dc5019a43d6896363783e.png"
		}
	]
};

var myProjectTitle = HTMLprojectTitle.replace("%data%", projects.udacityWork[0].title);
var myProjectDates = HTMLprojectDates.replace("%data%", projects.udacityWork[0].dates);
var myProjectDescrip = HTMLprojectDescription.replace("%data%", projects.udacityWork[0].description);
var myProjectImg = HTMLprojectImage.replace("%data%", projects.udacityWork[0].image);

$("#projects").append(HTMLprojectStart);
$("#projects").append(myProjectTitle);
$("#projects").append(myProjectDates);
$("#projects").append(myProjectDescrip);
$("#projects").append(myProjectImg);

var myProjectTitle1 = HTMLprojectTitle.replace("%data%", projects.udacityWork[1].title);
var myProjectDates1 = HTMLprojectDates.replace("%data%", projects.udacityWork[1].dates);
var myProjectDescrip1 = HTMLprojectDescription.replace("%data%", projects.udacityWork[1].description);
var myProjectImg1 = HTMLprojectImage.replace("%data%", projects.udacityWork[1].image);

$("#projects").append(myProjectTitle1);
$("#projects").append(myProjectDates1);
$("#projects").append(myProjectDescrip1);
$("#projects").append(myProjectImg1);

