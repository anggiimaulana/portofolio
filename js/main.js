const projectsData = [
  // --- FEATURED ---
  {
    id: 1,
    title: "DesaKita Mobile (Bulak Lor)",
    category: "mobile",
    isFeatured: true,
    img: "./images/portfolios/desa-kita-2.jpg",
    github: "https://github.com/anggiimaulana/proyek2_mobile",
    tags: ["Flutter", "Provider", "SQLite", "Hive"],
    desc: "Administrative mobile app for village governance featuring digital signatures and complex local data management.",
  },
  {
    id: 9,
    title: "Lung Cancer CNN Classification",
    category: "ml",
    isFeatured: false,
    img: "./images/portfolios/lung-cancer.png",
    github:
      "https://colab.research.google.com/drive/1FOVXDtrad3rsNGj1hsv1HBINYYKt7Qqo?usp=sharing",
    tags: ["CNN", "TensorFlow", "Deep Learning"],
    desc: "Deep Learning model utilizing Convolutional Neural Networks to classify histopathological images for lung cancer detection.",
  },
  {
    id: 3,
    title: "jokiinit.com",
    category: "web",
    isFeatured: true,
    demo: "https://jokiinit.com/",
    img: "./images/portfolios/jokiinit.png",
    link: "https://jokiinit.com",
    tags: ["Laravel 11", "Tailwind", "Filament"],
    desc: "Founder and Lead Developer of a professional IT service platform with integrated administrative task management.",
  },

  // --- MOBILE APP ---
  {
    id: 4,
    title: "Story App",
    category: "mobile",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/bekup-create-2025/tree/main/intermediate/story_app",
    img: "./images/portfolios/story-app.jpeg",
    tags: ["Flutter", "Advanced Nav", "Maps API"],
    desc: "Social media application implementing advanced navigation patterns, location services, and internationalization.",
  },
  {
    id: 5,
    title: "WisataKu AI",
    category: "mobile",
    isFeatured: false,
    github: "https://github.com/anggiimaulana/capstone-bekup-2025",
    img: "./images/portfolios/wisataku-app.png",
    tags: ["Flutter", "Gemini API", "Firebase"],
    desc: "Tourism recommendation app featuring an AI chatbot integrated with Gemini API for personalized destination suggestions.",
  },
  {
    id: 6,
    title: "On-Device Food Recognition",
    category: "mobile",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/bekup-create-2025/tree/main/flutter-machine-learning/submission/food_recognition_app",
    img: "./images/portfolios/food-ml-app.png",
    tags: ["TFLite", "Gemini API", "MealDB"],
    desc: "Real-time food classification using TFLite and Gemini API for nutritional analysis and ingredient retrieval.",
  },
  {
    id: 7,
    title: "Restaurant Discovery App",
    category: "mobile",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/bekup-create-2025/tree/main/flutter-fundamental/submission-akhir/restaurant_app",
    img: "./images/portfolios/restaurant-app.jpeg",
    tags: ["Flutter", "REST API", "Notification"],
    desc: "Consumer app featuring automated scheduling, push notifications, and seamless REST API synchronization.",
  },
  {
    id: 8,
    title: "Splitbill App",
    category: "mobile",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/bekup-create-2025/tree/main/Flutter-Pemula/counter_app",
    img: "./images/portfolios/splitbill-app.jpeg",
    tags: ["Flutter", "UI/UX", "SharedPref"],
    desc: "Utility for bill splitting focused on intuitive UI/UX design and efficient local data persistence.",
  },

  // --- AI / ML ---
  {
    id: 10,
    title: "Bank Fraud Detection",
    category: "ml",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/pijak-2026/tree/main/Machine%20Learning%20Pemula/submission/BMLP_Anggi-Maulana",
    img: "./images/portfolios/fraud-model.png",
    tags: ["K-Means", "Random Forest", "Tuning"],
    desc: "ML pipeline for financial security using clustering and tuned classification models for transaction anomaly detection.",
  },
  {
    id: 11,
    title: "Blibli Review Sentiment Analysis Pipeline",
    category: "ml",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/pijak-2026/tree/main/Fundamental%20Deep%20Learning/submission-awal", // Ganti dengan repo asli lu
    img: "./images/portfolios/blibli-sentimen-analysis.png", // Pastikan file gambar ada
    tags: ["LSTM", "TF-IDF", "NLP", "Deep Learning"],
    desc: "A comparative NLP project analyzing Blibli app reviews using LSTM networks versus TF-IDF with Logistic Regression and Linear SVC.",
  },
  {
    id: 12,
    title: "Expert System Program Recommendation",
    category: "ml",
    isFeatured: false,
    github: "https://github.com/anggiimaulana/rekomendasi-prodi-jti-polindra",
    img: "./images/portfolios/recomendation-model.png",
    tags: ["React JS", "Weighted Scoring"],
    desc: "Web-based decision support system utilizing Weighted Scoring to provide academic program recommendations.",
  },
  {
    id: 13,
    title: "RAG Institution Chatbot",
    category: "ml",
    isFeatured: false,
    github:
      "https://colab.research.google.com/drive/1pZGZ5E_ryhxZoi2Kcz-GC7O46D7dOPJH?usp=sharing",
    img: "./images/portfolios/rag-llm.png",
    tags: ["RAG", "Llama 7B", "FAISS"],
    desc: "Sophisticated RAG-based chatbot using FAISS embeddings to provide factual institutional info from verified sources.",
  },
  {
    id: 14,
    title: "LLM GitHub Roaster",
    category: "ml",
    isFeatured: false,
    huggingface: "https://huggingface.co/anggiixyzz",
    img: "./images/portfolios/hugging-face.png",
    tags: ["LLM", "Llama 7B", "Fine-tuned"],
    desc: "Experimental LLM project leveraging Llama 7B to generate humorous, profile-based GitHub roasts.",
  },
  
  {
    id: 2,
    title: "Myfess: IndoBERT Emotion Classification",
    category: "ml",
    isFeatured: true,
    github: "https://colab.research.google.com/drive/1oLPPUT1g76Oz4QYplIkFfDCsHxtJf2WQ?usp=sharingz",
    img: "./images/portfolios/myfess-models.png",
    tags: ["IndoBERT", "NLP", "Fine-tuned"],
    desc: "Fine-tuned IndoBERT model leveraging 6,000+ emotion-labeled entries for student mental health detection , achieving 92% accuracy as the core AI engine for real-time psychological assessment.",
  },

  // --- WEBSITE ---
  {
    id: 15,
    title: "jokiantam.com",
    category: "web",
    isFeatured: false,
    demo: "https://jokiantam.com/",
    img: "./images/portfolios/jokiantam.png",
    tags: ["Laravel", "Tailwind", "Booking"],
    desc: "Transactional platform for gold purchase queues with theater-style booking logic and admin verification.",
  },
  {
    id: 16,
    title: "Smart City Mini Library",
    category: "web",
    demo: "https://mini-library.jokiinit.com/",
    isFeatured: false,
    img: "./images/portfolios/mini-library.png",
    tags: ["Laravel 11", "Complexity JS", "Cert Logic"],
    desc: "Interactive educational portal with automated quizzes, certification logic, and extensive multimedia research libraries.",
  },
  {
    id: 17,
    title: "DesaKita Backend & Dashboard",
    category: "web",
    isFeatured: false,
    github: "https://github.com/anggiimaulana/proyek2_web",
    img: "./images/portfolios/dashboard-desa-kita.jpeg",
    tags: ["Laravel 11", "Filament", "REST API"],
    desc: "Comprehensive administrative dashboard and RESTful API backend for synchronized village management.",
  },
  {
    id: 18,
    title: "Bulak Village E-Governance & Public Information Portal",
    category: "web",
    isFeatured: false,
    img: "./images/portfolios/bulak.png",
    github: "https://github.com/anggiimaulana/web-bulak",
    tags: ["PHP Native", "Bootstrap", "SweetAlert", "MySQL"],
    desc: "A village management system featuring a public informational portal and an automated letter submission workflow for citizens.",
  },
  {
    id: 19,
    title: "Myfess - Student Counseling",
    category: "web",
    isFeatured: false,
    github: "https://github.com/anggiimaulana/myfess-polindra",
    img: "./images/portfolios/myfess.png",
    tags: ["PHP Native", "Chart.js", "XHR"],
    desc: "Mental health platform offering online/offline consultations with real-time data visualization.",
  },
  {
    id: 20,
    title: "Class Web D4SIKC1C",
    category: "web",
    isFeatured: false,
    github:
      "https://github.com/anggiimaulana/Sistem-Informasi-Kota-Cerdas-1C-POLINDRA",
    demo: "https://anggiimaulana.github.io/Sistem-Informasi-Kota-Cerdas-1C-POLINDRA/",
    img: "./images/portfolios/sikc.png",
    tags: ["HTML", "CSS", "Vanilla JS"],
    desc: "Informational portal for student profiles and galleries, demonstrating foundational skills in web interactivity.",
  },
  {
    id: 21,
    title: "IoT Fire Detection System",
    category: "web",
    isFeatured: false,
    github: "https://wokwi.com/projects/445475633614786561",
    img: "./images/portfolios/smart-fire-detection.png",
    tags: ["ESP32", "Telegram API", "Sensors"],
    desc: "IoT emergency system with multi-sensor integration, automated suppression, and instant Telegram alerts.",
  },
];

