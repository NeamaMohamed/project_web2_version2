<?php
require'DB.php';
$con=DB::connect('mysql://root:root@localhost/');
$con->setErrorHandling(PEAR_ERROR_DIE); 

$db="create database if not exists interactions";
$con->query($db);

$con->query("use interactions");

$create_table="
CREATE TABLE IF NOT EXISTS objects (
type varchar(50),
Time1 varchar(50),
target varchar(50)
)
";
$q=$con->query($create_table);
if(!$q)
	echo mysql_error();	
//______________________________________________________________________________________________________________
if(isset($_POST['interaction']))
{
 	
 	$interactions=json_decode($_POST['interaction'], true); 
    print_r($interactions);
    //echo "data has sent "; 

 	for($i=0; $i<count($interactions); $i++)
 	 {      
 		$x= array();
 		$c=0;
 		 foreach ($interactions[$i] as $key => $value) {
 			$x[$c++]=$value;
 			//$x .= "$key:$value\n";

 			// $type=$interactions[$i][$c++][0];
 			// $time=$interactions[$i][$c++][1];
 			// $target=$interactions[$i][$c++][2];
 		}	

 	$con->query("INSERT INTO objects values('$x[0]','$x[1]','$x[2]')");	
    //$insert=$con->query("INSERT INTO objects values('$type','$time','$target");
     $con->query($insert);
    if($con->affected_rows > 0){
     echo "Inserted Successfully";
   }
  else
   {
    echo "Sorry: Problem With Insertion";
 	}
}
//___________________________________________________________________________________________________
if(isset($_GET['interaction']))
{
   $retrieve_data = "Select * from interaction "; 
   if ($result = $conn->query($retrieve_data))
   {
       $rows = array();
       if($result->num_rows > 0)
       {
      		 while($row = $result->fetch_assoc())
      	 {
      			  array_push($rows, $row);
      	 }
      	                                        //Convert to JSON Before Sending to Client
     echo json_encode($rows);
   	    }
  }
  else
  {
      echo "No Data to Retrieve";
  }
}


?>