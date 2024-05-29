// TODO: Query for the button with an id "theme-button"
let themeButton=document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => 
{

    // Write your code to manipulate the DOM here
     document.body.classList.toggle("dark-mode");
     document.body.style.setProperty("--text-primary", "white !important");
}; 

     

// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.getElementById('sign-now-button');
const printout= document.querySelector('.signatures')


const addSignature = (person) => 
  {
    
    const signature = document.createElement('p');
    signature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this`;
    printout.appendChild(signature);
    // document.querySelector('.signatures').appendChild(signature);

  }
// signNowButton.addEventListener('click', addSignature);

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete the validation form

const validateForm = (e) =>
{
  e.preventDefault();
  let containsErrors = false;
  
  let petitionInputs = document.getElementById("sign-petition").elements;
  
  // TODO: Loop through all inputs
  let person = {
    name:petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  };
  
  for (let i=0; i<petitionInputs.length; i++)
  {
    
      if (person.name.length < 2) {
        petitionInputs[0].classList.add('error');
        containsErrors = true;
      } else {
        petitionInputs[0].classList.remove('error');
      }

      if (person.hometown.length < 2) {
        petitionInputs[1].classList.add('error');
        containsErrors = true;
      } else {
        petitionInputs[1].classList.remove('error');
      }
  }
  if (!containsErrors) 
  {
     addSignature(person);
     toggleModal(person);
    // Pass the person object to addSignature
     for (let i = 0; i < petitionInputs.length; i++)
     {
           petitionInputs[i].value = '';
     }
  // if(containsErrors==false)
  // {
  //         addSignature();
  //         for(i=0; i<petitionInputs.length; i++)
  //           {
  //             petitionInputs[i].value= '';
  //             containsErrors=false;
  //           }
  }
      
}


signNowButton.addEventListener('click', validateForm);


// Add a click event listener to the "Sign Now" button



let animation = {
  revealDistance:150,
  initialOpacity:0,
  transitionDelay:0,
  transitionDuration:'2s',
  transitionProperty:'all',
  transitionTimingFunction:'ease',
}

const revealableContainers=document.querySelectorAll('.revealable');

const reveal= () => {

  for(let i=0; i<revealableContainers.length; i++)
    {
      let windowHeight=window.innerHeight;
      let topOfRevealableContainer=revealableContainers[i].getBoundingClientRect().top;

      if(topOfRevealableContainer<windowHeight-animation.revealDistance)
      {
        revealableContainers[i].classList.add('active');
      }
      else
      {
        revealableContainers[i].classList.remove('active');
      }
    }
}

window.addEventListener('scroll', reveal)

let intervalId;
const toggleModal =(person) =>{
  let modal = document.getElementById('thanks-modal');
  let modalContent = document.getElementById('thanks-modal-content');
  let modalImage = document.getElementById('thanks-modal-image');
  
  modal.style.display = 'flex';
  modalContent.textContent =`Thank you for your support ${person.name} !`;
  modalImage.src = './image/congrats.jpeg';
  intervalId = setInterval(scaleImage,500);
  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  }, 4000);
}

let scaleFactor=1;
const modalImage = document.querySelector('#thanks-modal-image');

const scaleImage = () =>{
  if(scaleFactor===1)
  {
    scaleFactor=0.8;
  }
  else
  {
    scaleFactor=1;
  }
  modalImage.style.transform=`scale(${scaleFactor})`;
}

setTimeout(() => {
  clearInterval(intervalId);
}, 3000);


// for (let i=0; i<petitionInputs.length; i++)
//   {
//     if(petitionInputs[i].value.length < 2)
//     {
//       petitionInputs[i].classList.add('error');
//       containsErrors=true;
//     }
//     else
//     {
//       petitionInputs[i].classeList.remove('error');
//     }
//   }
// if(containsErrors==false)
// {
//     addSignature();
//     for(i=0; i<petitionInputs.length; i++)
//       {
//         petitionInputs[i].value= '';
//         containsErrors=false;
//       }
// }


//   if(petitionInputs[i].value.length < 2)
//   {
//     petitionInputs[i].classList.add('error');
//     containsErrors=true;
//   }
//   else
//   {
//     petitionInputs[i].classeList.remove('error');
//   }
// }


// const addSignature = (e) =>
// {
//   e.preventDefault();
  // const name = document.getElementById("name").value;
  // const hometown = document.getElementById("hometown").value;
  // const signature = document.createElement('p');
  // signature.textContent = `🖊️ ${name} from ${hometown} supports this`;
  // printout.appendChild(signature);