const certificationData = [
  {
    id: 1,
    title: "Belajar Pengembangan Aplikasi Flutter Intermediate",
    img: "./images/certification/flutter-intermediate.png",
    link: "https://www.dicoding.com/certificates/GRX5J8J9YX0M",
    github: "",
    tags: ["Localization", "Advanced Navigation", "Maps Integration"],
    desc: "Mastered advanced Flutter techniques including Navigator 2.0, Google Maps integration, and media handling.",
  },
  {
    id: 2,
    title: "Belajar Fundamental Deep Learning",
    img: "./images/certification/dl-fundamental.png",
    link: "https://www.dicoding.com/certificates/1OP8J91YVPQK",
    tags: ["TensorFlow", "NLP", "Neural Networks", "Computer Vision"],
    desc: "Developed deep learning models for Computer Vision, NLP, and Time Series using TensorFlow.",
  },
  {
    id: 3,
    title: "Sertifikat Program BEKUP Create: Upskilling Bootcamp 2025",
    img: "./images/certification/bekup-certification.png",
    link: "#certification",
    tags: ["Flutter", "Team Work", "Leadership"],
    desc: "Comprehensive bootcamp covering the end-to-end Flutter ecosystem, from core fundamentals to advanced state management and on-device Machine Learning integration.",
  },
  {
    id: 4,
    title: "Belajar Penerapan Machine Learning untuk Flutter",
    img: "./images/certification/penerapan-ml-flutter.png",
    link: "https://www.dicoding.com/certificates/53XEKW05VXRN",
    tags: ["Flutter", "ML Kit", "TensorFlow Lite"],
    desc: "Focused on deploying on-device Machine Learning models using ML Kit and LiteRT to enable real-time image classification features within Flutter applications.",
  },
  {
    id: 5,
    title: "Belajar Fundamental Aplikasi Flutter",
    img: "./images/certification/flutter-fundamental.png",
    link: "https://www.dicoding.com/certificates/GRX5JGO2KX0M",
    tags: ["Flutter", "Firebase", "API", "SQLite"],
    desc: "Mastered core Flutter development, including state management, REST API consumption, local database persistence, and automated testing for robust mobile apps.",
  },
  {
    id: 6,
    title: "Belajar Machine Learning untuk Pemula",
    img: "./images/certification/ml-pemula.png",
    link: "https://www.dicoding.com/certificates/4EXG3MRVDZRL",
    tags: ["Python", "Classification", "Clustering"],
    desc: "Mastered the end-to-end Machine Learning workflow, from feature engineering to developing supervised (classification & regression) and unsupervised models specifically for tabular data.",
  },
];

