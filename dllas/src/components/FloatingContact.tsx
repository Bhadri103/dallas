import { Phone, MessageCircle } from "lucide-react";

interface FloatingContactButtonsProps {
  phoneNumber: string;
  whatsappUrl: string;
}

export default function FloatingContactButtons({
  phoneNumber,
  whatsappUrl,
}: FloatingContactButtonsProps) {
  return (
    <>
      <style>{`
        @keyframes pop-in {
          0%   { transform: scale(0) translateY(10px); opacity: 0; }
          100% { transform: scale(1) translateY(0);     opacity: 1; }
        }
        @keyframes soft-pulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--pulse-color); }
          50%      { box-shadow: 0 0 0 8px transparent; }
        }
        .fab {
          animation: pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .fab:nth-child(2) { animation-delay: 0.12s; }

        .fab-link {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 52px;
          min-width: 52px;
          max-width: 52px;
          border-radius: 9999px;
          overflow: hidden;
          white-space: nowrap;
          will-change: max-width;
          transition: max-width 0.32s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.32s ease;
          animation: soft-pulse 2.8s ease-in-out infinite;
        }
        .fab-link:hover,
        .fab-link:focus-visible {
          max-width: 180px;
          animation: soft-pulse 2.8s ease-in-out infinite paused;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .fab-label {
          flex-shrink: 0;
          opacity: 0;
          padding-right: 16px;
          padding-left: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: opacity 0.2s ease 0.1s;
        }
        .fab-link:hover .fab-label,
        .fab-link:focus-visible .fab-label {
          opacity: 1;
        }
        .fab-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          width: 52px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <div className="fab">
          <a
          
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fab-link text-white focus:outline-none"
            style={{
              ["--pulse-color" as string]: "rgba(37,211,102,0.5)",
              backgroundColor: "#25d366",
            }}
            aria-label="Chat on WhatsApp"
          >
            <span className="fab-label">WhatsApp Us</span>
            <span className="fab-icon-wrap">
              <MessageCircle className="h-6 w-6" />
            </span>
          </a>
        </div>

        <div className="fab">
          <a
          
            href={`tel:${phoneNumber}`}
            className="fab-link text-white focus:outline-none"
            style={{
              ["--pulse-color" as string]: "rgba(7,94,179,0.5)",
              backgroundColor: "#075eb3",
            }}
            aria-label="Call us now"
          >
            <span className="fab-label">Call Us Now</span>
            <span className="fab-icon-wrap">
              <Phone className="h-6 w-6" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}