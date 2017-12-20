<?php
//input validation
  $errorMsg = "";
  $errorType = "";

  $parentName = "";
  $name = "";
  $email = "";
  $phone = "";
  $message = "";

  if (isset($_POST["name"])) {
    $name = $_POST["name"];
    $parentName = $_POST["parentName"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    //validate form
    if (!$name)
      $errorMsg .= "<p>Name</p>";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
      $errorMsg .= "<p>Email</p>";

    //construct alert message and send email
    if ($errorMsg) {
      $errorType = "alert-danger";
      $errorMsg = "<p><strong>Fields missing or invalid</strong></p>".$errorMsg;
    }
    else {
      //send email
      $emailTo = "aaron.pettengill.violin@gmail.com";
      $subject = "PettengillViolin Contact Form";
      $content  = "This email is from the contact form at www.pettengillviolin.com\n\n";
      $content .= "Parent Name: " .$parentName ."\n";
      $content .= "Name: " .$name ."\n";
      $content .= "Email: ".$email."\n";
      $content .= "Phone: ".$phone."\n";
      $content .= "\n";
      $content .= "Message:\n";
      $content .= $message."\n";
      $headers = "From: pettengill.aaron@gmail.com";

      if (mail($emailTo, $subject, $content, $headers)) {
        $errorType = "alert-success";
        $errorMsg = "<p><strong>Form successfully submitted!</strong></p>
        <p>I'll get back to you soon. Please allow 24-48 hours for response.</p>
        <p>Thanks!</p>";
      }
      else {
        $errorType = "alert-danger";
        $errorMsg = "<p><strong>Email failed to send. Try again in a minute.</strong></p>".$errorMsg;
      }
    }
  }
?>

<!-- Alert -->
<?php if ($errorType) { ?>
  <div class="alert <?php echo $errorType ?>" role="alert">
    <?php echo $errorMsg ?>

    <?php
    //adwords conversion tracking tag
      if ($errorType == "alert-success") {
        include("conversion.php");
      }
    ?>

  </div>
<?php } ?>

<!-- Form -->
<form method="post">
  <div class="form-group">
    <!--<label for="name-field">Name</label>-->
    <input type="text" class="form-control" id="name-field" name="name" placeholder="Student Name(s)"
      value="<?php echo $name; ?>"
    >
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="parent-name-field" name="parentName" placeholder="Parent Name(s)"
      value="<?php echo $parentName; ?>"
    >
  </div>
  <div class="form-group">
    <!--<label for="email-field">Email</label>-->
    <input type="email" class="form-control" id="email-field" name="email" placeholder="Email"
      value="<?php echo $email; ?>"
    >
  </div>
  <div class="form-group">
    <!--<label for="phone-field">Phone</label>-->
    <input type="tel" class="form-control" id="phone-field" name="phone" placeholder="Phone Number (Optional)"
      value="<?php echo $phone; ?>"
    >
  </div>
  <div class="form-group">
    <!--<label for="message-field">Message</label>-->
    <textarea class="form-control" id="message-field" name="message" rows="3" placeholder="Message (Optional)"><?php echo $message ?></textarea>
  </div>
  <input type="submit" class="btn btn-success" id="submit-btn">
</form>
