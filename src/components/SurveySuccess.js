import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img-lpl-logo.png"; // keep your existing import

const SurveySuccess = () => {
  
  // !VA Set minimum the spinner time before submit. 
  const MIN_SPINNER_MS = 5000; // ← DEBUG (change to 800–1200 later)


  const searchParams = useSearchParams();
  const ok = searchParams?.get("ok");

  const [phase, setPhase] = useState("loading"); // "loading" | "done"

  useEffect(() => {
    if (ok === "1") {
      const start = performance.now();

      const reveal = () => {
        const elapsed = performance.now() - start;
        const remaining = Math.max(0, MIN_SPINNER_MS - elapsed);

        setTimeout(() => {
          setPhase("done");
        }, remaining);
      };

      reveal();
    }
  }, [ok]);


  return (
    <div className="container-flex-center success-stage">
      {/* Spinner (visible while loading; fades out) */}
      <div className={`success-spinnerWrap ${phase === "done" ? "isHidden" : ""}`}>
        <div className="survey-spinner" aria-label="Loading" />
        <p className="content-text">Finalizing…</p>
      </div>

      {/* <div
        className="survey-spinner"
        style={{ width: 60, height: 60, background: "red" }}
      /> */}


      {/* Your existing success content (hidden until done; fades in) */}
      <div className={`success-contentWrap ${phase === "done" ? "isVisible" : ""}`}>
        <h1 className="main-head">Your survey was submitted successfully!</h1>

        <Link href="/larpaflife.com" className="link-dark">
          <Image
            src={logo}
            className="success-icon"
            alt="Join the Lar Par Community"
          />
        </Link>

        <p className="content-text">Thank you for taking the survey.</p>
        <p className="survey-spacer">&nbsp;</p>
      </div>
    </div>
  );
};

export default SurveySuccess;
