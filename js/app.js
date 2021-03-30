"use strict";
let pageNumber=1;
dataImage(pageNumber);
function dataImage(no){
$.ajax(`./data/page-${no}.json`)
     .then((imagesData) => {
  console.log(imagesData);
  imagesData.forEach((element) => {
    let newImage = new Image(element);
    newImage.renderData();
    
  });
  options(optionsArr);
});
}


let arrayAll = [];
console.log('ddddddddddd', arrayAll);
let optionsArr = [];

function Image(image) {
  this.title = image.title;
  this.image_url = image.image_url;
  this.keyword = image.keyword;
  this.horns = image.horns;
  this.description=image.description;
  arrayAll.push(this);
  optionsArr.push(this.keyword);
}

Image.prototype.renderData = function () {

  let imageTemplate=$('#photo-template').html();
  let dataSet=Mustache.render(imageTemplate,this);
  $('main').append(dataSet);
  // console.log(dataSet);
  return dataSet;

};



function options(array) {
  let preventRepeat = [...new Set(array)];
  console.log(preventRepeat);

  preventRepeat.forEach((element) => {
    $(".filter").append(`<option value="${element}">${element}</option>`);
  });

}

function viewSelected() {
  $(".filter").change(function () {
    let selectedElement = $(this).val();
    console.log('dee', selectedElement );
    $("section").hide();
    
    $(`.${selectedElement}`).fadeIn(100);

  });
}
 viewSelected();

 $('#pageOne').click(selectedPage(1));
 $('#pageTwo').click(selectedPage(2));
function selectedPage(pageNum){
return function(){

  // $('#pages').change(function(){
     arrayAll=[];
    // console.log('wwwww', arrayAll);
    optionsArr = [];
    $('option').not(':eq( 0 )').remove();
    $("section").remove();
    // let pageNum=$(this).val();
    // $("section").hide();
    // pageNumber=pageNum;
    dataImage(pageNum);
    console.log(pageNum);
  }
};
// }
// selectedPage();

$('#sortTitle').click(sortTitle);
$('#sortNoHorns').click(sortHorns);

function sortHorns(){
  arrayAll.sort(function (a, b) {
    return a.horns - b.horns;
  
    });
    console.log(arrayAll);
    $('section').hide();  
//     for (let i = 0; i < arrayAll.length; i++) {
//       const element = arrayAll[i];
//       $('main').append(`<section id='eee'></section>`)
// $('section').append(`<h2>${element.keyword}</h2>`);
// // $('section').append(`<img src='${element.image_url}>`);
//  $('section').append(`<h3>${element.title}</h3>`);
//     }

const mainPage = document.querySelector('main');
for(let i=0; i<arrayAll.length; i++){
  const parentElement = document.createElement('section');
  mainPage.appendChild(parentElement);
  const hornsElement = document.createElement('h2');
  parentElement.appendChild(hornsElement);
  hornsElement.textContent=`Number Of Horns: ${arrayAll[i].horns}`;
  const imgElement = document.createElement('img');
  parentElement.appendChild(imgElement);
  imgElement.setAttribute( 'src', `${arrayAll[i].image_url}` );
  const titleElement = document.createElement('h3');
  parentElement.appendChild(titleElement);
  titleElement.textContent=`${arrayAll[i].title}`;
  const keywordElement = document.createElement('h4');
  parentElement.appendChild(keywordElement);
  keywordElement.textContent=`${arrayAll[i].keyword}`;  
    };
  }

  function sortTitle(){
    let x=arrayAll.sort(function (a, b) {
      return a.title.localeCompare(b.title);
     
    });
    console.log(x);
      $('section').hide(); 
      const mainPage = document.querySelector('main');
for(let i=0; i<arrayAll.length; i++){
  const parentElement = document.createElement('section');
  mainPage.appendChild(parentElement);
  const titleElement = document.createElement('h2');
  parentElement.appendChild(titleElement);
  titleElement.textContent=`${arrayAll[i].title}`;
  const imgElement = document.createElement('img');
  parentElement.appendChild(imgElement);
  imgElement.setAttribute( 'src', `${arrayAll[i].image_url}` );
  
    };
      
    

    } 