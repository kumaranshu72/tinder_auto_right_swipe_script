function get_likes()
{
  var time_dur = 1000;
  setInterval(function(){document.getElementsByClassName('recsGamepad__button--like')[0].click()},time_dur);
}
get_likes()
