/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var name ="Josua Naiborhu";
var formattedName=HTMLheaderName.replace("%data%",name);
var role ="Web Developer";
var formattedRole =HTMLheaderRole.replace("%data%",role);
var mobile = "708-345-543";
var formattedMobile = HTMLmobile.replace("%data%",mobile);
var email = "josua.naiborhu94@.com";
var formattedEmail =HTMLemail.replace("%data%",email);
var github ="naiborhujosua.github.io";
var formattedGithub =HTMLgithub.replace("%data%",github);
var twitter = "@naiborhu_josua";
var formattedTwitter =HTMLtwitter.replace("%data%",twitter);
var myLocation = "Depok";
var FormattedmyLocation =HTMLlocation.replace("%data%",myLocation);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(FormattedmyLocation);


$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(FormattedmyLocation);

var bio = {
	"name" : "Josua Antonius Naiborhu",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "081293104630",
		"email" : "josua.naiborhu94@gmail.com",
		"github" : "josua.naiborhu94@gmail.com",
		"twitter" : "@naiborhu_josua",
		"location" : "Depok"
	},

	"welcomeMessage" : "Welcome to my Personal Website. Enjoy my activity",
	"skills" : [
		"awesomeness", "delivering things","cryogenic sleep", "saving the universe"
	],
	"bioPic" : "images/fry.jpg"
}


	var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedbioPic);

	var formattedMessage =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMessage);

	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);

		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);

		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);

		$("#skills").append(formattedSkills);
	}
	var education ={
	"schools" :	 [
			 {
	
		"name" 		: " University of Indonesia",
		"location"	: "Depok",
		"degree"	: "Bachelor",
		"major"		: "Computer Enginering",
		"dates"		: " 2012-2016",
		"url"		: "www.ui.ac.id"	
		},
			 {
	
		"name" 		: " University of Sumatera Utara",
		"location"	: "Medan",
		"degree"	: "Bachelor",
		"major"		: "Information Techonology",
		"dates"		: " 2012-2013",
		"url"		: "www.usu.ac.id"	
		}
	], 
		"onlineCourses" : [
			{
				"title" 	: "Front End Web Developer",
				"school" 	: "Udacity",
				"date"		: "2016-2017",
				"url"		:"Udacity.com"
			}

		]
		
}

	var work = { 
	"jobs" : [
		{
			"employer"	 : "Telkomsel",
			"title"      : "IT Support",
			"location"	 : "Tangerang",
			"dates"		 : " July 2015-Sepetember 2015",
			"description": "This is part of my first experience in digital company called Telkomsel. I am part of Networking division whose assignment is to manage about the traffic of the company so that it could process well. I am so excited to be part of this division because i learn lots of leadership, networking, and many more."
		},
		{
			"employer"	 : "Chemie Private",
			"title"      : "Math Tutor",
			"location"	 : "Jakarta",
			"dates"		 : "July 2012 - 2014",
			"description" : "I am an passionate of teaching an expatriat about math. In this experience, i have learnt many expatriat from singapore, canada and indonesia. i love joining to this experience because i could get extra money while i am student in my university to fulfill my fee of university "
		},
		{
			"employer"	 : "POUI",
			"title"      : "Committee",
			"location"	 : "Depok",
			"dates"		 : "Feb 2012 - 2015",
			"description" :"Building the Character to the Lord"
		},

	]
};
	
	function locationizer(work_obj){
		var locationArray =[];

		for ( job in work_obj.jobs){
			var newLocation = work_obj.jobs[job].location;
			locationArray.push(newLocation);
		}

		return locationArray;
	}
	 console.log(locationizer(work));

	var projects ={
	"projects" : [
	{
		"title" : "Building a responsive Website",
		"dates"	: " Feb 2012-2013",
		"description" : " Building a responsive website that could be access very well in many devices"
	},
	{
		"title" : "Making an Android app called NawarKuy",
		"dates"	: " Februari 2016-Juni 2016",
		"description" : "An Implementation of making software as the project management"
	}
	
]

};


function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formatterdDates =HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formatterdDates);

		var formatterdDescription =HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formatterdDescription);

	}
}


displayWork();



 function displayProjects () {

	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle= HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates= HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formatterdDescription= HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formatterdDescription);


	}
};

displayProjects();

function displayEducation() {
	for (schools in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
		var formattedNameandDegree = formattedschoolName +formattedschoolDegree;
		$(".education-entry:last").append(formattedNameandDegree);
		

		 var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[schools].dates);
		 $(".education-entry:last").append(formattedschoolDates);

		  var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[schools].location);
		 $(".education-entry:last").append(formattedschoolLocation);

		  var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[schools].major);
		 $(".education-entry:last").append(formattedschoolMajor);

	}

	$("#education").append(HTMLonlineClasses);

	for (school in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[school].title);
		var formattedSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[school].date);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[school].url);
		var formattedOnline = formattedTitle +	formattedSchool	+ formattedDates +formattedURL;
		$(".education-entry:last").append(formattedOnline);		
	}
}

displayEducation();
$("#mapDiv").append(googleMap);
