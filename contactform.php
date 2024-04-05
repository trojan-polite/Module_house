<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'message@huspaahjul.no';
$email_subject = "New Form Submission";
$email_body = "User Name: $name.\n".

    "User Email: $visitor_email.\n".
    "User Message: $message.\n";

$to = "jarl.weeke@gmail.com";
/**
$headers = "From: $email_from \r\n";
$headers = "Reply-To: $visitor_email \r\n";

if (mail($to, $email_subject, $email_body, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Failed to send email.';
}
**/
// Uncomment the following line to enable redirection after submission
// header("Location: index.html");


include "phpmailer/classes/class.phpmailer.php";
$mail = new PHPMailer;

$mail->IsSMTP();

$mail->SMTPSecure = 'ssl';

$mail->Host = "mail.huspaahjul.no"; 
$mail->SMTPDebug = 2;
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPDebug=0;
$mail->Timeout = 60; 
$mail->SMTPKeepAlive = true; 

$mail->Username = "message@huspaahjul.no";
$mail->Password = "eoK4wT-HLsoh";
$mail->SetFrom($email_from,$name);
$mail->addReplyTo($visitor_email, $name);

$mail->Subject = $email_subject; 
$mail->AddAddress($to,"huspaahjul.no"); 
$mail->MsgHTML($email_body);

$mail->Send();
 header("Location: /");
exit;
?>