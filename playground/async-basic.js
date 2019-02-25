console.log(" App is starting !!")

setTimeout(() => {
    console.log('Inside the call back function !!');
}, 2000);

setTimeout(() => {
    console.log('Inside the second callback !!');
}, 0);


console.log(" App Ended !!")