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

$("workExperience").append(HTMLworkStart);
$("workExperience").append(workCompany);
$("workExperience").append(workLocation);
