/****HEADER ****/

var formattedName;
var formattedRole;

formattedName = HTMLheaderName.replace("%data%", "Sasha Ewan");
formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var skills = ["laughing at my own jokes", "napping", "nunchucks"];
var bio = {
	"name" : "Sasha",
	"mobile" : "555-5500",
	"email" : "ewans05@gmail.com",
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "I do solemnly swear I am up to no good",
	"skills" : skills
};

/******BODY******/

/****WORK HISTORY*****/

var mobileNum = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var bioPic = HTMLbioPic.replace("%data%", bio.picture);
var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var skillSet0 = HTMLskills.replace("%data%", bio.skills[0]);
var skillSet1 = HTMLskills.replace("%data%", bio.skills[1]);
var skillSet2 = HTMLskills.replace("%data%", bio.skills[2]);

$("#header").append(bioPic);
$("#header").append(mobileNum);
$("#header").append(formattedEmail);
$("#header").append(message);
$("#header").append(HTMLskillsStart);
$("#header").append(skillSet0);
$("#header").append(skillSet1);
$("#header").append(skillSet2);

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
	"school" : "Boston College",
	"schoolCity" : "Chestnut Hill, MA",
	"degree" : "Bachelor Arts",
	"major" : "Communication",
	"minor" : "General Education",
	"gradYear" : "2009"
};

var myCollege = HTMLschoolName.replace("%data%", education.school);
var collegeTown = HTMLschoolLocation.replace("%data%", education.schoolCity);
var degreeType = HTMLschoolDegree.replace("%data%", education.degree);
var myMajor = HTMLschoolMajor.replace("%data%", education.major);
var myMinor = HTMLschoolMinor.replace("%data%", education.minor);
var gradYr = HTMLschoolDates.replace("%data%", education.gradYear);

$("#education").append(HTMLschoolStart);
$("#education").append(myCollege);
$("#education").append(collegeTown);
$("#education").append(degreeType);
$("#education").append(myMajor);
$("#education").append(myMinor);
$("#education").append(gradYr);
