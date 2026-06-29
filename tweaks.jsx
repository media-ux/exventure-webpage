// Tweaks panel — accent color, density, hero image
function TweaksApp() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#C4A25A",
    "density": "comfortable",
    "heroImage": "cover.jpg",
    "showGrid": true
  }/*EDITMODE-END*/;

  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to DOM
  React.useEffect(() => {
    // Migrate any stale pre-rebrand magenta to the gold accent
    const accent = (t.accent === '#fb2f5a') ? '#C4A25A' : t.accent;
    document.documentElement.style.setProperty('--accent', accent);
    document.body.classList.toggle('density-compact', t.density === 'compact');

    // Hero bg image
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) heroBg.src = 'assets/photos/' + t.heroImage;

    // Grid overlay
    const grid = document.querySelector('.hero-grid');
    if (grid) grid.style.display = t.showGrid ? 'block' : 'none';
  }, [t]);

  return (
    <window.TweaksPanel title="Tweaks">
      <window.TweakSection label="Brand accent" />
      <window.TweakColor
        label="Accent color"
        value={t.accent}
        options={['#C4A25A', '#d4b26a', '#8A6E3A', '#F0EBE1', '#A0B9D0']}
        onChange={v => setTweak('accent', v)}
      />

      <window.TweakSection label="Layout" />
      <window.TweakRadio
        label="Density"
        value={t.density}
        options={['comfortable', 'compact']}
        onChange={v => setTweak('density', v)}
      />
      <window.TweakToggle
        label="Hero grid overlay"
        value={t.showGrid}
        onChange={v => setTweak('showGrid', v)}
      />

      <window.TweakSection label="Hero image" />
      <window.TweakSelect
        label="Background"
        value={t.heroImage}
        options={['cover.jpg', 'meeting-01.jpg', 'meeting-03.jpg', 'collab-01.jpg', 'bali-01.jpg', 'field-01.jpg']}
        onChange={v => setTweak('heroImage', v)}
      />
    </window.TweaksPanel>
  );
}

// Mount the tweaks panel into its own container
(function mountTweaks() {
  const container = document.getElementById('tweaks-root');
  if (container && window.useTweaks && window.TweaksPanel) {
    ReactDOM.createRoot(container).render(<TweaksApp />);
  } else {
    setTimeout(mountTweaks, 50);
  }
})();
