export default function LearnMoreContent({
  id,
  label,
  children,
  openSection,
  setOpenSection,
}) {

  // Check whether THIS section is currently open
  const isOpen = openSection === id;

  // Toggle logic
  const handleToggle = () => {

    // Close if already open
    if (isOpen) {
      setOpenSection(null);
    }

    // Otherwise open this section
    else {
      setOpenSection(id);
    }
  };

  return (
    <div className="learn-more-wrapper">

      <button
        type="button"
        className="learn-more-button"
        onClick={handleToggle}
      >
        {isOpen ? 'Show less' : label}
      </button>

      {isOpen && (
        <div className="learn-more-content">
          {children}
        </div>
      )}

    </div>
  );
}
