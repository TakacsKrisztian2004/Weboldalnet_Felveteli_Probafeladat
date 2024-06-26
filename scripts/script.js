$(document).ready(function () {
    $('.orange-link-container a').click(function (event) {
        if ($(this).closest('.card').hasClass('blurred-card')) {
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.second-main-content .card');
    const buttons = document.querySelectorAll('.second-main-content .scroll-buttons button');

    let activeIndex = 0;

    const updateCarousel = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'blurred-card');
            card.style.order = (index + cards.length - activeIndex) % cards.length;
        });
        cards[activeIndex].classList.add('active');
        cards.forEach((card, index) => {
            if (index !== activeIndex) {
                card.classList.add('blurred-card');
            }
        });
    };

    const moveToNextCard = () => {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCarousel();
        updateButtonStyles();
    };

    const updateButtonStyles = () => {
        buttons.forEach((btn, index) => {
            btn.classList.remove('orange-button', 'white-button');
            if (index === activeIndex) {
                btn.classList.add('orange-button');
            } else {
                btn.classList.add('white-button');
            }
        });
    };

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('orange-button')) {
                activeIndex = index;
                updateCarousel();
                updateButtonStyles();
            }
        });
    });

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                moveToNextCard();
            }
        });
    });

    updateCarousel();
    updateButtonStyles();
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.third-main-content .card');
    const buttons = document.querySelectorAll('.third-main-content .scroll-buttons button');

    let activeIndex = 0;

    const updateCarousel = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'blurred-card');
            card.style.order = (index + cards.length - activeIndex) % cards.length;
        });
        cards[activeIndex].classList.add('active');
        cards.forEach((card, index) => {
            if (index !== activeIndex) {
                card.classList.add('blurred-card');
            }
        });
    };

    const moveToNextCard = () => {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCarousel();
        updateButtonStyles();
    };

    const updateButtonStyles = () => {
        buttons.forEach((btn, index) => {
            btn.classList.remove('orange-button', 'darkblue-button');
            if (index === activeIndex) {
                btn.classList.add('orange-button');
            } else {
                btn.classList.add('darkblue-button');
            }
        });
    };

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('orange-button')) {
                activeIndex = index;
                updateCarousel();
                updateButtonStyles();
            }
        });
    });

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                moveToNextCard();
            }
        });
    });

    updateCarousel();
    updateButtonStyles();
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fifth-main-content .AC-card');
    const buttons = document.querySelectorAll('.fifth-main-content .scroll-buttons button');

    let activeIndex = 0;

    const updateCarousel = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active', 'blurred-card');
            card.style.order = (index + cards.length - activeIndex) % cards.length;
        });
        cards[activeIndex].classList.add('active');
        cards.forEach((card, index) => {
            if (index !== activeIndex) {
                card.classList.add('blurred-card');
            }
        });
    };

    const moveToNextCard = () => {
        activeIndex = (activeIndex + 1) % cards.length;
        updateCarousel();
        updateButtonStyles();
    };

    const moveToPreviousCard = () => {
        activeIndex = (activeIndex - 1 + cards.length) % cards.length;
        updateCarousel();
        updateButtonStyles();
    };

    const updateButtonStyles = () => {
        buttons.forEach((btn, index) => {
            btn.classList.remove('orange-button', 'darkblue-button');
            if (index === activeIndex) {
                btn.classList.add('orange-button');
            } else {
                btn.classList.add('darkblue-button');
            }
        });
    };

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('orange-button')) {
                activeIndex = index;
                updateCarousel();
                updateButtonStyles();
            }
        });
    });

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                moveToNextCard();
            }
        });
    });

    document.querySelector('.fifth-main-content .previous-button').addEventListener('click', () => {
        moveToPreviousCard();
    });

    document.querySelector('.fifth-main-content .next-button').addEventListener('click', () => {
        moveToNextCard();
    });

    updateCarousel();
    updateButtonStyles();
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-item');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnMenuIcon && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});

let currentCardIndex = 0;
const cards = document.querySelectorAll('.tenth-inner-content');

function showCard(cardId) {
    cards.forEach(card => {
        card.classList.add('inactive');
        card.classList.remove('active');
    });

    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
        selectedCard.classList.remove('inactive');
        selectedCard.classList.add('active');
        currentCardIndex = Array.from(cards).indexOf(selectedCard);
        updateButtonStyles();
    }
}

function navigateCards(direction) {
    const numCards = cards.length;

    if (direction === 'next') {
        currentCardIndex = (currentCardIndex + 1) % numCards;
    } else if (direction === 'previous') {
        currentCardIndex = (currentCardIndex - 1 + numCards) % numCards;
    }

    const nextCardId = cards[currentCardIndex].id;
    showCard(nextCardId);
}

function updateButtonStyles() {
    const buttons = document.querySelectorAll('.tenth-main-content-buttons button');

    buttons.forEach((button, index) => {
        if (index === currentCardIndex) {
            button.classList.add('orange-button');
            button.classList.remove('regular-button');
        } else {
            button.classList.add('regular-button');
            button.classList.remove('orange-button');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showCard('basic-cleaning');
    updateButtonStyles();
});
