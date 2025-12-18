/*

TemplateMo 594 nexus flow

https://templatemo.com/tm-594-nexus-flow

*/

// JavaScript Document

// Initialize mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const mobileMenuClose = document.getElementById("mobileMenuClose");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-nav a");
  const mobileMenuCta = document.querySelector(".mobile-menu-cta");
  const mobileMenuCtaButton = document.querySelector(".mobile-menu-cta a");
  const mobileMenuLogo = document.querySelector(".mobile-menu-logo");

  // Check if essential elements exist
  if (!mobileMenuBtn || !mobileMenu || !mobileMenuOverlay || !mobileMenuClose) {
    return;
  }

  function openMobileMenu() {
    mobileMenuBtn.classList.add("active");
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Reset and trigger animations for links
    mobileMenuLinks.forEach((link, index) => {
      if (link) {
        link.style.animation = "none";
        link.style.opacity = "0";
        link.style.transform = "translateX(20px)";

        // Apply animation with delay
        setTimeout(() => {
          if (link) {
            link.style.animation = `slideInLeft 0.4s ease forwards`;
          }
        }, 250 + index * 100);
      }
    });

    // Animate CTA button
    if (mobileMenuCta) {
      mobileMenuCta.style.animation = "none";
      mobileMenuCta.style.opacity = "0";
      mobileMenuCta.style.transform = "translateY(20px)";

      setTimeout(() => {
        if (mobileMenuCta) {
          mobileMenuCta.style.animation = "slideInUp 0.4s ease forwards";
        }
      }, 100);
    }
  }

  function closeMobileMenu() {
    mobileMenuBtn.classList.remove("active");
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close mobile menu
  mobileMenuClose.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  });

  mobileMenuOverlay.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMobileMenu();
  });

  // Close menu when clicking on navigation links
  mobileMenuLinks.forEach((link) => {
    if (link) {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  // Close menu when clicking on CTA button
  if (mobileMenuCtaButton) {
    mobileMenuCtaButton.addEventListener("click", (e) => {
      if (mobileMenuCtaButton.getAttribute("href") === "#") {
        e.preventDefault();
      }
      closeMobileMenu();
    });
  }

  // Close menu when clicking on logo
  if (mobileMenuLogo) {
    mobileMenuLogo.addEventListener("click", () => {
      closeMobileMenu();
    });
  }

  // Close mobile menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Prevent body scroll when menu is open
  if (mobileMenu) {
    mobileMenu.addEventListener("touchmove", (e) => {
      e.stopPropagation();
    });
  }
}

// Initialize mobile menu when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeMobileMenu);
} else {
  initializeMobileMenu();
}

// Generate Matrix Rain Effect
function generateMatrixRain() {
  const matrixRain = document.getElementById("matrixRain");
  const characters =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const columns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < columns; i++) {
    const column = document.createElement("div");
    column.className = "matrix-column";
    column.style.left = `${i * 20}px`;
    column.style.animationDuration = `${Math.random() * 5 + 10}s`;
    column.style.animationDelay = `${Math.random() * 5}s`;

    // Generate random characters for the column
    let text = "";
    const charCount = Math.floor(Math.random() * 20 + 10);
    for (let j = 0; j < charCount; j++) {
      text += characters[Math.floor(Math.random() * characters.length)] + " ";
    }
    column.textContent = text;

    matrixRain.appendChild(column);
  }
}

