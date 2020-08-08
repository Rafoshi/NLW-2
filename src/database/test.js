const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    // proffyValue = {
    //     name: "Rafael Ioshi",
    //     avatar:
    //         "https://avatars0.githubusercontent.com/u/58670715?s=460&u=edf0aff3d4ccd3a20768ba7a10006639fc7bc119&v=4",
    //     whatsapp: "11994635595",
    //     bio:
    //         "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    // }
    // classValue = {
    //     subject: 1,
    //     cost: "20,00",
    // }
    // classScheduleValues = [
    //     {
    //         weekday: 1,
    //         time_from: 720,
    //         time_to: 1220
    //     },
    //     {
    //         weekday: 1,
    //         time_from: 520,
    //         time_to: 1220
    //     }
    // ];

    // await createProffy(db, { proffyValue, classValue, classScheduleValues });

    // Queries
    // const selectedProffys = await db.all("SELECT * FROM proffys");

    // console.log(selectedProffys);

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);

    // console.log(selectClassesAndProffys);

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "600"
        AND class_schedule.time_to > "600"
    `);

    // console.log(selectClassesSchedules);

});