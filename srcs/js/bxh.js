function addComment() {
  const usernameInput = document.getElementById('username-input');
  const commentInput = document.getElementById('comment-input');
  const commentList = document.getElementById('comment-list');

  if (usernameInput.value.trim() !== '' && commentInput.value.trim() !== '') {
      const commentItem = createCommentItem(usernameInput.value, commentInput.value);
      commentList.appendChild(commentItem);

      // Save the comment to local storage
      saveComment(usernameInput.value, commentInput.value);

      // Clear the input fields
      usernameInput.value = '';
      commentInput.value = '';
  }
}

function createCommentItem(username, comment) {
  const commentItem = document.createElement('div');
  commentItem.className = 'comment-item';
  commentItem.innerHTML = `<strong>${username}:</strong> ${comment}
                           <div class="comment-actions">
                               <button onclick="deleteComment(this)">Xóa</button>
                               <button onclick="reportComment(this)">Báo cáo</button>
                           </div>`;
  return commentItem;
}

function saveComment(username, comment) {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push({ username, comment });
  localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
  const commentList = document.getElementById('comment-list');
  const comments = JSON.parse(localStorage.getItem('comments')) || [];

  comments.forEach(comment => {
      const commentItem = createCommentItem(comment.username, comment.comment);
      commentList.appendChild(commentItem);
  });
}

function deleteComment(button) {
  const commentItem = button.parentNode.parentNode;
  const username = commentItem.querySelector('strong').textContent.slice(0, -1); // Remove colon
  const comment = commentItem.childNodes[1].nodeValue.trim();

  // Remove from local storage
  let comments = JSON.parse(localStorage.getItem('comments'));
  comments = comments.filter(c => !(c.username === username && c.comment === comment));
  localStorage.setItem('comments', JSON.stringify(comments));

  // Remove from DOM
  commentItem.remove();
}

function reportComment(button) {
  const commentItem = button.parentNode.parentNode;
  const username = commentItem.querySelector('strong').textContent.slice(0, -1); // Remove colon
  const comment = commentItem.childNodes[1].nodeValue.trim();
  alert(`Bình luận của ${username} đã được báo cáo.`);
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const themeButton = document.getElementById('toggle-theme');
  if (body.classList.contains('dark-mode')) {
      themeButton.textContent = '☀️';
  } else {
      themeButton.textContent = '🌙';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function handleScroll() {
  const scrollTopButton = document.getElementById('scroll-to-top');
  const scrollBottomButton = document.getElementById('scroll-to-bottom');
  const midPage = document.documentElement.scrollHeight / 2;

  if (window.scrollY > midPage) {
      scrollTopButton.style.display = 'block';
      scrollBottomButton.style.display = 'none';
  } else {
      scrollTopButton.style.display = 'none';
      scrollBottomButton.style.display = 'block';
  }
}

// Sample reviews data
const reviews = [
  { user: 'John', content: 'Rất hay! Mình rất thích phần này.', rating: 5 },
  { user: 'Anna', content: 'Phim rất tuyệt vời!', rating: 4 },
  { user: 'Michael', content: 'Hơi dài nhưng rất đáng xem.', rating: 4 }
];

function loadReviews() {
  const reviewList = document.getElementById('review-list');

  reviews.forEach(review => {
      const reviewItem = document.createElement('div');
      reviewItem.className = 'review-item';
      reviewItem.innerHTML = `<strong>${review.user}:</strong> ${review.content} <span>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>`;
      reviewList.appendChild(reviewItem);
  });
}

// Load reviews and comments on page load
document.addEventListener('DOMContentLoaded', () => {
  loadReviews();
  loadComments();
  document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
  document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);
  document.getElementById('scroll-to-bottom').addEventListener('click', scrollToBottom);
  window.addEventListener('scroll', handleScroll);
});

////share_to_facebook
function shareToFacebook() {
  // URL bạn muốn chia sẻ
  var url = "https://example.com";

  // Mở cửa sổ mới với URL của Facebook chứa URL muốn chia sẻ
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
}
//////slide
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
      for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});


function showMore() {
  var films = document.querySelectorAll('.list-films ul li');
  var showMoreBtn = document.getElementById('show-more');
  for (var i = 0; i < films.length; i++) {
      films[i].style.display = 'block';
  }
  showMoreBtn.style.display = 'none';
}
