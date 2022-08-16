const person =[
    {
        id:1,
        image:"Abdul.png",
        name: "Abdul Al Amin",
        job:"Web Developer",
        info: "It's me Abdul, an experienced, professional Web developer with 3years high-end Web development services using following technologies (WordPress - WooCommerce - Wix - Shopify - Custom Frontend development - PHP Laravel and Angular). I have completed 100+ Websites for clients in a broad range of industries, from small and mid-level businesses to high-end companies & still counting. I build top quality,user-friendly and responsive custom websites with SEO friendly structure.",



    },
    {
        id:2,
        image:"Omor.png",
        name: "Omor Faruk Rony",
        job:"Web Developer",
        info: "It's me Omor, an experienced, professional Web developer with 3years high-end Web development services using following technologies (WordPress - WooCommerce - Wix - Shopify - Custom Frontend development - PHP Laravel and Angular). I have completed 100+ Websites for clients in a broad range of industries, from small and mid-level businesses to high-end companies & still counting. I build top quality,user-friendly and responsive custom websites with SEO friendly structure.",



    },
    {
        id:3,
        image:"Ivan A.png",
        name: "Ivan Parker",
        job:"Web Developer",
        info: "It's me Ivan, an experienced, professional Web developer with 3years high-end Web development services using following technologies (WordPress - WooCommerce - Wix - Shopify - Custom Frontend development - PHP Laravel and Angular). I have completed 100+ Websites for clients in a broad range of industries, from small and mid-level businesses to high-end companies & still counting. I build top quality,user-friendly and responsive custom websites with SEO friendly structure.",



    },
    {
        id:4,
        image:"Jim J.png",
        name: "Jim Jony",
        job:"Video Editor",
        info: "It's me Jim, an experienced, professional Web developer with 3years high-end Web development services using following technologies (WordPress - WooCommerce - Wix - Shopify - Custom Frontend development - PHP Laravel and Angular). I have completed 100+ Websites for clients in a broad range of industries, from small and mid-level businesses to high-end companies & still counting. I build top quality,user-friendly and responsive custom websites with SEO friendly structure.",



    },
    {
        id:5,
        image:"Uigene L.png",
        name: "Uigene Lame",
        job:"Grapics Designer ",
        info: "It's me Gini, an experienced, professional Web developer with 3years high-end Web development services using following technologies (WordPress - WooCommerce - Wix - Shopify - Custom Frontend development - PHP Laravel and Angular). I have completed 100+ Websites for clients in a broad range of industries, from small and mid-level businesses to high-end companies & still counting. I build top quality,user-friendly and responsive custom websites with SEO friendly structure.",



    }
];
var img = document.getElementById('image');
var nume = document.getElementById('name');
var job = document.getElementById('job');
var info = document.getElementById('info');
var prev = document.getElementById('next');
var next = document.getElementById('prev');


let currentPerson=0;



window.addEventListener("DOMContentLoaded",function(){
    showperson(currentPerson);
})


function showperson(pp){
    img.src = person[currentPerson].image;
    nume.innerText= person[currentPerson].name;
    job.innerText= person[currentPerson].job;
    info.innerText= person[currentPerson].info;
    

}
next.addEventListener("click",function(){
    currentPerson++
    if( currentPerson > person.length -1){
        currentPerson=0;
    }
    showperson();

       
    
        
});


prev.addEventListener("click",function(){
    currentPerson--
    if( currentPerson < 0){
        currentPerson = person.length -1;
    }


    showperson();
       
    
        
});
setTimeout(() => {
    currentPerson=1;
    showperson();

    

    
}, 1000);
setTimeout(() => {
    currentPerson=2;
    showperson();

    

    
}, 2000);
setTimeout(() => {
    currentPerson=3;
    showperson();

    

    
}, 3000);
setTimeout(() => {
    currentPerson=4;
    showperson();

    

    
}, 4000);
setTimeout(() => {
    currentPerson=0;
    showperson();
    

    

    
}, 5000);
setTimeout(() => {
    alert('Now Select your  Developer')

    

    
},6000);





