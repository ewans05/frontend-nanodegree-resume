/****HEADER ****/

var skills = ["laughing at my own jokes", "napping", "nunchucks"];
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
	"skills" : skills
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
$("#header").append(HTMLskillsStart);
$("#header").append(skillSet0);
$("#header").append(skillSet1);
$("#header").append(skillSet2);

/******BODY******/

/****WORK HISTORY*****/

var work = [
	{
		"company" : "LCAM LLC",
		"city" : "New York, NY",
		"title" : "El Jefe"
	},
	{
		"company" : "TF Corner",
		"city" : "New York, NY",
		"title" : "liason"
	},
	{
		"company" : "Productions",
		"city" : "Boston, MA",
		"title" : "minion"
	}
]

var workCompany = HTMLworkEmployer.replace("%data%", work[0].company);
var workLocation = HTMLworkLocation.replace("%data%", work[0].city);
var workPosition = HTMLworkTitle.replace("%data%", work[0].title);
var workCompany1 = HTMLworkEmployer.replace("%data%", work[1].company);
var workLocation1 = HTMLworkLocation.replace("%data%", work[1].city);
var workPosition1 = HTMLworkTitle.replace("%data%", work[1].title);
var workCompany2 = HTMLworkEmployer.replace("%data%", work[2].company);
var workLocation2 = HTMLworkLocation.replace("%data%", work[2].city);
var workPosition2 = HTMLworkTitle.replace("%data%", work[2].title);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(workCompany);
$("#workExperience").append(workLocation);
$("#workExperience").append(workPosition);
$("#workExperience").append(workCompany1);
$("#workExperience").append(workLocation1);
$("#workExperience").append(workPosition1);
$("#workExperience").append(workCompany2);
$("#workExperience").append(workLocation2);
$("#workExperience").append(workPosition2);

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
		{
		"title" : "Front-End Development Nanodegree",
		"programName" : "Udacity",
		"dates" : "July 2015 - present",
		"url" : "https://www.udacity.com"
		},
	]
};

var myCollege = HTMLschoolName.replace("%data%", education.schools[0].name);
var collegeTown = HTMLschoolLocation.replace("%data%", education.schools[0].schoolCity);
var degreeType = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var myMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);
var myMinor = HTMLschoolMinor.replace("%data%", education.schools[0].minor);
var gradYr = HTMLschoolDates.replace("%data%", education.schools[0].gradYear);

$("#education").append(HTMLschoolStart);
$("#education").append(myCollege);
$("#education").append(collegeTown);
$("#education").append(degreeType);
$("#education").append(myMajor);
$("#education").append(myMinor);
$("#education").append(gradYr);

var onlineProgram = HTMLonlineTitle.replace("%data%", education.schools[1].title);
var classTitle = HTMLonlineTitle.replace("%data%", education.schools[1].programName);
var onlineDates = HTMLonlineDates.replace("%data%", education.schools[1].dates);
var classURL = HTMLonlineURL.replace("%data%", education.schools[1].url);

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

