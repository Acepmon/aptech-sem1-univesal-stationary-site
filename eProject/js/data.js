// DATA. We designed our database as a variable oject Array named 'products'
var Ads_Data = new Array();
var products = new Array(
		['0', '', '', '', '', '', '', '', '', '', '', ''],
		['1', 'Description of product in the database server', 'images2/images1', 'view', 'Download/Images1', 
		'Sofa', 'Broyhill', 90, 150, 150, 'red', 'wood'],
		
		['2', 'Description of product in the database server', 'images2/images2', 'view', 'Download/Images2',
		'Bed', 'Hickory', 60, 100, 140, 'white', 'wood'],
		
		['3', 'Description of product in the database server', 'images2/images3', 'view', 'Download/Images3',
		'Bed', 'La Barge', 50, 60, 60, 'brown', 'wood'],
		
		['4', 'Description of product in the database server', 'images2/images4', 'view', 'Download/Images4',
		'Entertainment', 'Henredon', 60, 200, 210, 'brown', 'wood'],
		
		['5', 'Description of product in the database server', 'images2/images5', 'view', 'Download/Images5',
		'Cabinet', 'Licensing', 200, 70, 270, 'brown', 'wood'],
		
		['6', 'Description of product in the database server', 'images2/images6', 'view', 'Download/Images6',
		'Entertainment center', 'Hickory', 80, 120, 85, 'black', 'wood'],
		
		['7', 'Description of product in the database server', 'images2/images7', 'view', 'Download/Images7',
		'Cabinet', 'Broyhill', 80, 110, 90, 'white', 'wood'],
		
		['8', 'Description of product in the database server', 'images2/images8', 'view', 'Download/Images8',
		'Cabinet', 'Thomasville', 80, 120, 100, 'brown', 'wood'],
		
		['9', 'Description of product in the database server', 'images2/images9', 'view', 'Download/Images9',
		'Drawer', 'Pearson', 200, 80, 235, 'brown & pink', 'wood'],
		
		['10', 'Description of product in the database server', 'images2/images10', 'view', 'Download/Images10',
		'Bed', 'Lane Venture', 185, 75, 200, 'white', 'wood'],
		
		['11', 'Description of product in the database server', 'images2/images11', 'view', 'Download/Images11',
		'Cabinet', 'Maitland Smith', 240, 120, 275, 'black & white', 'wood'],
		
		['12', 'Description of product in the database server', 'images2/images12', 'view', 'Download/Images12',
		'Cabinet', 'Drexel Heritage', 100, 130, 120, 'brown', 'wood'],
		
		['13', 'Description of product in the database server', 'images2/images13', 'view', 'Download/Images13',
		'Cabinet', 'Lane Venture', 90, 120, 70, 'brown', 'wood'],
		
		['14', 'Description of product in the database server', 'images2/images14', 'view', 'Download/Images14',
		'Cabinet', 'Broyhill', 340, 100, 300, 'brown', 'wood'],
		
		['15', 'Description of product in the database server', 'images2/images15', 'view', 'Download/Images15',
		'Bed', 'Thomasville', 150, 90, 160, 'white', 'wood'],
		
		['16', 'Description of product in the database server', 'images2/images16', 'view', 'Download/Images16',
		'Mattres', 'Maitland Smith', 90, 120, 50, 'white', 'wood'],
		
		['17', 'Linked, circular grillwork creates a rhythmic appeal to this bookcase. Two glass doors enclose two adjustable shelves and one fixed shelf. ', 'images2/images17', 'productTd(0)', 'Download/Images17', 'Bookcase', 'Pearson', 60, 48, 350, 'brown', 'wood'],
		
		['18', 'This grand cabinet features an architectural cornice, two glass doors width quatrefoil shaped mullions, and a solid shaped base. ', 'images2/images18', 'productTd(0)', 'Download/Images18', 'Cabinet', 'Pearson', 50, 90, 380, 'brown', 'wood'],
		
		['19', 'Inspired by a 19th century tall English chest, this graceful cabinet features four stacked chests on spade feet, evoking the feel of an updated campaign chest', 'images2/images19', 'productTd(0)', 'Download/Images19', 'cabinet', 'Pearson', 41, 88, 400, 'brown', 'wood'],
		
		['20', 'Etageres are the perfect pieces for storage.Tailor made not only for libraries or living rooms, these are great storage pieces for kitchens, dining rooms and even bathrooms.', 'images2/images20', 'productTd(0)', 'Download/Images20', 'Bookcase', 'Pearson', 25, 84, 200, 'light brown', 'wood, metal'],
		
		['21', 'This are deco cabinet is wrapped in charcoal leather faux shagreen in a sunburst pattern on the front, sides and top.', 'images2/images21', 'productTd(0)', 'Download/Images21', 'Cabinet', 'Pearson', 50, 34, 499, 'silver', 'wood'],
		
		['22', 'This cabinet with a similar bow front, flush beaded draweres and regency revival brass hardware.', 'images2/images22', 'productTd(0)', 'Download/Images22', 'Cabinet', 'Pearson', 26, 28, 340, 'dark brown', 'wood'],
		
		['23', 'This art deco cabinet is wrapped in ivory leather faux shagrean in a sunburst pattern on top,sides and front.', 'images2/images23', 'productTd(0)', 'Download/Images23', 'Cabinet', 'Pearson', 50, 34, 499, 'white', 'wood'],
		
		['24', 'This art deco cabinet is wrapped in ivory leather faux shagrean in a sunburst pattern on top,sides and front.', 'images2/images24', 'productTd(0)', 'Download/Images24', 'Bench', 'Drexel Heritage', 60, 92, 340,'brown', 'wood'], 
		
		['25', 'This art deco cabinet is wrapped in ivory leather faux shagrean in a sunburst pattern on top,sides and front.', 'images2/images25', 'productTd(0)', 'Download/Images25', 'Bench', 'Drexel Heritage', 109, 46, 150 ,'silver, gray', 'wood'], 
		
		['26', 'This art deco cabinet is wrapped in ivory leather faux shagrean in a sunburst pattern on top,sides and front.', 'images2/images26', 'productTd(0)', 'Download/Images26', 'Bench', 'Drexel Heritage', 44, 70 , 50, 'white', 'leather, wood'], 
		
		['27', 'This art deco cabinet is wrapped in ivory leather faux shagrean in a sunburst pattern on top,sides and front.', 'images2/images27', 'productTd(0)', 'Download/Images27', 'Bench', 'Drexel Heritage', 113, 50, 120,'dark red', 'leather, woord'],
		 
		['28', 'This cabinet with a similar bow front, flush beaded draweres and regency revival brass hardware.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 'images2/images28', 'productTd(0)', 'Download/Images28', 'Chest', 'DrexelHeritage', 96, 91, 130,'silver', 'wood'], 
		
		['29', 'This cabinet with a similar bow front, flush beaded draweres and regency revival brass hardware.', 'images2/images29', 'productTd(0)', 'Download/Images29', 'Chest', 'Drexel Heritage', 81, 91, 120,'brown', 'wood'], 
		
		['30', 'This cabinet with a similar bow front, flush beaded draweres and regency revival brass hardware.', 'images2/images30', 'productTd(0)', 'Download/Images30', 'Drawer', 'Drexel Heritage', 101, 91, 'white, black', 'wood, metal'], 
		
		['31', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images31', 'productTd(0)', 'Download/Images31', 'Couch', 'Drexel Heritage', 152, 92, 150,'gray', 'wool, fabric, metal'],
		
		['32', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images32', 'productTd(0)', 'Download/Images32', 'Couch', 'Drexel Heritage', 147, 93, 100,'light brown', 'fabric'],
		
		['33', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images33', 'productTd(0)', 'Download/Images33', 'Couch', 'Drexel Heritage', 157, 91, 98,'dark brown', 'Fabric, leather, wood'],
		
		['34', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images34', 'productTd(0)', 'Download/Images34', 'Couch', 'Drexel Heritage', 157, 92, 150,'white,yellow', 'wool'],
		
		['35', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images35', 'productTd(0)', 'Download/Images35', 'Bed', 'Drexel Heritage', 84, 77, 130,'White, Brown', 'Wool, wood'],
		
		['36', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images36', 'productTd(0)', 'Download/Images36', 'Bed', 'Drexel Heritage', 86, 77, 86,'White, Brown', 'Wool, wood'],
		
		['37', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images37', 'productTd(0)', 'Download/Images37', 'Bed', 'Drexel Heritage', 93, 71, 100,'White, light brown', 'Wool, wood'],
		
		['38', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images38', 'productTd(0)', 'Download/Images38', 'Bed', 'Drexel Heritage', 219, 86, 150,'White, dark brown', 'Wool, wood'],
		
		['39', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images39', 'view', 'Download/Images39','Floor Decor', 'La Barge', 100, 97, 50, 'white', 'wood'],
		
		['40', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images40', 'view', 'Download/Images40','Chair', 'La Barge', 19, 45, 50, 'brown', 'wood'],
		
		['41', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images41', 'view', 'Download/Images41','Chair', 'La Barge', 23, 39, 50, 'brown', 'wood'],
		
		['42', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images42', 'view', 'Download/Images42','Chair', 'La Barge', 60, 42, 50, 'brown', 'wood'],
		
		['43', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images43', 'view', 'Download/Images43','Bookcase', 'Maitland Smith', 158, 111, 50, 'brown', 'wood'],
		
		['44', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images44', 'view', 'Download/Images44','Bookcase', 'Maitland Smith', 37, 67, 50, 'brown', 'wood'],
		
		['45', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images45', 'view', 'Download/Images45','Bed', 'Maitland Smith', 88, 94, 75, 'white', 'wood'],

   		['46', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images46', 'view', 'Download/Images46','Deck', 'Thomasville', 62, 30, 50, 'brown', 'wood'],
		
		['47', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images47', 'view', 'Download/Images47','Deck', 'Thomasville', 72, 30, 45, 'brown', 'wood'],
		
		['48', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images48', 'view', 'Download/Images48','Table', 'Thomasville', 28, 30, 50, 'brown', 'wood'],
		
		['49', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images49', 'view', 'Download/Images49','Deck', 'Thomasville', 28, 26, 60, 'orange', 'wood'],
		
		['50', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images50', 'view', 'Download/Images50','Chair', 'Thomasville', 25, 36, 50, 'brown', 'leather & wood'],
		
		['51', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images51', 'view', 'Download/Images51','Mirror', 'Maitland Smith', 30, 36, 50, 'white', 'glass'],
		
		['52', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images52', 'view', 'Download/Images52','Lamp', 'Maitland Smith', 43, 22, 50, 'white', 'glass'],
		
		['53', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images53', 'view', 'Download/Images53','Time', 'Maitland Smith', 21, 104, 40, 'brown', 'wood'],
		
		['54', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images54', 'view', 'Download/Images54','Chest', 'Maitland Smith', 34, 31, 40, 'brown', 'wood'],
		
		['55', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.r', 'images2/images55', 'view', 'Download/Images55','Chest', 'Maitland Smith', 22, 25, 40, 'brown', 'wood'],
		
		['56', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images56', 'view', 'Download/Images56','Wardrobe', 'Maitland Smith', 45, 84, 60, 'brown', 'wood'],
		
		['57', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images57', 'view', 'Download/Images57','Table', 'Maitland Smith', 72, 30, 40, 'brown', 'wood'],
		
		['58', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images58', 'view', 'Download/Images58','Table', 'Thomasville', 72, 30, 40, 'brown', 'wood'],
		
		['59', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images59', 'view', 'Download/Images59','Chest', 'Thomasville', 53, 39, 40, 'black', 'wood'],
		
		['60', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images60', 'view', 'Download/Images60','Chest', 'Thomasville', 42, 34, 40, 'black', 'wood'],
		
		['61', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images61', 'view', 'Download/Images61','Chest', 'Thomasville', 42, 34, 40, 'black', 'wood'],
		
		['62', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images62', 'view', 'Download/Images62','Chest', 'Thomasville', 58, 18, 40, 'white', 'wood'],
		
		['63', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images63', 'view', 'Download/Images63','Chest', 'Thomasville', 27, 47, 40, 'black', 'wood'],
		
		['64', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images64', 'view', 'Download/Images64','Chest', 'Thomasville', 18, 18, 40, 'white', 'leather'],
		
		['65', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images65', 'view', 'Download/Images65','Chair', 'Lane Venture', 23, 34, 40, 'white', 'aluminum'],
		
		['66', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images66', 'view', 'Download/Images66','Bench', 'Lane Venture', 45, 36, 40, 'white', 'aluminum'],
		
		['67', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images67', 'view', 'Download/Images67','Bench', 'Lane Venture', 22, 64, 40, 'white', 'aluminum'],
		
		['68', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images68', 'view', 'Download/Images68','Table', 'Lane Venture', 29, 48, 40, 'white', 'aluminum'],
		
		['69', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images69', 'view', 'Download/Images69','Table', 'Lane Venture', 36, 29, 60, 'black', 'aluminum'],
		
		['70', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images70', 'view', 'Download/Images70','Table', 'Lane Venture', 26, 24, 50, 'white', 'Rw upholstery'],
		
		['71', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images71', 'view', 'Download/Images71','Sofa', 'Lane Venture', 89, 38, 90, 'white', 'Rw upholstery'],
		
		['72', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images72', 'view', 'Download/Images72','Sofa', 'Lane Venture', 100, 40, 100, 'white', 'leather'],
		
		['73', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images73', 'view', 'Download/Images73','Chair', 'Lane Venture', 26, 36, 50, 'white', 'Aluminum'],
		
		['74', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images74', 'view', 'Download/Images74','Chest', 'Licensing', 38, 57, 50, 'white', 'Wood'],
		
		['75', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images75', 'view', 'Download/Images75','Table', 'Licensing', 60, 30, 40, 'black', 'Wood'],
		
		['76', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images76', 'view', 'Download/Images76','Bed', 'Licensing', 41, 61, 50, 'white', 'Wood'],
		
		['77', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need. ', 'images2/images77', 'view', 'Download/Images77','Bed', 'Licensing', 86, 71, 50, 'black', 'Wood'],
		
		['78', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need. ', 'images2/images78', 'view', 'Download/Images78','Bed', 'Licensing', 80, 68, 50, 'white', 'Wood'],
		
		['79', 'Most comfortable furniture is ofcouse its bed with stylish, warm colored, soft mattress bed is always we need.', 'images2/images79', 'view', 'Download/Images79','Chest', 'Licensing', 48, 39, 50, 'white', 'Wood'],
	
		['80', 'W107 D51 H107 cm. Four drawers. Black with nickel plated brass hardware and ferrules. Philippine mahogany solids, prima vera veneer.', 'images2/images80', 'productTd(0)', 'Download/Images80', 'Chest', 'Henredon', 42, 42, 150, 'Light brown, dark', 'Wood, metal'],
		
		['81', 'Four drawers. Old World finish on hardware. Select hardwood solids, rosewood and cherry veneers.', 'images2/images81', 'productTd(0)', 'Download/Images81', 'Drawers', 'Henredon', 39, 35,85, 'Brown', 'Wood'],
		
		['82', 'Three drawers. Old world finish on hardware. Select hardwood solids, cherry veneer. Select hardwood solids, rosewood and cherry veneers.', 'images2/images82', 'productTd(0)', 'Download/Images82', 'Chest', 'Henredon', 55, 38,55, 'Brown, Dark brown'
, 'Wood'],

		['83', 'Beveled mirror plate. Designed to hang vertically or horizontally, hanging system provided. Philippine mahogany solids.', 'images2/images83', 'productTd(0)', 'Download/Images83', 'Mirror', 'Henredon', 30, 50, 90, 'brown', 'wooden'],
		
		['84', '679- Remy Finish. Beveled, clear mirror. Philippine mahogany solids.Designed to hang vertically or horizontally, hanging system provided.', 'images2/images84', 'productTd(0)', 'Download/Images84', 'Mirror', 'Henredon', 42, 42, 150,'brown', 'wood'],
		
		['85', '675- Espresso finish. Beveled, clear mirror. Textured fiberglasss frame.', 'images2/images85', 'productTd(0)', 'Download/Images85', 'Mirror', 'images2', 40, 40,85, 'Dark brown', 'wood'],
		
		['86', 'Extends to W130 in. (330 cm) with two 30 in. (67 cm.) leaves. Old world finish on brass "ball" feet. Select hardwood solids, hand planed walnut veneer', 'images2/images86', 'productTd(0)', 'Download/Images86', 'Table', 'Henredon', 70, 30, 170, 'Brown', 'wood'],
		
		['87', 'Knee height 25 9/16 in. Extends to W119 in with two 22 in appron leaves. Brass ferrules. Philippine mahogany solids, American walnut and cherry veneers', 'images2/images87', 'productTd(0)', 'Download/Images87', 'Table', 'Henredon', 75, 30, 190, 'Brown', 'wood'],
		
		['88', 'Knee height 26 in. Extends to W108 in with two 24 in apron leaves. Perilo solids, cherry perillo and walnut veneers. Buy this product and you will never regret.', 'images2/images88', 'productTd(0)', 'Download/Images88', 'Table', 'Henredon', 50, 30, 160, 'Brown', 'Wood'],
		
		['89', 'Knee height 26 in. Extends to W124 with two 24 in apron leaves. Polished nickel plated trim under-top molding and leg collars, with knurled accents on lower collars.', 'images2/images89', 'productTd(0)', 'Download/Images89', 'Table', 'Henredon', 76, 30,  200,'Brown, white', 'Wood'],
		
		['90', 'Seat height 18 1/2 in. Arm height 27 in. Uphoistered slip seat, inside/outside back and arm pads. Single welt trim. Available in choice of fabric or leather. Mahoni solids, walnut burl veneer', 'images2/images90', 'productTd(0)', 'Download/Images90', 'Chair', 'Henredon', '24', '39','', 'Brown, white', 'wood, fabric'],
		
		['91', 'Arm height 26 3/4 in. (68 cm) Seat height 18 7/8 in. (48 cm). Upholstered seat and back can be ordered in any fabric or leather. Nail trim on inside and outside of back.', 'images2/images91', 'productTd(0)', 'Download/Images91', 'Chair', 'Henredon', 25, 27, 110, 'light brown', 'wood, fabric'],
		
		['92', 'Another invented piece merging features of different collected antigues, this elaborate table cabinet is also a modern exercise in scal and pattern. Regret nothing buy it.', 'images2/images92', 'productTd(0)', 'Download/Images92', 'Cabinet', 'Hickory', 55, 35, 180, 'Dark brown', 'Wood'],
		
		['93', 'Sophisticated yet simple like the Renata Stand that inspired it, the Renata Console combines modern character, open storage, and four generoud drawers. Nail trim on inside and outside of back.', 'images2/images93', 'productTd(0)', 'Download/Images93', 'Entertainment Center', 'Hickory', 60, 34, 210, 'Dark brown', 'Wood'],
		
		['94', 'With solid ash shelves and stark iron rails on casters, the prado bookcase deck and base adds architectural and visual interest to any space. Nail trim on inside and outside of back.', 'images2/images94', 'productTd(0)', 'Download/Images94', 'Bookcase', 'Hickory', 50, 58, 130, 'White, silver', 'Wood, metal'],
		
		['95', 'Thomas Brien to the resurgence of traditional kitchen worktables, this rendition combines expert cabinetry details with the attraction of a freestanding piece of furniture.', 'images2/images95', 'productTd(0)', 'Download/Images95', 'Drawer', 'Hickory', 64, 36, 215, 'Dark brown', 'Wood'],
		
		['96', 'True to Suzanne Kaslers aesthetic the Asheworth Campaign Desk is inspired by a vintage modern piece of French furniture in Suzannes personal collection. Regret nothing and buy it. Nail trim on inside and outside of back.', 'images2/images96', 'productTd(0)', 'Download/Images96', 'Desk', 'Hickory', 60, 30, 220, 'Brown', 'Wood'],
		
		['97', 'This table inspired by a unique table Suzanne found in a French Modern villa in Africa. Like the original the Dalton has a long.', 'images2/images97', 'productTd(0)', 'Download/Images97', 'Desk', 'Hickory', 80, 30, 230, 'Dark red', 'Wood']
	);
	
	<!-- This function call on homepage displaying first 12 products as a preview -->
	function HomeProduct(){
		var container = document.getElementById('AllProducts');
		var data = '';
		for(var i=1; i<=12; i++) {
		data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a>	</div>';
			}
	container.innerHTML = data;
		}
	
	
	
	//Compare function takes product id finds its integer values and displays the odd number
	
	function Compare2(){
		var container = document.getElementById('Compared1');
		var a = document.compare.product1.value;
		var b = document.compare.product2.value;
		var Cprice = products[a][9] - products[b][9];
		var Cwidth = products[a][7] - products[b][7];
		var Cheight = products[a][8] - products[b][8];
		var data ='';


		data += '<table border=0 cellpadding=7 cellspacing=0 width=auto height=auto><td class="Comparation_table_td1">Product1</td><td class="Comparation_table_td">Comparation</td><td class="Comparation_table_td2">Product2</td>';
		data += '<tr><td class="Comparation_table_tdL">ID:' + products[a][0] + '</td><td>&nbsp;</td><td class="Comparation_table_tdR">ID:' + products[b][0] + '</td></tr>';
		data += '<tr><td class="Comparation_table_tdL">Width:' + products[a][7] + '</td><td align="center" ">' + Cwidth + '</td><td class="Comparation_table_tdR">Width:' + products[b][7] + '</td></tr>';
		data += '<tr><td class="Comparation_table_tdL">Height:' + products[a][8] + '</td><td align="center" >' + Cheight + '</td><td class="Comparation_table_tdR">Height:' + products[b][8] + '</td></tr>';
		data += '<tr><td class="Comparation_table_td3">Price:' + products[a][9] + '</td><td align="center" style="border-bottom-color:#E08E14; border-bottom-style:solid; border-bottom-width:thin">' + Cprice + '</td><td class="Comparation_table_td4">Price:' + products[b][9] + '</td></tr>';
		data += '</table>';
		container.innerHTML=data; 	
	}


//End Compare JavaScript  


// Search script

function Search_Box(){
	var container = document.getElementById('AllProducts');
	var searchword=document.search1.searching.value.toLowerCase();
	var i;
	var searchs ='';
	for(i=0; i<products.length; i++){
		var data = products[i][5];
		if(data.toLowerCase() == searchword){
			searchs += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><b class="Bold">' + products[i][1] + '</b><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else searchs+='';		
	}
	container.innerHTML = searchs;
	parent.location='#Product2';
	
}



// This function displays all products if user clicked on 'Products' link
function generateProducts() {
	
	var container = document.getElementById('AllProducts');
	var data = '';
	for(var i=1; i<products.length; i++) {
		data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><b class="Bold">' + products[i][1] + '</b><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';
	}
	container.innerHTML = data;
}


// This function displays selected products information 
function productTd(id){
	var data = '';
	data +='<table id="viewProduct" style="float:left; text-align:right; font-size:18px" border="0" cellpadding="2" cellspacing="2">';
    data +='<tr><td rowspan="9"><img src="' + products[id][2] + '-big.jpg" width="500px" height="300px" /></td></tr>';
    data +='<tr><td style="text-align:left">ID:</td><td>' + products[id][0] + '</td></tr>';
    data +='<tr><td style="text-align:left">Type:</td><td>' + products[id][5] + '</td></tr>';
	data +='<tr><td style="text-align:left">Brand:</td><td>'+ products[id][6] +'</td></tr>';
	data +='<tr><td style="text-align:left">Width:</td><td>'+ products[id][7] +'</td></tr>';
   	data +='<tr><td style="text-align:left">Height:</td><td>'+ products[id][8] +'v</td></tr>';
	data +='<tr><td style="text-align:left">Price:</td><td>'+ products[id][9] +'</td></tr>';
	data +='<tr><td style="text-align:left">Color:</td><td>'+ products[id][10] +'</td></tr>';
	data +='<tr><td style="text-align:left">Material:</td><td>'+ products[id][11] +'</td></tr>'
	
	document.getElementById("content").innerHTML = data;
	parent.location='#Product';
}

// Below functions categorizes products by their own brand name and type
// Categorizing starts
function Broyhill_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Broyhill'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	function Creative_Interiors_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Creative Interiors'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	
	function Drexel_Heritage_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Drexel Heritage'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px"/></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	
	function Henredon_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Henredon'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	function Hickory_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Hickory'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	function La_Barge_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'La Barge'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	
	function Lane_Venture_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Lane Venture'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	
	function Licensing_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Licensing'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	
	function Maitland_Smith_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Maitland Smith'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	
	function Pearson_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Pearson'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	
	function Thomasville_check(){
	var container=document.getElementById('AllProducts');
	var i;
	var data ='';
	for(i=0; i<products.length; i++){
		if(products[i][6] == 'Thomasville'){
			data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px"/></a><br/><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
			else data+='';			
		}
		container.innerHTML = data;
	}
	
	
	
	function Table_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Table'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	function Bed_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Bed'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Cabinet_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Cabinet'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Bookcase_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Bookcase'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Entertainment_center_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Entertainment center'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Chest_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Chest'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Bar_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Bar'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Chair_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Chair'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
		function Mirror_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Mirror'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
		function Drawer_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Drawer'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
		function Desk_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Desk'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
		function Bench_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Bench'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	
	
	
	
	function Sofa_check() {
		var container=document.getElementById('AllProducts');
		var i;
		var data ='';
		for (i=0; i<products.length; i++){
			if (products[i][5] == 'Couch' || products[i][5] == 'Sofa'){
				data += '<div class="Products" id="product' + products[i][0] + '"><a onclick="productTd(' + i + ')"><img src="' + products[i][2] + '.jpg" width="150px" height="100px" /></a><br /><a onclick="productTd(' + i + ')">View</a>&nbsp;&nbsp;&nbsp;<a href="' + products[i][4] + '.docx">Download</a></div>';}
				else data+='';
		}
		container.innerHTML = data;
		parent.location='#Product2';
	}
	// Categorizing ends here
	
	
	// login/register javascript function and declaration of needed variables
	
	var username=Array(), password=Array(), email=Array(), j=0;
	
	function toggleDiv(element, element2){
	if(document.getElementById(element).style.display = 'none')
      {
        document.getElementById(element).style.display = 'block';
	}
	if(document.getElementById(element2).style.display = 'block')
      {
        document.getElementById(element2).style.display = 'none';
	}
	}
// Displaying register section if user clicks on link 'Register'
function toggledDiv(element, element2){
	if(document.getElementById(element).style.display = 'block')
      {
        document.getElementById(element).style.display = 'none';
	}
	if(document.getElementById(element2).style.display = 'none')
      {
        document.getElementById(element2).style.display = 'block';
	}
	}
// Displaying logout button if user entered as valid user
function logout(element, element2){
	if(document.getElementById(element).style.display = 'block')
      {
        document.getElementById(element).style.display = 'none';
	}
	if(document.getElementById(element2).style.display = 'none')
      {
        document.getElementById(element2).style.display = 'block';
	}
	}
// Register
function reg(un, p1, p2, em, mnj){
	if(p1==p2){
			var emailcheck=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
			username[j]=un;
			password[j]=p1;
			if(emailcheck.test(document.getElementById(mnj).value)){
			email[j]=em;
			alert("Succesfully registered. Now, log in.\nYour username is:\t" +un+ "\nYour password is:\t" +p1+ "\nYour e-mail is:  \t" +em+ "");
			j++;
			document.getElementById('ogDiv').style.display = 'none';
			document.getElementById('gDiv').style.display = 'block';
			$.cookie("username", "username()");
			$.cookie("password", "password()");
			$.cookie("email", "email()");
			}
			else{alert("Wrong e-Mail address");}
			}
	else{alert("Password not Match");}
}
function loggedin(usernam, passwor, h, hf, un){
	var k=0, l=0, b;
	for(l=0; l<=j; l++){
		if(username[l]!=usernam){
			alert("Wrong username or password");
			}
		else{if(password[l]==passwor){
				document.getElementById('golDiv').style.display = 'block';
				document.getElementById('gDiv').style.display = 'none';
				document.getElementById(h).value=usernam;
				document.getElementById(h).style.visibility= 'visible';
				alert("Succesfully entered"); j--;
				var b = document.getElementById('usern')
				var c = ''
				c += document.getElementById('hiddenfield').value;
				b.innerHTML = c;
				}}
		}
	}
	
	
// This function adds advertisement on advertisement section by valid user
	
function Ad_Data(InputImg, InputText, InputTitle) {
	var InputText=document.Ad.Adtextarea.value;
	var InputTitle=document.Ad.Adtitle.value;
	Ads_Data[0] = InputTitle;
	Ads_Data[1] = InputText;
	alert('Advertisement added sucessfull');
	var data = '';
	var container = document.getElementById('Advertisement');
	data += '<div class="Advertisement"><div class="AdvertisementsTitle">' + Ads_Data[0] + '</div><div class="AdvertisementsText">' + Ads_Data[1] + '</div></div>'
	container.innerHTML = data;
	window.open('Advertisement.html');
}


function Advertise() {
	var data = '';
	var container = document.getElementById('Advertisement');
	data += '<div class="Advertisements"><div class="AdvertisementsTitle">' + Ads_Data[0] + '</div><div class="AdvertisementsText">' + Ads_Data[1] + '</div></div>'
	container.innerHTML = data;	
}
