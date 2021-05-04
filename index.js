//import
const express = require("express");
const pool = require("./db");
const app = express();
const cors = require("cors");


//middle ware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.get("/GarciaDiang_task2_1", async (req, res) => {
    try {
        const sql = ` SELECT 
        e.first_name, e.last_name, e.department_id,d.department_name
    FROM employees e
    INNER JOIN departments d
    ON e.department_id = d.department_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_2", async (req, res) => {
    try {
        const sql = `SELECT 
        e.first_name, e.last_name, e.department_id,d.department_name
    FROM employees e
    INNER JOIN departments d
    ON e.department_id = d.department_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_3", async (req, res) => {
    try {
        const sql = ` SELECT 
        e.first_name, e.last_name, e.salary, j.job_title
    FROM employees e
    INNER JOIN jobs j
    ON e.job_id = j.job_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_4", async (req, res) => {
    try {
        const sql = `SELECT 
        e.first_name, e.last_name, e.department_id,d.department_name
    FROM employees e
    INNER JOIN departments d
    ON e.department_id = d.department_id
    WHERE e.department_id = 40 OR e.department_id = 80;
`;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_5", async (req, res) => {
    try {
        const sql = `SELECT 
        e.first_name, e.last_name, d.department_name, l.city, l.state_province
    FROM employees e
    INNER JOIN departments d
    ON e.department_id = d.department_id
    INNER JOIN locations l
    ON d.location_id = l.location_id
    WHERE e.first_name LIKE '%z%'; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_6", async (req, res) => {
    try {
        const sql = `SELECT 
        d.department_id, d.department_name, COUNT(e.department_id) "Number of employees"
     FROM employees e
     RIGHT OUTER JOIN departments d
     ON e.department_id = d.department_id
     GROUP BY d.department_id
     ORDER BY d.department_id ASC; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.post("/GarciaDiang_task2_7/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const sql = `SELECT 
        e.first_name, e.last_name, e.salary
    FROM employees e
    INNER JOIN employees e2
    ON e.salary < e2.salary
    AND e2.employee_id = $1; `;
        const out = await pool.query(sql,[id]);
        res.send(out.rows)

    } catch (error) { console.error(error.message) }

});

app.get("/GarciaDiang_task2_8", async (req, res) => {
    try {
        const sql = `SELECT 
        e.first_name "Employee",
         m.first_name "Manager"
    FROM employees e
    JOIN employees m
      ON e.manager_id = m.employee_id `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_9", async (req, res) => {
    try {
        const sql = `SELECT d.department_name , l.city, l.state_province
        FROM departments d
        JOIN locations l
        ON d.location_id = l.location_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_10", async (req, res) => {
    try {
        const sql = ` SELECT 
        e.first_name, e.last_name, e.department_id, d.department_name
    FROM employees e
    LEFT OUTER JOIN departments d
    ON e.department_id = d.department_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_11", async (req, res) => {
    try {
        const sql = `SELECT 
        e.first_name "Employee", m.first_name "Manager"
    FROM employees e
    LEFT OUTER JOIN employees m
    ON e.manager_id = m.employee_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_12", async (req, res) => {
    try {
        const sql = `SELECT 
        d.department_name, ROUND(AVG(e.salary)) "Average Salary", COUNT(e.commission_pct) "No. of Employees who got commission"
    FROM departments d
    JOIN employees e
      ON d.department_id = e.department_id
      GROUP BY d.department_name; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_13", async (req, res) => {
    try {
        const sql = `SELECT 
        department_name, CONCAT(first_name,' ', last_name) "Manager"
    FROM departments d
    JOIN employees m
      ON d.manager_id = m.employee_id; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_14", async (req, res) => {
    try {
        const sql = ` SELECT 
        j.job_title, ROUND(AVG(e.salary)) "Average Salary"
    FROM employees e
    JOIN jobs j
      ON j.job_id = e.job_id
      GROUP BY j.job_title
      ORDER BY j.job_title ASC; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});

app.get("/GarciaDiang_task2_15", async (req, res) => {
    try {
        const sql = `SELECT 
        c.country_name, l.city, COUNT(d.department_id)
    FROM countries c
    JOIN locations l
      ON c.country_id = l.country_id
    JOIN departments d
    ON d.location_id = l.location_id

      WHERE d.department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(department_id) >= 2)
      GROUP BY c.country_name, l.city; `;
        const out = await pool.query(sql);
        res.send(out.rows)

    } catch (error) { console.erro(error.message) }

});





//listen to server
app.listen(5000, () => {

    console.log("Server started as localhost at port: 5000")

})