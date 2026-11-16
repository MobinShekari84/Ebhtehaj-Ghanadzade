/**
 * EBTEHAJ GHANADZADEH — MINIMALIST PHOTOGRAPHY PORTFOLIO
 * Main Interactive Engine (Ken Burns, 1:1 Collections Carousel, State Router)
 */

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================================
  // 1. DATA REPOSITORY: 6 OFFICIAL EXHIBITIONS & 57 PHOTOGRAPHS
  // =========================================================================
  const collectionsDatabase = {
    "the-incident-that-never-happened": {
      title: "THE INCIDENT THAT NEVER NEVER HAPPENED",
      year: "2008–2010",
      description: "Staged cinematic suites depicting frozen moments of domestic suspense and phantom crises.",
      photos: [
        { src: "Albums/The-Incident-That-Never-Happened/Incident_01.jpg", caption: "Frame I" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_02.jpg", caption: "Frame II" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_03.jpg", caption: "Frame III" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_04.jpg", caption: "Frame IV" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_05.jpg", caption: "Frame V" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_06.jpg", caption: "Frame VI" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_07.jpg", caption: "Frame VII" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_08.jpg", caption: "Frame VIII" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_09.jpg", caption: "Frame IX" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_10.jpg", caption: "Frame X" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_11.jpg", caption: "Frame XI" },
        { src: "Albums/The-Incident-That-Never-Happened/Incident_12.jpg", caption: "Frame XII" }
      ]
    },
    "what-if-you-pause": {
      title: "WHAT IF YOU PAUSE",
      year: "2011–2012",
      description: "Duo series with Amin Meysami exploring migration without return; medium format analog prints (120×120cm).",
      photos: [
        { src: "Albums/What-If-You-Pause/Pause_01.jpg", caption: "Pause I" },
        { src: "Albums/What-If-You-Pause/Pause_02.jpg", caption: "Pause II" },
        { src: "Albums/What-If-You-Pause/Pause_03.jpg", caption: "Pause III" },
        { src: "Albums/What-If-You-Pause/Pause_04.jpg", caption: "Pause IV" },
        { src: "Albums/What-If-You-Pause/Pause_05.jpg", caption: "Pause V" },
        { src: "Albums/What-If-You-Pause/Pause_06.jpg", caption: "Pause VI" },
        { src: "Albums/What-If-You-Pause/Pause_07.jpg", caption: "Pause VII" },
        { src: "Albums/What-If-You-Pause/Pause_08.jpg", caption: "Pause VIII" },
        { src: "Albums/What-If-You-Pause/Pause_09.jpg", caption: "Pause IX" }
      ]
    },
    "expectancy": {
      title: "EXPECTANCY",
      year: "2021",
      description: "Fragile human isolations and quiet anticipation captured during the pandemic period.",
      photos: [
        { src: "Albums/Expectancy/Expectancy_01.jpg", caption: "Expectancy I" },
        { src: "Albums/Expectancy/Expectancy_02.jpg", caption: "Expectancy II" },
        { src: "Albums/Expectancy/Expectancy_03.jpg", caption: "Expectancy III" },
        { src: "Albums/Expectancy/Expectancy_04.jpg", caption: "Expectancy IV" }
      ]
    },
    "quarter-past-twelve": {
      title: "QUARTER PAST TWELVE",
      year: "2022",
      description: "A continuous staged panoramic sequence composed of 9 consecutive frames, concluding with the complete panoramic tableau.",
      photos: [
        { src: "Albums/Quarter-Past-Twelve/Quarter_01.jpg", caption: "12:15 — Frame 1 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_09.jpg", caption: "12:15 — Frame 2 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_02.jpg", caption: "12:15 — Frame 3 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_08.jpg", caption: "12:15 — Frame 4 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_03.jpg", caption: "12:15 — Frame 5 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_05.jpg", caption: "12:15 — Frame 6 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_06.jpg", caption: "12:15 — Frame 7 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_04.jpg", caption: "12:15 — Frame 8 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_07.jpg", caption: "12:15 — Frame 9 (Panoramic Sequence)" },
        { src: "Albums/Quarter-Past-Twelve/Quarter_10_Panorama.jpg", caption: "12:15 — Complete Panorama Tableau" }
      ]
    },
    "we-wont-reach-tehran": {
      title: "WE WON'T REACH TEHRAN",
      year: "2022–2023",
      description: "An elegiac meditation on departure, utopian phantoms, and collective longing.",
      photos: [
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_01.jpg", caption: "Tehran I" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_02.jpg", caption: "Tehran II" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_03.jpg", caption: "Tehran III" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_04.jpg", caption: "Tehran IV" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_05.jpg", caption: "Tehran V" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_06.jpg", caption: "Tehran VI" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_07.jpg", caption: "Tehran VII" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_08.jpg", caption: "Tehran VIII" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_09.jpg", caption: "Tehran IX" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_10.jpg", caption: "Tehran X" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_11.jpg", caption: "Tehran XI" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_12.jpg", caption: "Tehran XII" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_13.jpg", caption: "Tehran XIII" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_14.jpg", caption: "Tehran XIV" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_15.jpg", caption: "Tehran XV" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_16.jpg", caption: "Tehran XVI" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_17.jpg", caption: "Tehran XVII" },
        { src: "Albums/We-Wont-Reach-Tehran/Tehran_18.jpg", caption: "Tehran XVIII" }
      ]
    },
    "the-last-colonels-sonata": {
      title: "THE LAST COLONELS SONATA",
      year: "2026",
      description: "A staged cinematic narrative depicting the last colonel; presenting the master composition followed by 4 detailed perspectives.",
      photos: [
        { src: "Albums/The-Last-Colonels-Sonata/Sonata_01_Main.jpg", caption: "Master Composition" },
        { src: "Albums/The-Last-Colonels-Sonata/Sonata_02_Detail.jpg", caption: "Detail I" },
        { src: "Albums/The-Last-Colonels-Sonata/Sonata_03_Detail.jpg", caption: "Detail II" },
        { src: "Albums/The-Last-Colonels-Sonata/Sonata_04_Detail.jpg", caption: "Detail III" },
        { src: "Albums/The-Last-Colonels-Sonata/Sonata_05_Detail.jpg", caption: "Detail IV" }
      ]
    }
  };

  // Compile full pool of 57 exhibition photos for Home Ken Burns engine
  const allExhibitionPhotos = [];
  Object.keys(collectionsDatabase).forEach(key => {
    collectionsDatabase[key].photos.forEach(p => {
      allExhibitionPhotos.push({
        ...p,
        collectionTitle: collectionsDatabase[key].title
      });
    });
  });

  // =========================================================================
  // 2. PAGE 1: HOME KEN BURNS ENGINE (6-Second Slow Zoom)
  // =========================================================================
  const homeImgEl = document.getElementById("home-kenburns-photo");
  const homeCaptionEl = document.getElementById("home-photo-caption");

  if (homeImgEl && allExhibitionPhotos.length > 0) {
    let homeCurrentIdx = Math.floor(Math.random() * allExhibitionPhotos.length);

    function runKenBurnsSlide() {
      homeImgEl.style.opacity = "0";
      homeImgEl.classList.remove("animating");

      setTimeout(() => {
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * allExhibitionPhotos.length);
        } while (nextIdx === homeCurrentIdx && allExhibitionPhotos.length > 1);

        homeCurrentIdx = nextIdx;
        const currentItem = allExhibitionPhotos[homeCurrentIdx];

        homeImgEl.src = currentItem.src;
        homeImgEl.onload = () => {
          homeImgEl.style.opacity = "1";
          homeImgEl.classList.add("animating");
          if (homeCaptionEl) {
            homeCaptionEl.textContent = `${currentItem.collectionTitle} — ${currentItem.caption}`;
          }
        };
      }, 500);
    }

    // Initial load
    runKenBurnsSlide();

    // Loop every 6.5 seconds (6s slow zoom + 0.5s fade cross transition)
    setInterval(runKenBurnsSlide, 6500);
  }

  // =========================================================================
  // 3. PAGE 4: COLLECTIONS 1:1 CAROUSEL CONTROLLER
  // =========================================================================
  const collectionPhotoEl = document.getElementById("collection-current-photo");
  const counterTagEl = document.getElementById("collection-counter-tag");
  const collectionTitleEl = document.getElementById("active-collection-title");
  const photoCaptionEl = document.getElementById("active-photo-caption");
  const prevBtn = document.getElementById("btn-prev-photo");
  const nextBtn = document.getElementById("btn-next-photo");
  const submenuLinks = document.querySelectorAll(".submenu-link");

  if (collectionPhotoEl) {
    let currentKey = "what-if-you-pause";
    let photoIndex = 0;

    // Check URL hash for initial collection selection (e.g. #we-wont-reach-tehran)
    const hashVal = window.location.hash.replace("#", "");
    if (hashVal && collectionsDatabase[hashVal]) {
      currentKey = hashVal;
    }

    function updateSubmenuActiveState() {
      submenuLinks.forEach(link => {
        const linkKey = link.getAttribute("data-collection");
        if (linkKey === currentKey) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }

    function renderCollectionPhoto() {
      const collection = collectionsDatabase[currentKey];
      if (!collection || !collection.photos || collection.photos.length === 0) return;

      const photoItem = collection.photos[photoIndex];

      collectionPhotoEl.style.opacity = "0";

      setTimeout(() => {
        collectionPhotoEl.src = photoItem.src;
        collectionPhotoEl.onload = () => {
          collectionPhotoEl.style.opacity = "1";
        };

        if (counterTagEl) {
          counterTagEl.textContent = `${photoIndex + 1} / ${collection.photos.length}`;
        }
        if (collectionTitleEl) {
          collectionTitleEl.textContent = collection.title;
        }
        if (photoCaptionEl) {
          photoCaptionEl.textContent = photoItem.caption;
        }
      }, 150);
    }

    function selectCollection(newKey) {
      if (!collectionsDatabase[newKey]) return;
      currentKey = newKey;
      photoIndex = 0;
      window.location.hash = newKey;
      updateSubmenuActiveState();
      renderCollectionPhoto();
    }

    function stepPhoto(direction) {
      const collection = collectionsDatabase[currentKey];
      if (!collection) return;
      const total = collection.photos.length;
      if (direction === "next") {
        photoIndex = (photoIndex + 1) % total;
      } else {
        photoIndex = (photoIndex - 1 + total) % total;
      }
      renderCollectionPhoto();
    }

    // Attach click listeners to submenu
    submenuLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetKey = link.getAttribute("data-collection");
        selectCollection(targetKey);
      });
    });

    // Arrow Buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", () => stepPhoto("prev"));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => stepPhoto("next"));
    }

    // Keyboard Arrow navigation (Left / Right)
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        stepPhoto("prev");
      } else if (e.key === "ArrowRight") {
        stepPhoto("next");
      }
    });

    // Mobile Touch Swipe Handling
    let touchStartX = 0;
    let touchEndX = 0;
    const stageBox = document.querySelector(".photo-box-square");

    if (stageBox) {
      stageBox.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      stageBox.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            stepPhoto("prev");
          } else {
            stepPhoto("next");
          }
        }
      }, { passive: true });
    }

    // Initialize View
    updateSubmenuActiveState();
    renderCollectionPhoto();
  }

  // =========================================================================
  // 4. PAGE 5: CONTACT FORM CONTROLLER
  // =========================================================================
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("contact-feedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const sendBtn = contactForm.querySelector(".btn-send");
      const originalText = sendBtn.textContent;

      sendBtn.disabled = true;
      sendBtn.textContent = "SENDING...";
      formFeedback.textContent = "";

      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = originalText;
        formFeedback.textContent = "Thank you. Your message has been dispatched to Mr. Ghanadzadeh.";
        contactForm.reset();

        setTimeout(() => {
          formFeedback.textContent = "";
        }, 6000);
      }, 700);
    });
  }

  // =========================================================================
  // 5. PAGE: PRINT ORDER FORM CONTROLLER
  // =========================================================================
  const orderForm = document.getElementById("print-order-form");
  const orderFeedback = document.getElementById("order-feedback");

  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = orderForm.querySelector(".btn-order-submit");
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = "SUBMITTING...";
      orderFeedback.textContent = "";

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        orderFeedback.textContent = "Thank you. Your print order request has been registered. We will contact you shortly.";
        orderForm.reset();

        setTimeout(() => {
          orderFeedback.textContent = "";
        }, 7000);
      }, 700);
    });
  }

});