// --- RENDER LOGIC ---
const projectGrid = document.getElementById("project-grid");
const tabBtns = document.querySelectorAll(".tab-btn");

function renderProjects(filter = "featured") {
  const filtered = projectsData.filter((p) =>
    filter === "featured" ? p.isFeatured : p.category === filter,
  );

  projectGrid.innerHTML = filtered
    .map(
      (p) => `
    <div class="projecto" style="animation: fadeUp 0.4s ease forwards">
      <div class="projecto-cover">
        <img loading="lazy" src="${p.img}" alt="${p.title}" />
      </div>
      <div class="projecto-info">
        <div class="projecto-title">
          <h4>${p.title}</h4>
        </div>
        <div class="projecto-tags">
          ${p.tags.map((tag) => `<div>${tag}</div>`).join("")}
        </div>
        <p>${p.desc}</p>
        
        <div class="projecto-actions">
          ${
            p.demo
              ? `
            <a href="${p.demo}" target="_blank" class="proj-btn btn-demo">
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
              Live Demo
            </a>`
              : ""
          }
            
          ${
            p.github
              ? `
            <a href="${p.github}" target="_blank" class="proj-btn btn-repo">
              <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub Repo
            </a>`
              : ""
          }

          ${
            p.huggingface
              ? `
            <a href="${p.huggingface}" target="_blank" class="proj-btn btn-repo">
              <span style="font-size: 1.1rem">🤗</span>
              Hugging Face
            </a>`
              : ""
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Tab Switching Logic
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.tab);
  });
});

// Load Featured on startup
document.addEventListener("DOMContentLoaded", () => renderProjects("featured"));

// Fungsi untuk merender sertifikasi
function renderCertifications() {
  const container = document.getElementById("sert-grid");

  const htmlContent = certificationData
    .map(
      (cert) => `
    <div class="projecto sert-card">
      <div class="projecto-cover">
        <img loading="lazy" src="${cert.img}" alt="${cert.title}" />
      </div>
      <div class="project-info">
        <div class="projecto-title">
          <h4>${cert.title}</h4>
          <a href="${cert.link}" class="projecto-link" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
            </svg>
          </a>
        </div>
        <div class="projecto-tags">
          ${cert.tags.map((tag) => `<div>${tag}</div>`).join("")}
        </div>
        <p>${cert.desc}</p>
      </div>
    </div>
  `,
    )
    .join("");

  container.innerHTML = htmlContent;
}

// Panggil fungsi saat halaman siap
document.addEventListener("DOMContentLoaded", renderCertifications);

// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id 'current-year'
// document.getElementById('current-year').textContent = currentYear;

document.addEventListener("DOMContentLoaded", function () {
  const heroName = document.querySelector(".hero-name");

  function startAnimation() {
    heroName.classList.add("typing");
    heroName.classList.remove("reverse-typing");

    setTimeout(() => {
      heroName.classList.remove("typing");
      heroName.classList.add("reverse-typing");

      setTimeout(() => {
        startAnimation(); // Ulangi animasi
      }, 3000); // Jeda setelah animasi reverse-typing selesai
    }, 4000); // Jeda setelah animasi typing selesai
  }

  startAnimation(); // Mulai animasi saat halaman dimuat
});

// document.querySelectorAll(".tab-btn").forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     document.querySelectorAll(".tab-btn").forEach(function (b) {
//       b.classList.remove("active");
//     });
//     document.querySelectorAll(".tab-panel").forEach(function (p) {
//       p.classList.remove("active");
//     });
//     btn.classList.add("active");
//     document
//       .getElementById("tab-" + btn.getAttribute("data-tab"))
//       .classList.add("active");
//   });
// });

// // Carousel untuk sertifikasi (hanya jalan jika elemen ada)
// const grid = document.getElementById("sert-grid");
// const dotsContainer = document.getElementById("sert-dots");
// const prevBtn = document.getElementById("prevSert");
// const nextBtn = document.getElementById("nextSert");

// if (grid && dotsContainer && prevBtn && nextBtn) {
//   const cards = document.querySelectorAll(".sert-card");
  
//   // Buat dots sesuai jumlah card
//   cards.forEach((_, i) => {
//     const dot = document.createElement("div");
//     dot.classList.add("dot");
//     if (i === 0) dot.classList.add("active");
//     dotsContainer.appendChild(dot);
//   });

//   const dots = document.querySelectorAll(".dot");

//   // Fungsi update indicator saat scroll
//   grid.addEventListener("scroll", () => {
//     const scrollIndex = Math.round(grid.scrollLeft / (cards[0].offsetWidth + 24));
//     dots.forEach((dot, i) => {
//       dot.classList.toggle("active", i === scrollIndex);
//     });
//   });

//   // Event Klik Panah
//   nextBtn.addEventListener("click", () => {
//     grid.scrollLeft += cards[0].offsetWidth + 24;
//   });

//   prevBtn.addEventListener("click", () => {
//     grid.scrollLeft -= cards[0].offsetWidth + 24;
//   });
// }
