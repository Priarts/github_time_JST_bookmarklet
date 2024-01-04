javascript: (function () {
  const timeObject = document.querySelectorAll('relative-time');
  timeObject.forEach((item,index,array) => {
    const temporaryDateObject = new Date(item.datetime);
    const localDateTime = temporaryDateObject.toLocaleString('ja-JP', {timeZone:'JST'});
    item.shadowRoot.innerHTML = localDateTime;
  });
})();