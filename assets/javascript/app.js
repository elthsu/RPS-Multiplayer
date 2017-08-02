



	var config = {
    apiKey: "AIzaSyBhbhIdjQP0dXfM9WOAqaQwm6iLA9GSVyk",
    authDomain: "in-class-demo-c4fd2.firebaseapp.com",
    databaseURL: "https://in-class-demo-c4fd2.firebaseio.com",
    projectId: "in-class-demo-c4fd2",
    storageBucket: "in-class-demo-c4fd2.appspot.com",
    messagingSenderId: "814591098078"
  	};
  

 	firebase.initializeApp(config);


 	var p1Name;
 	var p2Name;
 	var p1Hand;
 	var p2Hand;
 	var wins;
 	var losses;
 	var turn = 1;


 	var database = firebase.database();

 	database.ref().on("child_added", function(snapshot){

	// nameDisplay = snapshot.val().Name;
	// roleDisplay = snapshot.val().Role;
	// rateDisplay = snapshot.val().MonthlyRate;

	});



	$("#submit1").on("click", function(event){
	event.preventDefault();

	p1Name = $("#name1").val().trim();

	$("#name1").remove();
	$("#submit1").remove();

	
	database.ref('/player').child('1').push({

		Name: p1Name,

	});

	});


	$("#submit2").on("click", function(event){
	event.preventDefault();

	p2Name = $("#name2").val().trim();

	
	database.ref('/player').child('2').push({

		Name: p2Name,

	});


	$("#clear").on("click", function(event){
	event.preventDefault();

	
	database.ref('/player').child('1').remove();
	database.ref('/player').child('2').remove();

	});

	});











