// ###### turn pages when click next or prev button ###### ///

const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");

      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

// ###### contact me button ###### //

const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");

contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// ###### Reverse index function ###### //

let totalPages = pages.length;
let pageNmbr = 0;

function reverseIndex() {
  pageNmbr--;
  console.log(pageNmbr);
  if (pageNmbr < 0) {
    pageNmbr = totalPages - 1;
  }
}

// ###### back profile button ###### //

const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNmbr].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNmbr].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// ###### opening animation ###### //

const rightCover = document.querySelector(".cover.cover-right");
const leftPage = document.querySelector(".book-page.page-left");

// ###### opening right cover animation ###### //

setTimeout(() => {
  rightCover.classList.add("turn");
}, 2100);

// ###### opening all pages animation ###### //

setTimeout(() => {
  rightCover.style.zIndex = -1;
}, 2800);

// ###### opening left pages animation ###### //

setTimeout(() => {
  leftPage.style.zIndex = 18;
}, 3200);

pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNmbr].classList.remove("turn");

    setTimeout(() => {
      reverseIndex();
      pages[pageNmbr].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

// ###### Sending Email ###### //

const form = document.querySelector("form");

const fname = document.getElementById("name");
const phoneNo = document.getElementById("phone");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

function Mailing() {
  const emailData = `Name: ${fname.value} <br> Contact Number:
   ${phoneNo.value}<br> Email: ${email.value} <br> Message: ${msg.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sonamrathour.0012@gmail.com",
    Password: "F1592B31A8AC40596078904BAD3BC7B1E618",
    To: "sonamrathour.0012@gmail.com",
    From: "sonamrathour.0012@gmail.com",
    Subject: "New Client",
    Body: emailData,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Good job!",
        text: "You contacted succesfully!",
        icon: "success",
      });
      form.reset();
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Mailing();

  // return false;
});
