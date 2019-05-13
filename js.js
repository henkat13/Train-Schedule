var firebaseConfig = {
    apiKey: "AIzaSyCAc-dQCsSCBSNajjdcQI0H3LJLGimW9GE",
    authDomain: "train-schedule-6bc7b.firebaseapp.com",
    databaseURL: "https://train-schedule-6bc7b.firebaseio.com",
    projectId: "train-schedule-6bc7b",
    storageBucket: "train-schedule-6bc7b.appspot.com",
    messagingSenderId: "952897684244",
    appId: "1:952897684244:web:0eb676a87cd28f29"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dataRef = firebase.database();


$("#new-train").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var frequency = $("#train-frequency").val().trim();
    var firstArrival = $("#train-first").val().trim();



    dataRef.ref().push({
        trainName, destination, frequency, firstArrival


    });

    // Assumptions
    var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

});
// create a listener for database: database.on(childadded)
// trainname destination, frequency, first arrival from the snapshot
// calculate the minutes to next arrival and next arrival time, train predictions
// build a table row 
// for each of the variables create a table data (td)
// append all (td) to table row (tr) 
// append (tr) to (tbody)
// activity 19 has addchild and 21 train predictions