
function renderSurveys(surveys) {
    var html = `<div class="text-center mt-5">`;
    surveys.forEach(survey => {
        html += `
            <div style="width: 500px; margin: 0 auto; text-align: left;">
                <h1 style="margin-bottom: 0; padding: 0; line-height: 0.5;">${survey.title}</h1>
                <hr />
        `
        survey.fields.forEach(question => {
            html += `
                    <p>Did you go to the movies last month</p>
            `
        })
        html += `</div>`
    });
    html += `</div>`
    return html;
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}