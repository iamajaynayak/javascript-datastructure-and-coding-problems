// Problem : Create a multipliction table of a given number

function multiplicationTable(tableOf){
	console.log("Multiplication Table of " +tableOf)
	for(i=1; i<=10; i++){
		console.log(tableOf+" * "+i+" = "+tableOf*i)
	}
}

multiplicationTable(9)