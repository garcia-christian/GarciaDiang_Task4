
const pool = require("./db");

const sql = ` SELECT 
                e.first_name, e.last_name, e.salary, j.job_title
            FROM employees e
            INNER JOIN jobs j
            ON e.job_id = j.job_id;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();