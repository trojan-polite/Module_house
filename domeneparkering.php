<?php 
$protocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']),'https') 
                === FALSE ? 'http' : 'https';
$host     = $_SERVER['HTTP_HOST'];
$script   = $_SERVER['SCRIPT_NAME'];
$params   = $_SERVER['QUERY_STRING']; 
$currentUrl = $host;
$wwwstrip = str_replace("www.", "", $currentUrl);
$parkcode = "jegerparkert12345679";
?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="Content-Language" content="nb"> 

<body>
    <title><?php
echo idn_to_utf8($wwwstrip);
?></title>
    <style>
    #wrapper, #container {
        border: 1px dotted grey;
        height: 250px;
        width: 500px;
        -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    -khtml-border-radius: 20px;
    border-radius: 20px;
    }    
    #wrapper {
    border: 1px solid white;
        bottom: 50%;
        right: 50%;
        position: absolute;
    }    
    #container {
        background: white;
        left: 50%;
        padding: 10px;
        position: relative;
        top: 50%;
    }    
    h1 { margin-top: 0; }
    .style1 {
	text-align: center;
}
.style2 {
	text-align: left;
}
    .auto-style3 {
		font-size: smaller;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	.auto-style6 {
		text-align: right;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: x-small;
		color: #808080;
	}
	.auto-style7 {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	.auto-style8 {
		font-size: x-small;
	}
	.auto-style9 {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: x-small;
	}
	
	a:link
{
	color: rgb(43,114,233); 
}
a:visited
{
	color: rgb(43,114,233); 
} 
a:active 
{
	color: rgb(126,164,227);
}
a:hover 
{
	color: rgb(0,0,0);
}
	.auto-style10 {
		border-width: 0px;
	}
	</style>
</head>

<body>        
    <div id="wrapper">
        <div id="container">
        <table align="left" class="style1" style="width: 500; height: 250" cellspacing="7">
	<tr>
		<td class="auto-style6" style="height: 4px" valign="top">
		 <?php
echo idn_to_utf8($wwwstrip);
?> 	</td>
	</tr>
	<tr>
		<td class="style1" style="height: 60px" valign="top">
		
		<a href="https://www.<?php
echo idn_to_utf8($wwwstrip);
?>">
		
		<img alt="logo" title="https://www.<?php
echo idn_to_utf8($wwwstrip);
?> SSL er inkludert" height="100" src="https://www.domene.no/skeleton/domenelogo2.gif" class="auto-style10"  /></a></td>
	</tr>
	<tr>
		<td class="style2" valign="top"><p><span class="auto-style3">Domenenavnet 
		<strong> <?php
echo idn_to_utf8($wwwstrip);
?> </strong>eies av en av v&aring;re kunder. Vi tilbyr domeneregistrering, epost p&aring; eget domenenavn, webhosting og produksjon av hjemmeside. Kontakt <a href="https://www.domene.no" title="kontakt domene" target="_self">domene</a> s&aring; hjelper vi deg &aring; kartlegge 
		dine behov.<br><br> 
		<a href="https://www.domene.no/login/" title="Innlogging" target="_self">Logg inn</a></span></p>
		
		
</td>
	</tr>
</table>
                                </div>
    </div>
</body>
</body>
