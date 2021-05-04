





const pool = require("./db");

const sql = ` SELECT 
                d.department_name, ROUND(AVG(e.salary)) "Average Salary", COUNT(e.commission_pct) "No. of Employees who got commission"
            FROM departments d
            JOIN employees e
              ON d.department_id = e.department_id
              GROUP BY d.department_name;
           


`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();