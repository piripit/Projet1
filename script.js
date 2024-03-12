$(document).ready(function(){
	$("submit").click(function(){
		$("#form1").submit();
		$("#form2").submit();
		$("#form3").submit();

	});
	$("input[type=number]").change( function() {
		var prix_p=$("#nombre_pizza").val();
		var prix_b=$("#nombre_boisson").val();
		document.querySelector('#prix_pizza').textContent = 3*prix_p;
		document.querySelector('#prix_boisson').textContent = 2*prix_b;
     });
}  