$( document ).ready(function() 
{
    $(".dropdown-trigger").dropdown();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });

    $('.collapsible').collapsible();

    $('.tabs').tabs()

    $('.modal').modal();

    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });

    $('.tooltipped').tooltip();
});