// Generate Floating Particles
function generateParticles() {
  const particlesContainer = document.getElementById("particlesContainer");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 20}s`;
    particle.style.animationDuration = `${Math.random() * 10 + 20}s`;

    particlesContainer.appendChild(particle);
  }
}

// Generate Data Streams
function generateDataStreams() {
  const dataStreams = document.getElementById("dataStreams");
  const streamCount = 10;

  for (let i = 0; i < streamCount; i++) {
    const stream = document.createElement("div");
    stream.className = "data-stream";
    stream.style.top = `${Math.random() * 100}%`;
    stream.style.left = `-300px`;
    stream.style.animationDelay = `${Math.random() * 5}s`;
    stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

    dataStreams.appendChild(stream);
  }
}

// Initialize background effects
generateMatrixRain();
generateParticles();
generateDataStreams();

// Regenerate matrix rain on window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const matrixRain = document.getElementById("matrixRain");
    matrixRain.innerHTML = "";
    generateMatrixRain();
  }, 250);
});

// Interactive mouse glow effect (throttled for performance)
let mouseTimer;
document.addEventListener("mousemove", (e) => {
  if (!mouseTimer) {
    mouseTimer = setTimeout(() => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Move orbs slightly based on mouse position
      const orbs = document.querySelectorAll(".orb");
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Make nearby particles glow brighter (desktop only)
      if (window.innerWidth > 768) {
        const particles = document.querySelectorAll(".particle");
        particles.forEach((particle) => {
          const rect = particle.getBoundingClientRect();
          const particleX = rect.left + rect.width / 2;
          const particleY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
          );

          if (distance < 150) {
            const brightness = 1 - distance / 150;
            particle.style.boxShadow = `0 0 ${
              20 + brightness * 30
            }px rgba(0, 255, 255, ${0.5 + brightness * 0.5})`;
            particle.style.transform = `scale(${1 + brightness * 0.5})`;
          } else {
            particle.style.boxShadow = "";
            particle.style.transform = "";
          }
        });
      }

      mouseTimer = null;
    }, 16); // ~60fps
  }
});

// Add a glow that follows the cursor (desktop only)
if (window.innerWidth > 768) {
  const cursorGlow = document.createElement("div");
  cursorGlow.style.cssText = `
                position: fixed;
                width: 400px;
                height: 400px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s ease;
                opacity: 0;
            `;
  document.body.appendChild(cursorGlow);

  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
    cursorGlow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    // Only prevent default and scroll if href is more than just '#'
    if (href && href.length > 1) {
      e.preventDefault();
      if (href === "#top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(15, 15, 35, 0.95)";
    nav.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.2)";
  } else {
    nav.style.background = "rgba(15, 15, 35, 0.9)";
    nav.style.boxShadow = "none";
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});

// Button effects
document.querySelectorAll(".btn-primary, .btn-secondary").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 0 30px rgba(0, 255, 255, 0.6)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.boxShadow = "";
  });
});

// Stats counter animation
const animateStats = () => {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.textContent.replace(/[^\d]/g, ""));
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(timer);
        count = target;
      }
      const suffix = stat.textContent.replace(/[\d]/g, "");
      stat.textContent = Math.floor(count) + suffix;
    }, 20);
  });
};

// Trigger stats animation when section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Glitch effect on hover for feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.animation = "glitch1 0.3s ease-in-out";
    setTimeout(() => {
      this.style.animation = "";
    }, 300);
  });
});

// Random cyber text effects
const cyberTexts = [
  "CONNECTING...",
  "NEURAL LINK ESTABLISHED",
  "QUANTUM SYNC ACTIVE",
  "REALITY MATRIX LOADED",
];

setInterval(() => {
  const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
  const tempElement = document.createElement("div");
  tempElement.textContent = randomText;
  tempElement.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                color: var(--primary-cyan);
                font-size: 0.8rem;
                font-weight: 700;
                z-index: 1000;
                opacity: 0.7;
                pointer-events: none;
                animation: fadeOut 3s ease-out forwards;
                text-shadow: 0 0 10px var(--primary-cyan);
            `;
  document.body.appendChild(tempElement);

  setTimeout(() => {
    document.body.removeChild(tempElement);
  }, 3000);
}, 5000);

