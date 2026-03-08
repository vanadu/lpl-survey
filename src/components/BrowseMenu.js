import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BrowseMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click + Escape
  useEffect(() => {
    const onPointerDown = (e) => {
      if (!dropdownRef.current) return;
      if (dropdownRef.current.contains(e.target)) return;
      setOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    // pointerdown catches touch + mouse early (more reliable than click)
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <>
    <div
      className={`browse-menu ${open ? "open" : ""}`}
      ref={dropdownRef}
    >
      <button
        ref={buttonRef}
        type="button"
        className="browse-menu__button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        MASTER
      </button>

      <ul
        className="browse-menu__list"
        role="menu"
        aria-hidden={!open}
      >

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode" onClick={close} role="menuitem">
            Browse
          </Link>
        </li>

        {/* <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_00_Landing" onClick={close} role="menuitem">
            00_Landing
          </Link>
        </li> */}

        {/* <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_01_UserInfo" onClick={close} role="menuitem">
            01_UserInfo
          </Link>
        </li> */}

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_02_CmpnInfo" onClick={close} role="menuitem">
            02_CmpnInfo
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_03_InfoSources" onClick={close} role="menuitem">
            03_InfoSources
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_04_IntubationHistory" onClick={close} role="menuitem">
            04_IntubationHistory
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_05_BreathingCrisis" onClick={close} role="menuitem">
            05_BreathingCrisis
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_06_EarlySymptoms" onClick={close} role="menuitem">
            06_EarlySymptoms
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_07_PrimaryDuration" onClick={close} role="menuitem">
            07_PrimaryDuration
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_08_PrimaryVet" onClick={close} role="menuitem">
            08_PrimaryVet
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_09_Diagnosis" onClick={close} role="menuitem">
            09_Diagnosis
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_10_TreatmentStatus" onClick={close} role="menuitem">
            10_TreatmentStatus
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_11_TreatmentFactors" onClick={close} role="menuitem">
            11_TreatmentFactors
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_12_Management" onClick={close} role="menuitem">
            12_Management
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_13_OtcProducts" onClick={close} role="menuitem">
            13_OtcProducts
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_14_Aspiration" onClick={close} role="menuitem">
            14_Aspiration
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_15_Neuropathy" onClick={close} role="menuitem">
            15_Neuropathy
          </Link>
        </li>

        <li className="browse-menu__item" role="none">
          <Link href="/browse-mode/Browse_16_Conclusion" onClick={close} role="menuitem">
            16_Conclusion
          </Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default BrowseMenu;