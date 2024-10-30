document.addEventListener("DOMContentLoaded", function () {
    // Navigation menu creation
    const pageSlider = document.querySelector(".page-slider");
    const pageName = document.createElement("h2");
    pageName.textContent = "<!--Bac_Nguyen-->"; // Page name
    const ul = document.createElement("ul");
  
  
    // Navigation sections
    const sections = [
      { text: "About", href: "#about" },
      { text: "Personal Information", href: "#basic-information" },
      { text: "Education", href: "#Education" },
      { text: "Contact me", href: "#form" },
    ];
  
  
    // Create navigation buttons
    sections.forEach((section) => {
      const li = document.createElement("li");
      const scrollButton = document.createElement("button");
      scrollButton.setAttribute("id", "btn");
      scrollButton.textContent = section.text;
      scrollButton.addEventListener("click", () => {
        window.location.href = section.href;
      });
      li.appendChild(scrollButton);
      ul.appendChild(li);
    });
  
  
    // Append navigation elements
    pageSlider.appendChild(pageName);
    pageSlider.appendChild(ul);
  
  
    // About section
    const aboutSection = document.querySelector("#about");
    const textDiv = document.createElement("div");
    textDiv.classList.add("textBox");
  
  
    // Image
    const figure = document.createElement("figure");
    figure.classList.add("img");
    const personalImage = document.createElement("img");
    personalImage.setAttribute("id", "personalImg");
    personalImage.src = "avatar.png";
    figure.appendChild(personalImage);
  
  
    // Text
    const spanName = document.createElement("span");
    spanName.textContent = "Phuong Bac";
    const br = document.createElement("br");
    const hello = document.createElement("h1");
    hello.textContent = "Hello, I'm";
    hello.appendChild(br);
    hello.appendChild(spanName);
  
  
    const spanJobTitle = document.createElement("span1");
    spanJobTitle.setAttribute("id", "Jobtitle");
    spanJobTitle.textContent = "Web Developer";
  
  
    const brief = document.createElement("p");
    brief.textContent =
      "A Computer Science Student in Viet Nam. I desire to deepen my knowledge in various areas of technology especially Web and FinTech";
    const buttonList = document.createElement("ul");
  
  
    // Buttons
    const Resumeli = document.createElement("li");
    const ResumeButton = document.createElement("button");
    ResumeButton.textContent = "Download CV";
    ResumeButton.addEventListener("click", function () {
      const link = document.createElement("a");
      link.href = "resume.pdf";
      link.download = "resume.pdf";
      link.click();
    });
    Resumeli.appendChild(ResumeButton);
  
  
    const Contactli = document.createElement("li");
    const ContactButton = document.createElement("button");
  
  
    ContactButton.textContent = "Contact me";
    ContactButton.addEventListener("click", () => {
      window.location.href = "#form";
    });
    Contactli.appendChild(ContactButton);
  
  
    buttonList.appendChild(Resumeli);
    buttonList.appendChild(Contactli);
  
  
    // Append elements to the about section
    textDiv.appendChild(hello);
    textDiv.appendChild(spanJobTitle);
    textDiv.appendChild(brief);
    textDiv.appendChild(buttonList);
    aboutSection.appendChild(textDiv);
    aboutSection.appendChild(figure);
  
  
    // Honesty & Brief Personal Information
  
  
    const BasicInformation = document.querySelector("#basic-information");
  
  
    const Left = document.createElement("div");
    Left.setAttribute("class", "Basic-Child1");
  
  
    const LeftHeading = document.createElement("h3");
    LeftHeading.textContent = "About me and Academic Honesty";
  
  
    const LeftContent = document.createElement("p");
    LeftContent.textContent =
      "Hello, I'm Phuong Bac Nguyen, a passionate Computer Programming student with a keen interest in web development, particularly within the dynamic and innovative FinTech industry. I'm dedicated to honing my skills in languages like HTML, CSS, JavaScript, and exploring frameworks and technologies crucial for modern web development. With a commitment to academic honesty, I'm poised to contribute ethically and effectively to Final Assessment Project. This website is wholely my work without copying from other sources";
  
  
    const Date = document.createElement("p");
    Date.textContent = "Date: October 29th, 2024";
    // Append the Left to Basic Information
    Left.appendChild(LeftHeading);
    Left.appendChild(LeftContent);
    Left.appendChild(Date);
  
  
    const Right = document.createElement("div");
    Right.setAttribute("class", "Basic-Child2");
  
  
    const RightHeading = document.createElement("h3");
    RightHeading.textContent = "Basic Information";
    const ListInBasic = document.createElement("div");
    ListInBasic.setAttribute("id", "ListInBasic");
  
  
    const col_left = document.createElement("div");
    col_left.setAttribute("id", "col_left");
  
  
    const ul_left = document.createElement("ul");
    const ulSection = [
      { text: "AGE:" },
      { text: "EMAIL:" },
      { text: "LANGUAGE:" },
      { text: "CLASS SECTION:" },
      { text: "STUDENT ID:" },
      { text: "INSTRUCTOR:" },
    ];
    ulSection.forEach((ulContent) => {
      const li_ulContent = document.createElement("li");
      li_ulContent.textContent = ulContent.text;
      ul_left.appendChild(li_ulContent);
    });
  
  
    col_left.appendChild(ul_left);
    ListInBasic.appendChild(col_left);
  
  
    const col_right = document.createElement("div");
    col_right.setAttribute("id", "col_right");
  
  
    const ul_right = document.createElement("ul");
    const ulSection2 = [
      { text: "26" },
      { text: "pbnguyen@myseneca.ca" },
      { text: "Vietnamese, English" },
      { text: "NEE" },
      { text: "134254106" },
      { text: "Mark Meritt" },
    ];
  
  
    ulSection2.forEach((ulContent2) => {
      const li_ulContent2 = document.createElement("li");
      li_ulContent2.textContent = ulContent2.text;
      ul_right.appendChild(li_ulContent2);
    });
  
  
    col_right.appendChild(ul_right);
    ListInBasic.appendChild(col_right);
  
  
    Right.appendChild(RightHeading);
    Right.appendChild(ListInBasic);
  
  
    //Append Left and Right
    BasicInformation.appendChild(Left);
    BasicInformation.appendChild(Right);
  
  
    // Education Section
  
  
    const Education = document.querySelector("#Education");
    const EducationHeading = document.createElement("h3");
    EducationHeading.textContent = "Education";
    // College1
    const College1 = document.createElement("article");
    College1.setAttribute("class", "educationBox");
  
  
    //Left College1
    const LeftCollege1 = document.createElement("div");
    LeftCollege1.setAttribute("class", "LeftEducation");
  
  
    const smallCollege1Year = document.createElement("p");
    smallCollege1Year.textContent = "2022 - 2023";
  
  
    const smallCollege1Degree = document.createElement("h4");
    smallCollege1Degree.textContent = "Advanced Diploma";
  
  
    LeftCollege1.appendChild(smallCollege1Year);
    LeftCollege1.appendChild(smallCollege1Degree);
    //Right College1
    const RightCollege1 = document.createElement("div");
    RightCollege1.setAttribute("class", "RightEducation");
  
  
    const RightCollege1Degree = document.createElement("h4");
    RightCollege1Degree.textContent = "Advanced Diploma";
  
  
    const RightUni = document.createElement("h5");
    RightUni.textContent = "SENECA COLLEGE";
  
  
    const RightCollege1Location = document.createElement("h6");
    RightCollege1Location.textContent = "Toronto, Canada";
  
  
    const RightCollege1Major = document.createElement("h6");
    RightCollege1Major.textContent = "Business Marketing (BMT)";
  
  
    RightCollege1.appendChild(RightCollege1Degree);
    RightCollege1.appendChild(RightUni);
    RightCollege1.appendChild(RightCollege1Location);
    RightCollege1.appendChild(RightCollege1Major);
  
  
    //Append to College1
    College1.appendChild(LeftCollege1);
    College1.appendChild(RightCollege1);
  
  
    // College2
    const College2 = document.createElement("article");
    College2.setAttribute("class", "educationBox");
    //Left College2
    const LeftCollege = document.createElement("div");
    LeftCollege.setAttribute("class", "LeftEducation");
  
  
    const smallCollegeYear = document.createElement("p");
    smallCollegeYear.textContent = "2023 - now";
  
  
    const smallCollegeDegree = document.createElement("h4");
    smallCollegeDegree.textContent = "Advanced Diploma";
  
  
    LeftCollege.appendChild(smallCollegeYear);
    LeftCollege.appendChild(smallCollegeDegree);
    //Right College1
    const RightCollege = document.createElement("div");
    RightCollege.setAttribute("class", "RightEducation");
  
  
    const RightCollegeDegree = document.createElement("h4");
    RightCollegeDegree.textContent = "Advanced Diploma";
  
  
    const CollegeName = document.createElement("h5");
    CollegeName.textContent = "SENECA COLLEGE";
  
  
    const RightCollegeLocation = document.createElement("h6");
    RightCollegeLocation.textContent = "Toronto, Canada";
  
  
    const RightCollegeMajor = document.createElement("h6");
    RightCollegeMajor.textContent =
      "Advanced Diploma of Computer Programming and Analysis (CPA)";
  
  
    RightCollege.appendChild(RightCollegeDegree);
    RightCollege.appendChild(CollegeName);
    RightCollege.appendChild(RightCollegeLocation);
    RightCollege.appendChild(RightCollegeMajor);
  
  
    //Append to College1
    College2.appendChild(LeftCollege);
    College2.appendChild(RightCollege);
  
  
    //Append to Education
    Education.appendChild(EducationHeading);
    Education.appendChild(College1);
    Education.appendChild(College2);
  });
  
  
  function showHourlyRateInput() {
    var hiringOption = document.getElementById("hiringOption");
    var hourlyRateInput = document.getElementById("hourlyRateInput");
  
  
    if (hiringOption.checked) {
      hourlyRateInput.style.display = "block";
    } else {
      hourlyRateInput.style.display = "none";
    }
  }
  
  
  
  