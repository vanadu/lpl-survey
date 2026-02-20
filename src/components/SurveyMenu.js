import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SurveyHeader = () => {
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
    <div
      className={`survey-dropdown ${open ? "open" : ""}`}
      ref={dropdownRef}
    >
      <button
        ref={buttonRef}
        type="button"
        className="survey-dropdown__button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        MASTER
      </button>

      <ul
        className="survey-dropdown__list"
        role="menu"
        aria-hidden={!open}
      >
        <li className="survey-dropdown__item" role="none">
          <Link href="/00_Landing" onClick={close} role="menuitem">
            00_Landing
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/01_UserInfo" onClick={close} role="menuitem">
            01_UserInfo
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/02_CmpnInfo" onClick={close} role="menuitem">
            02_CmpnInfo
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/03_InfoSources" onClick={close} role="menuitem">
            03_InfoSources
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/04_IntubationHistory" onClick={close} role="menuitem">
            04_IntubationHistory
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/05_BreathingCrisis" onClick={close} role="menuitem">
            05_BreathingCrisis
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/06_EarlySymptoms" onClick={close} role="menuitem">
            06_EarlySymptoms
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/07_PrimaryDuration" onClick={close} role="menuitem">
            07_PrimaryDuration
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/08_PrimaryVet" onClick={close} role="menuitem">
            08_PrimaryVet
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/09_Diagnosis" onClick={close} role="menuitem">
            09_Diagnosis
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/10_TreatmentStatus" onClick={close} role="menuitem">
            10_TreatmentStatus
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/11_TreatmentFactors" onClick={close} role="menuitem">
            11_TreatmentFactors
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/12_Management" onClick={close} role="menuitem">
            12_Management
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/13_OTCProducts" onClick={close} role="menuitem">
            13_OTCProducts
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/14_Aspiration" onClick={close} role="menuitem">
            14_Aspiration
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/15_Neuropathy" onClick={close} role="menuitem">
            15_Neuropathy
          </Link>
        </li>

        <li className="survey-dropdown__item" role="none">
          <Link href="/16_Conclusion" onClick={close} role="menuitem">
            16_Conclusion
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SurveyHeader;