<?php
require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
require './vendor/phpmailer/phpmailer/src/SMTP.php';
require './vendor/phpmailer/phpmailer/src/Exception.php';
require './vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->setLanguage('es','./vendor/phpmailer/phpmailer/language/phpmailer.lang-es.php');

try {
    if(isset($_POST['email'])) {

            
        if(!isset($_POST['nombre']) ||
        
            !isset($_POST['apellido']) ||

            !isset($_POST['email']) ||

            !isset($_POST['message'])) {

            died('Lo sentimos pero parece haber un problema con los datos enviados.');       

        }

        
        $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    
        $apellido = filter_var($_POST['apellido'], FILTER_SANITIZE_STRING); 
    
        $email_from = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']); 

        $email_from = filter_var($email_from, FILTER_VALIDATE_EMAIL);

        $message = $_POST['message']; 

        $email_subject = 'Conctacto Web de : '. $email_from ;


       /* $mail->SMTPDebug = SMTP::DEBUG_SERVER;      */                
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.gmail.com';                   
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'senderphpdemo@gmail.com';                    
        $mail->Password   = 'Welcome@88##';                               
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
        $mail->Port       = 587;                                    
        
        $mail->setFrom($email_from);
        $mail->addAddress($mail->Username);     
        $mail->addReplyTo($email_from);         
        $mail->Body = "
        <html> 
        
        <body> 
        
        <h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>
        
        <p>Informacion enviada por el usuario de la web:</p>
        
        <p>Nombre: {$nombre}</p>

        <p>Apellido: {$apellido}</p>

        <p>Email: {$email_from}</p>
        
        <p>Consulta: {$message}</p>
        
        </body> 
        
        </html>
        
        <br />"; 
        
        $mail->isHTML(true);                                 
        $mail->Subject =  'Conctacto Web de : '. $nombre .' '. $apellido;
        if($mail->send()){
            header("location: index.php?confirmar=1");
        }
        /*echo "<p>Muchas Gracias!, Proximamente Estaremos en Contacto.</p>"; */

    }else {
        echo '<p>Algo salió mal</p>';
    }
} catch (Exception $e) {
    echo "<p>Lo sentimos, pero el correo electrónico no fue recibido.</p> {$mail->ErrorInfo}";
}
?>