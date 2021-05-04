
const pool = require("./db");

const sql = ` SELECT 
                e.first_name, e.last_name, e.salary
            FROM employees e
            INNER JOIN employees e2
            ON e.salary < e2.salary
            AND e2.employee_id =182;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();
