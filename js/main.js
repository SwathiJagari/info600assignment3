//code to add records
	$(document).ready(function(){
	  $("#addRecord").click(function(){
		const 	startYear		= document.getElementById('startYear').value;
		var 	time 			= new Date().getHours();
	    var 	min 			= new Date().getMinutes();
		if (startYear <= 2000) 
		{
			window.alert('Incorrect year!!: ' + startYear+ 'Please enter year <=2000')
			return
		}
	  $.ajax({
				method: 'POST',
				url: '/users/',
				type: 'POST',
				cache: false,
				data: {
					fullName:$('#fullName').val(),
					major:$('#major').val(),
					startYear: $('#startYear').val(),
				}
			})	
			document.getElementById("fullName").innerHTML=" "; 
			document.getElementById("major").innerHTML=" "; 
			document.getElementById("startYear").innerHTML=" ";
			$("#fullName").empty();
			$("#major").empty();
			$("#startYear").empty();
			});
			});
//code to load data when load button is clicked	
	$(document).ready(function(){
	  $("#loadData").click(function(){
	  $("#Records").empty();
		var 	time 			= new Date().getHours();
	    var 	min 			= new Date().getMinutes();
	  $.getJSON("/users", function(result){
		  $.each(result, function(i, data)
		  {
		   for(var j=0;j<data.length;j++)
		   {
			$("#Records").append(time+": "+min+" "+data[j].fullName + " , " + data[j].major + " ,  " + data[j].startYear +"  "+ "<button value='" +data[j].id+ "' id ='deleterow'>Delete</button>" +"<br>" );
			}
		  });
		  });
	     });
	 });
//code to add delete button adjacent to each record	
		$(document).on("click","#deleterow",function(){
		const id= $(this).val();	
			document.getElementById("Records").innerHTML=" ";
			var 	time 			= new Date().getHours();
			var 	min 			= new Date().getMinutes();
			$.getJSON("/users", function(result){
			$.each(result, function(i, data){
			for(var j=0;j<data.length;j++){
				$("#Records").append(time+": "+min+" "+data[j].fullName + " , " + data[j].major + " ,  " + data[j].startYear+"  " +"<button value='" +data[j].id+ "' id ='deleterow'>Delete</button>" +"<br>" );
			   }
				});
				});
			$.ajax({
				method: 'DELETE',
				url: '/user/'+id,
				type: '',
				cache: false,	
				}
			)
			});		   
			
			
	