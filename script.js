// ========================================
// AI HR RECRUITMENT ASSISTANT
// JavaScript
// ========================================


// RESUME UPLOAD

const resume = document.getElementById("resume");
const fileName = document.getElementById("fileName");

resume.addEventListener("change", function () {

    if (resume.files.length > 0) {

        const file = resume.files[0];

        fileName.textContent =
            "Selected Resume: " + file.name;

        showToast("Resume uploaded successfully!");

    }

});



// TOAST MESSAGE

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}



// AI ANALYSIS

const analyze =
    document.getElementById("analyze");

analyze.addEventListener("click", function () {

    const candidate =
        document.getElementById("candidate").value;

    const job =
        document.getElementById("job").value;

    const description =
        document.getElementById("description").value;


    // Validation

    if (
        candidate.trim() === "" &&
        resume.files.length === 0
    ) {

        showToast(
            "Please enter candidate name or upload resume."
        );

        return;

    }


    if (description.trim() === "") {

        showToast(
            "Please enter job description."
        );

        return;

    }


    // Loading

    analyze.disabled = true;

    analyze.innerHTML =
        "⏳ Analyzing Candidate...";

    document.getElementById("status").textContent =
        "AI analysis in progress";


    // Simulated AI processing

    setTimeout(function () {

        const score =
            Math.floor(
                76 + Math.random() * 18
            );


        // Update score

        document.getElementById("score")
            .textContent = score;


        const scoreText =
            document.getElementById("scoreText");

        const recommendation =
            document.getElementById(
                "recommendation"
            );

        const recommendationText =
            document.getElementById(
                "recommendationText"
            );


        // Recommendation logic

        if (score >= 85) {

            scoreText.textContent =
                "Excellent alignment with the selected role.";

            recommendation.textContent =
                "Shortlist Candidate";

            recommendationText.textContent =
                "Strong match across the role requirements. Recommended for the next interview stage.";

        }

        else if (score >= 80) {

            scoreText.textContent =
                "Strong alignment with the selected role.";

            recommendation.textContent =
                "Proceed to Interview";

            recommendationText.textContent =
                "Most important requirements are covered. Validate remaining skills during interview.";

        }

        else {

            scoreText.textContent =
                "Moderate alignment with the selected role.";

            recommendation.textContent =
                "Review Candidate";

            recommendationText.textContent =
                "Some role requirements need further validation before shortlisting.";

        }


        // Update status

        document.getElementById("status")
            .textContent =
            "Analysis completed";


        // Reset button

        analyze.disabled = false;

        analyze.innerHTML =
            "✨ Analyze Candidate with AI";


        showToast(
            "AI candidate analysis completed!"
        );

    }, 1500);

});



// GENERATE INTERVIEW QUESTIONS

const generate =
    document.getElementById("generate");


generate.addEventListener("click", function () {

    const job =
        document.getElementById("job").value
        || "Software Developer";


    const questions = [

        `Tell us about a project where you used your technical skills to solve a difficult problem related to ${job}.`,

        "How do you approach learning a new technology when a project has a tight deadline?",

        "Describe a time when you found and fixed a difficult bug. What was your debugging process?",

        "How do you make sure your code is secure, maintainable and easy for other developers to understand?",

        "Describe a situation where you worked with a team to successfully deliver a project."

    ];


    const questionContainer =
        document.getElementById("questions");


    questionContainer.innerHTML = "";


    questions.forEach(function(question, index) {

        const div =
            document.createElement("div");

        div.className = "question";


        div.innerHTML = `

            <span>
                ${String(index + 1).padStart(2, "0")}
            </span>

            <p>
                ${question}
            </p>

        `;


        questionContainer.appendChild(div);

    });


    showToast(
        "Interview questions generated successfully!"
    );

});



// NAVIGATION ACTIVE STATE

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});