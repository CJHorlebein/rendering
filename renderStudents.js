function renderStudents(students) {
    var results = `<div class="text-center mt-5">
        <h1 style="font-weight: bold;">Roll Call!</h1>
        `
    students.forEach(element => {
        var bg = element.isPresent ? '#B2FF46' : '#FF5D46';
        results += `
            <div style="background-color: ${bg}; border: solid grey 1px; width: 150px; margin: 0 auto 5px; padding: 0;">
                <div style="padding: 0; margin: 0; line-height: 1; padding-top: 8px; font-size: 24px;">
                    ${element.name}
                </div> 
                <div style="padding-bottom: 16px; margin: 0; line-height: .8;">
                    ${element.isPresent ? 'present' : 'absent'}
                </div>
            </div>    
            `;
    });

    results += `</div>`;
    return results;
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}