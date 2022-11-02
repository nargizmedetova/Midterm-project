fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
  let fetchimg = document.querySelector('.fetchimg').insertAdjacentHTML("afterbegin", (`<img src='$(data.message)' alt=''>`)    )