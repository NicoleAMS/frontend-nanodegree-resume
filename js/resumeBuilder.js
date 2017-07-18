/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var name = "Nicole Sentis"
// var role = "Junior Front End Developer"

// var formattedName = HTMLheaderName.replace("%data%", name); 
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $('#header').prepend(formattedRole);
// $('#header').prepend(formattedName); 

var skills = ["HTML5", " CSS3", " SCSS", " Bootstrap", " jQuery", " JavaScript", " Ruby", " Rails5", " SQL"];
var contactInfo = {
  "mobile" : "07845587309",
  "email" : "nicole.sentis@gmail.com",
  "github" : "https://github.com/NicoleAMS",
  "location" : "London"
}

var bio = {
  "name" : "Nicole Sentis",
  "role" : "Junior Front End Developer",
  "contactInfo" : contactInfo,
  "pictureURL" : "http://4.bp.blogspot.com/-LrmSNfeI9Y8/URCO4UFllfI/AAAAAAAA3UY/K_MKt6rw__s/s1600/Random+Cute+Girls+%286%29.jpg",
  "welcomeMessage" : "Welcome to my website!",
  "skills" : skills
};

var work = {};
work.currentJob = "Junior Front End Developer";
work.employer = "Golden Trident Ltd";
work.dates = "2017 - present ";
work.city = "London"; 

var education = {};
education["school"] = "We Got Coders";
education["years"] = "2016 - 2017";
education["city"] = "Hoddesdon"; 

// BIO VARIABLES
var formattedName = HTMLheaderName.replace("%data%", bio.name); 
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMssg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

// WORK VARIABLES
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedJob = HTMLworkTitle.replace("%data%", work.currentJob);
var formattedDates = HTMLworkDates.replace("%data%", work.dates);
var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.city);

// EDUCATION VARIABLES 
var formattedSchool = HTMLschoolName.replace("%data%", education.school);
var formattedYears = HTMLschoolDates.replace("%data%", education.years);
var formattedEdLoc = HTMLschoolLocation.replace("%data%", education.city);

// HEADER 
$('#header').prepend(formattedWelcomeMssg); 
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName); 
$('#header').prepend(formattedPic);

$('#topContacts').prepend(formattedLocation);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedMobile);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

// WORK
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedJob);
$("#workExperience").append(formattedDates);
$("#workExperience").append(formattedWorkLoc);

// EDUCATION
$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchool);
$("#education").append(formattedYears);
$("#education").append(formattedEdLoc);
