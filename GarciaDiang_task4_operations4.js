



const pool = require("./db");

const sql = ` SELECT 
                e.first_name, e.last_name, e.department_id,d.department_name
            FROM employees e
            INNER JOIN departments d
            ON e.department_id = d.department_id
            WHERE e.department_id = 40 OR e.department_id = 80;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();