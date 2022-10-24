//Push the array created to the generateHTML file.
function mainHTML(team) {

    function generateManager(manager) {
        return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning">
                <h3>${manager.getName()}</h3>
                <h4>Manager</h4><i class="fa-solid fa-mug-hot"></i>
            </div>

            <div class="card-body">
                <p class="id">ID:  ${manager.getID()}</p>
                <p class="email">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
                <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>`
    }

    function generateEngineer(engineer) {
        return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning">
                <h3>${engineer.getName()}</h3>
                <h4>Engineer</h4><i class="fa-solid fa-glasses"></i>
            </div>

            <div class="card-body">
                <p class="id">ID:  ${engineer.getID()}</p>
                <p class="email">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
                <p class="github">GitHub Username: <a href="https://github.com/${engineer.getGithub()}">https://github.com/${engineer.getGithub()}</a>
                </p>
            </div>
        </div>
    </div>`
    }

    function generateIntern(intern) {
        return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-warning">
                <h3>${intern.getName()}</h3>
                <h4>Intern</h4><i class="fa-solid fa-user-graduate"></i>
            </div>

            <div class="card-body">
                <p class="id">ID:  ${intern.getID()}</p>
                <p class="email">Email: <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></p>
                <p class="school">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>`
    }


    const cardArray = [];

    cardArray.push(team.filter((member) => member.getRole() === 'Manager').map((manager) => generateManager(manager)));
    cardArray.push(team.filter((member) => member.getRole() === 'Engineer').map((engineer) => generateEngineer(engineer)).join(''));
    cardArray.push(team.filter((member) => member.getRole() === 'Intern').map((intern) => generateIntern(intern)).join(''));

    return cardArray.join('');
};


module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Employee Profile Manager</title>
</head>

<body>
    <header class="container-fluid bg-dark p-1">
        <div class="jumbotron col-12">
            <h1 class="text-center text-white">Employee Profile Manager</h1>
        </div>
    </header>
    <main>
        <div class="container-fluid">
            <div class="row justify-content-center">

            ${mainHTML(team)}

            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/a903271437.js" crossorigin="anonymous"></script>
    <script src="./"></script>
</body>

</html>
    `
};

