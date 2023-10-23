$.ajax({
    url: 'https://it-its.id/api/movies',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      const movies = data.slice(0, 10);
      const cards = document.querySelectorAll('.card');

      for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('.card-title');
        const plot = cards[i].querySelector('.card-text');

        if (movies[i]) {
          title.textContent = movies[i].Title;
          plot.textContent = movies[i].Plot;
        }
      }
    }
});