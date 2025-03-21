console.log("hellow")


//MOVIE URL
function playMovie(id) {
    let url = {
        1:"https://drive.google.com/file/d/18erCJVQODbr5pJt75UUNYlWCAEeMi3bo/preview",
        2:"https://drive.google.com/file/d/14ADfr1oP3wU4R_fSBhZ0qj18tcB1aTQl/preview",
        3:"https://drive.google.com/file/d/1J2MDRNP-Mh8GVazP6TlGtypjjITfkG-L/preview",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
        10:""
    }
    let frame = document.getElementById("movieFrame");
    frame.src = url[id];
    frame.style.display = "block";
}
//MOVIE TITLE
function movieName(id){
    let name = {
        1:"In Time",
        2:"Smile 1 (2022) 720p Blueray",
        3:"Smile 2 (2024) 720p HEVC",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:"",
        10:""
    }
    let t = document.getElementById("title")
    t.innerHTML=name[id] || "Movie Not Available"
}
//BUTTON NAME MOVIE
function movie(){
    let n ={
        1:"🎥 In Time",
        2:"🎥 Smile 1",
        3:"🎥 Smile 2",
        4:"",
        5:"",
        6:"",
        7:"",
        8:"",
        9:""
    }
    const movieElements = document.querySelectorAll(".movie-list .movie");

    movieElements.forEach((e,i)=>{
        i = i + 1;
        e.innerHTML = n[i] || "🎥Not Loaded"

        if(e.innerHTML==="🎥Not Loaded"){
            e.addEventListener("click",()=>{
                alert("Adat hai ungli kerne ki 🙂😂")
            })
        }
        
    })
}
movie()



//SERIES URL
function playSeries(id) {
    let url = {
        1:"https://drive.google.com/file/d/1G2WuuDlyPWO6SSIDcE0WUNRHdrpZq-54/preview",
        2:"https://drive.google.com/file/d/1yrNJ3Xr-Akej4qiKFfEugnLyb-buwXiG/preview",
        3:"https://drive.google.com/file/d/1WQmzdiqNT7Xww-bZR1RH3T9BGIanxNcn/preview",
        4:"https://drive.google.com/file/d/1xvhPAXie88HmZnx_tTh8cLhm3vJ92-J_/preview",
        5:"https://drive.google.com/file/d/1viYT6wZy_1kFY7kVeEVdsGS3olKN27uA/preiew",
        6:"https://drive.google.com/file/d/14pSiKmH-pD1mdrupC6LsHbKO9sVRooNY/preview",
        7:"https://drive.google.com/file/d/1lqcvp3wNofx-iM28UTheh0cCeI_e-3wY/preview",
        8:"https://drive.google.com/file/d/1M_Jduc8ZQ6iojvZ0iX4ncJLLyp8xg3yb/preview"
    }
    let frame = document.getElementById("movieFrame");
    frame.src = url[id];
    frame.style.display = "block";

}
//SERIES TITLE
function seriesName(id){

    let name = {
        1:"Reacher S02 E01",
        2:"Reacher S02 E02",
        3:"Reacher S02 E03",
        4:"Reacher S02 E04",
        5:"Reacher S02 E05",
        6:"Reacher S02 E06",
        7:"Reacher S02 E07",
        8:"Reacher S02 E08"
    }
    let t = document.getElementById("title")
    t.innerHTML=name[id] || "Movie Not Available"
}
//BUTTON NAME SERIES
function series(){
    let n ={
        1:"🎥 Reacher S02 E01",
        2:"🎥 Reacher S02 E02",
        3:"🎥 Reacher S02 E03",
        4:"🎥 Reacher S02 E04",
        5:"🎥 Reacher S02 E05",
        6:"🎥 Reacher S02 E06",
        7:"🎥 Reacher S02 E07",
        8:"🎥 Reacher S02 E08"
    }
    const movieElements = document.querySelectorAll(".movie-list .series");

    let i = 0;
    movieElements.forEach((e)=>{
        i = i + 1;
        e.innerHTML = n[i] || "🎥Not Loaded"
        
    })
}
series()


function openHome(url){
    document.querySelector(".heading").addEventListener("click", ()=>{
        window.location.href="index.html"
    })
}
openHome()

// function SeriesLink(){
//     const url = {
//         1 : "series.html",
//         2 : "index.html",
//         3 : "index.html"
//     }

//     const sub = document.querySelectorAll(".series-list .movies");

//     sub.forEach((e,i)=>{
//         let num = i+1;
//         e.addEventListener("click", ()=>{
//             window.location.href = url[num]
//         })
//     })

// }
// SeriesLink()

function SeriesLink() {
    const url = {
        1: "series1.html",
        2: "",
        3: ""
    };

    document.querySelectorAll(".series-list .movie").forEach((e, i) => {
        let num = i + 1;
        e.addEventListener("click", () => {
            if (url[num]) {
                window.location.href = url[num]; // Redirect if URL exists
            } else {
                alert("Jab likha hai 'Not Available' to kuo ungli keri usme 😂"); // Show message if URL is missing
            }
        });
    });
}

SeriesLink(); // Call the function
