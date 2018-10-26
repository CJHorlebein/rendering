function renderStudents(students) {
    var results = `<div class="text-center mt-5">
    <h1 style="font-weight: bold;">Roll Call!</h1>
    `

    results += `
    <div style="background-color: red; width: 200px; margin: 0 auto;">
        <span style="font-size: 24px; padding: 0 0 0;">
            ${students[0].name}
        </span>    
        <div style="padding: 0; margin: 0 auto;">
            ${students[0].isPresent ? 'present': 'absent'}
        </div>
    </div>    
    `
    results += `</div>`
    return results
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