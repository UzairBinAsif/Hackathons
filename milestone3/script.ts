console.log("Resume generation started...")

const resForm = document.getElementById("resForm") as HTMLFormElement;
const resPage = document.getElementById("resPage") as HTMLElement;
const resumeImage = document.getElementById("resumeImage") as HTMLImageElement;
const resumeAddress = document.getElementById("resumeAddress") as HTMLParagraphElement;
const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;
const resumeLanguage = document.getElementById("resumeLanguage") as HTMLParagraphElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLElement;
const resumePhone = document.getElementById("resumePhone") as HTMLElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;



resForm.addEventListener("submit", async (event: Event) => {
  
  event.preventDefault();
  
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const number = (document.getElementById("number") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const language = (document.getElementById("language") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  let work = (document.getElementById("work") as HTMLTextAreaElement).value;
  const imageInput = document.getElementById("image") as HTMLInputElement;

  const imageFile = imageInput.files ? imageInput.files[0] : null;
  
  let imageBase64 = '';

  if(imageFile){
    try {

      imageBase64 = await convertToBase64(imageFile);
      
      localStorage.setItem("resumeImage", imageBase64)
      resumeImage.src = imageBase64;
    } catch (error) {
      console.error("Error converting Image to Base64", error)
    }
  }

  document.querySelector(".container")?.classList.add("hidden");
  ;
  resPage.classList.remove("hidden");

  resumeAddress.textContent = address;
  resumeName.textContent = name;
  resumeEmail.textContent = email;
  resumePhone.textContent = number;
  
  resumeExperience.innerHTML = work.split(",").map(wo => `<li>${wo}</li>`).join("");
  
  resumeLanguage.innerHTML = language.split(",").map(lang => `<li>${lang}</li>`).join("");

  resumeEducation.innerHTML = education.split(",").map(ed => `<li>${ed.trim()}</li>`).join("");

  resumeSkills.innerHTML = skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("");

});

function convertToBase64(file:File):Promise<string>{
    return new Promise((res, rej)=>{
        const reader = new FileReader();

        reader.onloadend = () => res (reader.result as string)
        reader.onerror = rej;
        reader.readAsDataURL(file);
    })
} 