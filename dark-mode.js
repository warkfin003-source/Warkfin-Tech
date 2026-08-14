// Dark mode toggle
        // The body class controls colours; localStorage remembers the visitor's choice.
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        function applyDarkModePreference(isDark) {
            body.classList.toggle('dark-mode', isDark);
            if (!darkModeToggle) return;

            const icon = darkModeToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon', !isDark);
                icon.classList.toggle('fa-sun', isDark);
            }
            darkModeToggle.setAttribute('aria-pressed', String(isDark));
        }

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', function() {
                const isDark = !body.classList.contains('dark-mode');
                applyDarkModePreference(isDark);
                localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
            });
        }

        // Check for saved dark mode preference, otherwise fall back to system preference.
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled' || (savedMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            applyDarkModePreference(true);
        } else {
            applyDarkModePreference(false);
        }
