<style>
body, html{
padding: 0px;
margin: 0px;
-webkit-user-select: none;
}
</style>
<!doctype>

<CANVAS onmousedown="iEvents.clickDown = true;	iEvents.clickOrTouchDown = true;"
		onmouseup="iEvents.clickUp = false;		iEvents.clickOrTouchDown = false;" id=htmlCanvas></CANVAS>

<head>
	<script src="../globalsFunctions.js"></script>
	<script src="before.js"></script>
	<script src="draw.js"></script>
	<script src="collisions.js"></script>
	<script src="update.js"></script>
	<script src="lost.js"></script>
	<script src="script.js"></script>
</head>

<div id='out'>

</div>