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

/*
This is empty on purpose! Your code to build the resume will go here.
 */