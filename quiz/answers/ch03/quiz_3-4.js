/*
 * Programming Quiz: Murder Mystery (3-4)
 *
 * Here's what we know! In this murder mystery there are:
 *
 * four rooms: the ballroom, gallery, billiards room, and dining room,
 * four weapons: poison, a trophy, a pool stick, and a knife,
 * and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
 *
 * We also know that each weapon corresponds to a particular room, so...
 *
 * the poison belongs to the ballroom,
 * the trophy belongs to the gallery,
 * the pool stick belongs to the billiards room,
 * and the knife belongs to the dining room.
 *
  And we know that each suspect was located in a specific room at the time of the murder.
 *
 * Mr. Parkes was located in the dining room.
 * Ms. Van Cleve was located in the gallery.
 * Mrs. Sparr was located in the billiards room.
 * Mr. Kalehoff was located in the ballroom.
 *
 * To help solve this mystery, write a combination of conditional statements that:
 *
 * sets the value of weapon based on the room and
 * sets the value of solved to true if the value of room matches the suspect's room
 *
 * Afterwards, print the following to the console if the mystery was solved:
 *
 * __________ did it in the __________ with the __________!
 *
 * Fill in the blanks with the name of the suspect, the room, and the weapon. For example,
 *
 * Mr. Parkes did it in the dining room with the knife!
 *
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == 'ballroom') {
	weapon = 'poison'
	if (suspect == 'Mr. Kalehoff') {
		solved = true
	}
} else if (room == 'gallery') {
	weapon = 'trophy'
	if (suspect == 'Ms. Van Cleve') {
		solved = true
	}
} else if (room == 'billiards room') {
	weapon = 'pool stick'
	if (suspect == 'Mrs. Sparr') {
		solved = true
	}
} else {
	weapon = 'knife'
	if (suspect == 'Mr. Parkes') {
		solved = true
	}
}

if (solved) {
	console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}