// Add fadeOut animation
const style = document.createElement("style");
style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 0.7; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-50px); }
            }
        `;
document.head.appendChild(style);

// Contact form submission
// document.querySelector('.btn-submit').addEventListener('click', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (name && email && message) {
//         // Simulate form submission
//         this.textContent = 'TRANSMITTING...';
//         this.style.background = 'linear-gradient(135deg, var(--primary-cyan), var(--primary-pink))';

//         setTimeout(() => {
//             this.textContent = 'TRANSMISSION COMPLETE';
//             this.style.background = 'var(--primary-cyan)';

//             // Clear form
//             document.getElementById('name').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('message').value = '';

//             // Reset button after 3 seconds
//             setTimeout(() => {
//                 this.textContent = 'Transmit Message';
//                 this.style.background = '';
//             }, 3000);
//         }, 2000);
//     }
// });

// Reports Carousel
// === INTEGRATED FILTER & CAROUSEL SYSTEM ===
// Kode ini menggabungkan fungsi tombol Next/Prev dengan sistem Filter Matkul
const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".carousel-btn.prev");
const next = document.querySelector(".carousel-btn.next");
const carousel = document.querySelector(".reports-carousel");
const filterButtons = document.querySelectorAll(".filter-btn");

if (track && carousel) {
  let index = 0;

  // Fungsi untuk mendapatkan hanya kartu yang sedang tampil (tidak di-hide)
  function getVisibleCards() {
    return Array.from(document.querySelectorAll(".report-card-large")).filter(
      (card) => !card.classList.contains("hide")
    );
  }

  // Menghitung lebar satu kartu + gap secara akurat
  function getCardWidth() {
    const visibleCards = getVisibleCards();
    if (visibleCards.length === 0) return 0;
    const style = window.getComputedStyle(visibleCards[0]);
    const gap = parseFloat(style.marginRight) || 32;
    return visibleCards[0].offsetWidth + gap;
  }

  function updateCarousel() {
    const activeCards = getVisibleCards();
    const cardWidth = getCardWidth();
    const visibleWidth = carousel.offsetWidth;

    // Hitung berapa total lebar semua kartu yang aktif
    const totalActiveWidth = activeCards.length * cardWidth;

    // Batas maksimal geser adalah total lebar kartu dikurangi lebar layar yang terlihat
    // Ini memastikan tidak akan ada ruang kosong di sebelah kanan kartu terakhir
    const maxTranslate = Math.max(totalActiveWidth - visibleWidth, 0);

    // Hitung posisi geser berdasarkan index
    let translateX = index * cardWidth;

    // JIKA posisi geser melebihi batas maksimal, kunci di batas maksimal
    if (translateX > maxTranslate) {
      translateX = maxTranslate;
    }

    track.style.transform = `translateX(-${translateX}px)`;

    // Logika menampilkan tombol panah
    const visibleCapacity = Math.floor(visibleWidth / cardWidth);

    // Tombol Prev hilang jika sudah di paling kiri
    prev.style.display = translateX <= 0 ? "none" : "block";

    // Tombol Next hilang jika sudah mentok di paling kanan
    next.style.display = translateX >= maxTranslate ? "none" : "block";
  }

  // Perbarui juga logika klik tombol Next agar tidak "over-scroll"
  next.addEventListener("click", () => {
    const activeCards = getVisibleCards();
    const cardWidth = getCardWidth();
    const visibleWidth = carousel.offsetWidth;
    const maxTranslate = Math.max(
      activeCards.length * cardWidth - visibleWidth,
      0
    );

    // Hanya tambah index jika posisi saat ini belum mentok kanan
    if ((index + 1) * cardWidth <= maxTranslate + cardWidth / 2) {
      index++;
      updateCarousel();
    } else {
      // Jika klik sekali lagi akan membuat space kosong, langsung kunci ke mentok kanan
      updateCarousel();
    }
  });

  // --- LOGIKA FILTER ---
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Ubah warna tombol filter yang aktif
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");
      const allCards = document.querySelectorAll(".report-card-large");

      allCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || filterValue === cardCategory) {
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          card.classList.add("hide");
          card.classList.remove("show");
        }
      });

      // Kembalikan ke posisi awal setiap ganti kategori
      index = 0;
      // Berikan jeda 50ms agar browser selesai memproses perubahan class CSS
      setTimeout(updateCarousel, 50);
    });
  });

  // --- LOGIKA TOMBOL NAVIGASI ---
  next.addEventListener("click", () => {
    const activeCards = getVisibleCards();
    const visibleCapacity = Math.floor(carousel.offsetWidth / getCardWidth());
    const maxIndex = Math.max(activeCards.length - visibleCapacity, 0);

    if (index < maxIndex) {
      index++;
      updateCarousel();
    }
  });

  prev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  // Pastikan carousel tetap rapi saat layar HP diputar atau di-resize
  window.addEventListener("resize", updateCarousel);

  // Jalankan fungsi update saat pertama kali halaman dibuka
  updateCarousel();
}
// const track = document.querySelector('.carousel-track');
// const prev = document.querySelector('.carousel-btn.prev');
// const next = document.querySelector('.carousel-btn.next');
// const cards = document.querySelectorAll('.report-card-large');
// const carousel = document.querySelector('.reports-carousel');

// if (track && cards.length > 0) {
//     let index = 0;
//     const gap = 32; // 2rem antar-card
//     const cardWidth = cards[0].offsetWidth + gap;

//     function updateCarousel() {
//         const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
//         const total = cards.length;

//         // Geser posisi track
//         track.style.transform = `translateX(-${index * cardWidth}px)`;

//         // Jika jumlah card <= kapasitas layar, sembunyikan semua tombol
//         if (total <= visibleCards) {
//         prev.style.display = "none";
//         next.style.display = "none";
//         return;
//         }

//         // Tampilkan tombol sesuai posisi
//         prev.style.display = index <= 0 ? "none" : "block";
//         next.style.display = index >= total - visibleCards ? "none" : "block";
//     }

//     next.addEventListener("click", () => {
//         const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
//         if (index < cards.length - visibleCards) index++;
//         updateCarousel();
//     });

//     prev.addEventListener("click", () => {
//         if (index > 0) index--;
//         updateCarousel();
//     });

//     // Jalankan di awal dan setiap kali layar diubah ukurannya
//     window.addEventListener("resize", updateCarousel);
//     updateCarousel();
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const cards = document.querySelectorAll(".report-card-large");

//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // 1. Ubah status tombol aktif
//       filterButtons.forEach((btn) => btn.classList.remove("active"));
//       button.classList.add("active");

//       // 2. Ambil nilai filter
//       const filterValue = button.getAttribute("data-filter");

//       // 3. Filter kartu
//       cards.forEach((card) => {
//         const cardCategory = card.getAttribute("data-category");

//         if (filterValue === "all" || filterValue === cardCategory) {
//           card.classList.remove("hide");
//           card.classList.add("show");
//         } else {
//           card.classList.add("hide");
//           card.classList.remove("show");
//         }
//       });

//       // 4. Reset posisi carousel ke awal setiap kali filter berubah
//       const track = document.querySelector(".carousel-track");
//       if (track) track.style.transform = "translateX(0)";
//     });
//   });
// });
