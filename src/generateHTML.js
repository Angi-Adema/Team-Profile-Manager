//Push the array created to the generateHTML file.
generateHTML = (data) => {

    //Empty array for the staff profiles.
    cardArray = [];

    //Loop through the data to generate employee data and role.
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
    };
    //Import manager info if entered.
    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        cardArray.push(managerCard);
    };
    //Import engineer info if entered.
    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        cardArray.push(engineerCard);
    };
    //Import intern info if entered.
    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        cardArray.push(internCard);
    };
    //Need to join the string data from input above.
const staffCards = cardArray.join('');

//Generate the profile page.
const generateStaff = generateStaffPage(employeeCards);
return generateStaff;
};


module.exports = ()=> {
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

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-warning">
                            <h3>Jared</h3>
                            <h4>Manager</h4><i class="fa-solid fa-mug-hot"></i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 1234</p>
                            <p class="email">Email: <a href="mailto:jared.manager@yahoo.com"></a></p>
                            <p class="office">Office Number: 1</p>
                        </div>
                    </div>
                </div>

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-warning">
                            <h3>Angi</h3>
                            <h4>Engineer</h4><i class="fa-solid fa-glasses"></i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 1234</p>
                            <p class="email">Email: <a href="mailto:angi.engineer@yahoo.com"></a></p>
                            <p class="github">GitHub Username: <a href="https://github.com/Angi-Adema">Angi-Adema</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-warning">
                            <h3>Grace</h3>
                            <h4>Employee</h4><i class="fa-solid fa-vest"></i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 1234</p>
                            <p class="email">Email: <a href="mailto:grace.employee@yahoo.com"></a></p>
                            <p class="office">Office Number: 3</p>
                        </div>
                    </div>
                </div>

                <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header bg-warning">
                            <h3>John</h3>
                            <h4>Intern</h4><i class="fa-solid fa-user-graduate"></i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 1234</p>
                            <p class="email">Email: <a href="mailto:john.intern@yahoo.com"></a></p>
                            <p class="school">School: University of Denver</p>
                        </div>
                    </div>
                </div>

                
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

