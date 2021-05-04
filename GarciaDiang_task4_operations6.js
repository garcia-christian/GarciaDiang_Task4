
const pool = require("./db");

const sql = ` SELECT 
               d.department_id, d.department_name, COUNT(e.department_id) "Number of employees"
            FROM employees e
            RIGHT OUTER JOIN departments d
            ON e.department_id = d.department_id
            GROUP BY d.department_id
            ORDER BY d.department_id ASC;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();