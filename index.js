var katzDeli = [];

function takeANumber(current_line, name){
	current_line.push(name);
	return `Welcome, ${name}. You are number ${current_line.length} in line.`
}

function nowServing(current_line){
	if(current_line.length === 0){
		return "There is nobody waiting to be served!"
	}
	else{
		let now_serving = current_line[0];
		current_line.shift();
		return `Currently serving ${now_serving}.`;
	}
}

function currentLine(line){
	if(line.length === 0){
		return "The line is currently empty.";
	}
	else{
		let new_line = [];
		for(var i = 0; i < line.length; i++){
			new_line.push(` ${i+1}. ${line[i]}`);
		}
		return `The line is currently:${new_line}`
	}

}
