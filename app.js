/**
 * ELMER CONCEPT — Multi-Disciplinary Creative Studio
 * Core Client-Side Logic & Interactive Behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Project Database (Gallery Showcase & Full Case Study Data)
  // =========================================================================
  const projects = [
    {
      id: 'aletheia',
      title: 'Aletheia Botanical Fragrance',
      category: 'Brand Identity',
      categorySlug: 'brand-identity',
      year: '2025',
      client: 'Maison Aletheia Paris',
      index: '01',
      image: 'assets/aletheia.jpg',
      shortDesc: 'A high-perfumery identity system merging minimalist typographic purity with tactile charcoal packaging, bespoke glass bottle architecture, and timeless stationery.',
      overview: 'Maison Aletheia approached Elmer Concept to develop an all-encompassing visual identity for their debut collection of haute botanical extractions. The studio’s mandate was to avoid standard decorative luxury tropes and construct a quiet, sculptural design language rooted in monastic clarity and raw mineral materiality.',
      challenge: 'Creating an indelible presence in a crowded luxury fragrance sector where visual noise prevails, while preserving an understated, quiet tactile prestige that feels both ancient and sharply contemporary.',
      artDirection: 'Chiaroscuro studio photography, deep carbon black monolith boxes, and pale milky cream labels set in disciplined Swiss typography with delicate blind embossing.',
      deliverables: [
        'Comprehensive Brand Identity System',
        'Bespoke Flacon & Cap Architecture',
        'Monolithic Matte Charcoal Packaging Suite',
        'Printed Botanical Monograph & Lookbook',
        'Digital Atelier & E-Commerce Art Direction'
      ],
      palette: [
        { name: 'Obsidian Slate', hex: '#121212' },
        { name: 'Milky Cream', hex: '#F3EDE4' },
        { name: 'Whisper Gold', hex: '#E4DCD3' },
        { name: 'Mineral Charcoal', hex: '#242220' }
      ]
    },
    {
      id: 'kroma',
      title: 'Kroma Kinetic Typography System',
      category: 'Motion Graphics',
      categorySlug: 'motion-graphics',
      year: '2025',
      client: 'Kroma Media Lab',
      index: '02',
      image: 'assets/kroma.jpg',
      shortDesc: 'Spatial typographic engine and kinetic installation design exploring fluid letterforms, dynamic dimensionality, and responsive light choreography in architectural volumes.',
      overview: 'Commissioned as the centerpiece of an international digital art biennial, Kroma is a procedural typography installation. Elmer Concept designed both the graphic architecture of the letterforms and the kinetic behavior algorithms, projecting sculptural words that fracture, coalesce, and illuminate in response to spatial acoustics.',
      challenge: 'Balancing illegible kinetic fluidity with pristine typographic legibility, allowing visitors to feel the visceral physical weight of language moving through three dimensions.',
      artDirection: 'Deep brutalist concrete environments contrasted with ethereal, warm milky-gold luminescence, variable typeface weights, and fluid particle simulations.',
      deliverables: [
        'Procedural Typographic Physics Engine',
        '30-Foot Monolith Video Architecture',
        'Acoustic-Reactive Kinetic Sequences',
        'Kinetic Identity Guidelines & Assets',
        'Exhibition Broadcast & Monograph Clips'
      ],
      palette: [
        { name: 'Brutalist Core', hex: '#161616' },
        { name: 'Luminescent Cream', hex: '#FAF7EE' },
        { name: 'Warm Amber Dust', hex: '#EADFCF' },
        { name: 'Deep Carbon', hex: '#0B0B0B' }
      ]
    },
    {
      id: 'nocturne',
      title: 'Nocturne Monograph & Exhibition',
      category: 'Print',
      categorySlug: 'print',
      year: '2024',
      client: 'Fondation Nocturne',
      index: '03',
      image: 'assets/nocturne.jpg',
      shortDesc: 'Tactile hardbound art monograph and exhibition catalogue printed on 180gsm archival cotton paper with blind deboss and fine gold-edge gilding.',
      overview: 'A limited edition 340-page clothbound monograph chronicling fifty years of sculptural minimalism. Elmer Concept oversaw the entirety of the production process: typography curation, paper stock selection from historic mills in Bavaria, carbon-rich duotone ink profiling, and hand-bound spine construction.',
      challenge: 'Honoring raw tactile materiality in an increasingly digital world, ensuring the physical heft, texture of deckled edges, and scent of carbon inks elevate the reading experience into a sacred ritual.',
      artDirection: 'Rigorous asymmetric Swiss layouts, generous meditative margins, heavyweight unbleached cotton papers, and discreet milky-cream foil stamping.',
      deliverables: [
        '340-Page Hardbound Monograph',
        'Custom Slipcase with Blind Debossing',
        'Archival Exhibition Catalog & Folios',
        'Limited Edition Signed Art Prints',
        'Invitation Ephemera & Silk Screen Posters'
      ],
      palette: [
        { name: 'Raw Cotton', hex: '#F7F5EE' },
        { name: 'Carbon Black', hex: '#101010' },
        { name: 'Gilded Edge', hex: '#E6DAC4' },
        { name: 'Graphite Board', hex: '#262626' }
      ]
    },
    {
      id: 'atelier_vane',
      title: 'Atelier Vane Ceramic Studio',
      category: 'Brand Identity',
      categorySlug: 'brand-identity',
      year: '2025',
      client: 'Atelier Vane Paris',
      index: '04',
      image: 'assets/atelier_vane.jpg',
      shortDesc: 'Visual identity and stationery suite for an architectural ceramics atelier, balancing earthen materiality with modern typographic discipline.',
      overview: 'Atelier Vane produces hand-thrown brutalist vessels from raw terracotta and volcanic black clay. Elmer Concept created a cohesive identity centered on a tactile geometric seal, blind-debossed business collateral, custom ceramic stamps, and packaging wraps crafted from recycled linen fibers.',
      challenge: 'Infusing industrial graphic precision with the organic, unpredictable imperfections of kiln-fired earth without losing high-end editorial sophistication.',
      artDirection: 'Natural studio light, raw concrete workbenches, unglazed stoneware textures, and crisp typographic cards with subtle cream foil highlights.',
      deliverables: [
        'Atelier Monogram & Mark Architecture',
        'Cast Brass Potter’s Stamp Tooling',
        'Embossed Cotton Business Cards & Folios',
        'Eco-Waxed Packaging & Ribboning',
        'Ceramic Collection Monograph'
      ],
      palette: [
        { name: 'Raw Terracotta', hex: '#BD6445' },
        { name: 'Volcanic Black', hex: '#1C1C1C' },
        { name: 'Limewash Sand', hex: '#EDE6D9' },
        { name: 'Kiln Ash', hex: '#8C877D' }
      ]
    },
    {
      id: 'vektora',
      title: 'Vektora Spatial Pavilions',
      category: 'Motion Graphics',
      categorySlug: 'motion-graphics',
      year: '2024',
      client: 'Vektora Architecture Group',
      index: '05',
      image: 'assets/vektora.jpg',
      shortDesc: 'Cinematographic 3D architectural film and motion identity for twilight glass and monolithic concrete pavilions set upon reflecting water.',
      overview: 'An editorial architectural motion study depicting Vektora’s alpine retreat pavillion. Elmer Concept directed the camera choreography, twilight lighting transitions, and spatial soundscape, crafting a visual meditation on light, shadow, and glass reflections against still water.',
      challenge: 'Transcending static CAD architectural renderings to capture the atmospheric, emotional essence of inhabiting the structure during the blue hour.',
      artDirection: 'Slow anamorphic camera sweeps, low-contrast twilight skies, warm milky interior lights glowing through monolithic concrete incisions.',
      deliverables: [
        'Cinematographic 4K Showcase Film',
        'Motion Title Design & Coordinates',
        'Spatial Soundscape & Score Direction',
        'Architectural Film Still Monograph',
        'Exhibition Loop & Presentation Media'
      ],
      palette: [
        { name: 'Twilight Cyan-Black', hex: '#141C24' },
        { name: 'Still Water', hex: '#0B1118' },
        { name: 'Interior Glow', hex: '#F5ECE0' },
        { name: 'Poured Concrete', hex: '#585C5E' }
      ]
    },
    {
      id: 'revue_arts',
      title: 'Revue Des Arts No. 04',
      category: 'Graphic Design',
      categorySlug: 'graphic-design',
      year: '2025',
      client: 'Kunsthalle Zurich',
      index: '06',
      image: 'assets/revue_arts.jpg',
      shortDesc: 'Curated poster campaign, visual identity, and typographic specimen catalogue honoring Swiss modernist foundations through a brutalist lens.',
      overview: 'For the biennial graphic arts forum at Kunsthalle Zurich, Elmer Concept conceived an identity rooted in the tension between historic International Typographic Style and contemporary brutalist disruption. The deliverables included large-format street posters, an exhibition guide, and an interactive typographic specimen.',
      challenge: 'Re-examining canonical Swiss Modernism with fresh cultural resonance while avoiding hollow historic retro-fetishism.',
      artDirection: 'High-contrast black, white, and cadmium vermilion moments, offset by warm pale-cream catalog paper and meticulous typographic grid discipline.',
      deliverables: [
        'A2 Silk-Screened Poster Series',
        'Typographic Specimen Publication',
        'Modular Exhibition Spatial Signage',
        'Digital Type Specimen Companion',
        'Collector’s Ephemera Slipcase'
      ],
      palette: [
        { name: 'Swiss Vermilion', hex: '#D63725' },
        { name: 'Museum Cream', hex: '#F5F1E8' },
        { name: 'Offset Pitch', hex: '#111111' },
        { name: 'Grid Tint', hex: '#CBC6B8' }
      ]
    }
  ];

  // =========================================================================
  // 2. Custom Minimal Cursor System
  // =========================================================================
  const cursorDot = document.querySelector('.custom-cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  if (cursorDot && cursorFollower && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const renderFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(renderFollower);
    };
    renderFollower();

    const hoverTargets = document.querySelectorAll('a, button, .project-card, .filter-btn, .service-chip-label');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => cursorFollower.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hovering'));
    });
  }

  // =========================================================================
  // 3. Audio Micro-Feedback (Quiet Luxury Mechanical Shutter Click)
  // =========================================================================
  let audioEnabled = false;
  let audioCtx = null;
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  const playSubtleClick = () => {
    if (!audioEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, audioCtx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
      console.warn('Audio click error:', e);
    }
  };

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      soundToggleBtn.textContent = audioEnabled ? 'SOUND: ON' : 'SOUND: OFF';
      soundToggleBtn.style.color = audioEnabled ? 'var(--cream-gold)' : 'var(--text-secondary)';
      soundToggleBtn.style.borderColor = audioEnabled ? 'var(--cream-gold)' : 'var(--border-subtle)';
      if (audioEnabled) playSubtleClick();
    });
  }

  document.querySelectorAll('button, .project-card, .filter-btn, .editorial-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (audioEnabled) playSubtleClick();
    });
  });

  // =========================================================================
  // 4. Live Studio Clocks (Paris CET & London GMT)
  // =========================================================================
  const updateStudioClocks = () => {
    const now = new Date();
    const parisEl = document.getElementById('parisTime');
    const londonEl = document.getElementById('londonTime');
    const headerClockEl = document.getElementById('headerClock');

    const parisTimeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Paris',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    const londonTimeStr = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    if (parisEl) parisEl.textContent = `${parisTimeStr} CET`;
    if (londonEl) londonEl.textContent = `${londonTimeStr} GMT`;
    if (headerClockEl) headerClockEl.textContent = `Paris ${parisTimeStr} CET`;
  };

  updateStudioClocks();
  setInterval(updateStudioClocks, 1000);

  // =========================================================================
  // 5. Gallery Showcase Grid Rendering & Category Filtering
  // =========================================================================
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const renderGalleryCards = (filteredCategory = 'all') => {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const displayList = filteredCategory === 'all'
      ? projects
      : projects.filter(p => p.categorySlug === filteredCategory);

    displayList.forEach((project) => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', project.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View Gallery details for ${project.title}`);

      card.innerHTML = `
        <div class="card-image-wrap">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="card-badge-overlay">
            <span class="category-pill">${project.category}</span>
          </div>
          <div class="card-index-overlay">${project.index}</div>
        </div>
        <div class="card-content">
          <div>
            <div class="card-meta-top">
              <span class="card-client-year">${project.client} • ${project.year}</span>
              <span class="number-stamp">${project.index} / 06</span>
            </div>
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${project.shortDesc}</p>
          </div>
          <div class="card-footer">
            <span class="card-action-hint">Open Case Study ↗</span>
            <span class="number-stamp">[ ${project.year} ]</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openCaseStudyModal(project.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCaseStudyModal(project.id);
        }
      });

      // Update cursor follower hover effect for dynamically injected cards
      if (cursorFollower) {
        card.addEventListener('mouseenter', () => cursorFollower.classList.add('hovering'));
        card.addEventListener('mouseleave', () => cursorFollower.classList.remove('hovering'));
      }

      galleryGrid.appendChild(card);
    });
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderGalleryCards(category);
    });
  });

  // Initial render of gallery cards
  renderGalleryCards('all');

  // =========================================================================
  // 6. Full Case Study Modal / Gallery Layout Drawer
  // =========================================================================
  const caseModal = document.getElementById('caseModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  let currentProjectIndex = 0;

  const updateModalContent = (project) => {
    if (!project) return;
    document.getElementById('modalIndex').textContent = `${project.index} / 06`;
    document.getElementById('modalCategoryPill').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalYear').textContent = project.year;
    document.getElementById('modalDiscipline').textContent = project.category;
    document.getElementById('modalHeroImage').src = project.image;
    document.getElementById('modalHeroImage').alt = project.title;
    document.getElementById('modalChallenge').textContent = project.challenge;
    document.getElementById('modalOverview').textContent = project.overview;
    document.getElementById('modalArtDirection').textContent = project.artDirection;

    // Deliverables list
    const deliverablesListEl = document.getElementById('modalDeliverablesList');
    if (deliverablesListEl) {
      deliverablesListEl.innerHTML = '';
      project.deliverables.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        deliverablesListEl.appendChild(li);
      });
    }

    // Color Swatches
    const swatchesRowEl = document.getElementById('modalSwatchesRow');
    if (swatchesRowEl) {
      swatchesRowEl.innerHTML = '';
      project.palette.forEach((swatch) => {
        const card = document.createElement('div');
        card.className = 'swatch-card';
        card.innerHTML = `
          <div class="swatch-color" style="background-color: ${swatch.hex};"></div>
          <span class="swatch-label">${swatch.name}</span>
          <span class="swatch-hex">${swatch.hex}</span>
        `;
        swatchesRowEl.appendChild(card);
      });
    }

    // Navigation buttons state & labels
    const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    if (modalPrevBtn) modalPrevBtn.innerHTML = `← ${projects[prevIndex].title.split(' ')[0]}`;
    if (modalNextBtn) modalNextBtn.innerHTML = `${projects[nextIndex].title.split(' ')[0]} →`;
  };

  const openCaseStudyModal = (projectId) => {
    const idx = projects.findIndex(p => p.id === projectId);
    if (idx === -1) return;
    currentProjectIndex = idx;
    updateModalContent(projects[currentProjectIndex]);

    caseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    caseModal.scrollTop = 0;
    history.pushState(null, null, `#gallery-${projectId}`);
  };

  const closeCaseStudyModal = () => {
    caseModal.classList.remove('active');
    document.body.style.overflow = '';
    history.pushState(null, null, ' ');
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCaseStudyModal);
  }

  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) {
        closeCaseStudyModal();
      }
    });
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
      updateModalContent(projects[currentProjectIndex]);
      caseModal.scrollTop = 0;
      history.pushState(null, null, `#gallery-${projects[currentProjectIndex].id}`);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => {
      currentProjectIndex = (currentProjectIndex + 1) % projects.length;
      updateModalContent(projects[currentProjectIndex]);
      caseModal.scrollTop = 0;
      history.pushState(null, null, `#gallery-${projects[currentProjectIndex].id}`);
    });
  }

  // Keyboard navigation for modal
  document.addEventListener('keydown', (e) => {
    if (!caseModal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeCaseStudyModal();
    } else if (e.key === 'ArrowLeft') {
      modalPrevBtn && modalPrevBtn.click();
    } else if (e.key === 'ArrowRight') {
      modalNextBtn && modalNextBtn.click();
    }
  });

  // URL Hash Deep Linking
  const checkInitialHash = () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#gallery-')) {
      const projId = hash.replace('#gallery-', '');
      openCaseStudyModal(projId);
    }
  };
  checkInitialHash();

  window.addEventListener('popstate', () => {
    if (window.location.hash.startsWith('#gallery-')) {
      const projId = window.location.hash.replace('#gallery-', '');
      openCaseStudyModal(projId);
    } else if (caseModal.classList.contains('active')) {
      closeCaseStudyModal();
    }
  });

  // =========================================================================
  // 7. Mobile Menu Drawer
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

  if (mobileMenuBtn && mobileNavOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavOverlay.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavOverlay.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // =========================================================================
  // 8. Interactive Commission / Inquiry Form Handling
  // =========================================================================
  const inquiryForm = document.getElementById('inquiryForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(inquiryForm);
      const clientName = formData.get('clientName');
      const clientEmail = formData.get('clientEmail');
      const disciplines = formData.getAll('disciplines');

      // Visual success confirmation
      if (formSuccessAlert) {
        formSuccessAlert.classList.add('show');
        const alertHeading = formSuccessAlert.querySelector('h5');
        if (alertHeading) {
          alertHeading.textContent = `Inquiry Received — Welcome, ${clientName}`;
        }
        formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      inquiryForm.reset();

      setTimeout(() => {
        if (formSuccessAlert) {
          formSuccessAlert.classList.remove('show');
        }
      }, 10000);
    });
  }

  // =========================================================================
  // 9. Back to Top Button & Scroll Spy
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
});
