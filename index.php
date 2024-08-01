<?PHP

/*********************************************
 * the controller the config 
 *********************************************/
require_once "config/ConfigController.php";

/**************************************************
 * The Controller the template and modules ghfgh
 **************************************************/
require_once "controllers/TemplateController.php";


$plantilla = new TemplateController();
$plantilla -> Template();