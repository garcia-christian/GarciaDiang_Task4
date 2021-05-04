
const pool = require("./db");

const sql = ` SELECT 
                e.first_name "Employee", m.first_name "Manager"
            FROM employees e
            LEFT OUTER JOIN employees m
            ON e.manager_id = m.employee_id;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();