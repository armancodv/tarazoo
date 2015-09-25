var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	$scope.property_id=0;
	$scope.input_unit=0;
	$scope.show_select_unit=[];
	$scope.show_select_unit[0]='-selected';
	$scope.property = [];
	$scope.unit = [];
	$scope.factor = [];
	$scope.property[0] = "شتاب";
	$scope.unit[0] = ["Meter/sq.sec (m/sec^2)", "Foot/sq.sec (ft/sec^2)", "G (g)", "Galileo (gal)", "Inch/sq.sec (in/sec^2)"];
	$scope.factor[0] = [1, .3048, 9.806650, .01, 2.54E-02];
	$scope.property[1] = "مساحت";
	$scope.unit[1] = ["Square meter (m^2)", "Acre (acre)", "Are", "Barn (barn)", "Hectare", "Rood", "Square centimeter", "Square kilometer", "Circular mil", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)"];
	$scope.factor[1] = [1, 4046.856, 100, 1E-28, 10000, 1011.71413184285, .0001, 1000000, 5.067075E-10, 9.290304E-02, 6.4516E-04, 2589988, .8361274];
	$scope.property[2] = "گشتاور";
	$scope.unit[2] = ["Newton-meter (N m)", "Dyne-centimeter(dy cm)", "Kgrf-meter (kgf m)", "lbf-inch (lbf in)", "lbf-foot (lbf ft)"];
	$scope.factor[2] = [1, .0000001, 9.806650, .1129848, 1.355818];
	$scope.property[3] = "برق";
	$scope.unit[3] = ["Coulomb (Cb)", "Abcoulomb", "Ampere hour (A hr)", "Faraday (F)", "Statcoulomb", "Millifaraday (mF)", "Microfaraday (mu-F)", "Picofaraday (pF)"];
	$scope.factor[3] = [1, 10, 3600, 96521.8999999997, .000000000333564, 96.5219, 9.65219E-02, 9.65219E-05];
	$scope.property[4] = "انرژی";
	$scope.unit[4] = ["Joule (J)", "BTU (mean)", "BTU (thermochemical)", "Calorie (SI) (cal)", "Calorie (mean)(cal)", "Calorie (thermo)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)", "Ton of TNT", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)"];
	$scope.factor[4] = [1, 1055.87, 1054.35, 4.1868, 4.19002, 4.184, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 4190.02, 3600000, 4.2E9, 1, 3600, 1];
	$scope.property[5] = "نیرو";
	$scope.unit[5] = ["Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal"];
	$scope.factor[5] = [1, .00001, 9.806650, 9.806650, 4448.222, .2780139, .4535924, .138255];
	$scope.property[6] = "نیرو بر واحد طول";
	$scope.unit[6] = ["Newton/meter (N/m)", "Pound force/inch (lbf/in)", "Pound force/foot (lbf/ft)"];
	$scope.factor[6] = [1, 175.1268, 14.5939];
	$scope.property[7] = "طول";
	$scope.unit[7] = ["Meter (m)", "Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Kilometer (km)", "Ell", "Em", "Fathom", "Furlong", "Fermi (fm)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)"];
	$scope.factor[7] = [1, 1E-10, 1.49598E11, .000254, .01, 1000, 1.143, 4.2323E-03, 1.8288, 201.168, 1E-15, .3048, .0254, 5556, 5556, 9.46055E+15, .000001, .0000254, .001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144];
	$scope.property[8] = "نور";
	$scope.unit[8] = ["Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot"];
	$scope.factor[8] = [1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000];
	$scope.property[9] = "جرم";
	$scope.unit[9] = ["Kilogram (kgr)", "Gram (gr)", "Milligram (mgr)", "Microgram (mu-gr)", "Carat (metric)(ct)", "Hundredweight (long)", "Hundredweight (short)", "Pound mass (lbm)", "Pound mass (troy)", "Ounce mass (ozm)", "Ounce mass (troy)", "Slug", "Ton (assay)", "Ton (long)", "Ton (short)", "Ton (metric)", "Tonne"];
	$scope.factor[9] = [1, .001, 1e-6, .000000001, .0002, 50.80235, 45.35924, .4535924, .3732417, .02834952, .03110348, 14.5939, .02916667, 1016.047, 907.1847, 1000, 1000];
	$scope.property[10] = "جریان جرمی";
	$scope.unit[10] = ["Kilogram/second (kgr/sec)", "Pound mass/sec (lbm/sec)", "Pound mass/min (lbm/min)"];
	$scope.factor[10] = [1, .4535924, .007559873];
	$scope.property[11] = "چگالی";
	$scope.unit[11] = ["Kilogram/cub.meter", "Grain/galon", "Grams/cm^3 (gr/cc)", "Pound mass/cubic foot", "Pound mass/cubic-inch", "Ounces/gallon (UK,liq)", "Ounces/gallon (US,liq)", "Ounces (mass)/inch", "Pound mass/gal (UK,liq)", "Pound mass/gal (US,liq)", "Slug/cubic foot", "Tons (long,mass)/cub.yard"];
	$scope.factor[11] = [1, .01711806, 1000, 16.01846, 27679.91, 6.236027, 7.489152, 1729.994, 99.77644, 119.8264, 515.379, 1328.939];
	$scope.property[12] = "توان";
	$scope.unit[12] = ["Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second", "Horsepower(550 ft lbf/s)", "Horsepower (electric)", "Horsepower (boiler)", "Horsepower (metric)", "Horsepower (UK)", "Kilocalorie (thermo)/min", "Kilocalorie (thermo)/sec"];
	$scope.factor[12] = [1, 1000, 1000000, .001, .2930667, 1054.35, 17.5725, .2928751, 4.184, 6.973333E-02, .0000001, .0003766161, .02259697, 1.355818, 745.7, 746, 9809.5, 735.499, 745.7, 69.7333, 4184];
	$scope.property[13] = "فشار و تنش";
	$scope.unit[13] = ["Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4'C)", "Decibar", "Kgr force/sq.centimeter", "Kgr force/sq.meter", "Kip/square inch", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)", "Torr (mmHg,0'C)"];
	$scope.factor[13] = [1, 101325, 98066.5, 100000, 1333.22, 98.0638, 10000, 98066.5, 9.80665, 6894757, 100, 133.3224, 1, 1000, 1000000, 47.88026, 47.88026, 6894.757, 133.322];
	$scope.property[14] = "دما";
	$scope.unit[14] = ["Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)"];
	$scope.factor[14] = [1,  0.555555555555, 1, 0.555555555555];
	$scope.tempIncrement = [0, -32, -273.15, -491.67];
	$scope.property[15] = "زمان";
	$scope.unit[15] = ["Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)"];
	$scope.factor[15] = [1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150];
	$scope.property[16] = "سرعت";
	$scope.unit[16] = ["Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (kph)", "Knot (int'l)", "Mile (US)/hour (mph)", "Mile (nautical)/hour", "Mile (US)/minute", "Mile (US)/second", "Speed of light (c)", "Mach (STP)(a)"];
	$scope.factor[16] = [1, 5.08E-03, .3048, .2777778, .5144444, .44707, .514444, 26.8224, 1609.344, 299792458, 340.0068750];
	$scope.property[17] = "ویسکوزیته";
	$scope.unit[17] = ["Newton-second/meter", "Centipoise", "Centistoke", "Sq.foot/second", "Poise", "Poundal-second/sq.foot", "Pound mass/foot-second", "Pound force-second/sq.foot", "Rhe", "Slug/foot-second", "Stoke"];
	$scope.factor[17] = [1, .001, .000001, 9.290304E-02, .1, 1.488164, 1.488164, 47.88026, 10, 47.88026, .0001];
	$scope.property[18] = "حجم";
	$scope.unit[18] = ["Cubic Meter (m^3)", "Cubic centimeter", "Cubic millimeter", "Acre-foot", "Barrel (oil)", "Board foot", "Bushel (US)", "Cup", "Fluid ounce (US)", "Cubic foot", "Gallon (UK)", "Gallon (US,dry)", "Gallon (US,liq)", "Gill (UK)", "Gill (US)", "Cubic inch (in^3)", "Liter (new)", "Liter (old)", "Ounce (UK,fluid)", "Ounce (US,fluid)", "Peck (US)", "Pint (US,dry)", "Pint (US,liq)", "Quart (US,dry)", "Quart (US,liq)", "Stere", "Tablespoon", "Teaspoon", "Ton (register)", "Cubic yard"];
	$scope.factor[17] = [1, .000001, .000000001, 1233.482, .1589873, .002359737, .03523907, .0002365882, .00002957353, .02831685, .004546087, .004404884, .003785412, .0001420652, .0001182941, .00001638706, .001, .001000028, .00002841305, .00002957353, 8.8097680E-03, .0005506105, 4.7317650E-04, .001101221, 9.46353E-04, 1, .00001478676, .000004928922, 2.831685, .7645549];
	$scope.property[19] = "جریان حجمی";
	$scope.unit[19] = ["Cubic meter/second", "Cubic foot/second", "Cubic foot/minute", "Cubic inches/minute", "Gallons (US,liq)/minute)"];
	$scope.factor[19] = [1, .02831685, .0004719474, 2.731177E-7, 6.309020E-05];

	$scope.select = function(number) {
		$scope.property_id=number;
		$scope.input_value=0;
		$scope.input_unit=0;
		$scope.show_select_unit=[];
		$scope.show_select_unit[0]='-selected';
	}

	$scope.select_unit = function(number) {
		$scope.input_unit=number;
		$scope.show_select_unit=[];
		$scope.show_select_unit[number]='-selected';
	}

	$scope.convert = function(value,property,input,output) {
		if(property==14) {
			result=result+$scope.tempIncrement[input];
		}
		result=value*$scope.factor[property][input]/$scope.factor[property][output];
		if(property==14) {
			result=result-$scope.tempIncrement[output];
		}
		return result;
	}
	
});

function gotopage(page_number) {
	for(i=1;i<=2;i++) {
		if(i===page_number) {
			document.getElementById('page'+i).style.display='block';
		} else {
			document.getElementById('page'+i).style.display='none';
		}
	}
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}
