/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/Techknight.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:20, height:23, startX:10, startY:1037},
				{width:20, height:23, startX:10, startY:1066},
				{width:20, height:23, startX:10, startY:1100},
				{width:20, height:23, startX:10, startY:1130},
				{width:20, height:23, startX:10, startY:1161}
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				
				{width:20, height:23, startX:10, startY:1219},
				{width:20, height:23, startX:10, startY:1253},
				{width:20, height:23, startX:10, startY:1285},
				{width:20, height:23, startX:10, startY:1316},
				{width:20, height:23, startX:10, startY:1349}
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:21, height:21, startX:9, startY:910},
				{width:21, height:21, startX:9, startY:940},
				{width:21, height:21, startX:9, startY:973},
				{width:21, height:21, startX:9, startY:1006}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:21, height:21, startX:10, startY:398},
				{width:21, height:21, startX:10, startY:430},
				{width:21, height:19, startX:10, startY:462},
				{width:21, height:19, startX:10, startY:495},
				{width:21, height:19, startX:10, startY:526}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:21, height:21, startX:8, startY:15},
				{width:21, height:21, startX:8, startY:45},
				{width:21, height:21, startX:8, startY:80},
				{width:21, height:21, startX:8, startY:112},
				{width:21, height:21, startX:8, startY:143},
				{width:21, height:21, startX:8, startY:175},
				{width:21, height:23, startX:8, startY:205},
				{width:21, height:23, startX:8, startY:237},
				{width:21, height:23, startX:8, startY:269},
				{width:21, height:21, startX:8, startY:301}

				
			]
		}
	}
		
}