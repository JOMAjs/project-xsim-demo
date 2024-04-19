<?php
//date_default_timezone_set("America/Bogota");
session_start();
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

header("Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform");
header("Expires: Sun, 02 Jan 1972 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
?>
<!DOCTYPE html>
<html lang="en">

<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="icon" href="<?php echo (ico); ?>">
    <link rel="stylesheet" href="views/assets/css/frame.css">
    <link rel="stylesheet" href="views/assets/css/default.css">
    <link rel="stylesheet" href="views/assets/css/loading.css">
    <link rel="stylesheet" href="views/assets/templates/lib-client/jquery-ui-1.13.2.custom/jquery-ui.min.css">

    <script src="views/assets/templates/lib-client/jquery/jquery.min.js"></script>
    <script src="views/assets/templates/lib-client/jquery-ui-1.13.2.custom/jquery-ui.min.js"></script>
    
    <script src="views/assets/templates/main.js"></script>
    <script src="views/assets/templates/constants.js"></script>
    <script src="views/assets/templates/language.js"></script>
    <script src="views/assets/templates/lib-client/glMatrix-0.9.5/glMatrix.js"></script>
    <script src="views/assets/templates/lib-client/hammer-2.0.8/hammer.min.js"></script>
    <script src="views/assets/templates/lib-client/jquery-mousewheel-3.1.11/jquery.mousewheel.min.js"></script>

    <title><?php echo title . " | " . router; ?></title>

</head>
<!-- class="skin-blue sidebar-mini wysihtml5-supported sidebar-collapse"-->

<body>
    <div id="contents">
        <div id="header-bk">
            <div id="header">
                <div class="header-left"><a href="/">XSim</a></div>
                <div class="header-right">
                    <div class="message" style="display: inline-block;"></div>

                    <span><a href="/login" target="_self">Log in</a></span>

                    <img src="views/assets/images/gear.svg" alt="Preferences" title="Preferences" class="header-icon" id="preferencesButton" style="cursor: pointer;">
                </div>
            </div>
        </div>
        <div id="body-bk">
            <div id="body">
                <div id="guide-area" style="visibility: hidden; display: none;">
                    <div style="margin:auto;">
                        <p style="margin:10px;">Sorry, this application can not be used with your web browser. Please try the following web browsers.</p>
                        <div style="margin:auto; width:300px;">
                            <div class="imagebox"><a href="https://www.google.com/chrome" target="_blank"><img src="views/assets/images/chrome-icon.svg" alt="Chrome" style="width:64px;"><span>Chrome</span></a></div>
                            <div class="imagebox"><a href="https://www.microsoft.com/edge" target="_blank"><img src="views/assets/images/edge-icon.svg" alt="Edge" style="width:64px;"><span>Edge</span></a></div>
                            <div class="imagebox"><a href="https://www.mozilla.org/firefox" target="_blank"><img src="views/assets/images/firefox-icon.svg" alt="Firefox" style="width:64px;"><span>Firefox</span></a></div>
                            <div style="clear: both; width:0px;"></div>
                        </div>
                    </div>
                </div>
                <div id="client-area" style="visibility:hidden;">
                    <div id="tree-view">
                        <ul id="model-tree">
                            <li id="model-tree-shapes">
                                <div class="page-index" style="color: rgb(255, 255, 255); background-color: rgb(0, 153, 255);">Import Shape</div>
                                <ul class="children"></ul>
                            </li>
                            <li>
                                <div class="page-index">Mesh</div>
                            </li>
                            <li>
                                <div class="page-index">Basic Settings</div>
                            </li>
                            <li>
                                <div class="page-index">Physical Property</div>
                            </li>
                            <li>
                                <div class="page-index">Initial Condition</div>
                            </li>
                            <li>
                                <div class="page-index">Flow Boundary Condition</div>
                            </li>
                            <li id="rotating-region" style="display: none;">
                                <div class="page-index">Rotating Regions</div>
                            </li>
                            <li id="porous-region" style="display: none;">
                                <div class="page-index">Porous Regions</div>
                            </li>
                            <li>
                                <div class="page-index">Calculation Settings</div>
                            </li>
                            <li>
                                <div class="page-index">Output</div>
                            </li>
                            <li>
                                <div class="page-index">Export</div>
                            </li>

                        </ul>
                    </div>
                    <div id="tree-view-splitter" class="view-splitter"></div>
                    <div id="control-view">
                        <div class="pageMove">
                            <input type="button" id="backPageButton" value="Back" class="ui-button ui-corner-all ui-widget ui-button-disabled ui-state-disabled" role="button" disabled="">
                            <input type="button" id="nextPageButton" value="Next" class="ui-button ui-corner-all ui-widget ui-button-disabled ui-state-disabled" role="button" disabled="">
                        </div>
                        <div id="pageMessage"></div>
                        <div id="Shape" class="page" style="display: block;">
                            <h2>Import Shape</h2>
                            <div id="import-tabs" class="ui-tabs ui-corner-all ui-widget ui-widget-content">
                                <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                    <li role="tab" tabindex="0" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="tabs-1" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true"><a href="#tabs-1" tabindex="-1" class="ui-tabs-anchor" id="ui-id-1">Select files</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-2" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a href="#tabs-2" tabindex="-1" class="ui-tabs-anchor" id="ui-id-2">Drop files</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-3" aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false"><a href="#tabs-3" tabindex="-1" class="ui-tabs-anchor" id="ui-id-3">Add shapes</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-4" aria-labelledby="ui-id-4" aria-selected="false" aria-expanded="false"><a href="#tabs-4" tabindex="-1" class="ui-tabs-anchor" id="ui-id-4">Edit shapes</a></li>
                                </ul>
                                <div id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true"><input type="file" id="fileChooser" multiple="" name="file" accept=".stl,.ast,.stla,.stlb,.obj,.3ds"></div>
                                <div id="tabs-2" aria-labelledby="ui-id-2" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <div id="fileDropHandler">Drop files here (.stl, .ast, .stla, .stlb, .obj, .3ds)</div>
                                </div>
                                <div id="tabs-3" aria-labelledby="ui-id-3" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <div class="group">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>Type</label></th>
                                                    <td><select id="Import-shapeTypeSelect" style="display: none;">
                                                            <option value="0">Cuboid</option>
                                                            <option value="1">Polygonal column</option>
                                                        </select><span tabindex="0" id="Import-shapeTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-shapeTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-5" aria-labelledby="ui-id-5" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Cuboid</span></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <fieldset>
                                        <legend>Parameters</legend>
                                        <table id="shapeParameters">
                                            <tbody>
                                                <tr class="cuboid">
                                                    <th><label>Minimum coordinate</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-Cuboid-minimum" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="cuboid">
                                                    <th><label>Maximum coordinate</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-Cuboid-maximum" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="polygonalColumn" style="display: none;">
                                                    <th><label>Number of Faces</label></th>
                                                    <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="Import-PolygonalColumn-n" value="6" aria-valuemin="3" aria-valuenow="6" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                                </tr>
                                                <tr class="polygonalColumn" style="display: none;">
                                                    <th><label>Circumradius</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-PolygonalColumn-r" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="polygonalColumn" style="display: none;">
                                                    <th><label>Center of top</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-PolygonalColumn-top" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="polygonalColumn" style="display: none;">
                                                    <th><label>Center of bottom</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-PolygonalColumn-bottom" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </fieldset>
                                    <div class="buttonBox">
                                        <input type="button" id="Import-fitToShapesButton" value="Fit" class="ui-button ui-corner-all ui-widget" role="button">
                                        <input type="button" id="Import-addShapeButton" value="Add" class="ui-button ui-corner-all ui-widget" role="button">
                                    </div>
                                    <div id="Import-shapeMessage" style="display: none;"></div>
                                </div>
                                <div id="tabs-4" aria-labelledby="ui-id-4" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <div class="group">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>Target</label></th>
                                                    <td><select id="Import-editingRegionSelect" style="display: none;"></select><span tabindex="0" id="Import-editingRegionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-editingRegionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Type</label></th>
                                                    <td><select id="Import-editingTypeSelect" style="display: none;">
                                                            <option value="0">Scale</option>
                                                            <option value="1">Translate</option>
                                                            <option value="2">Rotate</option>
                                                        </select><span tabindex="0" id="Import-editingTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-editingTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-7" aria-labelledby="ui-id-7" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Scale</span></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <fieldset>
                                        <legend>Parameters</legend>
                                        <table id="shapeEditingParameters">
                                            <tbody>
                                                <tr class="scale">
                                                    <th><label>Scaling factor</label></th>
                                                    <td><select id="Import-scaleFactor-preset" style="display: none;">
                                                            <option value="0">0.001 : mm ⇨ m</option>
                                                            <option value="1">0.01 : cm ⇨ m</option>
                                                            <option value="2">1000: km ⇨ m</option>
                                                            <option value="3">0.0254 : in ⇨ m</option>
                                                            <option value="4">0.3048 : ft ⇨ m</option>
                                                            <option value="5">0.9144 : yd ⇨ m</option>
                                                            <option value="6">1609.34 : mi ⇨ m</option>
                                                            <option value="999">Specified value</option>
                                                        </select><span tabindex="0" id="Import-scaleFactor-preset-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-scaleFactor-preset-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-10" aria-labelledby="ui-id-10" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">0.001 : mm ⇨ m</span></span></td>
                                                </tr>
                                                <tr class="scale" id="Import-scaleFactor-specifiedValue" style="display: none;">
                                                    <th></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-scaleFactor" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                                </tr>
                                                <tr class="scale">
                                                    <th><label>Scaling center</label></th>
                                                    <td><select id="Import-scaleCenter-preset" style="display: none;">
                                                            <option value="0">Origin</option>
                                                            <option value="1">Centroid</option>
                                                            <option value="999">Specified value</option>
                                                        </select><span tabindex="0" id="Import-scaleCenter-preset-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-scaleCenter-preset-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-18" aria-labelledby="ui-id-18" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Origin</span></span></td>
                                                </tr>
                                                <tr class="scale" id="Import-scaleCenter-specifiedValue" style="display: none;">
                                                    <th></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-scaleCenter" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="translate" style="display: none;">
                                                    <th><label>Displacement</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-translateDisplacement" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="rotate" style="display: none;">
                                                    <th><label>Rotation angle</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-rotateAngle" type="text" value="0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">°</span></td>
                                                </tr>
                                                <tr class="rotate" style="display: none;">
                                                    <th><label>Axis direction</label></th>
                                                    <td><select id="Import-rotateAxisDirection-preset" style="display: none;">
                                                            <option value="0">X axis</option>
                                                            <option value="1">Y axis</option>
                                                            <option value="2">Z axis</option>
                                                            <option value="999">Specified value</option>
                                                        </select><span tabindex="0" id="Import-rotateAxisDirection-preset-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-rotateAxisDirection-preset-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-21" aria-labelledby="ui-id-21" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">X axis</span></span></td>
                                                </tr>
                                                <tr class="rotate" id="Import-rotateAxisDirection-specifiedValue" style="display: none;">
                                                    <th></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-rotateAxisDirection" type="text" value="(0, 0, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                                </tr>
                                                <tr class="rotate" style="display: none;">
                                                    <th><label>Axis position</label></th>
                                                    <td><select id="Import-rotateAxisPosition-preset" style="display: none;">
                                                            <option value="1">Centroid</option>
                                                            <option value="0">Origin</option>
                                                            <option value="999">Specified value</option>
                                                        </select><span tabindex="0" id="Import-rotateAxisPosition-preset-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Import-rotateAxisPosition-preset-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-25" aria-labelledby="ui-id-25" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Centroid</span></span></td>
                                                </tr>
                                                <tr class="rotate" id="Import-rotateAxisPosition-specifiedValue" style="display: none;">
                                                    <th></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Import-rotateAxisPosition" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </fieldset>
                                    <div class="buttonBox">
                                        <input type="button" id="Import-applyEditingButton" value="Apply" class="ui-button ui-corner-all ui-widget" role="button">
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <div id="Shape-sizeProgressbar" role="progressbar" aria-valuemin="0" class="ui-progressbar ui-corner-all ui-widget ui-widget-content" aria-valuemax="100" aria-valuenow="0">
                                    <div class="progress-label">Imported file size</div>
                                    <div class="ui-progressbar-value ui-corner-left ui-widget-header" style="display: none; width: 0%;"></div>
                                </div>
                            </div>
                            <div id="message-area"></div>
                        </div>
                        <div id="Mesh" class="page" style="display: none;">
                            <h2>Mesh</h2>
                            <fieldset>
                                <legend>Volume mesh settings</legend>
                                <table id="baseMesh">
                                    <tbody>
                                        <tr>
                                            <th><label>Target number of base meshes</label></th>
                                            <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="destNumMesh" value="10000" aria-valuemin="1" aria-valuenow="10000" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                                                <div style="display: inline-block;"><img src="views/assets/images/MergeMesh.svg" alt="Merge" title="Merge" class="icon circle merge"><img src="views/assets/images/RefineMesh.svg" alt="Refine" title="Refine" class="icon circle refine"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label>Number of base meshes</label></th>
                                            <td> <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="numMesh" type="text" value="0" disabled="" class="ui-spinner-input" style="color: rgb(128, 128, 128); margin-right: 0.4em;"></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="baseMeshPreview"></td>
                                        </tr>
                                        <tr>
                                            <th><label>Maximum number of meshes</label></th>
                                            <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="maxGlobalCells" value="100000" aria-valuemin="1" aria-valuenow="100000" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Minimum coordinate</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="min ui-spinner-input" type="text" value="(1.0, 2.0, 3.0)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Maximum coordinate</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="max ui-spinner-input" type="text" value="(1.0, 2.0, 3.0)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Computational domain</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="inner" type="text" value="(1.0, 2.0, 3.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <fieldset>
                                    <legend>Refinement settings</legend>
                                    <label>Number of meshes between levels</label><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input id="nCellsBetweenLevels" value="3" aria-valuemin="1" aria-valuenow="3" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span>
                                    <div class="group">
                                        <table id="refinementParameters">
                                            <tbody>
                                                <tr>
                                                    <th><label>Range type</label></th>
                                                    <td><select id="Mesh-refinementTypeSelect" style="display: none;">
                                                            <option value="0">Cuboid</option>
                                                            <option value="3">Sphere</option>
                                                            <option value="1">Cylinder</option>
                                                            <option value="4">Surface (Region)</option>
                                                            <option value="2">Surface (Assembly)</option>
                                                        </select><span tabindex="0" id="Mesh-refinementTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Mesh-refinementTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-28" aria-labelledby="ui-id-28" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Cuboid</span></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Mesh-refinementPreview"></td>
                                                </tr>
                                                <tr class="cuboid">
                                                    <th><label>Minimum coordinate</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementCuboid-minimum" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="cuboid">
                                                    <th><label>Maximum coordinate</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementCuboid-maximum" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="sphere" style="display: none;">
                                                    <th><label>Center</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementSphere-center" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="sphere" style="display: none;">
                                                    <th><label>Radius</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementSphere-r" type="text" value="1" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="cylinder" style="display: none;">
                                                    <th><label>Radius</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementCylinder-r" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="cylinder" style="display: none;">
                                                    <th><label>Center of top</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementCylinder-top" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="cylinder" style="display: none;">
                                                    <th><label>Center of bottom</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-refinementCylinder-bottom" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                                </tr>
                                                <tr class="surface-region" style="display: none;">
                                                    <th><label>Region</label></th>
                                                    <td><select id="Mesh-surfLevelRegionSelect" style="display: none;"></select><span tabindex="0" id="Mesh-surfLevelRegionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Mesh-surfLevelRegionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                                </tr>
                                                <tr class="surface" style="display: none;">
                                                    <th><label>Assembly</label></th>
                                                    <td><select id="Mesh-surfLevelAssemblySelect" style="display: none;"></select><span tabindex="0" id="Mesh-surfLevelAssemblySelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Mesh-surfLevelAssemblySelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                                </tr>
                                                <tr>
                                                    <td><label>Refinement level</label></td>
                                                    <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="Mesh-refinementLevel" value="1" aria-valuemin="1" aria-valuenow="1" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="buttonBox">
                                            <input type="button" id="Mesh-fitToShapesButton" value="Fit" class="ui-button ui-corner-all ui-widget" role="button">
                                            <input type="button" id="Mesh-addRefinementButton" value="Add" class="ui-button ui-corner-all ui-widget" role="button">
                                        </div>
                                    </div>
                                    <fieldset>
                                        <legend>Refinement condition</legend>
                                        <ul id="Mesh-refinementOperations" class="sortable ui-sortable"></ul>
                                    </fieldset>
                                </fieldset>
                            </fieldset>
                            <fieldset>
                                <legend>Feature line</legend>
                                <table id="featureParameters">
                                    <tbody>
                                        <tr>
                                            <th><label>Feature angle</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="angle ui-spinner-input" type="text" value="165.0" style="margin-right: 0.4em;"></span><span class="unit">°</span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Refinement level</label></th>
                                            <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input class="level ui-spinner-input" value="1" aria-valuemin="0" aria-valuenow="1" autocomplete="off" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                            <fieldset>
                                <legend>Layer mesh settings</legend>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label>Layer thickness ratio</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Mesh-finalLayerThickness" type="text" value="0.3" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="group">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Region</label></th>
                                                <td><select id="Mesh-layerRegionSelect" style="display: none;"></select><span tabindex="0" id="Mesh-layerRegionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Mesh-layerRegionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Number of layers</label></th>
                                                <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="Mesh-layerNum" value="3" aria-valuemin="1" aria-valuenow="3" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="buttonBox"><input type="button" id="Mesh-layerAddButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button"></div>
                                </div>
                                <fieldset>
                                    <legend>Layer number condition</legend>
                                    <div id="Mesh-layeSettings"></div>
                                </fieldset>
                            </fieldset>
                        </div>
                        <div id="AnalysisType" class="page" style="display: none;">
                            <h2>Basic Settings</h2>
                            <div class="group">
                                <span class="group"><label for="AnalysisType-steadyRadio" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-radio-label"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span>Steady</label><input type="radio" name="AnalysisType-steadyTransient" id="AnalysisType-steadyRadio" value="steadyRadio" class="ui-checkboxradio ui-helper-hidden-accessible"></span>
                                <span class="group"><label for="AnalysisType-transientRadio" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget ui-checkboxradio-radio-label"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span>Transient</label><input type="radio" name="AnalysisType-steadyTransient" id="AnalysisType-transientRadio" value="transientRadio" class="ui-checkboxradio ui-helper-hidden-accessible"></span>
                            </div>
                            <div class="group">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label id="AnalysisType-endTimeLabel">End time</label></th>
                                            <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="AnalysisType-endTime" aria-valuemin="1" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span><span class="unit transientOnly">sec</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <fieldset class="transientOnly">
                                <legend>Time interval</legend>
                                <div class="group"><label for="AnalysisType-adjustTimeStep" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-adjustTimeStep" class="ui-checkboxradio ui-helper-hidden-accessible">Auto-setting by Courant number</label></div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label id="AnalysisType-dtLabel">Time interval</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" id="AnalysisType-dt" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">sec</span></td>
                                        </tr>
                                        <tr class="adjustTimeStepOnly">
                                            <th><label>Maximum Courant number</label></th>
                                            <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input type="text" id="AnalysisType-maxCo" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                            <div class="group">
                                <span class="group"><label for="AnalysisType-turbulentCheckBox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-turbulentCheckBox" class="ui-checkboxradio ui-helper-hidden-accessible">Turbulent</label></span>
                                <span class="group"><label for="AnalysisType-heatCheckBox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-heatCheckBox" class="ui-checkboxradio ui-helper-hidden-accessible">Heat</label></span>
                                <span class="group"><label for="AnalysisType-rotatingRegionsCheckBox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-rotatingRegionsCheckBox" class="ui-checkboxradio ui-helper-hidden-accessible">Rotating regions</label></span>
                                <span class="group"><label for="AnalysisType-multiphaseCheckBox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-multiphaseCheckBox" class="ui-checkboxradio ui-helper-hidden-accessible">Multiphase</label></span>
                                <span class="group"><label for="AnalysisType-porousRegionsCheckBox" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-porousRegionsCheckBox" class="ui-checkboxradio ui-helper-hidden-accessible">Porous regions</label></span>
                            </div>
                            <table>
                                <tbody>
                                    <tr class="turbulenceOnly">
                                        <th><label>Turbulent model</label></th>
                                        <td><select id="AnalysisType-turbulentModelSelect" style="display: none;"></select><span tabindex="0" id="AnalysisType-turbulentModelSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="AnalysisType-turbulentModelSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                    </tr>
                                    <tr class="heat multiphase" style="display: none;">
                                        <th><label>Gravity acceleration</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="AnalysisType-gravity" type="text" value="(0.0, 0.0, -9.8)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m/s<sup>2</sup></span></td>
                                    </tr>
                                    <tr class="heat multiphase" style="display: none;">
                                        <th><label>Reference pressure</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="AnalysisType-referencePressure" type="text" value="101325" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">Pa</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="group"><label for="AnalysisType-boussinesqCheckBox" class="heatOnly ui-checkboxradio-label ui-corner-all ui-button ui-widget" style="display: none;"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="AnalysisType-boussinesqCheckBox" class="ui-checkboxradio ui-helper-hidden-accessible">Boussinesq approximation</label></div>
                        </div>
                        <div id="PhysicalProperty" class="page" style="display: none;">
                            <h2>Physical Property</h2>
                            <fieldset id="PP-Basic">
                                <legend>Basic physical property settings</legend>
                                <div class="group">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Property name</label></th>
                                                <td>
                                                    <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-PropertyName" type="text" class="ui-spinner-input" style="margin-right: 0.4em;"></span>
                                                    <img src="views/assets/images/FluidLibrary.svg" alt="Physical property library" title="Physical property library" class="icon circle fluidLibrary basic">
                                                </td>
                                            </tr>
                                            <tr id="PP-typeSelect-row">
                                                <td><label>Type</label></td>
                                                <td><select id="PP-typeSelect" style="display: none;"></select><span tabindex="0" id="PP-typeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="PP-typeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <fieldset class="incompressibleOnly">
                                    <legend>Physical property parameters</legend>
                                    <div class="group"><label>Density</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-density" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">g/cm<sup>3</sup></span></div>
                                    <div id="PP-Newtonian" class="pp">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>Kinetic viscosity</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-newtonian-nu" type="text" value="0.00001" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="PP-PowerLaw" class="pp">
                                        <div class="group"><label>Kinetic viscosity</label><img src="views/assets/images/PowerLaw.svg" alt="\nu=k\dot{\gamma}^{n-1} \quad \nu_\min \leq \nu \leq \nu_\max" class="formula"></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>ν<sub>Max</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-powerLaw-nuMax" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>ν<sub>Min</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-powerLaw-nuMin" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>k</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-powerLaw-k" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>n</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-powerLaw-n" type="text" value="2.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="PP-CrossPowerLaw" class="pp">
                                        <div class="group"><label>Kinetic viscosity</label><img src="views/assets/images/CrossPowerLaw.svg" alt="\nu=\nu_\infty+\frac{\nu_0-\nu_\infty}{1+(m\dot{\gamma})^n}" class="formula"></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>ν<sub>0</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-crossPowerLaw-nu0" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>ν<sub>∞</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-crossPowerLaw-nuInf" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>m</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-crossPowerLaw-m" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>n</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-crossPowerLaw-n" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </fieldset>
                                <fieldset class="compressibleOnly" style="display: none;">
                                    <legend>Physical property parameters</legend>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Molar mass</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-molWeight" type="text" value="18.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">g/mol</span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Specific heat</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-Cp" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">J/(kg・K)</span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Viscosity</label></th>
                                                <th><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-mu" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">Pa・s</span></th>
                                            </tr>
                                            <tr>
                                                <th><label>Prandtl number</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-Pr" type="text" value="2.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="notBoussinesqExOnly">
                                        <div class="perfectFluidOnly">
                                            <div class="group"><label>Equation of State</label><img src="views/assets/images/PerfectFluid.svg" alt="\rho={1\over RT} p + \rho_0" class="formula"></div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th><label>R</label></th>
                                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-R" type="text" value="18.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">J/(kg・K)</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th><label>ρ<sub>0</sub></label></th>
                                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-rho0" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">kg/m<sup>3</sup></span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="boussinesqExOnly">
                                        <div class="group"><label>Boussinesq approximation</label><img src="views/assets/images/Boussinesq.svg" alt="\rho=\rho_0[1-(T-T_0)]" class="formula"></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>ρ<sub>0</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-boussinesqEx-rho0" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">kg/m<sup>3</sup></span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>β</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-boussinesqEx-beta" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">1/K</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>T<sub>0</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="PP-boussinesqEx-T0" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </fieldset>
                            </fieldset>
                            <fieldset class="multiphase" id="PP-Additional" style="display: none;">
                                <legend>Additional physical property settings</legend>
                                <div class="group">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Property name</label></th>
                                                <td>
                                                    <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="propertyName lineEdit ui-spinner-input" type="text" value="Fluid2" style="margin-right: 0.4em;"></span>
                                                    <img src="views/assets/images/FluidLibrary.svg" alt="Physical property library" title="Physical property library" class="icon circle fluidLibrary additional">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label>Type</label></td>
                                                <td><select class="typeSelect" id="ui-id-33" style="display: none;"></select><span tabindex="0" id="ui-id-33-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-33-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <fieldset>
                                    <legend>Physical property parameters</legend>
                                    <div class="group"><label>Density</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="density lineEdit ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span><span class="unit">g/cm<sup>3</sup></span></div>
                                    <div class="newtonian pp">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>Kinetic viscosity</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="nu lineEdit ui-spinner-input" type="text" value="0.00001" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="powerLaw pp">
                                        <div class="group"><label>Kinetic viscosity</label><img src="views/assets/images/PowerLaw.svg" alt="\nu=k\dot{\gamma}^{n-1} \quad \nu_\min \leq \nu \leq \nu_\max" class="formula"></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>ν<sub>Max</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="nuMax lineEdit ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>ν<sub>Min</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="nuMin lineEdit ui-spinner-input" type="text" value="0.0" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>k</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="k lineEdit ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>n</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="n lineEdit ui-spinner-input" type="text" value="2.0" style="margin-right: 0.4em;"></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="crossPowerLaw pp">
                                        <div class="group"><label>Kinetic viscosity</label><img src="views/assets/images/CrossPowerLaw.svg" alt="\nu=\nu_\infty+\frac{\nu_0-\nu_\infty}{1+(m\dot{\gamma})^n}" class="formula"></div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th><label>ν<sub>0</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="nu0 lineEdit ui-spinner-input" type="text" value="0.0" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>ν<sub>∞</sub></label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="nuInf lineEdit ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup>/s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>m</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="m lineEdit ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span><span class="unit">s</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>n</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="n lineEdit ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </fieldset>
                                <div class="buttonBox"><input type="button" class="addButton ui-button ui-corner-all ui-widget" value="Set" role="button"></div>
                                <fieldset>
                                    <legend>Physical properties</legend>
                                    <div class="settings"></div>
                                </fieldset>
                                <fieldset>
                                    <legend>Surface tensions</legend>
                                    <table class="surfaceTensions">
                                        <tbody>
                                        </tbody>
                                    </table>
                                </fieldset>
                            </fieldset>
                        </div>
                        <div id="InitialCondition" class="page" style="display: none;">
                            <h2>Initial Condition</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <th><label>Physical quantity</label></th>
                                        <td><select id="IC-quantitySelect" style="display: none;"></select><span tabindex="0" id="IC-quantitySelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="IC-quantitySelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                    </tr>
                                    <tr id="IC-scalarValue-line">
                                        <th><label>Value</label></th>
                                        <td>
                                            <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="IC-scalarValue" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span>
                                            <span class="unit p">Pa</span>
                                            <span class="unit t">K</span>
                                            <span class="unit k">m<sup>2</sup>/s<sup>2</sup></span>
                                            <span class="unit epsilon">m<sup>2</sup>/s<sup>3</sup></span>
                                            <span class="unit nut">m<sup>2</sup>/s</span>
                                            <span class="unit alphat">kg/(m・s)</span>
                                        </td>
                                    </tr>
                                    <tr id="IC-vectorValue-line">
                                        <th><label>Value</label></th>
                                        <td>
                                            <span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="IC-vectorValue" type="text" value="(1.0, 0.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit u">m/s</span>
                                        </td>
                                    </tr>
                                    <tr class="phase">
                                        <th><label>Property name</label></th>
                                        <td><select class="propertyNameSelect" id="ui-id-34" style="display: none;"></select><span tabindex="0" id="ui-id-34-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-34-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                    </tr>
                                    <tr class="phase">
                                        <th><label>Range type</label></th>
                                        <td><select class="rangeTypeSelect" id="ui-id-35" style="display: none;">
                                                <option value="0">Cuboid</option>
                                                <option value="1">Sphere</option>
                                                <option value="2">Cylinder</option>
                                            </select><span tabindex="0" id="ui-id-35-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-35-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-36" aria-labelledby="ui-id-36" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Cuboid</span></span></td>
                                        <td><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle rangeTypePreview"></td>
                                    </tr>
                                    <tr class="phase cuboid">
                                        <th><label>Minimum coordinate</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="minimum ui-spinner-input" type="text" value="(0, 0, 0)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                    <tr class="phase cuboid">
                                        <th><label>Maximum coordinate</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="maximum ui-spinner-input" type="text" value="(1, 1, 1)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                    <tr class="phase sphere">
                                        <th><label>Center</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="center ui-spinner-input" type="text" value="(0, 0, 0)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                    <tr class="phase sphere">
                                        <th><label>Radius</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="radius ui-spinner-input" type="text" value="1" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                    <tr class="phase cylinder">
                                        <th><label>Radius</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="radius ui-spinner-input" type="text" value="1" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                    <tr class="phase cylinder">
                                        <th><label>Center of top</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="top ui-spinner-input" type="text" value="(0, 0, 0)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                    <tr class="phase cylinder">
                                        <th><label>Center of bottom</label></th>
                                        <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="bottom ui-spinner-input" type="text" value="(1, 1, 1)" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="buttonBox">
                                <input type="button" class="fitToShapesButton phase ui-button ui-corner-all ui-widget" value="Fit" role="button">
                                <input type="button" id="IC-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button">
                            </div>
                            <fieldset>
                                <legend>Initial conditions</legend>
                                <ul id="IC-settings" class="sortable ui-sortable"></ul>
                            </fieldset>
                            <div>* If no condition is set to, a default value will be used.</div>
                        </div>
                        <div id="BoundaryCondition" class="page" style="display: none;">
                            <h2>Flow Boundary Condition</h2>
                            <div class="group">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label>Region</label></th>
                                            <td><select id="BC-regionSelect" style="display: none;"></select><span tabindex="0" id="BC-regionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-regionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Type</label></th>
                                            <td><select id="BC-typeSelect" style="display: none;"></select><span tabindex="0" id="BC-typeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-typeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="BC-preview"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <fieldset>
                                <legend>Flow boundary parameters</legend>
                                <div id="BC-fixedFlowVelocity" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Flow velocity</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-inletVelocity" type="text" value="(1.0, 0.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m/s</span></td>
                                            </tr>
                                            <tr class="heatOnly" style="display: none;">
                                                <td><label>Inflow temperature</label></td>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-fixedFlowVelocity-T" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                            </tr>
                                            <tr class="multiphase" style="display: none;">
                                                <td><label>Inflow fluid</label></td>
                                                <td><select id="ui-id-39" style="display: none;"></select><span tabindex="0" id="ui-id-39-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-39-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="BC-fixedMassFlowRate" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Mass flow rate</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-massFlowRate" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">kg/s</span></td>
                                            </tr>
                                            <tr class="heatOnly" style="display: none;">
                                                <th><label>Inflow temperature</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-fixedMassFlowRate-T" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                            </tr>
                                            <tr class="multiphase" style="display: none;">
                                                <td><label>Inflow fluid</label></td>
                                                <td><select id="ui-id-40" style="display: none;"></select><span tabindex="0" id="ui-id-40-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-40-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="BC-fixedVolumeFlowRate" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Volume flow rate</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-volumeFlowRate" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>3</sup>/s</span></td>
                                            </tr>
                                            <tr class="heatOnly" style="display: none;">
                                                <th><label>Inflow temperature</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-fixedVolumeFlowRate-T" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                            </tr>
                                            <tr class="multiphase" style="display: none;">
                                                <td><label>Inflow fluid</label></td>
                                                <td><select id="ui-id-41" style="display: none;"></select><span tabindex="0" id="ui-id-41-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-41-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="BC-fixedNormalVelocity" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><label>Normal dirction velocity</label></td>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-normalVelocity" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m/s</span></td>
                                            </tr>
                                            <tr class="heatOnly" style="display: none;">
                                                <th><label>Inflow temperature</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-fixedNormalVelocity-T" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                            </tr>
                                            <tr class="multiphase" style="display: none;">
                                                <td><label>Inflow fluid</label></td>
                                                <td><select id="ui-id-42" style="display: none;"></select><span tabindex="0" id="ui-id-42-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-42-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="BC-fixedStaticPressure" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><label>Static pressure</label></td>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-outletP" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">Pa</span></td>
                                            </tr>
                                            <tr class="multiphase" style="display: none;">
                                                <td><label>Inflow fluid</label></td>
                                                <td><select id="ui-id-43" style="display: none;"></select><span tabindex="0" id="ui-id-43-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-43-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="BC-fixedTotalPressure" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><label>Total pressure</label></td>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-totalPressure" type="text" value="0.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">Pa</span></td>
                                            </tr>
                                            <tr class="multiphase" style="display: none;">
                                                <td><label>Inflow fluid</label></td>
                                                <td><select id="ui-id-44" style="display: none;"></select><span tabindex="0" id="ui-id-44-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-44-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="BC-inletOutlet" class="bc">
                                    <div class="group noHeat noMultiphase"><label>None</label></div>
                                    <div class="group heatOnly" style="display: none;"><label>Inflow temperature</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-inletOutlet-T" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></div>
                                    <div class="group multiphase" style="display: none;"><label>Inflow fluid</label><select id="ui-id-45" style="display: none;"></select><span tabindex="0" id="ui-id-45-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="ui-id-45-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></div>
                                </div>
                                <div id="BC-stationaryWall" class="bc">
                                    <div class="group noHeat"><label>None</label></div>
                                    <div class="group heatOnly" style="display: none;">
                                        <div class="group"><label>Heat condition type</label><select id="BC-stationaryWall-heatTypeSelect" style="display: none;"></select><span tabindex="0" id="BC-stationaryWall-heatTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-stationaryWall-heatTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></div>
                                        <div class="group bc" id="BC-stationaryWall-heatFixedGroup">
                                            <label>Temperature</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatFixed" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span>
                                        </div>
                                        <table class="group bc" id="BC-stationaryWall-heatFluxGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat flux</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatFlux" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/m<sup>2</sup></span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatFlux-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-stationaryWall-heatPowerGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat source</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatPower" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatPower-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-stationaryWall-heatTransferGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat transfer coefficient</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatTransfer" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/(m<sup>2</sup>・K)</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatTransfer-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>External temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-stationaryWall-heatTransfer-infT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="BC-slipWall" class="bc">
                                    <div class="group noHeat"><label>None</label></div>
                                    <div class="group heatOnly" style="display: none;">
                                        <div class="group"><label>Heat condition type</label><select id="BC-slipWall-heatTypeSelect" style="display: none;"></select><span tabindex="0" id="BC-slipWall-heatTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-slipWall-heatTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></div>
                                        <div class="group bc" id="BC-slipWall-heatFixedGroup">
                                            <label>Temperature</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatFixed" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span>
                                        </div>
                                        <table class="group bc" id="BC-slipWall-heatFluxGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat flux</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatFlux" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/m<sup>2</sup></span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatFlux-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-slipWall-heatPowerGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat source</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatPower" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatPower-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-slipWall-heatTransferGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat transfer coefficient</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatTransfer" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/(m<sup>2</sup>・K)</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatTransfer-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>External temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-slipWall-heatTransfer-infT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="BC-movingWall" class="bc">
                                    <div class="group"><label>Moving velocity</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-wallVelocity" type="text" value="(1.0, 0.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m/s</span></div>
                                    <div class="group heatOnly" style="display: none;">
                                        <div class="group"><label>Heat condition type</label><select id="BC-movingWall-heatTypeSelect" style="display: none;"></select><span tabindex="0" id="BC-movingWall-heatTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-movingWall-heatTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></div>
                                        <div class="group bc" id="BC-movingWall-heatFixedGroup">
                                            <label>Temperature</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatFixed" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span>
                                        </div>
                                        <table class="group bc" id="BC-movingWall-heatFluxGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat flux</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatFlux" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/m<sup>2</sup></span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatFlux-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-movingWall-heatPowerGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat source</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatPower" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatPower-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-movingWall-heatTransferGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat transfer coefficient</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatTransfer" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/(m<sup>2</sup>・K)</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatTransfer-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>External temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-movingWall-heatTransfer-infT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="BC-rotatingWall" class="bc">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Axis origin</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-origin" type="text" value="(0.0, 0.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Axis direction</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-direction" type="text" value="(0.0, 0.0, 1.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Rotational velocity</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-velocity" type="text" value="0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">°/s</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="group heatOnly" style="display: none;">
                                        <div class="group"><label>Heat condition type</label><select id="BC-rotatingWall-heatTypeSelect" style="display: none;"></select><span tabindex="0" id="BC-rotatingWall-heatTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-rotatingWall-heatTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></div>
                                        <div class="group bc" id="BC-rotatingWall-heatFixedGroup">
                                            <label>Temperature</label><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatFixed" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span>
                                        </div>
                                        <table class="group bc" id="BC-rotatingWall-heatFluxGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat flux</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatFlux" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/m<sup>2</sup></span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatFlux-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-rotatingWall-heatPowerGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat source</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatPower" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatPower-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="group bc" id="BC-rotatingWall-heatTransferGroup">
                                            <tbody>
                                                <tr>
                                                    <th><label>Heat transfer coefficient</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatTransfer" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">W/(m<sup>2</sup>・K)</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>Initial temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatTransfer-iniT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                                <tr>
                                                    <th><label>External temperature</label></th>
                                                    <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="BC-rotatingWall-heatTransfer-infT" type="text" value="273.15" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">K</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="BC-symmetry" class="bc">
                                    <label>None</label>
                                </div>
                                <div id="BC-mapping" class="bc">
                                    <table class="group">
                                        <tbody>
                                            <tr>
                                                <th><label>Target region</label></th>
                                                <td><select id="BC-mapping-targetRegionSelect" style="display: none;"></select><span tabindex="0" id="BC-mapping-targetRegionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="BC-mapping-targetRegionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </fieldset>
                            <div class="buttonBox"><input type="button" id="BC-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button"></div>
                            <fieldset>
                                <legend>Boundary conditions</legend>
                                <div id="BC-settings"></div>
                            </fieldset>
                            <div class="noHeat">* If no condition is set to a region, the region will be a slip wall.</div>
                            <div class="heatOnly" style="display: none;">* If no condition is set to a region, the region will be a adiabatic slip wall.</div>
                        </div>
                        <div id="RotatingRegions" class="page" style="display: none;">
                            <h2>Rotating Regions</h2>
                            <div class="group">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label>Rotating type</label></th>
                                            <td><select id="Rotating-type" style="display: none;"></select><span tabindex="0" id="Rotating-type-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Rotating-type-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Region type</label></th>
                                            <td><select id="Rotating-regionType" style="display: none;">
                                                    <option value="2">Sphere</option>
                                                    <option value="1">Cylinder</option>
                                                </select><span tabindex="0" id="Rotating-regionType-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Rotating-regionType-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-46" aria-labelledby="ui-id-46" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Sphere</span></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Rotating-preview"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <fieldset>
                                <legend>Rotating parameters</legend>
                                <div class="group">
                                    <table>
                                        <tbody>
                                            <tr class="sphere">
                                                <th><label>Center</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-sphere-center" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="sphere">
                                                <th><label>Radius</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-sphere-r" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="sphere">
                                                <th><label>Rotational axis</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-sphere-axis" type="text" value="(0, 0, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cylinder" style="display: none;">
                                                <th><label>Radius</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-cylinder-r" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cylinder" style="display: none;">
                                                <th><label>Center of top</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-cylinder-top" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cylinder" style="display: none;">
                                                <th><label>Center of bottom</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-cylinder-bottom" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Rotational velocity</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Rotating-velocity" type="text" value="0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">°/s</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </fieldset>
                            <div class="buttonBox">
                                <input type="button" id="Rotating-fitToShapesButton" value="Fit" class="ui-button ui-corner-all ui-widget" role="button">
                                <input type="button" id="Rotating-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button">
                            </div>
                            <fieldset>
                                <legend>Rotating region conditions</legend>
                                <ul id="Rotating-settings" class="sortable"></ul>
                            </fieldset>
                        </div>
                        <div id="PorousRegions" class="page" style="display: none;">
                            <h2>Porous Regions</h2>
                            <div class="group">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><label>Porous type</label></th>
                                            <td><select id="Porous-type" style="display: none;">
                                                    <option value="0">Darcy-Forchheimer law</option>
                                                    <option value="1">Power law</option>
                                                    <option value="2">Fixed coefficients</option>
                                                </select><span tabindex="0" id="Porous-type-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Porous-type-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-48" aria-labelledby="ui-id-48" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Darcy-Forchheimer law</span></span></td>
                                        </tr>
                                        <tr>
                                            <th><label>Region type</label></th>
                                            <td><select id="Porous-regionType" style="display: none;">
                                                    <option value="0">Cuboid</option>
                                                    <option value="2">Sphere</option>
                                                    <option value="1">Cylinder</option>
                                                    <option value="3">Arbitrary shape (Assembly)</option>
                                                </select><span tabindex="0" id="Porous-regionType-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Porous-regionType-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-51" aria-labelledby="ui-id-51" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Cuboid</span></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Porous-preview"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <fieldset>
                                <legend>Porous parameters</legend>
                                <div class="group">
                                    <div class="group">
                                        <label>Pressure gradient</label>
                                        <img src="views/assets/images/porosityModel-darcyForchheimerLaw.svg" alt="S = - (\mu d + \frac{\rho |U|}{2} f) U" class="formula darcyForchheimerLaw porousModel" style="">
                                        <img src="views/assets/images/porosityModel-powerLaw.svg" alt="S = - \rho C_0 |U|^{(C_1 - 1)} U" class="formula powerLaw porousModel" style="display: none;">
                                        <img src="views/assets/images/porosityModel-fixedCoeff.svg" alt="S = - \rho_{ref} (\alpha + \beta |U|) U" class="formula fixedCoeff porousModel" style="display: none;">
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr class="porousModel darcyForchheimerLaw" style="">
                                                <th><label>d</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="d ui-spinner-input" type="text" value="(1000, 1000, 1000)" style="margin-right: 0.4em;"></span><span class="unit">1/m<sup>2</sup></span></td>
                                            </tr>
                                            <tr class="porousModel darcyForchheimerLaw" style="">
                                                <th><label>f</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="f ui-spinner-input" type="text" value="(0, 0, 0)" style="margin-right: 0.4em;"></span><span class="unit">1/m</span></td>
                                            </tr>
                                            <tr class="porousModel powerLaw" style="display: none;">
                                                <th><label>C<sub>0</sub></label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="c0 ui-spinner-input" type="text" value="500.0" style="margin-right: 0.4em;"></span><span class="unit">1/m</span></td>
                                            </tr>
                                            <tr class="porousModel powerLaw" style="display: none;">
                                                <th><label>C<sub>1</sub></label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="c1 ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span></td>
                                            </tr>
                                            <tr class="porousModel fixedCoeff" style="display: none;">
                                                <th><label>ρ<sub>ref</sub></label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="rhoRef ui-spinner-input" type="text" value="1.0" style="margin-right: 0.4em;"></span><span class="unit">g/cm<sup>3</sup></span></td>
                                            </tr>
                                            <tr class="porousModel fixedCoeff" style="display: none;">
                                                <th><label>α</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="alpha ui-spinner-input" type="text" value="(1000, 1000, 1000)" style="margin-right: 0.4em;"></span><span class="unit">1/s</span></td>
                                            </tr>
                                            <tr class="porousModel fixedCoeff" style="display: none;">
                                                <th><label>β</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input class="beta ui-spinner-input" type="text" value="(0, 0, 0)" style="margin-right: 0.4em;"></span><span class="unit">1/m</span></td>
                                            </tr>
                                            <tr class="cuboid">
                                                <th><label>Minimum coordinate</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-cuboid-minimum" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cuboid">
                                                <th><label>Maximum coordinate</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-cuboid-maximum" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="sphere" style="display: none;">
                                                <th><label>Center</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-sphere-center" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="sphere" style="display: none;">
                                                <th><label>Radius</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-sphere-r" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cylinder" style="display: none;">
                                                <th><label>Radius</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-cylinder-r" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cylinder" style="display: none;">
                                                <th><label>Center of top</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-cylinder-top" type="text" value="(0, 0, 0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="cylinder" style="display: none;">
                                                <th><label>Center of bottom</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Porous-cylinder-bottom" type="text" value="(1, 1, 1)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="surface" style="display: none;">
                                                <th><label>Assembly</label></th>
                                                <td><select id="Porous-assembly-select" style="display: none;"></select><span tabindex="0" id="Porous-assembly-select-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Porous-assembly-select-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </fieldset>
                            <div class="buttonBox">
                                <input type="button" id="Porous-fitToShapesButton" value="Fit" class="ui-button ui-corner-all ui-widget" role="button">
                                <input type="button" id="Porous-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button">
                            </div>
                            <fieldset>
                                <legend>Porous region conditions</legend>
                                <ul id="Porous-settings" class="sortable ui-sortable"></ul>
                            </fieldset>
                        </div>
                        <div id="CalculationSettings" class="page" style="display: none;">
                            <h2>Calculation Settings</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <th><label>Parallel number</label></th>
                                        <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="Calc-parallelNumberSpin" value="1" aria-valuemin="1" aria-valuenow="1" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                    </tr>
                                    <tr>
                                        <th><label>Numerical schemes</label></th>
                                        <td><select id="Calc-schemesTypeSelect" style="display: none;">
                                                <option value="0">Normal</option>
                                                <option value="1">Stability</option>
                                                <option value="2">Accuracy</option>
                                            </select><span tabindex="0" id="Calc-schemesTypeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Calc-schemesTypeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-55" aria-labelledby="ui-id-55" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Normal</span></span></td>
                                    </tr>
                                    <tr>
                                        <th><label>Matrix solvers</label></th>
                                        <td><select id="Calc-matrixSolversSelect" style="display: none;">
                                                <option value="0">Stability</option>
                                                <option value="1">High speed</option>
                                            </select><span tabindex="0" id="Calc-matrixSolversSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Calc-matrixSolversSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-58" aria-labelledby="ui-id-58" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">Stability</span></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <span class="group"><label for="Calc-monitorCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Calc-monitorCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Show monitoring window, if possible</label></span>
                            <div id="Calc-tabs" class="group ui-tabs ui-corner-all ui-widget ui-widget-content">
                                <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                    <li role="tab" tabindex="0" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="Calc-tabs-1" aria-labelledby="ui-id-60" aria-selected="true" aria-expanded="true"><a href="#Calc-tabs-1" tabindex="-1" class="ui-tabs-anchor" id="ui-id-60">Relaxation Factors</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="Calc-tabs-2" aria-labelledby="ui-id-61" aria-selected="false" aria-expanded="false"><a href="#Calc-tabs-2" tabindex="-1" class="ui-tabs-anchor" id="ui-id-61">Steady state convergence criteria</a></li>
                                </ul>
                                <div id="Calc-tabs-1" aria-labelledby="ui-id-60" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false">
                                    <table id="Calc-relaxationFactors"></table>
                                    <div class="group">* The smaller value means more stable, the larger value means more speedy.</div>
                                </div>
                                <div id="Calc-tabs-2" aria-labelledby="ui-id-61" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <table id="Calc-residualControl"></table>
                                </div>
                            </div>
                        </div>
                        <div id="OutputSettings" class="page" style="display: none;">
                            <h2>Output</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <th><label>Type</label></th>
                                        <td><select id="Output-typeSelect" style="display: none;"></select><span tabindex="0" id="Output-typeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-typeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                    </tr>
                                    <tr>
                                        <th><label>Interval</label></th>
                                        <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="Output-intervalSpin" value="1" aria-valuemin="1" aria-valuenow="1" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span><span class="unit" id="Output-intervalUnit"></span></td>
                                    </tr>
                                    <tr>
                                        <th><label>Format</label></th>
                                        <td><select id="Output-formatSelect" style="display: none;"></select><span tabindex="0" id="Output-formatSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-formatSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                    </tr>
                                    <tr>
                                        <th><label>Precision</label></th>
                                        <td><span class="ui-spinner ui-corner-all ui-widget ui-widget-content"><input type="text" id="Output-precisionSpin" value="6" aria-valuemin="1" aria-valuenow="6" autocomplete="off" class="ui-spinner-input" role="spinbutton"><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-up ui-corner-tr ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-n"></span><span class="ui-button-icon-space"> </span></a><a tabindex="-1" aria-hidden="true" class="ui-button ui-widget ui-spinner-button ui-spinner-down ui-corner-br ui-button-icon-only" role="button"><span class="ui-button-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-icon-space"> </span></a></span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div id="Output-tabs" class="group ui-tabs ui-corner-all ui-widget ui-widget-content">
                                <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                    <li role="tab" tabindex="0" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="tabs-1" aria-labelledby="ui-id-62" aria-selected="true" aria-expanded="true"><a href="#tabs-1" tabindex="-1" class="ui-tabs-anchor" id="ui-id-62">General</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-2" aria-labelledby="ui-id-63" aria-selected="false" aria-expanded="false"><a href="#tabs-2" tabindex="-1" class="ui-tabs-anchor" id="ui-id-63">Region</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-3" aria-labelledby="ui-id-64" aria-selected="false" aria-expanded="false"><a href="#tabs-3" tabindex="-1" class="ui-tabs-anchor" id="ui-id-64">Sampling</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-4" aria-labelledby="ui-id-65" aria-selected="false" aria-expanded="false"><a href="#tabs-4" tabindex="-1" class="ui-tabs-anchor" id="ui-id-65">Tracer</a></li>
                                    <li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tabs-5" aria-labelledby="ui-id-66" aria-selected="false" aria-expanded="false"><a href="#tabs-5" tabindex="-1" class="ui-tabs-anchor" id="ui-id-66">Extra file format</a></li>
                                </ul>
                                <div id="tabs-1" aria-labelledby="ui-id-62" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false">
                                    <span class="group"><label for="Output-residualCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-residualCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Residuals</label></span>
                                    <span class="group"><label for="Output-yPlusCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-yPlusCheck" class="ui-checkboxradio ui-helper-hidden-accessible">y+</label></span>
                                    <span class="group"><label for="Output-courantNoCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-courantNoCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Courant number</label></span>
                                    <span class="group"><label for="Output-vorticityCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-vorticityCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Vorticity</label></span>
                                    <span class="group"><label for="Output-uGradTensor2ndInvariantCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-uGradTensor2ndInvariantCheck" class="ui-checkboxradio ui-helper-hidden-accessible">2nd invariant of velocity gradient tensor</label></span>
                                    <div class="group">
                                        <fieldset id="Output-minMax">
                                            <legend>Minimum/Maximum values</legend>
                                        </fieldset>
                                    </div>
                                </div>
                                <div id="tabs-2" aria-labelledby="ui-id-63" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Region</label></th>
                                                <td><select id="Output-region-regionSelect" style="display: none;"></select><span tabindex="0" id="Output-region-regionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-region-regionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Type</label></th>
                                                <td><select id="Output-region-typeSelect" style="display: none;"></select><span tabindex="0" id="Output-region-typeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-region-typeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                            <tr class="Output-variable">
                                                <td><label>Physical quantity</label></td>
                                                <td><select id="Output-region-variableSelect" style="display: none;"></select><span tabindex="0" id="Output-region-variableSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-region-variableSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                            <tr class="Output-forceCoeffs">
                                                <th><label>Drag direction</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Output-forceCoeffs-drag" type="text" value="(1.0, 0.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Output-forceCoeffs-dragPreview"></td>
                                            </tr>
                                            <tr class="Output-forceCoeffs">
                                                <th><label>Lift direction</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Output-forceCoeffs-lift" type="text" value="(0.0, 1.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Output-forceCoeffs-liftPreview"></td>
                                            </tr>
                                            <tr class="Output-forceCoeffs">
                                                <th><label>Reference velocity</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Output-forceCoeffs-velocity" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m/s</span></td>
                                            </tr>
                                            <tr class="Output-forceCoeffs">
                                                <th><label>Reference length</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Output-forceCoeffs-length" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span></td>
                                            </tr>
                                            <tr class="Output-forceCoeffs">
                                                <th><label>Reference area</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Output-forceCoeffs-area" type="text" value="1.0" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m<sup>2</sup></span><img src="views/assets/images/MeasureArea.svg" alt="Measure projection area" title="Measure projection area" class="icon circle" id="Output-forceCoeffs-ProjectionArea"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="buttonBox"><input type="button" id="Output-region-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button"></div>
                                    <fieldset>
                                        <legend>Output conditions</legend>
                                        <div id="Output-region-settings"></div>
                                    </fieldset>
                                </div>
                                <div id="tabs-3" aria-labelledby="ui-id-64" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Physical quantity</label></th>
                                                <td><select id="Output-sampling-variableSelect" style="display: none;"></select><span tabindex="0" id="Output-sampling-variableSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-sampling-variableSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Location</label></th>
                                                <td><span class="ui-spinner ui-widget ui-widget-content ui-corner-all"><input id="Output-sampling-location" type="text" value="(0.0, 0.0, 0.0)" class="ui-spinner-input" style="margin-right: 0.4em;"></span><span class="unit">m</span><img src="views/assets/images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Output-samplingPreview"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="buttonBox"><input type="button" id="Output-sampling-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button"></div>
                                    <fieldset>
                                        <legend>Output conditions</legend>
                                        <ul id="Output-sampling-settings" class="sortable ui-sortable"></ul>
                                    </fieldset>
                                </div>
                                <div id="tabs-4" aria-labelledby="ui-id-65" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th><label>Inlet region</label></th>
                                                <td><select id="Output-tracer-regionSelect" style="display: none;"></select><span tabindex="0" id="Output-tracer-regionSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-tracer-regionSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                            <tr>
                                                <th><label>Type</label></th>
                                                <td><select id="Output-tracer-typeSelect" style="display: none;"></select><span tabindex="0" id="Output-tracer-typeSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Output-tracer-typeSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">&nbsp;</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="buttonBox"><input type="button" id="Output-tracer-addButton" value="Set" class="ui-button ui-corner-all ui-widget" role="button"></div>
                                    <fieldset>
                                        <legend>Output conditions</legend>
                                        <div id="Output-tracer-settings"></div>
                                    </fieldset>
                                </div>
                                <div id="tabs-5" aria-labelledby="ui-id-66" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style="display: none;">
                                    <span class="group"><label for="Output-fluentCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-fluentCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Fluent</label></span>
                                    <span class="group"><label for="Output-ensightCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-ensightCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Ensight</label></span>
                                    <span class="group"><label for="Output-gmvCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-gmvCheck" class="ui-checkboxradio ui-helper-hidden-accessible">GMV</label></span>
                                    <span class="group"><label for="Output-tecplotCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-tecplotCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Tecplot</label></span>
                                    <span class="group"><label for="Output-legacyVTKCheck" class="ui-checkboxradio-label ui-corner-all ui-button ui-widget"><span class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"></span><span class="ui-checkboxradio-icon-space"> </span><input type="checkbox" id="Output-legacyVTKCheck" class="ui-checkboxradio ui-helper-hidden-accessible">Legacy VTK</label></span>
                                </div>
                            </div>
                        </div>
                        <div id="Export" class="page" style="display: none;">
                            <h2>Export</h2>
                            <div class="group"><label>Format</label><select id="Export-formatSelect" style="display: none;">
                                    <option value="5">OpenFOAM 10</option>
                                    <option value="4">OpenFOAM 9</option>
                                </select><span tabindex="0" id="Export-formatSelect-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="Export-formatSelect-menu" aria-haspopup="true" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" aria-activedescendant="ui-id-67" aria-labelledby="ui-id-67" aria-disabled="false"><span class="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span><span class="ui-selectmenu-text">OpenFOAM 10</span></span></div>
                            <div class="buttonBox"><input type="button" id="Export-exportButton" value="Export" class="ui-button ui-corner-all ui-widget" role="button"></div>
                        </div>

                        <div style="clear:both;"></div>
                    </div>
                    <div id="control-view-splitter" class="view-splitter"></div>
                    <div id="threeD-view">
                        <canvas id="canvas-3d" width="670" height="520"></canvas>
                        <canvas id="canvas-3d-text" tabindex="0" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" width="670" height="520"></canvas>
                        <div style="clear:both;"></div>
                        <div class="group" style="text-align:right;margin-right:5px;" id="threeD-controls">
                            <img src="views/assets/images/Perspective.svg" alt="Switch projection mode" title="Switch projection mode" class="icon" id="threeD-projectionMode">
                            <img src="views/assets/images/BoundingBoxInvisible.svg" alt="Show/Hide boundnig box" title="Show/Hide boundnig box" class="icon" id="threeD-toggleBoundingBox">
                            <img src="views/assets/images/FitAll.svg" alt="Fit all" title="Fit all" class="icon" id="threeD-fitAll">
                            <img src="views/assets/images/Solid.svg" alt="Switch draw mode" title="Switch draw mode" class="icon" id="threeD-displayMode">
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                </div>
                <div class="sk-fading-circle" id="loading-icon">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const xsim_app_type = null;
    </script>

    <!-- gtag GA4-->
    <script async="" src="views/assets/js/googletagmanager.js"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-D0HXQDBZ94');
    </script>


    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-shapeTypeSelect-button" id="Import-shapeTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-5" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-5" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Cuboid</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-6" tabindex="-1" role="option" class="ui-menu-item-wrapper">Polygonal column</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-editingTypeSelect-button" id="Import-editingTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-7" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-7" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Scale</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-8" tabindex="-1" role="option" class="ui-menu-item-wrapper">Translate</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-9" tabindex="-1" role="option" class="ui-menu-item-wrapper">Rotate</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-editingRegionSelect-button" id="Import-editingRegionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-scaleFactor-preset-button" id="Import-scaleFactor-preset-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-10" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-10" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">0.001 : mm ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-11" tabindex="-1" role="option" class="ui-menu-item-wrapper">0.01 : cm ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-12" tabindex="-1" role="option" class="ui-menu-item-wrapper">1000: km ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-13" tabindex="-1" role="option" class="ui-menu-item-wrapper">0.0254 : in ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-14" tabindex="-1" role="option" class="ui-menu-item-wrapper">0.3048 : ft ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-15" tabindex="-1" role="option" class="ui-menu-item-wrapper">0.9144 : yd ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-16" tabindex="-1" role="option" class="ui-menu-item-wrapper">1609.34 : mi ⇨ m</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-17" tabindex="-1" role="option" class="ui-menu-item-wrapper">Specified value</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-scaleCenter-preset-button" id="Import-scaleCenter-preset-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-18" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-18" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Origin</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-19" tabindex="-1" role="option" class="ui-menu-item-wrapper">Centroid</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-20" tabindex="-1" role="option" class="ui-menu-item-wrapper">Specified value</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-rotateAxisDirection-preset-button" id="Import-rotateAxisDirection-preset-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-21" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-21" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">X axis</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-22" tabindex="-1" role="option" class="ui-menu-item-wrapper">Y axis</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-23" tabindex="-1" role="option" class="ui-menu-item-wrapper">Z axis</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-24" tabindex="-1" role="option" class="ui-menu-item-wrapper">Specified value</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Import-rotateAxisPosition-preset-button" id="Import-rotateAxisPosition-preset-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-25" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-25" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Centroid</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-26" tabindex="-1" role="option" class="ui-menu-item-wrapper">Origin</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-27" tabindex="-1" role="option" class="ui-menu-item-wrapper">Specified value</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Mesh-refinementTypeSelect-button" id="Mesh-refinementTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-28" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-28" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Cuboid</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-29" tabindex="-1" role="option" class="ui-menu-item-wrapper">Sphere</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-30" tabindex="-1" role="option" class="ui-menu-item-wrapper">Cylinder</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-31" tabindex="-1" role="option" class="ui-menu-item-wrapper">Surface (Region)</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-32" tabindex="-1" role="option" class="ui-menu-item-wrapper">Surface (Assembly)</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Mesh-surfLevelRegionSelect-button" id="Mesh-surfLevelRegionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Mesh-surfLevelAssemblySelect-button" id="Mesh-surfLevelAssemblySelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Mesh-layerRegionSelect-button" id="Mesh-layerRegionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="AnalysisType-turbulentModelSelect-button" id="AnalysisType-turbulentModelSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="PP-typeSelect-button" id="PP-typeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-33-button" id="ui-id-33-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="IC-quantitySelect-button" id="IC-quantitySelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-34-button" id="ui-id-34-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-35-button" id="ui-id-35-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-36" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-36" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Cuboid</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-37" tabindex="-1" role="option" class="ui-menu-item-wrapper">Sphere</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-38" tabindex="-1" role="option" class="ui-menu-item-wrapper">Cylinder</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-regionSelect-button" id="BC-regionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-typeSelect-button" id="BC-typeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-stationaryWall-heatTypeSelect-button" id="BC-stationaryWall-heatTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-slipWall-heatTypeSelect-button" id="BC-slipWall-heatTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-movingWall-heatTypeSelect-button" id="BC-movingWall-heatTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-rotatingWall-heatTypeSelect-button" id="BC-rotatingWall-heatTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-39-button" id="ui-id-39-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-40-button" id="ui-id-40-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-41-button" id="ui-id-41-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-42-button" id="ui-id-42-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-43-button" id="ui-id-43-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-44-button" id="ui-id-44-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="ui-id-45-button" id="ui-id-45-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="BC-mapping-targetRegionSelect-button" id="BC-mapping-targetRegionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Rotating-type-button" id="Rotating-type-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Rotating-regionType-button" id="Rotating-regionType-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-46" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-46" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Sphere</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-47" tabindex="-1" role="option" class="ui-menu-item-wrapper">Cylinder</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Porous-type-button" id="Porous-type-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-48" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-48" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Darcy-Forchheimer law</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-49" tabindex="-1" role="option" class="ui-menu-item-wrapper">Power law</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-50" tabindex="-1" role="option" class="ui-menu-item-wrapper">Fixed coefficients</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Porous-regionType-button" id="Porous-regionType-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-51" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-51" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Cuboid</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-52" tabindex="-1" role="option" class="ui-menu-item-wrapper">Sphere</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-53" tabindex="-1" role="option" class="ui-menu-item-wrapper">Cylinder</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-54" tabindex="-1" role="option" class="ui-menu-item-wrapper">Arbitrary shape (Assembly)</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Porous-assembly-select-button" id="Porous-assembly-select-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Calc-schemesTypeSelect-button" id="Calc-schemesTypeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-55" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-55" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Normal</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-56" tabindex="-1" role="option" class="ui-menu-item-wrapper">Stability</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-57" tabindex="-1" role="option" class="ui-menu-item-wrapper">Accuracy</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Calc-matrixSolversSelect-button" id="Calc-matrixSolversSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-58" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-58" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">Stability</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-59" tabindex="-1" role="option" class="ui-menu-item-wrapper">High speed</div>
            </li>
        </ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-typeSelect-button" id="Output-typeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-formatSelect-button" id="Output-formatSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-region-regionSelect-button" id="Output-region-regionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-region-typeSelect-button" id="Output-region-typeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-region-variableSelect-button" id="Output-region-variableSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-sampling-variableSelect-button" id="Output-sampling-variableSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-tracer-regionSelect-button" id="Output-tracer-regionSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Output-tracer-typeSelect-button" id="Output-tracer-typeSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content"></ul>
    </div>
    <div class="ui-selectmenu-menu ui-front">
        <ul aria-hidden="true" aria-labelledby="Export-formatSelect-button" id="Export-formatSelect-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" aria-activedescendant="ui-id-67" aria-disabled="false">
            <li class="ui-menu-item">
                <div id="ui-id-67" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">OpenFOAM 10</div>
            </li>
            <li class="ui-menu-item">
                <div id="ui-id-68" tabindex="-1" role="option" class="ui-menu-item-wrapper">OpenFOAM 9</div>
            </li>
        </ul>
    </div>

    
</body>

</html>