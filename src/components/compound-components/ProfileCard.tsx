import React from "react";

interface ProfileCardProps {
  name: string;
  email: string;
  imageUrl?: string;
}

const dummyImage =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&h=600&facepad=3&q=80";

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  imageUrl = dummyImage,
}) => {
  return (
    <div
      style={{
        width: 350,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        background: "#fff",
        position: "relative",
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "100%",
          height: 260,
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Overlay with chevron notch using div + clip-path for true blur */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 140,
          pointerEvents: 'none',
        }}
      >
        {/* Blurred overlay background with chevron notch */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            clipPath: 'polygon(0% 28%, 47% 28%, 50% 14%, 53% 28%, 100% 28%, 100% 100%, 0% 100%)',
            zIndex: 1,
          }}
        />
        {/* Upward arrow icon centered at the tip of the notch */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 20,
            transform: 'translateX(-50%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L16 4L24 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Content row, centered below the notch */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            width: '100%',
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px 0 24px',
            zIndex: 2,
            pointerEvents: 'auto',
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: 2,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#f3f3f3",
                  opacity: 0.95,
                  lineHeight: 1.2,
                }}
              >
                {email}
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: 16,
              marginRight: 8,
              background: "rgba(255,255,255,0.45)",
              borderRadius: 16,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            {/* Dummy Brush Icon SVG */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.232 5.232l3.536 3.536M4 20h4.586a2 2 0 0 0 1.414-.586l9.172-9.172a2 2 0 0 0 0-2.828l-3.586-3.586a2 2 0 0 0-2.828 0l-9.172 9.172A2 2 0 0 0 4 20z"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 