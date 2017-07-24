// DATA 

var skills = ["HTML5", " CSS3", " SCSS", " Bootstrap", " jQuery", " JavaScript", " Ruby", " Rails5", " SQL"];
var contactInfo = {
  "mobile" : "07845587309",
  "email" : "nicole.sentis@gmail.com",
  "github" : "https://github.com/NicoleAMS",
  "location" : "London"
}

var bio = {
  "name" : "Nicole Anna Monique Sentis",
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
      "description": "No sooner had we hidden the canoe than Ja plunged into the jungle, presently emerging into a narrow but well-defined trail which wound hither and thither much after the manner of the highways of all primitive folk, but there was one peculiarity about this Mezop trail which I was later to find distinguished them from all other trails that I ever have seen within or without the earth."},
    {
      "title": "Shop Assistant/Supervisor",
      "employer": "Oxfam",
      "dates": "2015 - 2016",
      "location": "Newcastle upon Tyne, United Kingdom",
      "description": "I think everyone expected to see a man emerge--possibly something a little unlike us terrestrial men, but in all essentials a man. I know I did. But, looking, I presently saw something stirring within the shadow: greyish billowy movements, one above another, and then two luminous disks--like eyes. Then something resembling a little grey snake, about the thickness of a walking stick, coiled up out of the writhing middle, and wriggled in the air towards me--and then another."}
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

var projects = {
  "projects": [
    {
      "title": "Amazing Animals App",
      "dates": "2017",
      "description": "Three were men and one a woman, and all were oddly dressed. They wore round hats that rose to a small point a foot above their heads, with little bells around the brims that tinkled sweetly as they moved. The hats of the men were blue; the little woman's hat was white, and she wore a white gown that hung in pleats from her shoulders. Over it were sprinkled little stars that glistened in the sun like diamonds.",
      "images": ["https://placeimg.com/250/150/animals/1", "https://placeimg.com/250/150/animals/2", "https://placeimg.com/250/150/animals/3"]
    },
    {
      "title": "Awesome Architecture",
      "dates": "2016",
      "description": "The men were dressed in blue, of the same shade as their hats, and wore well-polished boots with a deep roll of blue at the tops. The men, Dorothy thought, were about as old as Uncle Henry, for two of them had beards. But the little woman was doubtless much older. Her face was covered with wrinkles, her hair was nearly white, and she walked rather stiffly.",
      "images": ["https://placeimg.com/250/150/arch/1", "https://placeimg.com/250/150/arch/2", "https://placeimg.com/250/150/arch/3"]
    },
    {
      "title": "Tech Savvy",
      "dates": "2017",
      "description": "Of the falling of the fifth cylinder I have presently to tell. The sixth star fell at Wimbledon. My brother, keeping watch beside the women in the chaise in a meadow, saw the green flash of it far beyond the hills. On Tuesday the little party, still set upon getting across the sea, made its way through the swarming country towards Colchester. The news that the Martians were now in possession of the whole of London was confirmed. They had been seen at Highgate, and even, it was said, at Neasden. But they did not come into my brother's view until the morrow.",
      "images": ["https://placeimg.com/250/150/tech/1", "https://placeimg.com/250/150/tech/2", "https://placeimg.com/250/150/tech/3"]
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

// HEADER 
// $('#header').prepend(formattedWelcomeMssg); 
$('#name').prepend(formattedRole);
$('#name').prepend(formattedName); 
$('#headerImg').prepend(formattedPic);

$('#topContacts').prepend(formattedLocation);
$('#topContacts').prepend(formattedGithub);
$('#topContacts').prepend(formattedEmail);
$('#topContacts').prepend(formattedMobile);

if(bio.skills.length > 0) {
  $("#headerSkills").append(HTMLskillsStart);
  $("#skills").append(formattedSkills);
}

// INTERNATIONALIZE BUTTON 
// $('#header').append(internationalizeButton);

// GOOGLE MAPS 
$('#mapDiv').append(googleMap);

// WORK FUNCTION 

function displayWork() {
  for(var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedJobEmployer = formattedEmployer + formattedJob; 
    $(".work-entry:last").append(formattedJobEmployer);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedWorkLoc);
    var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescr);
    $(".work-entry:last").append(hr);
  }
}; 

// EDUCATION FUNCTION

function displayEducation() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDegree = formattedSchool + formattedDegree;
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedYears = HTMLschoolDates.replace("%data%", education.schools[i].gradYear);
    $(".education-entry:last").append(formattedYears);
    var formattedEdLoc = HTMLschoolLocation.replace("%data%", education.schools[i].city);
    $(".education-entry:last").append(formattedEdLoc);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry:last").append(formattedMajor);
    $(".education-entry:last").append(hr);
  }
};

// PROJECTS FUNCTION 
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) { 
    $("#projects").append(HTMLprojectStart);

    var formattedPrTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedPrTitle);

    var formattedPrDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedPrDates);

    var formattedPrDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedPrDesc);

    for(j = 0; j < projects.projects[i].images.length; j++) {
      var formattedPrImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
      $(".project-entry:last").append(formattedPrImg);
    }
    $(".project-entry:last").append(hr);
  }
};

// CLICK FUNCTION

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

// LOCATION FUNCTION 

function locationizer(work_obj) {
    var locArray = [];
    for (i = 0; i < work.jobs.length; i++) {
        locArray.push(work.jobs[i].location);
    }
    console.log(locArray);
    return locArray; 
}

// INTERNATIONALIZE NAME FUNCTION 

function inName(name) {
  var fullName = name.split(" ");
  var nameArray = [];
  for(i = 0; i < fullName.length; i++) {
    if (i === fullName.length-1) {
      var lastName = fullName[i].toUpperCase(); 
      nameArray.push(lastName); 
    }
    else {
      var firstName = fullName[i].charAt(0).toUpperCase() + fullName[i].slice(1); 
      nameArray.push(firstName);
    }
  }
  fullName = nameArray.toString().replace(/,/g, " ");
  return fullName; 
};


// CALL FUNCTIONS

displayWork();
displayEducation();
projects.display();