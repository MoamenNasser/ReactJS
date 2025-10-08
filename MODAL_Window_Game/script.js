'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modalContent = document.getElementById('modal-content');

// Egyptian history content
const egyptianContent = {
  pharaohs: {
    title: "Ancient Egyptian Pharaohs 👑",
    content: `
      <h2>The Divine Rulers of Egypt</h2>
      <div class="egyptian-content">
        <h3>🏛️ Famous Pharaohs:</h3>
        <ul>
          <li><strong>Tutankhamun (1332-1323 BCE)</strong> - The boy king whose tomb was discovered intact</li>
          <li><strong>Cleopatra VII (69-30 BCE)</strong> - The last pharaoh of Egypt, known for her intelligence and beauty</li>
          <li><strong>Ramesses II (1279-1213 BCE)</strong> - Called Ramesses the Great, ruled for 66 years</li>
          <li><strong>Hatshepsut (1507-1458 BCE)</strong> - One of the most successful female pharaohs</li>
          <li><strong>Akhenaten (1353-1336 BCE)</strong> - Revolutionary pharaoh who introduced monotheism</li>
        </ul>
        <p><em>⚱️ Pharaohs were considered living gods, divine intermediaries between the people and the gods.</em></p>
      </div>
    `
  },
  pyramids: {
    title: "The Great Pyramids of Giza 🏺",
    content: `
      <h2>Wonders of Ancient Engineering</h2>
      <div class="egyptian-content">
        <h3>🔺 The Three Great Pyramids:</h3>
        <ul>
          <li><strong>Great Pyramid of Khufu</strong> - Originally 146.5m tall, built around 2580-2560 BCE</li>
          <li><strong>Pyramid of Khafre</strong> - 143.5m tall, appears larger due to its elevated position</li>
          <li><strong>Pyramid of Menkaure</strong> - 65m tall, the smallest of the three main pyramids</li>
        </ul>
        <h3>🗿 Amazing Facts:</h3>
        <ul>
          <li>Built with over 2.3 million stone blocks, each weighing 2.5-15 tons</li>
          <li>Aligned with incredible precision to cardinal directions</li>
          <li>The Great Sphinx guards the pyramid complex</li>
          <li>Only surviving wonder of the ancient world</li>
        </ul>
        <p><em>🏗️ These monuments took decades to build and required thousands of skilled workers.</em></p>
      </div>
    `
  },
  mythology: {
    title: "Egyptian Gods & Mythology ⚱️",
    content: `
      <h2>The Divine Pantheon</h2>
      <div class="egyptian-content">
        <h3>🌅 Major Deities:</h3>
        <ul>
          <li><strong>Ra</strong> - Sun god, king of the gods, depicted with a falcon head</li>
          <li><strong>Anubis</strong> - God of mummification and the afterlife, jackal-headed</li>
          <li><strong>Isis</strong> - Goddess of magic, motherhood, and healing</li>
          <li><strong>Osiris</strong> - God of the underworld and judge of the dead</li>
          <li><strong>Horus</strong> - Sky god, depicted as a falcon or falcon-headed man</li>
          <li><strong>Thoth</strong> - God of wisdom and writing, ibis-headed</li>
        </ul>
        <h3>🏺 Beliefs:</h3>
        <ul>
          <li>Elaborate afterlife journey through the underworld</li>
          <li>Mummification to preserve the body for eternal life</li>
          <li>Book of the Dead - guide for the afterlife</li>
          <li>Ma'at - concept of truth, justice, and cosmic order</li>
        </ul>
        <p><em>📜 Egyptian mythology influenced cultures for thousands of years and continues to fascinate us today.</em></p>
      </div>
    `
  },
  tombs: {
    title: "Ancient Egyptian Tombs & Burial 🏛️",
    content: `
      <h2>Sacred Resting Places</h2>
      <div class="egyptian-content">
        <h3>🏺 Types of Tombs:</h3>
        <ul>
          <li><strong>Mastabas</strong> - Early rectangular tombs for nobles and officials</li>
          <li><strong>Pyramids</strong> - Grand tombs for pharaohs, especially during Old Kingdom</li>
          <li><strong>Rock-cut Tombs</strong> - Carved into cliffs, like Valley of the Kings</li>
          <li><strong>Temple Tombs</strong> - Combined burial and worship spaces</li>
        </ul>
        <h3>💎 Burial Treasures:</h3>
        <ul>
          <li>Gold jewelry and precious stones</li>
          <li>Canopic jars containing preserved organs</li>
          <li>Shabti figures - servant statues for the afterlife</li>
          <li>Food, wine, and personal belongings</li>
          <li>Sacred amulets for protection</li>
        </ul>
        <p><em>⚰️ Tombs were designed as eternal homes, complete with everything needed for the afterlife journey.</em></p>
      </div>
    `
  },
  mummification: {
    title: "The Art of Mummification 🪦",
    content: `
      <h2>Preserving for Eternity</h2>
      <div class="egyptian-content">
        <h3>🔬 The Mummification Process:</h3>
        <ul>
          <li><strong>Day 1-4:</strong> Remove internal organs, preserve in canopic jars</li>
          <li><strong>Day 5-40:</strong> Dehydrate body using natron salt</li>
          <li><strong>Day 41-60:</strong> Clean, stuff, and wrap body in linen</li>
          <li><strong>Day 61-70:</strong> Apply resins and final wrappings</li>
        </ul>
        <h3>⚱️ Sacred Canopic Jars:</h3>
        <ul>
          <li><strong>Imsety</strong> - Human-headed, stored the liver</li>
          <li><strong>Hapi</strong> - Baboon-headed, stored the lungs</li>
          <li><strong>Duamutef</strong> - Jackal-headed, stored the stomach</li>
          <li><strong>Qebehsenuef</strong> - Falcon-headed, stored the intestines</li>
        </ul>
        <p><em>🌟 Mummification preserved the physical body so the soul could recognize and inhabit it in the afterlife.</em></p>
      </div>
    `
  },
  hieroglyphs: {
    title: "Sacred Hieroglyphs 📜",
    content: `
      <h2>The Writing of the Gods</h2>
      <div class="egyptian-content">
        <h3>📝 Types of Egyptian Writing:</h3>
        <ul>
          <li><strong>Hieroglyphic</strong> - Sacred formal writing for temples and tombs</li>
          <li><strong>Hieratic</strong> - Simplified cursive form for daily use</li>
          <li><strong>Demotic</strong> - Later simplified script for common people</li>
        </ul>
        <h3>🔤 Famous Hieroglyphic Symbols:</h3>
        <ul>
          <li><strong>Ankh (☥)</strong> - Symbol of life and eternal existence</li>
          <li><strong>Eye of Horus</strong> - Protection, royal power, and good health</li>
          <li><strong>Scarab Beetle</strong> - Rebirth and transformation</li>
          <li><strong>Cartouche</strong> - Oval enclosing royal names</li>
        </ul>
        <h3>🗿 The Rosetta Stone:</h3>
        <ul>
          <li>Discovered in 1799 by French soldiers</li>
          <li>Same text in three scripts: hieroglyphic, demotic, and Greek</li>
          <li>Key to deciphering ancient Egyptian writing</li>
        </ul>
        <p><em>📖 Hieroglyphs were believed to have magical power - the word means "sacred carvings."</em></p>
      </div>
    `
  },
  dailylife: {
    title: "Daily Life in Ancient Egypt 🏠",
    content: `
      <h2>Life Along the Nile</h2>
      <div class="egyptian-content">
        <h3>👨‍👩‍👧‍👦 Social Classes:</h3>
        <ul>
          <li><strong>Pharaoh</strong> - Divine ruler at the top</li>
          <li><strong>Nobles & Priests</strong> - Government officials and religious leaders</li>
          <li><strong>Scribes & Craftsmen</strong> - Educated middle class</li>
          <li><strong>Farmers & Laborers</strong> - Majority of the population</li>
          <li><strong>Slaves</strong> - Prisoners of war and debtors</li>
        </ul>
        <h3>🏘️ Daily Activities:</h3>
        <ul>
          <li>Farming during Nile flood seasons</li>
          <li>Crafting pottery, jewelry, and tools</li>
          <li>Trading goods along the Nile and Mediterranean</li>
          <li>Religious ceremonies and festivals</li>
          <li>Education for scribes and wealthy children</li>
        </ul>
        <h3>🍲 Food & Drink:</h3>
        <ul>
          <li>Bread and beer were dietary staples</li>
          <li>Fish, fowl, and vegetables from the Nile</li>
          <li>Dates, figs, and grapes for sweetness</li>
          <li>Wine for the wealthy, beer for everyone</li>
        </ul>
        <p><em>🌾 Egyptian civilization thrived for over 3,000 years thanks to the predictable Nile floods and rich culture.</em></p>
      </div>
    `
  },
  nile: {
    title: "The Life-Giving Nile River 🌊",
    content: `
      <h2>Egypt's Greatest Gift</h2>
      <div class="egyptian-content">
        <h3>🌊 The Annual Flood Cycle:</h3>
        <ul>
          <li><strong>Akhet (Inundation)</strong> - July to October, flooding season</li>
          <li><strong>Peret (Growing)</strong> - November to February, planting season</li>
          <li><strong>Shemu (Harvest)</strong> - March to June, harvesting season</li>
        </ul>
        <h3>🚤 Transportation & Trade:</h3>
        <ul>
          <li>Primary highway for goods and people</li>
          <li>Boats made from papyrus reeds and wood</li>
          <li>Trade routes connecting Africa and Mediterranean</li>
          <li>Transport of massive stone blocks for pyramids</li>
        </ul>
        <h3>🐊 Nile Wildlife:</h3>
        <ul>
          <li><strong>Crocodiles</strong> - Sacred to Sobek, the crocodile god</li>
          <li><strong>Hippos</strong> - Feared but respected river giants</li>
          <li><strong>Ibis birds</strong> - Sacred to Thoth, god of wisdom</li>
          <li><strong>Fish</strong> - Major protein source for all social classes</li>
        </ul>
        <h3>💧 Engineering Marvels:</h3>
        <ul>
          <li>Irrigation canals and basins</li>
          <li>Shaduf - lever system for lifting water</li>
          <li>Nilometers - measuring flood levels</li>
        </ul>
        <p><em>🏺 Herodotus called Egypt "the gift of the Nile" - without this river, there would be no Egyptian civilization.</em></p>
      </div>
    `
  },
  art: {
    title: "Ancient Egyptian Art 🎨",
    content: `
      <h2>Art for the Gods and Eternity</h2>
      <div class="egyptian-content">
        <h3>🎭 Artistic Conventions:</h3>
        <ul>
          <li><strong>Hierarchical Scale</strong> - Important figures shown larger</li>
          <li><strong>Composite View</strong> - Face in profile, eye front-facing</li>
          <li><strong>Register System</strong> - Scenes arranged in horizontal bands</li>
          <li><strong>Canon of Proportions</strong> - Standardized human measurements</li>
        </ul>
        <h3>🖼️ Art Forms:</h3>
        <ul>
          <li><strong>Wall Paintings</strong> - Colorful tomb and temple decorations</li>
          <li><strong>Relief Sculptures</strong> - Raised and sunken carved images</li>
          <li><strong>Statues</strong> - Granite, limestone, and wooden figures</li>
          <li><strong>Jewelry</strong> - Gold, precious stones, and intricate designs</li>
          <li><strong>Papyrus Art</strong> - Illustrated religious and literary texts</li>
        </ul>
        <h3>🎨 Symbolic Colors:</h3>
        <ul>
          <li><strong>Gold</strong> - Divine flesh, eternal and imperishable</li>
          <li><strong>Blue</strong> - Heavens, water, and the Nile</li>
          <li><strong>Red</strong> - Life, victory, and power</li>
          <li><strong>Green</strong> - Vegetation, rebirth, and Osiris</li>
          <li><strong>Black</strong> - Fertile soil and the underworld</li>
          <li><strong>White</strong> - Purity and sacred power</li>
        </ul>
        <p><em>🏛️ Egyptian art wasn't just decoration - it was magical, designed to ensure eternal life and divine protection.</em></p>
      </div>
    `
  }
};

console.log(btnsOpenModal);

const openModal = function (topic) {
  console.log(`Opening modal for: ${topic}`);
  
  // Update modal content based on topic
  if (egyptianContent[topic]) {
    modalContent.innerHTML = `
      <h1>${egyptianContent[topic].title}</h1>
      ${egyptianContent[topic].content}
    `;
  }
  
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Closing modal');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add event listeners for opening modals
for(let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', function() {
    const topic = this.getAttribute('data-topic');
    openModal(topic);
  });
}

// Add event listeners for closing modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});









