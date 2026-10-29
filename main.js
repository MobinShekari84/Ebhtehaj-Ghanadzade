/**
 * EBTEHAJ GHANADZADEH — MINIMALIST PHOTOGRAPHY PORTFOLIO
 * Main Interactive Engine (Ken Burns, 1:1 Collections Carousel, State Router)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA REPOSITORY: EXHIBITIONS & COLLECTIONS
  // =========================================================================
  const collectionsDatabase = {
    'the-incident-that-never-happened': {
      title: 'THE INCIDENT THAT NEVER NEVER HAPPENED',
      year: '2008–2010',
      description: 'Staged cinematic suites depicting frozen moments of domestic suspense and phantom crises.',
      photos: [
        {
          src: 'assets/images/incident-01.svg',
          caption: 'Frame I — The Unspoken Accord (Aaran Gallery / Milan)'
        },
        {
          src: 'assets/images/incident-02.svg',
          caption: 'Frame II — Departure Before Dawn'
        },
        {
          src: 'assets/images/incident-03.svg',
          caption: 'Frame III — The Incident Room'
        },
        {
          src: 'assets/images/incident-04.svg',
          caption: 'Frame IV — Still Life with Shadow'
        }
      ]
    },
    'what-if-you-pause': {
      title: 'WHAT IF YOU PAUSE',
      year: '2011–2012',
      description: 'Duo series with Amin Meysami exploring migration without return; medium format analog prints (120×120cm).',
      photos: [
        {
          src: 'assets/images/pause-01.svg',
          caption: 'Pause I — The Waiting Passenger (Art Basel Miami)'
        },
        {
          src: 'assets/images/pause-02.svg',
          caption: 'Pause II — Staged Distance'
        },
        {
          src: 'assets/images/pause-03.svg',
          caption: 'Pause III — The Horizon Boundary (SPM Museum Collection)'
        },
        {
          src: 'assets/images/pause-04.svg',
          caption: 'Pause IV — Standing Still in Transit'
        }
      ]
    },
    'expectancy': {
      title: 'EXPENTANCY',
      year: '2021',
      description: 'Fragile human isolations and quiet anticipation captured during the pandemic period.',
      photos: [
        {
          src: 'assets/images/expectancy-01.svg',
          caption: 'Expectancy I — Solitude in Neutral Gray (Liam Art Gallery)'
        },
        {
          src: 'assets/images/expectancy-02.svg',
          caption: 'Expectancy II — The Window Frame'
        },
        {
          src: 'assets/images/expectancy-03.svg',
          caption: 'Expectancy III — Hesitation'
        }
      ]
    },
    'quarter-past-twelve': {
      title: 'QUARTER PAST TWELVE',
      year: '2022',
      description: 'Formal visual investigation into arrested time and fragmented narratives.',
      photos: [
        {
          src: 'assets/images/quarter-01.svg',
          caption: '12:15 I — Suspended Minute (Aaran Art Gallery)'
        },
        {
          src: 'assets/images/quarter-02.svg',
          caption: '12:15 II — Parallel Observers'
        },
        {
          src: 'assets/images/quarter-03.svg',
          caption: '12:15 III — Epilogue in Monochrome'
        }
      ]
    },
    'we-wont-reach-tehran': {
      title: "WE WON'T REACH TEHRAN",
      year: '2022–2023',
      description: 'An elegiac meditation on departure, utopian phantoms, and collective longing.',
      photos: [
        {
          src: 'assets/images/tehran-01.svg',
          caption: 'Tehran I — The Vanishing Highway (Aaran Projects Solo Exhibition)'
        },
        {
          src: 'assets/images/tehran-02.svg',
          caption: 'Tehran II — A Utopia of No Return'
        },
        {
          src: 'assets/images/tehran-03.svg',
          caption: 'Tehran III — Fog and Neon'
        },
        {
          src: 'assets/images/tehran-04.svg',
          caption: 'Tehran IV — The Final Station'
        }
      ]
    }
  };

  // Compile full pool of exhibition photos for Home Ken Burns engine
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
  const homeImgEl = document.getElementById('home-kenburns-photo');
  const homeCaptionEl = document.getElementById('home-photo-caption');

  if (homeImgEl && allExhibitionPhotos.length > 0) {
    let homeCurrentIdx = Math.floor(Math.random() * allExhibitionPhotos.length);

    function runKenBurnsSlide() {
      homeImgEl.style.opacity = '0';
      homeImgEl.classList.remove('animating');

      setTimeout(() => {
        // Pick next random photo (ensuring it's different)
        let nextIdx;
        do {
          nextIdx = Math.floor(Math.random() * allExhibitionPhotos.length);
        } while (nextIdx === homeCurrentIdx && allExhibitionPhotos.length > 1);

        homeCurrentIdx = nextIdx;
        const currentItem = allExhibitionPhotos[homeCurrentIdx];

        homeImgEl.src = currentItem.src;
        homeImgEl.onload = () => {
          homeImgEl.style.opacity = '1';
          homeImgEl.classList.add('animating');
          if (homeCaptionEl) {
            homeCaptionEl.textContent = `${currentItem.collectionTitle} — ${currentItem.caption}`;
          }
        };
      }, 500);
    }

    // Initial load
    runKenBurnsSlide();

    // Loop every 6.5 seconds (6 seconds slow zoom + 0.5s fade cross transition)
    setInterval(runKenBurnsSlide, 6500);
  }

  // =========================================================================
  // 3. PAGE 4: COLLECTIONS 1:1 CAROUSEL CONTROLLER
  // =========================================================================
  const collectionPhotoEl = document.getElementById('collection-current-photo');
  const counterTagEl = document.getElementById('collection-counter-tag');
  const collectionTitleEl = document.getElementById('active-collection-title');
  const photoCaptionEl = document.getElementById('active-photo-caption');
  const prevBtn = document.getElementById('btn-prev-photo');
  const nextBtn = document.getElementById('btn-next-photo');
  const submenuLinks = document.querySelectorAll('.submenu-link');

  if (collectionPhotoEl) {
    let currentKey = 'what-if-you-pause';
    let photoIndex = 0;

    // Check URL hash for initial collection selection (e.g. #we-wont-reach-tehran)
    const hashVal = window.location.hash.replace('#', '');
    if (hashVal && collectionsDatabase[hashVal]) {
      currentKey = hashVal;
    }

    function updateSubmenuActiveState() {
      submenuLinks.forEach(link => {
        const linkKey = link.getAttribute('data-collection');
        if (linkKey === currentKey) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    function renderCollectionPhoto(direction = 'fade') {
      const collection = collectionsDatabase[currentKey];
      if (!collection || !collection.photos || collection.photos.length === 0) return;

      const photoItem = collection.photos[photoIndex];

      collectionPhotoEl.style.opacity = '0';

      setTimeout(() => {
        collectionPhotoEl.src = photoItem.src;
        collectionPhotoEl.onload = () => {
          collectionPhotoEl.style.opacity = '1';
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
      if (direction === 'next') {
        photoIndex = (photoIndex + 1) % total;
      } else {
        photoIndex = (photoIndex - 1 + total) % total;
      }
      renderCollectionPhoto();
    }

    // Attach click listeners to submenu
    submenuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetKey = link.getAttribute('data-collection');
        selectCollection(targetKey);
      });
    });

    // Arrow Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => stepPhoto('prev'));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => stepPhoto('next'));
    }

    // Keyboard Arrow navigation (Left / Right)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        stepPhoto('prev');
      } else if (e.key === 'ArrowRight') {
        stepPhoto('next');
      }
    });

    // Mobile Touch Swipe Handling
    let touchStartX = 0;
    let touchEndX = 0;
    const stageBox = document.querySelector('.photo-box-square');

    if (stageBox) {
      stageBox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      stageBox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            stepPhoto('prev'); // swipe right
          } else {
            stepPhoto('next'); // swipe left
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
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('contact-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sendBtn = contactForm.querySelector('.btn-send');
      const originalText = sendBtn.textContent;

      sendBtn.disabled = true;
      sendBtn.textContent = 'SENDING...';
      formFeedback.textContent = '';

      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = originalText;
        formFeedback.textContent = 'Thank you. Your message has been dispatched to Mr. Ghanadzadeh.';
        contactForm.reset();

        setTimeout(() => {
          formFeedback.textContent = '';
        }, 6000);
      }, 700);
    });
  }

});
