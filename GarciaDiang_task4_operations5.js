
const pool = require("./db");

const sql = ` SELECT 
                e.first_name, e.last_name, d.department_name, l.city, l.state_province
            FROM employees e
            INNER JOIN departments d
            ON e.department_id = d.department_id
            INNER JOIN locations l
            ON d.location_id = l.location_id
            WHERE e.first_name LIKE '%z%';
`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();