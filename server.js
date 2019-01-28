const express=require('express');
//const mongoose=require('mongoose');
const fetch=require("isomorphic-fetch")
let bodyparser=require('body-parser');
const path=require('path');
const fs = require('fs');
const app=express();

app.set('views', path.join(__dirname, '../Project/module'))
app.use(express.static('public'));
app.use(express.bodyParser());
app.post("/personal",function(req,res,next){
	let data={
	"name": req.body.name,
	"email":req.body.email,
	"phone":req.body.phone,
	"msg":req.body.msg
}
console.log(data)
fs.appendFile('temp.txt', JSON.stringify(data), function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");

})
res.redirect("/personal");
next();
})



app.get("/personal",function(req,res, next){
	app.set('view engine','ejs');
	fetch("https://api.myjson.com/bins/1cvaoo") //call to get request from json object
	.then (function(res){
		return res.json();
	})
	.then(function(myJson) {
		//response text
		
		res.render('index', {title: myJson.title,
							 div_name:myJson.dname,
							 link_name:myJson.aname,
							 desc:myJson.desc,
							 name:myJson.name,
							 desig:myJson.desig,
							 content_list:myJson.content_list,
							 ul_name:myJson.uname,
							 header_name:myJson.hname,
							 para_name:myJson.pname,
							 btn_name:myJson.bname,
							 identity:myJson.jump,

							 abt_div_name:myJson.dname1,
							 abt_header_name:myJson.hname1,
							 abt_btn_name:myJson.bname1,
							 abt_p_name:myJson.p1,
							 abt_content:myJson.content_list1,
							 abt_specs:myJson.specs,
							 abt_image:myJson.image1,
							 abt_src:myJson.src1,
							 abt_percent:myJson.val1,

							 serv_div_name:myJson.dname2,
							 serv_specs:myJson.specs2,
							 serv_content:myJson.content_list2,

							 exp_div_name:myJson.dname3,
							 exp_content:myJson.content_list3,
							 exp_duration:myJson.time,

							 blog_div_name:myJson.dname4,
							 blog_content:myJson.content_list4,
							 blog_date:myJson.date4,
							 blog_sub:myJson.sub4,
							 blog_r_content:myJson.content_right4,

							 proj_div_name:myJson.dname5,
							 proj_header_name:myJson.hname5,
							 proj_image:myJson.img5,
							 proj_src:myJson.src5,

							 test_div_name:myJson.dname6,
							 test_src:myJson.src6,
							 test_para:myJson.pname6,
							 test_link:myJson.aname6,
							 test_span:myJson.span6,
							 test_image:myJson.img6,
							 test_names:myJson.name6,
							 test_app:myJson.appr6,
							 test_date:myJson.date6,

							 contact_div_name_l:myJson.dname7_l,
							 contact_email:myJson.email,
							 contact_phone:myJson.phone,
							 contact_addr:myJson.addr7,
							 contact_info:myJson.p_details,
							 contact_icons:myJson.icon,
							 contact_div_name_r:myJson.dname7_r,
							 contact_span:myJson.span7,
							 contact_details:myJson.form,
							 contact_f_icons:myJson.ficon,
							 contact_fields:myJson.fields,
							 contact_type:myJson.type,
							 contact_id:myJson.id1,

							 footer_div_name:myJson.dname8,
							 footer_icon:myJson.iclass,
							 footer_social_link:myJson.anme8
							});
		//console.log(myJson['cname']);
		next();
	});
  
}).listen(8080);
// s

// html = "<ul>{{navbar}}</ul>"


// let json = {
// 	navbar: ["home", "abount"];

// }

// var navList = json.navbar.map(item => "<li>"+item+"</li>");

// html.replce("{{navbar}}", navList);



  // console.log(JSON.stringify(myJson));
    //let a=JSON.parse(myJson);
    //for (let i = 0; i <myJson.length; i++) {
    	
    //}
 
	