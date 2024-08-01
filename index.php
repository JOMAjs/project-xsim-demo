<?PHP

/*********************************************
 * the controller the config 
 *********************************************/
require_once "config/ConfigController.php";

/**************************************************
 * The Controller the template and modules 
 **************************************************/
require_once "controllers/TemplateController.php";


$plantilla = new TemplateController();
$plantilla -> Template();