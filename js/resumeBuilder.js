/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
  "pictureURL" : "images/me.jpg",
  "welcomeMessage" : "Welcome to my website!",
  "skills" : skills
};

var work = {
  "jobs": [
    {
      "title": "Junior Front End Developer",
      "employer": "Golden Trident",
      "dates": "July 2017 - present",
      "location": "London, United Kingdom",
      "description": "Front end developer"
    },
    {
      "title": "Shop Assistant/Supervisor",
      "employer": "Oxfam",
      "dates": "2015 - 2016",
      "location": "Newcastle upon Tyne, United Kingdom",
      "description": "Shop assistant and supervisor"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "We Got Coders",
      "city": "Hoddesdon, United Kingdom",
      "degree": "Bootcamp",
      "major": "Full Stack Web Development (Ruby on Rails)",
      "gradYear": "2016 - 2017"
    },
    {
      "name": "Newcastle University",
      "city": "Newcastle upon Tyne, United Kingdom",
      "degree": "MA",
      "major": "Heritage Management",
      "gradYear": "2011 - 2012"
    },
    {
      "name": "Leiden University",
      "city": "Leiden, The Netherlands",
      "degree": "MA",
      "major": "Art History",
      "gradYear": "2008 - 2010"
    }
  ] 
};

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


// WORK FUNCTION 

function displayWork() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    $("#workExperience").append(formattedEmployer);
    var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    $("#workExperience").append(formattedJob);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $("#workExperience").append(formattedDates);
    var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $("#workExperience").append(formattedWorkLoc);
    var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $("#workExperience").append(formattedDescr);
  }
};

// EDUCATION FUNCTION

function displayEducation() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    $("#education").append(formattedSchool);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $("#education").append(formattedDegree);
    var formattedYears = HTMLschoolDates.replace("%data%", education.schools[i].gradYear);
    $("#education").append(formattedYears);
    var formattedEdLoc = HTMLschoolLocation.replace("%data%", education.schools[i].city);
    $("#education").append(formattedEdLoc);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $("#education").append(formattedMajor);
  }
};

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


// CALL FUNCTIONS

displayWork();
displayEducation();
