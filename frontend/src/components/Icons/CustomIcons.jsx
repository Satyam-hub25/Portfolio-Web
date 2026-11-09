import React from 'react';

export const IconBriefcase = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export const IconChat = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const IconCode = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const IconLayers = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

export const IconBrowser = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
    <line x1="2" y1="9" x2="22" y2="9"></line>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="10" y1="6" x2="10.01" y2="6"></line>
    <line x1="14" y1="6" x2="14.01" y2="6"></line>
  </svg>
);

export const IconSmartphone = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

export const IconServer = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

export const IconDatabase = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

export const IconExternalLink = ({ size = 18, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const IconGitHub = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const IconLinkedIn = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const IconLeetCode = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export const IconTwitter = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const IconFacebook = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const IconYouTube = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const IconInstagram = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const IconCheck = ({ size = 18, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const IconAlert = ({ size = 18, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

export const IconSpinner = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }} {...props}>
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

export const IconArrowUp = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

export const IconMenu = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const IconClose = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const IconMail = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const IconMapPin = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const IconGraduation = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

export const IconTrophy = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
  </svg>
);

/* ========================================================
   MODERN COMPACT TECHNOLOGY ICONS (FOR SKILLS SECTION)
   ======================================================== */

export const IconJava = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M9 19c2.5.5 5.5.5 7.5-.2.5-.2.8-.5.8-.8s-.5-.5-1-.5c-2.5 0-5.5.5-7.3 1.5zm-.5 2c3.2.7 7.8.6 10.2-.4.4-.2.6-.5.4-.7-.2-.3-.8-.3-1.4-.2-2.5.5-6.8.6-9.2-.7zm9.8-9c-.2-.5-1-1-2.2-1.2.6-.8 1-1.8.8-2.8-.2-1.2-1.2-2.2-2.5-2.5.4 1-.2 2.2-1 2.8-.8.6-1.5 1.5-1.5 2.5 0 .5.2 1 .5 1.4-1.5.3-2.6 1.4-2.8 2.8-.3 1.8 1 3.5 2.8 3.8 2.2.3 4.5-.8 5.4-2.8.3-.7.5-1.4.5-2.2z" fill="#E76F00" />
    <path d="M12.5 2c-.5 1.5-1.5 2.5-1 4 .5-1.5 1.5-2.5 1-4z" fill="#5382A1" />
  </svg>
);

export const IconReact = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const IconJS = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#f7df1e" />
    <path d="M6 18.5c.8.5 1.8.8 2.8.8 2.2 0 3.4-1.2 3.4-3.2v-7.1H9.8v7c0 1.2-.6 1.8-1.7 1.8-.7 0-1.4-.2-1.9-.5l-.2 1.2zm7.4-.2c1.2.6 2.5 1 3.8 1 2.8 0 4.4-1.5 4.4-3.6 0-2-1.3-3-3.2-3.8-1.3-.6-1.8-1-1.8-1.7 0-.7.6-1.3 1.7-1.3 1 0 2 .3 2.7.8l.5-1.3c-.8-.5-1.9-.8-3.1-.8-2.5 0-4.1 1.4-4.1 3.4 0 1.9 1.2 2.9 3.2 3.8 1.4.6 1.8 1.1 1.8 1.8 0 .8-.8 1.4-2 1.4-1.2 0-2.4-.4-3.1-1l-.5 1.4z" fill="#000000" />
  </svg>
);

export const IconHTML5 = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#E34F26" />
    <path d="M12 20.6l5.7-1.8 1.4-15.1H12v16.9z" fill="#EF652A" />
    <path d="M12 8.4h3.9l-.3 3.6H12v2.7h3.6l-.4 4.3-3.2 1v-2.7l1.7-.5.2-1.9H12V8.4zm0-3.6h4.3l.1-1.1H12V4.8z" fill="#ffffff" />
    <path d="M12 4.8H7.7l.4 4.7H12v-2.4H9.8l-.2-2.3H12V4.8zm0 7.2H9.6l-.3-3.6H7.3l.6 7.2H12V12z" fill="#EBEBEB" />
  </svg>
);

