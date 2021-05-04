

const pool = require("./db");

const sql = ` SELECT 
                department_name, CONCAT(first_name,' ', last_name) "Manager"
            FROM departments d
            JOIN employees m
              ON d.manager_id = m.employee_id
           


`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();