




const pool = require("./db");

const sql = ` SELECT 
                c.country_name, l.city, COUNT(d.department_id)
            FROM countries c
            JOIN locations l
              ON c.country_id = l.country_id
            JOIN departments d
            ON d.location_id = l.location_id

              WHERE d.department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(department_id) >= 2)
              GROUP BY c.country_name, l.city;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();