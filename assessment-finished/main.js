const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '今から100年前に:insertx:は1人で歩いていました。 何も考えずに歩いていると:inserty:に到着していました。その前で少し休憩をしていると突然:insertz:。それに驚いて、全力で家まで走って帰りました。— :insertx:は家に帰って体重計に乗ってみると、体重が50kgでした。';
const insertX = ['妹', 'お母さん', 'お父さん'];
const insertY = ['家', '学校', '塾'];
const insertZ = ['悲鳴が聞こえてきました。', '雷が鳴りました。', '怒鳴り声が聞こえてきました。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