export const IconCSS3 = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M3 2l1.6 18.2L12 22.5l7.4-2.3L21 2H3z" fill="#1572B6" />
    <path d="M12 20.6l5.7-1.8 1.4-15.1H12v16.9z" fill="#33A9DC" />
    <path d="M12 8.4h3.9l-.3 3.6H12v2.7h3.6l-.4 4.3-3.2 1v-2.7l1.7-.5.2-1.9H12V8.4zm0-3.6h4.3l.1-1.1H12V4.8z" fill="#ffffff" />
    <path d="M12 4.8H7.7l.4 4.7H12v-2.4H9.8l-.2-2.3H12V4.8zm0 7.2H9.6l-.3-3.6H7.3l.6 7.2H12V12z" fill="#EBEBEB" />
  </svg>
);

export const IconReactRouter = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#CA4245" />
    <path d="M7 6h4a3 3 0 0 1 3 3 3 3 0 0 1-2 2.8L15 18h-2.5l-2.6-5.8H9V18H7V6zm2 4.2h2a1.2 1.2 0 0 0 0-2.4H9v2.4zm8 1.8l-1.5-1.5 3.5-3.5H13V5h7v7l-3-3z" fill="#ffffff" />
  </svg>
);

export const IconNodeJS = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" fill="#339933" />
    <path d="M12 4.2L5.5 8v8l6.5 3.8 6.5-3.8V8L12 4.2z" fill="#5FA04E" />
    <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" fill="#ffffff" />
  </svg>
);

export const IconExpress = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#222222" stroke="#444444" strokeWidth="1" />
    <text x="12" y="16" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">ex</text>
  </svg>
);

export const IconRestAPI = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#f5b72e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="6" y1="9" x2="6" y2="15" />
    <path d="M9 6h6a3 3 0 0 1 3 3v6" />
  </svg>
);

export const IconJWT = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#000000" stroke="#FB015B" strokeWidth="1.5" />
    <text x="12" y="15" fill="#FB015B" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">JWT</text>
  </svg>
);

export const IconOAuth = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const IconMongoDB = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C11.5 5 8 9 8 13.5c0 3 2 5.5 4 6.5 2-1 4-3.5 4-6.5C16 9 12.5 5 12 2z" fill="#47A248" />
    <path d="M12 2v19.5c.2-.1.4-.2.6-.3 1.8-1 3.4-3.2 3.4-5.7 0-4-3.1-7.7-4-13.5z" fill="#499D4A" />
    <path d="M12 18.5c-.2 0-.3 0-.5.1 0 1.2.3 2.4.5 3.4.2-1 .5-2.2.5-3.4-.2-.1-.3-.1-.5-.1z" fill="#3FA037" />
  </svg>
);

export const IconPostgreSQL = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#336791" />
    <path d="M12 5c-3.5 0-6 2.2-6 5.5 0 2.2 1.2 4.1 3 5v3.5h6V15.5c1.8-.9 3-2.8 3-5 0-3.3-2.5-5.5-6-5.5zm0 2c2.2 0 4 1.5 4 3.5s-1.8 3.5-4 3.5-4-1.5-4-3.5S9.8 7 12 7z" fill="#ffffff" />
  </svg>
);

export const IconRedis = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" fill="#DC382D" />
    <path d="M12 6.5l6 3v6l-6 3-6-3v-6l6-3z" fill="#B52219" />
    <polygon points="12 9 15 10.5 12 12 9 10.5" fill="#ffffff" />
  </svg>
);

export const IconSQL = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
  </svg>
);

export const IconGit = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21.6 10.4l-8-8a2.3 2.3 0 0 0-3.2 0l-8 8a2.3 2.3 0 0 0 0 3.2l8 8a2.3 2.3 0 0 0 3.2 0l8-8a2.3 2.3 0 0 0 0-3.2z" fill="#F05032" />
    <circle cx="12" cy="12" r="2" fill="#ffffff" />
    <circle cx="16" cy="8" r="1.5" fill="#ffffff" />
    <circle cx="8" cy="12" r="1.5" fill="#ffffff" />
    <path d="M8 12h4m0 0l4-4" stroke="#ffffff" strokeWidth="1.5" />
  </svg>
);

export const IconDocker = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="11" width="20" height="9" rx="4.5" fill="#2496ED" />
    <path d="M5 8h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm-6-3h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm0 3h2v2h-2z" fill="#2496ED" />
    <circle cx="18" cy="14" r="1" fill="#ffffff" />
  </svg>
);

export const IconGitHubActions = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8l5 4-5 4V8z" fill="#2088FF" />
  </svg>
);
