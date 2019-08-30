var listaFavoritos = [];

function cambioIMG(input){
	var x  = input.value;
	if(x == "noSelect"){
		input.src = "conversorDivisasimg/starY.png";
		input.value = "select";
		listaFavoritos.push(input.name);
	}else{
		input.src = "conversorDivisasimg/star.png";
		input.value = "noSelect";
		
		for( var i = 0; i < listaFavoritos.length; i++){ 
		   if ( listaFavoritos[i] === input.name) {
		   		document.getElementsByName("text"+listaFavoritos[i])[0].value = "";
		     	listaFavoritos.splice(i, 1); 
		     	i--;
		   }
		}
	}
}