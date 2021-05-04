




const pool = require("./db");

const sql = ` SELECT d.department_name , l.city, l.state_province
                FROM departments d
                JOIN locations l
                ON d.location_id = l.location_id;
           
`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();