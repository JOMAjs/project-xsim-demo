<div id="contents">
	<div id="header-bk"><div id="header">
		<div class="header-left"><a href="/">XSim</a></div>
		<div class="header-right">
			<div class="message" style="display: inline-block;"></div>
			
				<span><a href="/login" target="_self">Log in</a></span>
			
			<img src="./images/gear.svg" alt="Preferences" title="Preferences" class="header-icon" id="preferencesButton">
		</div>
	</div></div>
	<div id="body-bk">
	<div id="body">
	<div id="guide-area" style="visibility:hidden;">
		<div style="margin:auto;">
			<p style="margin:10px;">Sorry, this application can not be used with your web browser. Please try the following web browsers.</p>
			<div style="margin:auto; width:300px;">
			<div class="imagebox"><a href="https://www.google.com/chrome" target="_blank"><img src="./images/chrome-icon.svg" alt="Chrome" style="width:64px;"><span>Chrome</span></a></div>
			<div class="imagebox"><a href="https://www.microsoft.com/edge" target="_blank"><img src="./images/edge-icon.svg" alt="Edge" style="width:64px;"><span>Edge</span></a></div>
			<div class="imagebox"><a href="https://www.mozilla.org/firefox" target="_blank"><img src="./images/firefox-icon.svg" alt="Firefox" style="width:64px;"><span>Firefox</span></a></div><div style="clear: both; width:0px;"></div>
			</div>
		</div>
	</div>
	<div id="client-area" style="visibility:hidden;">
	<div id="tree-view">
		<ul id="model-tree">
			<li id="model-tree-shapes">
				<div class="page-index">Import Shape</div>
				<ul class="children"></ul>
			</li>
			<li><div class="page-index">Mesh</div></li>
			<li><div class="page-index">Basic Settings</div></li>
			<li><div class="page-index">Physical Property</div></li>
			<li><div class="page-index">Initial Condition</div></li>
			<li><div class="page-index">Flow Boundary Condition</div></li>
			<li id="rotating-region">
				<div class="page-index">Rotating Regions</div>
			</li>
			<li id="porous-region">
				<div class="page-index">Porous Regions</div>
			</li>
			<li><div class="page-index">Calculation Settings</div></li>
			<li><div class="page-index">Output</div></li>
			<li><div class="page-index">Export</div></li>
			
		</ul>
	</div>
	<div id="tree-view-splitter" class="view-splitter"></div>
	<div id="control-view">
	<div class="pageMove">
		<input type="button" id="backPageButton" value="Back">
		<input type="button" id="nextPageButton" value="Next">
	</div>
	<div id="pageMessage"></div>
	<div id="Shape" class="page">
		<h2>Import Shape</h2>
		<div id="import-tabs">
			<ul>
				<li><a href="#tabs-1">Select files</a></li>
				<li><a href="#tabs-2">Drop files</a></li>
				<li><a href="#tabs-3">Add shapes</a></li>
				<li><a href="#tabs-4">Edit shapes</a></li>
			</ul>
			<div id="tabs-1"><input type="file" id="fileChooser" multiple name="file" accept=".stl,.ast,.stla,.stlb,.obj,.3ds" /></div>
			<div id="tabs-2"><div id="fileDropHandler" >Drop files here (.stl, .ast, .stla, .stlb, .obj, .3ds)</div></div>
			<div id="tabs-3">
				<div class="group">
					<table>
						<tr><th><label>Type</label></th><td><select id="Import-shapeTypeSelect"></select></td></tr>
					</table>
				</div>
				<fieldset>
					<legend>Parameters</legend>
					<table id="shapeParameters">
						<tr class="cuboid"><th><label>Minimum coordinate</label></th><td><input id="Import-Cuboid-minimum" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
						<tr class="cuboid"><th><label>Maximum coordinate</label></th><td><input id="Import-Cuboid-maximum" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
						<tr class="polygonalColumn"><th><label>Number of Faces</label></th><td><input type="text" id="Import-PolygonalColumn-n" value="6" /></td></tr>
						<tr class="polygonalColumn"><th><label>Circumradius</label></th><td><input id="Import-PolygonalColumn-r" type="text" value="1.0" /><span class="unit">m</span></td></tr>
						<tr class="polygonalColumn"><th><label>Center of top</label></th><td><input id="Import-PolygonalColumn-top" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
						<tr class="polygonalColumn"><th><label>Center of bottom</label></th><td><input id="Import-PolygonalColumn-bottom" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>					
					</table>
				</fieldset>
				<div class="buttonBox">
					<input type="button" id="Import-fitToShapesButton" value="Fit">
					<input type="button" id="Import-addShapeButton" value="Add">
				</div>
				<div id="Import-shapeMessage"></div>
			</div>
			<div id="tabs-4">
				<div class="group">
					<table>
						<tr><th><label>Target</label></th><td><select id="Import-editingRegionSelect"></select></td></tr>
						<tr><th><label>Type</label></th><td><select id="Import-editingTypeSelect"></select></td></tr>
					</table>
				</div>
				<fieldset>
					<legend>Parameters</legend>
					<table id="shapeEditingParameters">
						<tr class="scale"><th><label>Scaling factor</label></th><td><select id="Import-scaleFactor-preset" /></td></tr>
						<tr class="scale" id="Import-scaleFactor-specifiedValue"><th></th><td><input id="Import-scaleFactor" type="text" value="1.0" /></td></tr>
						<tr class="scale"><th><label>Scaling center</label></th><td><select id="Import-scaleCenter-preset" /></td></tr>
						<tr class="scale" id="Import-scaleCenter-specifiedValue"><th></th><td><input id="Import-scaleCenter" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
						<tr class="translate"><th><label>Displacement</label></th><td><input id="Import-translateDisplacement" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
						<tr class="rotate"><th><label>Rotation angle</label></th><td><input id="Import-rotateAngle" type="text" value="0" /><span class="unit">°</span></td></tr>
						<tr class="rotate"><th><label>Axis direction</label></th><td><select id="Import-rotateAxisDirection-preset" /></td></tr>
						<tr class="rotate" id="Import-rotateAxisDirection-specifiedValue"><th></th><td><input id="Import-rotateAxisDirection" type="text" value="(0, 0, 1)" /></td></tr>
						<tr class="rotate"><th><label>Axis position</label></th><td><select id="Import-rotateAxisPosition-preset" /></td></tr>
						<tr class="rotate" id="Import-rotateAxisPosition-specifiedValue"><th></th><td><input id="Import-rotateAxisPosition" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					</table>
				</fieldset>
				<div class="buttonBox">
					<input type="button" id="Import-applyEditingButton" value="Apply">
				</div>
			</div>
		</div>
		<div class="group"><div id="Shape-sizeProgressbar"><div class="progress-label">Imported file size</div></div></div>
		<div id="message-area"></div>
	</div>
	<div id="Mesh" class="page">
		<h2>Mesh</h2>
		<fieldset>
			<legend>Volume mesh settings</legend>
			<table id="baseMesh">
				<tr><th><label>Target number of base meshes</label></th><td><input type="text" id="destNumMesh" value="10000" /><div style="display: inline-block;"><img src="./images/MergeMesh.svg" alt="Merge" title="Merge" class="icon circle merge" ><img src="./images/RefineMesh.svg" alt="Refine" title="Refine" class="icon circle refine"></div></td></tr>
				<tr><th><label>Number of base meshes</label></th><td></span> <input id="numMesh" type="text" value="0" /><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="baseMeshPreview"></td></tr>
				<tr><th><label>Maximum number of meshes</label></th><td><input type="text" id="maxGlobalCells" value="100000" /></td></tr>
				<tr><th><label>Minimum coordinate</label></th><td><input class="min" type="text" value="(1.0, 2.0, 3.0)" /><span class="unit">m</span></td></tr>
				<tr><th><label>Maximum coordinate</label></th><td><input class="max" type="text" value="(1.0, 2.0, 3.0)" /><span class="unit">m</span></td></tr>
				<tr><th><label>Computational domain</label></th><td><input id="inner" type="text" value="(1.0, 2.0, 3.0)" /><span class="unit">m</span></td></tr>
			</table>
			<fieldset>
				<legend>Refinement settings</legend>
				<label>Number of meshes between levels</label><input id="nCellsBetweenLevels" value="3" />
				<div class="group">
				<table id="refinementParameters">
					<tr><th><label>Range type</label></th><td><select id="Mesh-refinementTypeSelect"></select><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Mesh-refinementPreview"></td></tr>
					<tr class="cuboid"><th><label>Minimum coordinate</label></th><td><input id="Mesh-refinementCuboid-minimum" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="cuboid"><th><label>Maximum coordinate</label></th><td><input id="Mesh-refinementCuboid-maximum" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
					<tr class="sphere"><th><label>Center</label></th><td><input id="Mesh-refinementSphere-center" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="sphere"><th><label>Radius</label></th><td><input id="Mesh-refinementSphere-r" type="text" value="1" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Radius</label></th><td><input id="Mesh-refinementCylinder-r" type="text" value="1.0" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Center of top</label></th><td><input id="Mesh-refinementCylinder-top" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Center of bottom</label></th><td><input id="Mesh-refinementCylinder-bottom" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
					<tr class="surface-region"><th><label>Region</label></th><td><select id="Mesh-surfLevelRegionSelect"></select></td></tr>
					<tr class="surface"><th><label>Assembly</label></th><td><select id="Mesh-surfLevelAssemblySelect"></select></td></tr>
					<tr><td><label>Refinement level</label></td><td><input type="text" id="Mesh-refinementLevel" value="1" /></td></tr>
				</table>
				<div class="buttonBox">
					<input type="button" id="Mesh-fitToShapesButton" value="Fit">
					<input type="button" id="Mesh-addRefinementButton" value="Add">
				</div>
				</div>
				<fieldset>
					<legend>Refinement condition</legend>
					<ul id="Mesh-refinementOperations" class="sortable"></ul>
				</fieldset>
			</fieldset>
		</fieldset>
		<fieldset>
			<legend>Feature line</legend>
			<table id="featureParameters">
				<tr><th><label>Feature angle</label></th><td><input class="angle" type="text" value="165.0" /><span class="unit">°</span></td></tr>
				<tr><th><label>Refinement level</label></th><td><input class="level" value="1" /></td></tr>
			</table>
		</fieldset>
		<fieldset>
			<legend>Layer mesh settings</legend>
			<table>
				<tr><th><label>Layer thickness ratio</label></th><td><input id="Mesh-finalLayerThickness" type="text" value="0.3" /></td></tr>
			</table>	
			<div class="group">
			<table>
				<tr><th><label>Region</label></th><td><select id="Mesh-layerRegionSelect"></select></td></tr>
				<tr><th><label>Number of layers</label></th><td><input type="text" id="Mesh-layerNum" value="3" /></td></tr>
			</table>
			<div class="buttonBox"><input type="button" id="Mesh-layerAddButton" value="Set"></div>
			</div>
			<fieldset>
				<legend>Layer number condition</legend>
				<div id="Mesh-layeSettings"></div>
			</fieldset>
		</fieldset>
	</div>
	<div id="AnalysisType" class="page">
		<h2>Basic Settings</h2>
		<div class="group">
			<span class="group"><label for="AnalysisType-steadyRadio">Steady</label><input type="radio" name="AnalysisType-steadyTransient" id="AnalysisType-steadyRadio" value="steadyRadio"></span>
			<span class="group"><label for="AnalysisType-transientRadio">Transient</label><input type="radio" name="AnalysisType-steadyTransient" id="AnalysisType-transientRadio" value="transientRadio"></span>
		</div>
		<div class="group">
			<table>
				<tr><th><label id="AnalysisType-endTimeLabel">End time</label></th><td><input type="text" id="AnalysisType-endTime" /><span class="unit transientOnly">sec</span></td></tr>
			</table>
		</div>
		<fieldset class="transientOnly">
		<legend>Time interval</legend>
		<div class="group"><label for="AnalysisType-adjustTimeStep"><input type="checkbox" id="AnalysisType-adjustTimeStep">Auto-setting by Courant number</label></div>
		<table>
			<tr><th><label id="AnalysisType-dtLabel">Time interval</label></th><td><input type="text" id="AnalysisType-dt" /><span class="unit">sec</span></td></tr>
			<tr class="adjustTimeStepOnly"><th><label>Maximum Courant number</label></th><td><input type="text" id="AnalysisType-maxCo" /></td></tr>
		</table>
		</fieldset>
		<div class="group">
			<span class="group"><label for="AnalysisType-turbulentCheckBox"><input type="checkbox" id="AnalysisType-turbulentCheckBox">Turbulent</label></span>
			<span class="group"><label for="AnalysisType-heatCheckBox"><input type="checkbox" id="AnalysisType-heatCheckBox">Heat</label></span>
			<span class="group"><label for="AnalysisType-rotatingRegionsCheckBox"><input type="checkbox" id="AnalysisType-rotatingRegionsCheckBox">Rotating regions</label></span>
			<span class="group"><label for="AnalysisType-multiphaseCheckBox"><input type="checkbox" id="AnalysisType-multiphaseCheckBox">Multiphase</label></span>
			<span class="group"><label for="AnalysisType-porousRegionsCheckBox"><input type="checkbox" id="AnalysisType-porousRegionsCheckBox">Porous regions</label></span>
		</div>
		<table>
			<tr class="turbulenceOnly"><th><label>Turbulent model</label></th><td><select id="AnalysisType-turbulentModelSelect"></select></td></tr>
			<tr class="heat multiphase"><th><label>Gravity acceleration</label></th><td><input id="AnalysisType-gravity" type="text" value="(0.0, 0.0, -9.8)" /><span class="unit">m/s<sup>2</sup></span></td></tr>
			<tr class="heat multiphase"><th><label>Reference pressure</label></th><td><input id="AnalysisType-referencePressure" type="text" value="101325" /><span class="unit">Pa</span></td></tr>
		</table>
		<div class="group"><label for="AnalysisType-boussinesqCheckBox" class="heatOnly"><input type="checkbox" id="AnalysisType-boussinesqCheckBox">Boussinesq approximation</label></div>
	</div>
	<div id="PhysicalProperty" class="page">
		<h2>Physical Property</h2>
		<fieldset id="PP-Basic">
			<legend>Basic physical property settings</legend>
			<div class="group">
				<table>
					<tr>
						<th><label>Property name</label></th>
						<td>
							<input id="PP-PropertyName" type="text" />
							<img src="./images/FluidLibrary.svg" alt="Physical property library" title="Physical property library" class="icon circle fluidLibrary basic">
						</td>
					</tr>
					<tr id="PP-typeSelect-row"><td><label>Type</label></td><td><select id="PP-typeSelect"></select></td></tr>
				</table>
			</div>
			<fieldset class="incompressibleOnly">
			<legend>Physical property parameters</legend>
			<div class="group"><label>Density</label><input id="PP-density" type="text" value="1.0" /><span class="unit">g/cm<sup>3</sup></span></div>
			<div id="PP-Newtonian" class="pp">
				<table><tr><th><label>Kinetic viscosity</label></th><td><input id="PP-newtonian-nu" type="text" value="0.00001" /><span class="unit">m<sup>2</sup>/s</span></td></tr></table>
			</div>
			<div id="PP-PowerLaw" class="pp">
				<div class="group"><label>Kinetic viscosity</label><img src="./images/PowerLaw.svg" alt="\nu=k\dot{\gamma}^{n-1} \quad \nu_\min \leq \nu \leq \nu_\max" class="formula" /></div>
				<table>
				<tr><th><label>ν<sub>Max</sub></label></th><td><input id="PP-powerLaw-nuMax" type="text" value="1.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
				<tr><th><label>ν<sub>Min</sub></label></th><td><input id="PP-powerLaw-nuMin" type="text" value="0.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
				<tr><th><label>k</label></th><td><input id="PP-powerLaw-k" type="text" value="1.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
				<tr><th><label>n</label></th><td><input id="PP-powerLaw-n" type="text" value="2.0" /></td></tr>
				</table>
			</div>
			<div id="PP-CrossPowerLaw" class="pp">
				<div class="group"><label>Kinetic viscosity</label><img src="./images/CrossPowerLaw.svg" alt="\nu=\nu_\infty+\frac{\nu_0-\nu_\infty}{1+(m\dot{\gamma})^n}" class="formula" /></div>
				<table>
				<tr><th><label>ν<sub>0</sub></label></th><td><input id="PP-crossPowerLaw-nu0" type="text" value="0.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
				<tr><th><label>ν<sub>∞</sub></label></th><td><input id="PP-crossPowerLaw-nuInf" type="text" value="1.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
				<tr><th><label>m</label></th><td><input id="PP-crossPowerLaw-m" type="text" value="1.0" /><span class="unit">s</span></td></tr>
				<tr><th><label>n</label></th><td><input id="PP-crossPowerLaw-n" type="text" value="1.0" /></td></tr>
				</table>
			</div>
			</fieldset>
			<fieldset class="compressibleOnly">
			<legend>Physical property parameters</legend>
			<table>
				<tr><th><label>Molar mass</label></th><td><input id="PP-molWeight" type="text" value="18.0" /><span class="unit">g/mol</span></td></tr>
				<tr><th><label>Specific heat</label></th><td><input id="PP-Cp" type="text" value="0.0" /><span class="unit">J/(kg・K)</span></td></tr>
				<tr><th><label>Viscosity</label></td><th><input id="PP-mu" type="text" value="1.0" /><span class="unit">Pa・s</span></td></tr>
				<tr><th><label>Prandtl number</label></th><td><input id="PP-Pr" type="text" value="2.0" /></td></tr>
			</table>
			<div class="notBoussinesqExOnly">
				<div class="perfectFluidOnly">
					<div class="group"><label>Equation of State</label><img src="./images/PerfectFluid.svg" alt="\rho={1\over RT} p + \rho_0" class="formula" /></div>
					<table >
						<tr><th><label>R</label></th><td><input id="PP-R" type="text" value="18.0" /><span class="unit">J/(kg・K)</span></td></tr>
						<tr><th><label>ρ<sub>0</sub></label></th><td><input id="PP-rho0" type="text" value="0.0" /><span class="unit">kg/m<sup>3</sup></span></td></tr>
					</table>
				</div>
			</div>
			<div class="boussinesqExOnly">
				<div class="group"><label>Boussinesq approximation</label><img src="./images/Boussinesq.svg" alt="\rho=\rho_0[1-(T-T_0)]" class="formula" /></div>
				<table >
					<tr><th><label>ρ<sub>0</sub></label></th><td><input id="PP-boussinesqEx-rho0" type="text" value="0.0" /><span class="unit">kg/m<sup>3</sup></span></td></tr>
					<tr><th><label>β</label></th><td><input id="PP-boussinesqEx-beta" type="text" value="0.0" /><span class="unit">1/K</span></td></tr>
					<tr><th><label>T<sub>0</sub></label></th><td><input id="PP-boussinesqEx-T0" type="text" value="0.0" /><span class="unit">K</span></td></tr>
				</table>
			</div>
			</fieldset>
		</fieldset>
		<fieldset class="multiphase" id="PP-Additional">
			<legend>Additional physical property settings</legend>
			<div class="group">
				<table>
					<tr>
						<th><label>Property name</label></th>
						<td>
							<input class="propertyName lineEdit" type="text" value="Fluid2" />
							<img src="./images/FluidLibrary.svg" alt="Physical property library" title="Physical property library" class="icon circle fluidLibrary additional">
						</td>
					</tr>
					<tr><td><label>Type</label></td><td><select class="typeSelect"></select></td></tr>
				</table>
			</div>
			<fieldset>
				<legend>Physical property parameters</legend>
				<div class="group"><label>Density</label><input class="density lineEdit" type="text" value="1.0" /><span class="unit">g/cm<sup>3</sup></span></div>
				<div class="newtonian pp">
					<table><tr><th><label>Kinetic viscosity</label></th><td><input class="nu lineEdit" type="text" value="0.00001" /><span class="unit">m<sup>2</sup>/s</span></td></tr></table>
				</div>
				<div class="powerLaw pp">
					<div class="group"><label>Kinetic viscosity</label><img src="./images/PowerLaw.svg" alt="\nu=k\dot{\gamma}^{n-1} \quad \nu_\min \leq \nu \leq \nu_\max" class="formula" /></div>
					<table>
					<tr><th><label>ν<sub>Max</sub></label></th><td><input class="nuMax lineEdit" type="text" value="1.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
					<tr><th><label>ν<sub>Min</sub></label></th><td><input class="nuMin lineEdit" type="text" value="0.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
					<tr><th><label>k</label></th><td><input class="k lineEdit" type="text" value="1.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
					<tr><th><label>n</label></th><td><input class="n lineEdit" type="text" value="2.0" /></td></tr>
					</table>
				</div>
				<div class="crossPowerLaw pp">
					<div class="group"><label>Kinetic viscosity</label><img src="./images/CrossPowerLaw.svg" alt="\nu=\nu_\infty+\frac{\nu_0-\nu_\infty}{1+(m\dot{\gamma})^n}" class="formula" /></div>
					<table>
					<tr><th><label>ν<sub>0</sub></label></th><td><input class="nu0 lineEdit" type="text" value="0.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
					<tr><th><label>ν<sub>∞</sub></label></th><td><input class="nuInf lineEdit" type="text" value="1.0" /><span class="unit">m<sup>2</sup>/s</span></td></tr>
					<tr><th><label>m</label></th><td><input class="m lineEdit" type="text" value="1.0" /><span class="unit">s</span></td></tr>
					<tr><th><label>n</label></th><td><input class="n lineEdit" type="text" value="1.0" /></td></tr>
					</table>
				</div>
			</fieldset>
			<div class="buttonBox"><input type="button" class="addButton" value="Set"></div>
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
	<div id="InitialCondition" class="page">
		<h2>Initial Condition</h2>
		<table>
			<tr><th><label>Physical quantity</label></th><td><select id="IC-quantitySelect"></select></td></tr>
			<tr id="IC-scalarValue-line">
				<th><label>Value</label></th>
				<td>
					<input id="IC-scalarValue" type="text" value="0.0" />
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
					<input id="IC-vectorValue" type="text" value="(1.0, 0.0, 0.0)" /><span class="unit u">m/s</span>
				</td>
			</tr>
			<tr class="phase">
				<th><label>Property name</label></th>
				<td><select class="propertyNameSelect"></select></td>
			</tr>
			<tr class="phase">
				<th><label>Range type</label></th>
				<td><select class="rangeTypeSelect"></select></td>
				<td><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle rangeTypePreview"></td>
			</tr>
			<tr class="phase cuboid"><th><label>Minimum coordinate</label></th><td><input class="minimum" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
			<tr class="phase cuboid"><th><label>Maximum coordinate</label></th><td><input class="maximum" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
			<tr class="phase sphere"><th><label>Center</label></th><td><input class="center" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
			<tr class="phase sphere"><th><label>Radius</label></th><td><input class="radius" type="text" value="1" /><span class="unit">m</span></td></tr>
			<tr class="phase cylinder"><th><label>Radius</label></th><td><input class="radius" type="text" value="1" /><span class="unit">m</span></td></tr>
			<tr class="phase cylinder"><th><label>Center of top</label></th><td><input class="top" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
			<tr class="phase cylinder"><th><label>Center of bottom</label></th><td><input class="bottom" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
		</table>
		<div class="buttonBox">
			<input type="button" class="fitToShapesButton phase" value="Fit">
			<input type="button" id="IC-addButton" value="Set">
		</div>
		<fieldset>
			<legend>Initial conditions</legend>
			<ul id="IC-settings" class="sortable"></ul>
		</fieldset>
		<div>* If no condition is set to, a default value will be used.</div>
	</div>
	<div id="BoundaryCondition" class="page">
		<h2>Flow Boundary Condition</h2>
		<div class="group">
			<table>
				<tr><th><label>Region</label></th><td><select id="BC-regionSelect"></select></td></tr>
				<tr><th><label>Type</label></th><td><select id="BC-typeSelect"></select><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="BC-preview"></td></tr>
			</table>
		</div>
		<fieldset>
			<legend>Flow boundary parameters</legend>
			<div id="BC-fixedFlowVelocity" class="bc">
				<table>
					<tr><th><label>Flow velocity</label></th><td><input id="BC-inletVelocity" type="text" value="(1.0, 0.0, 0.0)" /><span class="unit">m/s</span></td></tr>
					<tr class="heatOnly"><td><label>Inflow temperature</label></td><td><input id="BC-fixedFlowVelocity-T" type="text" value="273.15" /><span class="unit">K</span></td></tr>
					<tr class="multiphase"><td><label>Inflow fluid</label></td><td><select></select></td></tr>
				</table>
			</div>
			<div id="BC-fixedMassFlowRate" class="bc">
				<table>
					<tr><th><label>Mass flow rate</label></th><td><input id="BC-massFlowRate" type="text" value="1.0" /><span class="unit">kg/s</span></td></tr>
					<tr class="heatOnly"><th><label>Inflow temperature</label></th><td><input id="BC-fixedMassFlowRate-T" type="text" value="273.15" /><span class="unit">K</span></td></tr>
					<tr class="multiphase"><td><label>Inflow fluid</label></td><td><select></select></td></tr>
				</table>
			</div>
			<div id="BC-fixedVolumeFlowRate" class="bc">
				<table>
					<tr><th><label>Volume flow rate</label></th><td><input id="BC-volumeFlowRate" type="text" value="1.0" /><span class="unit">m<sup>3</sup>/s</span></td></tr>
					<tr class="heatOnly"><th><label>Inflow temperature</label></th><td><input id="BC-fixedVolumeFlowRate-T" type="text" value="273.15" /><span class="unit">K</span></td></tr>
					<tr class="multiphase"><td><label>Inflow fluid</label></td><td><select></select></td></tr>
				</table>
			</div>
			<div id="BC-fixedNormalVelocity" class="bc">
				<table>
					<tr><td><label>Normal dirction velocity</label></td><td><input id="BC-normalVelocity" type="text" value="1.0" /><span class="unit">m/s</span></td></tr>
					<tr class="heatOnly"><th><label>Inflow temperature</label></th><td><input id="BC-fixedNormalVelocity-T" type="text" value="273.15" /><span class="unit">K</span></td></tr>
					<tr class="multiphase"><td><label>Inflow fluid</label></td><td><select></select></td></tr>
				</table>
			</div>
			<div id="BC-fixedStaticPressure" class="bc">
				<table>
					<tr><td><label>Static pressure</label></td><td><input id="BC-outletP" type="text" value="0.0" /><span class="unit">Pa</span></td></tr>
					<tr class="multiphase"><td><label>Inflow fluid</label></td><td><select></select></td></tr>
				</table>
			</div>
			<div id="BC-fixedTotalPressure" class="bc">
				<table>
					<tr><td><label>Total pressure</label></td><td><input id="BC-totalPressure" type="text" value="0.0" /><span class="unit">Pa</span></td></tr>
					<tr class="multiphase"><td><label>Inflow fluid</label></td><td><select></select></td></tr>
				</table>
			</div>
			<div id="BC-inletOutlet" class="bc">
				<div class="group noHeat noMultiphase"><label>None</label></div>
				<div class="group heatOnly"><label>Inflow temperature</label><input id="BC-inletOutlet-T" type="text" value="273.15" /><span class="unit">K</span></div>
				<div class="group multiphase"><label>Inflow fluid</label><select></select></div>
			</div>
			<div id="BC-stationaryWall" class="bc">
				<div class="group noHeat"><label>None</label></div>
				<div class="group heatOnly">
					<div class="group"><label>Heat condition type</label><select id="BC-stationaryWall-heatTypeSelect"></select></div>
					<div class="group bc" id="BC-stationaryWall-heatFixedGroup">
						<label>Temperature</label><input id="BC-stationaryWall-heatFixed" type="text" value="273.15"><span class="unit">K</span></select>
					</div>
					<table class="group bc" id="BC-stationaryWall-heatFluxGroup">
						<tr><th><label>Heat flux</label></th><td><input id="BC-stationaryWall-heatFlux" type="text" value="1.0"><span class="unit">W/m<sup>2</sup></span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-stationaryWall-heatFlux-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table class="group bc" id="BC-stationaryWall-heatPowerGroup">
						<tr><th><label>Heat source</label></th><td><input id="BC-stationaryWall-heatPower" type="text" value="1.0"><span class="unit">W</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-stationaryWall-heatPower-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table class="group bc" id="BC-stationaryWall-heatTransferGroup">
						<tr><th><label>Heat transfer coefficient</label></th><td><input id="BC-stationaryWall-heatTransfer" type="text" value="1.0"></select><span class="unit">W/(m<sup>2</sup>・K)</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-stationaryWall-heatTransfer-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
						<tr><th><label>External temperature</label></th><td><input id="BC-stationaryWall-heatTransfer-infT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
				</div>
			</div>
			<div id="BC-slipWall" class="bc">
				<div class="group noHeat"><label>None</label></div>
				<div class="group heatOnly">
					<div class="group"><label>Heat condition type</label><select id="BC-slipWall-heatTypeSelect"></select></div>
					<div class="group bc" id="BC-slipWall-heatFixedGroup">
						<label>Temperature</label><input id="BC-slipWall-heatFixed" type="text" value="273.15"><span class="unit">K</span></select>
					</div>
					<table class="group bc" id="BC-slipWall-heatFluxGroup">
						<tr><th><label>Heat flux</label></th><td><input id="BC-slipWall-heatFlux" type="text" value="1.0"><span class="unit">W/m<sup>2</sup></span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-slipWall-heatFlux-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table  class="group bc" id="BC-slipWall-heatPowerGroup">
						<tr><th><label>Heat source</label></th><td><input id="BC-slipWall-heatPower" type="text" value="1.0"><span class="unit">W</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-slipWall-heatPower-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table class="group bc" id="BC-slipWall-heatTransferGroup">
						<tr><th><label>Heat transfer coefficient</label></th><td><input id="BC-slipWall-heatTransfer" type="text" value="1.0"></select><span class="unit">W/(m<sup>2</sup>・K)</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-slipWall-heatTransfer-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
						<tr><th><label>External temperature</label></th><td><input id="BC-slipWall-heatTransfer-infT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
				</div>
			</div>
			<div id="BC-movingWall" class="bc">
				<div class="group"><label>Moving velocity</label><input id="BC-wallVelocity" type="text" value="(1.0, 0.0, 0.0)" /><span class="unit">m/s</span></div>
				<div class="group heatOnly">
					<div class="group"><label>Heat condition type</label><select id="BC-movingWall-heatTypeSelect"></select></div>
					<div class="group bc" id="BC-movingWall-heatFixedGroup">
						<label>Temperature</label><input id="BC-movingWall-heatFixed" type="text" value="273.15"><span class="unit">K</span></select>
					</div>
					<table class="group bc" id="BC-movingWall-heatFluxGroup">
						<tr><th><label>Heat flux</label></th><td><input id="BC-movingWall-heatFlux" type="text" value="1.0"><span class="unit">W/m<sup>2</sup></span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-movingWall-heatFlux-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table  class="group bc" id="BC-movingWall-heatPowerGroup">
						<tr><th><label>Heat source</label></th><td><input id="BC-movingWall-heatPower" type="text" value="1.0"><span class="unit">W</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-movingWall-heatPower-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table class="group bc" id="BC-movingWall-heatTransferGroup">
						<tr><th><label>Heat transfer coefficient</label></th><td><input id="BC-movingWall-heatTransfer" type="text" value="1.0"></select><span class="unit">W/(m<sup>2</sup>・K)</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-movingWall-heatTransfer-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
						<tr><th><label>External temperature</label></th><td><input id="BC-movingWall-heatTransfer-infT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
				</div>
			</div>
			<div id="BC-rotatingWall" class="bc">
				<table>
					<tr><th><label>Axis origin</label></th><td><input id="BC-rotatingWall-origin" type="text" value="(0.0, 0.0, 0.0)" /><span class="unit">m</span></td></tr>
					<tr><th><label>Axis direction</label></th><td><input id="BC-rotatingWall-direction" type="text" value="(0.0, 0.0, 1.0)" /></td></tr>
					<tr><th><label>Rotational velocity</label></th><td><input id="BC-rotatingWall-velocity" type="text" value="0" /><span class="unit">°/s</span></td></tr>
				</table>
				<div class="group heatOnly">
					<div class="group"><label>Heat condition type</label><select id="BC-rotatingWall-heatTypeSelect"></select></div>
					<div class="group bc" id="BC-rotatingWall-heatFixedGroup">
						<label>Temperature</label><input id="BC-rotatingWall-heatFixed" type="text" value="273.15"><span class="unit">K</span></select>
					</div>
					<table class="group bc" id="BC-rotatingWall-heatFluxGroup">
						<tr><th><label>Heat flux</label></th><td><input id="BC-rotatingWall-heatFlux" type="text" value="1.0"><span class="unit">W/m<sup>2</sup></span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-rotatingWall-heatFlux-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table  class="group bc" id="BC-rotatingWall-heatPowerGroup">
						<tr><th><label>Heat source</label></th><td><input id="BC-rotatingWall-heatPower" type="text" value="1.0"><span class="unit">W</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-rotatingWall-heatPower-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
					<table class="group bc" id="BC-rotatingWall-heatTransferGroup">
						<tr><th><label>Heat transfer coefficient</label></th><td><input id="BC-rotatingWall-heatTransfer" type="text" value="1.0"></select><span class="unit">W/(m<sup>2</sup>・K)</span></td></tr>
						<tr><th><label>Initial temperature</label></th><td><input id="BC-rotatingWall-heatTransfer-iniT" type="text" value="273.15"><span class="unit">K</span></td></tr>
						<tr><th><label>External temperature</label></th><td><input id="BC-rotatingWall-heatTransfer-infT" type="text" value="273.15"><span class="unit">K</span></td></tr>
					</table>
				</div>
			</div>
			<div id="BC-symmetry" class="bc">
				<label>None</label>
			</div>
			<div id="BC-mapping" class="bc">
				<table class="group">
					<tr><th><label>Target region</label></th><td><select id="BC-mapping-targetRegionSelect"></select></td></tr>
				</table>
			</div>
		</fieldset>
		<div class="buttonBox"><input type="button" id="BC-addButton" value="Set"></div>
		<fieldset>
			<legend>Boundary conditions</legend>
			<div id="BC-settings"></div>
		</fieldset>
		<div class="noHeat">* If no condition is set to a region, the region will be a slip wall.</div>
		<div class="heatOnly">* If no condition is set to a region, the region will be a adiabatic slip wall.</div>
	</div>
	<div id="RotatingRegions" class="page">
		<h2>Rotating Regions</h2>
		<div class="group">
			<table>
				<tr><th><label>Rotating type</label></th><td><select id="Rotating-type"></select></td></tr>
				<tr><th><label>Region type</label></th><td><select id="Rotating-regionType"></select><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Rotating-preview"></td></tr>
			</table>
		</div>
		<fieldset>
			<legend>Rotating parameters</legend>
			<div class="group">
				<table>
					<tr class="sphere"><th><label>Center</label></th><td><input id="Rotating-sphere-center" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="sphere"><th><label>Radius</label></th><td><input id="Rotating-sphere-r" type="text" value="1.0" /><span class="unit">m</span></td></tr>
					<tr class="sphere"><th><label>Rotational axis</label></th><td><input id="Rotating-sphere-axis" type="text" value="(0, 0, 1)" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Radius</label></th><td><input id="Rotating-cylinder-r" type="text" value="1.0" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Center of top</label></th><td><input id="Rotating-cylinder-top" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Center of bottom</label></th><td><input id="Rotating-cylinder-bottom" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
					<tr><th><label>Rotational velocity</label></th><td><input id="Rotating-velocity" type="text" value="0" /><span class="unit">°/s</span></td></tr>
				</table>
			</div>
		</fieldset>
		<div class="buttonBox">
			<input type="button" id="Rotating-fitToShapesButton" value="Fit">
			<input type="button" id="Rotating-addButton" value="Set">
		</div>
		<fieldset>
			<legend>Rotating region conditions</legend>
			<ul id="Rotating-settings" class="sortable"></ul>
		</fieldset>
	</div>
	<div id="PorousRegions" class="page">
		<h2>Porous Regions</h2>
		<div class="group">
			<table>
				<tr><th><label>Porous type</label></th><td><select id="Porous-type"></select></td></tr>
				<tr><th><label>Region type</label></th><td><select id="Porous-regionType"></select><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Porous-preview"></td></tr>
			</table>
		</div>
		<fieldset>
			<legend>Porous parameters</legend>
			<div class="group">
				<div class="group">
					<label>Pressure gradient</label>
					<img src="./images/porosityModel-darcyForchheimerLaw.svg" alt="S = - (\mu d + \frac{\rho |U|}{2} f) U" class="formula darcyForchheimerLaw porousModel" />
					<img src="./images/porosityModel-powerLaw.svg" alt="S = - \rho C_0 |U|^{(C_1 - 1)} U" class="formula powerLaw porousModel" />
					<img src="./images/porosityModel-fixedCoeff.svg" alt="S = - \rho_{ref} (\alpha + \beta |U|) U" class="formula fixedCoeff porousModel" />
				</div>
				<table>
					<tr class="porousModel darcyForchheimerLaw"><th><label>d</label></th><td><input class="d" type="text" value="(1000, 1000, 1000)" /><span class="unit">1/m<sup>2</sup></span></td></tr>
					<tr class="porousModel darcyForchheimerLaw"><th><label>f</label></th><td><input class="f" type="text" value="(0, 0, 0)" /><span class="unit">1/m</span></td></tr>
					<tr class="porousModel powerLaw"><th><label>C<sub>0</sub></label></th><td><input class="c0" type="text" value="500.0" /><span class="unit">1/m</span></td></tr>
					<tr class="porousModel powerLaw"><th><label>C<sub>1</sub></label></th><td><input class="c1" type="text" value="1.0" /></td></tr>
					<tr class="porousModel fixedCoeff"><th><label>ρ<sub>ref</sub></label></th><td><input class="rhoRef" type="text" value="1.0" /><span class="unit">g/cm<sup>3</sup></span></td></tr>
					<tr class="porousModel fixedCoeff"><th><label>α</label></th><td><input class="alpha" type="text" value="(1000, 1000, 1000)" /><span class="unit">1/s</span></td></tr>
					<tr class="porousModel fixedCoeff"><th><label>β</label></th><td><input class="beta" type="text" value="(0, 0, 0)" /><span class="unit">1/m</span></td></tr>
					<tr class="cuboid"><th><label>Minimum coordinate</label></th><td><input id="Porous-cuboid-minimum" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="cuboid"><th><label>Maximum coordinate</label></th><td><input id="Porous-cuboid-maximum" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
					<tr class="sphere"><th><label>Center</label></th><td><input id="Porous-sphere-center" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="sphere"><th><label>Radius</label></th><td><input id="Porous-sphere-r" type="text" value="1.0" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Radius</label></th><td><input id="Porous-cylinder-r" type="text" value="1.0" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Center of top</label></th><td><input id="Porous-cylinder-top" type="text" value="(0, 0, 0)" /><span class="unit">m</span></td></tr>
					<tr class="cylinder"><th><label>Center of bottom</label></th><td><input id="Porous-cylinder-bottom" type="text" value="(1, 1, 1)" /><span class="unit">m</span></td></tr>
					<tr class="surface"><th><label>Assembly</label></th><td><select id="Porous-assembly-select"></select></td></tr>
				</table>
			</div>
		</fieldset>
		<div class="buttonBox">
			<input type="button" id="Porous-fitToShapesButton" value="Fit">
			<input type="button" id="Porous-addButton" value="Set">
		</div>
		<fieldset>
			<legend>Porous region conditions</legend>
			<ul id="Porous-settings" class="sortable"></ul>
		</fieldset>
	</div>
	<div id="CalculationSettings" class="page">
		<h2>Calculation Settings</h2>
		<table>
			<tr><th><label>Parallel number</label></th><td><input type="text" id="Calc-parallelNumberSpin" value="1" /></td></tr>
			<tr><th><label>Numerical schemes</label></th><td><select id="Calc-schemesTypeSelect"></select></td></tr>
			<tr><th><label>Matrix solvers</label></th><td><select id="Calc-matrixSolversSelect"></select></td></tr>
		</table>
		<span class="group"><label for="Calc-monitorCheck"><input type="checkbox" id="Calc-monitorCheck">Show monitoring window, if possible</label></span>
		<div id="Calc-tabs" class="group">
			<ul>
				<li><a href="#Calc-tabs-1">Relaxation Factors</a></li>
				<li><a href="#Calc-tabs-2">Steady state convergence criteria</a></li>
			</ul>
			<div id="Calc-tabs-1">
				<table id="Calc-relaxationFactors"></table>
				<div class="group">* The smaller value means more stable, the larger value means more speedy.</div>
			</div>
			<div id="Calc-tabs-2">
				<table id="Calc-residualControl"></table>
			</div>
		</div>
	</div>
	<div id="OutputSettings" class="page">
		<h2>Output</h2>
		<table>
			<tr><th><label>Type</label></th><td><select id="Output-typeSelect"></select></td></tr>
			<tr><th><label>Interval</label></th><td><input type="text" id="Output-intervalSpin" value="1"><span class="unit" id="Output-intervalUnit"></span></td></tr>
			<tr><th><label>Format</label></th><td><select id="Output-formatSelect"></select></td></tr>
			<tr><th><label>Precision</label></th><td><input type="text" id="Output-precisionSpin" value="6"></td></tr>
		</table>
		<div id="Output-tabs" class="group">
			<ul>
				<li><a href="#tabs-1">General</a></li>
				<li><a href="#tabs-2">Region</a></li>
				<li><a href="#tabs-3">Sampling</a></li>
				<li><a href="#tabs-4">Tracer</a></li>
				<li><a href="#tabs-5">Extra file format</a></li>
			</ul>
			<div id="tabs-1">
				<span class="group"><label for="Output-residualCheck"><input type="checkbox" id="Output-residualCheck">Residuals</label></span>
				<span class="group"><label for="Output-yPlusCheck"><input type="checkbox" id="Output-yPlusCheck">y+</label></span>
				<span class="group"><label for="Output-courantNoCheck"><input type="checkbox" id="Output-courantNoCheck">Courant number</label></span>
				<span class="group"><label for="Output-vorticityCheck"><input type="checkbox" id="Output-vorticityCheck">Vorticity</label></span>
				<span class="group"><label for="Output-uGradTensor2ndInvariantCheck"><input type="checkbox" id="Output-uGradTensor2ndInvariantCheck">2nd invariant of velocity gradient tensor</label></span>
				<div class="group">
					<fieldset id="Output-minMax">
						<legend>Minimum/Maximum values</legend>
					</fieldset>
				</div>
			</div>
			<div id="tabs-2">
				<table>
					<tr><th><label>Region</label></th><td><select id="Output-region-regionSelect"></select></td></tr>
					<tr><th><label>Type</label></th><td><select id="Output-region-typeSelect"></select></td></tr>
					<tr class="Output-variable"><td><label>Physical quantity</label></th><td><select id="Output-region-variableSelect"></select></td></tr>
					<tr class="Output-forceCoeffs"><th><label>Drag direction</label></th><td><input id="Output-forceCoeffs-drag" type="text" value="(1.0, 0.0, 0.0)" /><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Output-forceCoeffs-dragPreview"></td></tr>
					<tr class="Output-forceCoeffs"><th><label>Lift direction</label></th><td><input id="Output-forceCoeffs-lift" type="text" value="(0.0, 1.0, 0.0)" /><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Output-forceCoeffs-liftPreview"></td></tr>
					<tr class="Output-forceCoeffs"><th><label>Reference velocity</label></th><td><input id="Output-forceCoeffs-velocity" type="text" value="1.0" /><span class="unit">m/s</span></td></tr>
					<tr class="Output-forceCoeffs"><th><label>Reference length</label></th><td><input id="Output-forceCoeffs-length" type="text" value="1.0" /><span class="unit">m</span></td></tr>
					<tr class="Output-forceCoeffs"><th><label>Reference area</label></th><td><input id="Output-forceCoeffs-area" type="text" value="1.0" /><span class="unit">m<sup>2</sup></span><img src="./images/MeasureArea.svg" alt="Measure projection area" title="Measure projection area" class="icon circle" id="Output-forceCoeffs-ProjectionArea"></td></tr>
				</table>
				<div class="buttonBox"><input type="button" id="Output-region-addButton" value="Set"></div>
				<fieldset>
					<legend>Output conditions</legend>
					<div id="Output-region-settings"></div>
				</fieldset>
			</div>
			<div id="tabs-3">
				<table>
					<tr><th><label>Physical quantity</label></th><td><select id="Output-sampling-variableSelect"></select></td></tr>
					<tr><th><label>Location</label></th><td><input id="Output-sampling-location" type="text" value="(0.0, 0.0, 0.0)" /><span class="unit">m</span><img src="./images/Preview.svg" alt="Preview" title="Preview" class="icon circle" id="Output-samplingPreview"></td></tr>
				</table>
				<div class="buttonBox"><input type="button" id="Output-sampling-addButton" value="Set"></div>
				<fieldset>
					<legend>Output conditions</legend>
					<ul id="Output-sampling-settings" class="sortable"></ul>
				</fieldset>
			</div>
			<div id="tabs-4">
				<table>
					<tr><th><label>Inlet region</label></th><td><select id="Output-tracer-regionSelect"></select></td></tr>
					<tr><th><label>Type</label></th><td><select id="Output-tracer-typeSelect"></select></td></tr>
				</table>
				<div class="buttonBox"><input type="button" id="Output-tracer-addButton" value="Set"></div>
				<fieldset>
					<legend>Output conditions</legend>
					<div id="Output-tracer-settings"></div>
				</fieldset>
			</div>
			<div id="tabs-5">
				<span class="group"><label for="Output-fluentCheck"><input type="checkbox" id="Output-fluentCheck">Fluent</label></span>
				<span class="group"><label for="Output-ensightCheck"><input type="checkbox" id="Output-ensightCheck">Ensight</label></span>
				<span class="group"><label for="Output-gmvCheck"><input type="checkbox" id="Output-gmvCheck">GMV</label></span>
				<span class="group"><label for="Output-tecplotCheck"><input type="checkbox" id="Output-tecplotCheck">Tecplot</label></span>
				<span class="group"><label for="Output-legacyVTKCheck"><input type="checkbox" id="Output-legacyVTKCheck">Legacy VTK</label></span>
			</div>
		</div>
	</div>
	<div id="Export" class="page">
		<h2>Export</h2>
		<div class="group"><label>Format</label><select id="Export-formatSelect"></select></div>
		<div class="buttonBox"><input type="button" id="Export-exportButton" value="Export"></div>
	</div>
	
	<div style="clear:both;"></div>
	</div>
	<div id="control-view-splitter" class="view-splitter"></div>
	<div id="threeD-view">
		<canvas id="canvas-3d"></canvas>
		<canvas id="canvas-3d-text" tabindex="0"></canvas><div style="clear:both;"></div>
		<div class="group" style="text-align:right;margin-right:5px;" id="threeD-controls">
			<img src="./images/Perspective.svg" alt="Switch projection mode" title="Switch projection mode" class="icon" id="threeD-projectionMode">
			<img src="./images/BoundingBoxInvisible.svg" alt="Show/Hide boundnig box" title="Show/Hide boundnig box" class="icon" id="threeD-toggleBoundingBox">
			<img src="./images/FitAll.svg" alt="Fit all" title="Fit all" class="icon" id="threeD-fitAll">
			<img src="./images/Solid.svg" alt="Switch draw mode" title="Switch draw mode" class="icon" id="threeD-displayMode">
		</div>
	</div><div style="clear:both;"></div>
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