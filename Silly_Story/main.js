const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = (" :insertY:, :insertZ: set out on a journey to :insertX:, where they hoped to find the ultimate sandwich at the ripe old temperature of 39 fahrenheit. :insertZ: didnt come back with a sandwich, but 1000 pounds worth of :insertW:! Oh and Bob was there too.");
const insertX = ["the store","the park",":insertZ:land","the underworld"];
const insertY = ["In the evening","In the morning","At midnight"];
const insertZ = ["Maude of Mayhem","Nigel the Nefarious","Percival Thunderpants","Doris Doomfist","Clive the Chaotic","Agnes the Annihilator","Eugene the Unyielding","Mildred the Menace","Stanley the Slapper of Sandwiches"];
const insertW = ["insects","pebbles","minced meat"]

randomize.addEventListener('click', result);

function result() {
	let newStory = storyText;

	const xItem = randomValueFromArray(insertX);
	const yItem = randomValueFromArray(insertY);
	const zItem = randomValueFromArray(insertZ);
	const wItem = randomValueFromArray(insertW);
	
	newStory = newStory.replaceAll(":insertX:", xItem);
	newStory = newStory.replaceAll(":insertY:", yItem);
	newStory = newStory.replaceAll(":insertZ:", zItem);
	newStory = newStory.replaceAll(":insertW:", wItem);
	
  if(customName.value !== '') {
    const name = customName.value;
	
	newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(1000/14) + " stones";
    const temperature =  Math.round( (39-32) * 5 / 9 ) + " centigrade";

	newStory = newStory.replaceAll("39 fahrenheit", temperature);
	newStory = newStory.replaceAll("1000 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
