




const pool = require("./db");

const sql = ` SELECT 
                j.job_title, ROUND(AVG(e.salary)) "Average Salary"
            FROM employees e
            JOIN jobs j
              ON j.job_id = e.job_id
              GROUP BY j.job_title
              ORDER BY j.job_title ASC;
           


`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();