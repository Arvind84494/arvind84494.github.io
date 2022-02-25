
function hello()
{
	var strEmployees = "";
	var strEmployeeTable = "";
	
	strEmployeeTable = '<table class="table table-hover table-bordered">';
	strEmployeeTable = strEmployeeTable + '<thead>';
	
	strEmployeeTable = strEmployeeTable + '<tr><th scope="col">#</th><th scope="col">Name</th> <th scope="col">Place</th> </tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';
	
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=0;i<employeeData.length;i++) 
	{ 
		if(i%2==0)
		{
			strEmployeeTable = strEmployeeTable + '<tr class="table-secondary"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> </tr>';

		}
		else
		{
			strEmployeeTable = strEmployeeTable + '<tr class="table-danger"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> </tr>';

		}
	}
	
	strEmployeeTable = strEmployeeTable + '</tbody>';
	strEmployeeTable = strEmployeeTable + '</table>';

	
for(var i=0;i<employeeData.length;i++)
{
  strEmployees = strEmployees + (i+1)+ "." +" " + employeeData[i].First +" "+ employeeData[i].Last+","+ employeeData[i].Place +'<br>';
}

document.getElementById("employeeData").innerHTML = strEmployeeTable;
}
function clear1() 
{
document.getElementById("employeeData").innerHTML = " ";
}

function odd()
{
	var strEmployees = "";
	var strEmployeeTable = "";
	
	strEmployeeTable = '<table class="table table-hover table-bordered">';
	strEmployeeTable = strEmployeeTable + '<thead>';
	
	strEmployeeTable = strEmployeeTable + '<tr><th scope="col">#</th><th scope="col">Name</th> <th scope="col">Place</th> </tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';
	
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=0;i<employeeData.length;i+=2) 
	{
		strEmployeeTable = strEmployeeTable + '<tr class="table-danger"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> </tr>';

	}
	
	strEmployeeTable = strEmployeeTable + '</tbody>';
	strEmployeeTable = strEmployeeTable + '</table>';

	
for(var i=0;i<employeeData.length;i++)
{
  strEmployees = strEmployees + (i+1)+ "." +" " + employeeData[i].First +" "+ employeeData[i].Last+","+ employeeData[i].Place + '<br>';
}

document.getElementById("employeeData").innerHTML = strEmployeeTable;
}
function clear1() 
{
document.getElementById("employeeData").innerHTML = " ";
}

function even()
{
	var strEmployees = "";
	var strEmployeeTable = "";
	
	strEmployeeTable = '<table class="table table-hover table-bordered">';
	strEmployeeTable = strEmployeeTable + '<thead>';
	
	strEmployeeTable = strEmployeeTable + '<tr><th scope="col">#</th><th scope="col">Name</th> <th scope="col">Place</th> </tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';
	
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=1;i<employeeData.length;i+=2) 
	{
		strEmployeeTable = strEmployeeTable + '<tr class="table-danger"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> </tr>';

	}
	
	strEmployeeTable = strEmployeeTable + '</tbody>';
	strEmployeeTable = strEmployeeTable + '</table>';

	
for(var i=0;i<employeeData.length;i++)
{
  strEmployees = strEmployees + (i+1)+ "." +" " + employeeData[i].First +" "+ employeeData[i].Last+","+ employeeData[i].Place + '<br>';
}

document.getElementById("employeeData").innerHTML = strEmployeeTable;
}
function clear1() 
{
document.getElementById("employeeData").innerHTML = " ";
}


 var employeeData = [{
  "First": "Arvind",
  "Last": "Singh",
  "Place": "meerut",
  "State": "Uttar Pradesh"
},
{
  "First": "mohd",
  "Last": "faisal",
  "Place": "delhi",
  "State": "delhi"
},
{
  "First": "Himanshu",
  "Last": "Bhatt",
  "Place": "Nainital",
  "State": "Uttarakhand"
},
{
  "First": "Salman",
  "Last": "Khan",
  "Place": "Mumbai",
  "State": "Maharashtra"
},
{
  "First": "Sunny",
  "Last": "Deol",
  "Place": "Amritsar",
  "State": "Punjab"
},
{
  "First": "Ghanshyam",
  "Last": "Bhatt",
  "Place": "Lucknow",
  "State": "Uttar Pradesh"
},
{
  "First": "Udhay",
  "Last": "Kumar",
  "Place": "Banglore",
  "State": "Karnataka"
},
{
  "First": "Karan",
  "Last": "salonia",
  "Place": "Meerut",
  "State": "Uttarpradesh"
},
{
  "First": "Kartik",
  "Last": "Kumar",
  "Place": "Noida",
  "State": "Uttarpradesh"
},
{
  "First": "Narendra",
  "Last": "Modi",
  "Place": "Ahmedabad",
  "State": "Gujrat"
}]

