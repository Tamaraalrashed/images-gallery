"use strict";

$.ajax("./data/page-1.json").then((imagesData) => {
  console.log(imagesData);
  imagesData.forEach((element) => {
    let newImage = new Image(element);
    newImage.renderData();
  });
  options(optionsArr);
  $("#photo-template").remove();
});

let arrayAll = [];

let optionsArr = [];

function Image(image) {
  this.title = image.title;
  this.image_url = image.image_url;
  this.keyword = image.keyword;
  this.horns = image.horns;
  arrayAll.push(this);
  optionsArr.push(this.keyword);
}

Image.prototype.renderData = function () {
  let photoTemplate = $("#photo-template").clone().addClass(this.keyword);
  photoTemplate.find("h2").text(this.title);
  photoTemplate.find("img").attr("src", this.image_url);
  photoTemplate.find("h3").text(`Keyword: ${this.keyword}`);
  photoTemplate.find("h4").text(`Number Of Horns: ${this.horns}`);
  $("main").append(photoTemplate);
};

function options(array) {
  let preventRepeat = [...new Set(array)];
  console.log(preventRepeat);

  preventRepeat.forEach((element) => {
    $("select").append(`<option value="${element}">${element}</option>`);
  });
}

function viewSelected() {
  $("select").change(function () {
    let selectedElement = $(this).val();
    $("section").hide();
    $(`.${selectedElement}`).fadeIn(100);
  });
}
viewSelected();
