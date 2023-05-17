// Array of exercises with descriptions
const exercises = [
  { name: 'Jumping Jacks', description: 'Stand with your feet together, then jump while spreading your arms and legs. Repeat for a set duration or number of reps.' },
  { name: 'High Knees', description: 'Run in place while lifting your knees as high as possible. Aim for a quick pace and engage your core.' },
  { name: 'Mountain Climbers', description: 'Assume a push-up position, then alternate bringing your knees towards your chest in a running motion.' },
  { name: 'Burpees', description: 'Begin in a standing position, then quickly drop into a squat, kick your legs back into a push-up position, return to the squat, and jump up.' },
   { name: 'Plank', description: ' Get into a push-up position and hold it, ensuring your body forms a straight line from head to toe. Engage your core and hold for as long as you can.' },
  { name: 'Squats', description: 'Stand with your feet shoulder-width apart, lower your body by bending your knees, and then rise back up..' },
  { name: 'Lunges', description: 'Step forward with one leg and lower your body until both knees are at 90-degree angles. Repeat with the other leg' },
  { name: 'Glute Bridges', description: ': Lie on your back, bend your knees, and lift your hips off the ground, squeezing your glutes at the top' },
  { name: 'Bicycle Crunches', description: ' Lie on your back, bring your knees toward your chest, and perform a bicycle pedaling motion with your legs while twisting your torso to touch your opposite elbow to your knee.' },
  { name:  'Push-Ups', description: ' : Start in a plank position with your hands shoulder-width apart. Lower your body by bending your arms, then push back up.' },
  { name: 'Tricep Dips', description: 'Sit on the edge of a chair or bench, place your hands on the edge beside your hips, slide your hips forward, and lower your body by bending your elbows.' },
  { name: 'Side Plank', description: ' Lie on your side and support your body with your forearm and feet, creating a straight line from head to toe. Hold the position and repeat on the other side.' },
  { name: 'Russian Twist', description: 'Sit on the ground with your knees bent and feet lifted. Twist your torso from side to side, touching the ground beside you with your hands.' },
  { name: 'Jump Squats', description: 'Perform a regular squat, but explosively jump up as high as you can, then land softly and repeat.' },
  { name: 'Flutter Kicks', description: ' Lie on your back with your legs straight. Lift one leg slightly off the ground while the other stays raised, then switch quickly in a scissor-like motion.' },
  { name: 'Plank Jacks', description: ' Start in a plank position, then jump your feet wide and back together, similar to a jumping jack motion' },
  { name: 'Wall Sit',  description: 'Lean your back against a wall and slide down until your knees are at a 90-degree angle. Hold the position for as long as possible.' },
  { name: 'Standing Calf Raises', description: ' Stand with your feet shoulder-width apart and raise your heels off the ground, then lower them back down.' },
  { name: 'Arm Circles', description: 'Extend your arms straight out to the sides, then make small circles forward and backward to work your shoulder muscles.' },
  { name: 'Jog in Place', description: 'Run in place with high knees, simulating a jogging motion to get your heart rate up.' },
 

];

// Function to read text aloud using the Web Speech API
function speakText(text) {
  const speechSynthesis = window.speechSynthesis;
  const speechText = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speechText);
}

// Function to play or pause the music
function toggleMusic() {
  const audioElement = document.getElementById('audio-element');

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

// Function to handle task completion
function handleTaskCompletion(taskName) {
  speakText('Congratulations! You did it!');
  console.log(`Completed: ${taskName}`);
}

// Function to create the exercise list
function createExerciseList() {
   const exerciseList = document.getElementById('exercise-list');


  exercises.forEach((exercise) => {
   const exerciseItem = document.createElement('div');
    exerciseItem.classList.add('exercise-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = exercise.name;
    checkbox.addEventListener('change', updateExerciseStatus);

    const label = document.createElement('label');
    label.htmlFor = exercise.name;
    label.textContent = exercise.name;

    exerciseItem.appendChild(checkbox);
    exerciseItem.appendChild(label);
    exerciseList.appendChild(exerciseItem);


    exerciseItem.addEventListener('mouseenter', () => {
      displayExerciseDescription(exercise.description);
      speakText(exercise.description);
    });

    // ...existing code...
     // Remove the exercise description when the mouse leaves the box
    exerciseItem.addEventListener('mouseleave', () => {
      displayExerciseDescription('');
    });

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        handleTaskCompletion(exercise.name);
      }
      updateExerciseStatus();
    });

    // ...existing code...
    function updateExerciseStatus(event) {
  const exerciseName = event.target.id;
  const isChecked = event.target.checked;

  if (isChecked) {
    // Perform actions when exercise is checked
    console.log(`Completed: ${exerciseName}`);
  } else {
    // Perform actions when exercise is unchecked
    console.log(`Incomplete: ${exerciseName}`);
  }
}

  });
}

// Event listener for page load
window.addEventListener('load', () => {
  speakText('Hi! Your highness  Let\'s start.');
});

// ...existing code.
// Function to display exercise description
function displayExerciseDescription(description) {
  const descriptionElement = document.getElementById('exercise-description');
  descriptionElement.textContent = description;
}

// Call the function to create the exercise list
createExerciseList();

// ...existing code.....

// Function to play or pause the music
function toggleMusic() {
  const spotifyEmbed = document.getElementById('spotify-embed');

  if (spotifyEmbed.innerHTML === '') {
    spotifyEmbed.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0fVESi7cibP10hictveVI6?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
   
  } else {
    spotifyEmbed.innerHTML = '';
  }
}

// Add event listener to play button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', toggleMusic);

// ...remaining code...
